<?php
// 历史游玩人数图表（仅管理员可见）
// 访问：admin-online.php?key=你的密钥
header('Content-Type: text/html; charset=utf-8');
$ADMIN_KEY = 'icr3am_nba_2026_admin';
$key = isset($_GET['key']) ? (string)$_GET['key'] : '';
if ($key !== $ADMIN_KEY) {
  http_response_code(403);
  echo '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>403</title></head><body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;">密钥错误，禁止访问。</body></html>';
  exit;
}
$days = isset($_GET['days']) ? max(7, min(365, intval($_GET['days']))) : 90;
$data = null;
$ctx = stream_context_create(array('http' => array('timeout' => 5)));
$json = @file_get_contents('online.php?action=history&key=' . urlencode($ADMIN_KEY) . '&days=' . $days, false, $ctx);
if ($json) { $data = json_decode($json, true); }
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>历史游玩人数 · 管理图表</title>
<style>
  body{font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;background:#14141f;color:#eee;margin:0;padding:24px;}
  h1{font-size:20px;margin:0 0 4px;}
  .sub{color:#999;font-size:13px;margin-bottom:20px;}
  .cards{display:flex;gap:16px;margin-bottom:24px;flex-wrap:wrap;}
  .card{background:#1e1e2e;border:1px solid #333;border-radius:12px;padding:14px 20px;min-width:140px;}
  .card .n{font-size:26px;font-weight:800;color:#ff9f43;}
  .card .l{font-size:12px;color:#aaa;margin-top:4px;}
  .chart{background:#1e1e2e;border:1px solid #333;border-radius:12px;padding:20px;overflow-x:auto;}
  table{width:100%;border-collapse:collapse;font-size:12px;margin-top:16px;}
  th,td{padding:6px 8px;border-bottom:1px solid #2a2a3a;text-align:left;}
  th{color:#ff9f43;}
  .bar{height:10px;border-radius:4px;background:#ff9f43;}
  a{color:#6cb6ff;}
</style>
</head>
<body>
  <h1>📈 历史游玩人数曲线</h1>
  <div class="sub">数据来源：online.php 的 visits.log（进入主菜单时记录）· 仅管理员可访问</div>
  <?php if (!$data || empty($data['days'])): ?>
    <div class="sub">暂无数据（从部署 online.php v2 后的下一次访问开始记录）。若服务器保留访问日志，可另行导入。</div>
  <?php else:
    $rows = $data['days'];
    $maxV = 1; $sumV = 0; $sumU = 0;
    foreach ($rows as $r) { $maxV = max($maxV, intval($r['visits'])); $sumV += intval($r['visits']); $sumU += intval($r['uniques']); }
    $n = count($rows);
  ?>
  <div class="cards">
    <div class="card"><div class="n"><?php echo $n; ?></div><div class="l">统计天数</div></div>
    <div class="card"><div class="n"><?php echo $sumV; ?></div><div class="l">总访问人次</div></div>
    <div class="card"><div class="n"><?php echo $sumU; ?></div><div class="l">总去重 IP</div></div>
    <div class="card"><div class="n"><?php echo $maxV; ?></div><div class="l">单日峰值人次</div></div>
  </div>
  <div class="chart">
    <?php foreach ($rows as $r): ?>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <div style="width:110px;color:#ccc;"><?php echo htmlspecialchars($r['date']); ?></div>
        <div style="flex:1;">
          <div class="bar" style="width:<?php echo max(2, round(intval($r['visits']) / $maxV * 100)); ?>%;"></div>
        </div>
        <div style="width:70px;text-align:right;color:#ff9f43;font-weight:700;"><?php echo intval($r['visits']); ?> 次</div>
        <div style="width:90px;text-align:right;color:#aaa;"><?php echo intval($r['uniques']); ?> 人</div>
      </div>
    <?php endforeach; ?>
  </div>
  <table>
    <tr><th>日期</th><th>访问人次</th><th>去重人数</th></tr>
    <?php foreach (array_reverse($rows) as $r): ?>
      <tr><td><?php echo htmlspecialchars($r['date']); ?></td><td><?php echo intval($r['visits']); ?></td><td><?php echo intval($r['uniques']); ?></td></tr>
    <?php endforeach; ?>
  </table>
  <?php endif; ?>
  <div class="sub" style="margin-top:20px;">提示：历史数据从现在开始累积；如需回溯更早的访问，可将服务器 Nginx/Apache 访问日志导入 visits.log（格式：日期TAB IP TAB 时间戳，一行一条）。</div>
</body>
</html>