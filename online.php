<?php
// 在线人数统计 + 历史游玩人数记录
// 接口：
//   ?action=enter             进入/刷新主菜单（登记在线 + 记录一次历史访问）
//   ?action=count             查询当前在线人数
//   ?action=exit              （POST）退出/关闭页面
//   ?action=history&key=SECRET 查询历史每日游玩人数（仅管理员）
//   可加 &days=90 控制返回天数
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

// ★ 管理员密钥：只有你知道，用于查看历史图表
$ADMIN_KEY = 'icr3am_nba_2026_admin';

// 会话/数据文件放网页根目录之外，避免 IP 泄露（/var/lib/nba-online，www-data 可写）
$base = '/var/lib/nba-online';
if (!is_dir($base)) { @mkdir($base, 0775, true); }
$sessionFile = $base . '/online_sessions.json';
$lock = $base . '/online_sessions.lock';
$historyFile = $base . '/visits.log';
$ttl = 300; // 5 分钟无活跃自动下线

$fh = @fopen($lock, 'c');
if ($fh) { @flock($fh, LOCK_EX); }

// ---------- 读取当前会话 ----------
$data = array();
if (file_exists($sessionFile)) {
  $raw = @file_get_contents($sessionFile);
  $j = json_decode($raw, true);
  if (is_array($j)) { $data = $j; }
}
$now = time();
$ip = isset($_SERVER['REMOTE_ADDR']) ? (string)$_SERVER['REMOTE_ADDR'] : '';
$action = isset($_REQUEST['action']) ? (string)$_REQUEST['action'] : 'count';

// ---------- 惰性清理过期 ----------
foreach ($data as $k => $v) {
  if ($now - intval($v) > $ttl) { unset($data[$k]); }
}

// ---------- 处理动作 ----------
if ($action === 'enter' && $ip !== '') {
  $isNew = !isset($data[$ip]);
  $data[$ip] = $now;
  // ★ 历史记录：每次进入主菜单追加一行（date<TAB>ip<TAB>time）
  //   用于每日游玩人数曲线（visits=总访问人次，uniques=当日去重 IP）
  $line = gmdate('Y-m-d') . "\t" . $ip . "\t" . $now . "\n";
  @file_put_contents($historyFile, $line, FILE_APPEND | LOCK_EX);
} elseif ($action === 'exit' && $ip !== '' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  unset($data[$ip]);
} elseif ($action === 'history') {
  $key = isset($_REQUEST['key']) ? (string)$_REQUEST['key'] : '';
  if ($key !== $ADMIN_KEY) {
    if ($fh) { @flock($fh, LOCK_UN); @fclose($fh); }
    http_response_code(403);
    echo json_encode(array('ok' => false, 'error' => 'forbidden'));
    exit;
  }
  $days = isset($_REQUEST['days']) ? max(7, min(365, intval($_REQUEST['days']))) : 90;
  $byDay = array();
  $uniquesByDay = array();
  if (file_exists($historyFile)) {
    $fp = @fopen($historyFile, 'r');
    if ($fp) {
      while (($ln = fgets($fp)) !== false) {
        $parts = explode("\t", trim($ln));
        if (count($parts) < 2) continue;
        $day = $parts[0];
        $uip = $parts[1];
        if (!isset($byDay[$day])) { $byDay[$day] = 0; $uniquesByDay[$day] = array(); }
        $byDay[$day]++;
        $uniquesByDay[$day][$uip] = 1;
      }
      fclose($fp);
    }
  }
  // 生成最近 N 天序列（含 0 值日期）
  $rows = array();
  for ($d = $days - 1; $d >= 0; $d--) {
    $day = gmdate('Y-m-d', $now - $d * 86400);
    $rows[] = array(
      'date' => $day,
      'visits' => isset($byDay[$day]) ? $byDay[$day] : 0,
      'uniques' => isset($uniquesByDay[$day]) ? count($uniquesByDay[$day]) : 0,
    );
  }
  @file_put_contents($sessionFile, json_encode($data));
  if ($fh) { @flock($fh, LOCK_UN); @fclose($fh); }
  echo json_encode(array('ok' => true, 'days' => $rows));
  exit;
}

@file_put_contents($sessionFile, json_encode($data));
if ($fh) { @flock($fh, LOCK_UN); @fclose($fh); }
echo json_encode(array('ok' => true, 'online' => count($data)));