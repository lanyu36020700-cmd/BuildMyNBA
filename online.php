<?php
// 在线人数统计（IP 唯一，5 分钟过期）
// 接口：?action=enter（进入/刷新主菜单）/ count（查询）/ exit（关闭页面，POST）
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
// 会话文件放网页根目录之外，避免 IP 泄露（/var/lib/nba-online，www-data 可写）
$base = '/var/lib/nba-online';
if (!is_dir($base)) { @mkdir($base, 0775, true); }
$file = $base . '/online_sessions.json';
$lock = $base . '/online_sessions.lock';
$ttl = 300; // 5 分钟无活跃自动下线
$fh = @fopen($lock, 'c');
if ($fh) { @flock($fh, LOCK_EX); }
$data = array();
if (file_exists($file)) {
  $raw = @file_get_contents($file);
  $j = json_decode($raw, true);
  if (is_array($j)) { $data = $j; }
}
$now = time();
$ip = isset($_SERVER['REMOTE_ADDR']) ? (string)$_SERVER['REMOTE_ADDR'] : '';
$action = isset($_REQUEST['action']) ? (string)$_REQUEST['action'] : 'count';
// 惰性清理过期（同 IP 只更新时间，不新增）
foreach ($data as $k => $v) {
  if ($now - intval($v) > $ttl) { unset($data[$k]); }
}
if ($action === 'enter' && $ip !== '') {
  $data[$ip] = $now;
} elseif ($action === 'exit' && $ip !== '' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  unset($data[$ip]);
}
@file_put_contents($file, json_encode($data));
if ($fh) { @flock($fh, LOCK_UN); @fclose($fh); }
echo json_encode(array('ok' => true, 'online' => count($data)));
