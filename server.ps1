# 本地离线版专用静态文件服务器（无需安装任何东西）
$ErrorActionPreference = 'Stop'
$port = 8765
$root = $PSScriptRoot

$shellFile = Get-ChildItem -LiteralPath $root -Filter '*.html' | Where-Object { $_.Name -eq 'index.html' } | Select-Object -First 1
if (-not $shellFile) { Write-Host '未找到入口页面，请确认本文件与 index.html 在同一目录'; exit 1 }
$shellName = $shellFile.Name

$listener = [System.Net.HttpListener]::new()
try {
  $listener.Prefixes.Add("http://localhost:$port/")
  $listener.Start()
} catch {
  Write-Host "端口 $port 启动失败，尝试直接打开页面文件……"
  Start-Process $shellFile.FullName
  exit 0
}

$url = "http://localhost:$port/"
Write-Host ""
Write-Host '=================================================='
Write-Host "  本地游戏已启动: $url"
Write-Host '  浏览器将自动打开；关闭本窗口即停止服务器'
Write-Host '=================================================='
Write-Host ''

Start-Process $url

function Get-Mime($ext) {
  switch ($ext.ToLowerInvariant()) {
    '.html' { return 'text/html; charset=utf-8' }
    '.js'   { return 'text/javascript; charset=utf-8' }
    '.css'  { return 'text/css; charset=utf-8' }
    '.png'  { return 'image/png' }
    '.ttf'  { return 'font/ttf' }
    '.svg'  { return 'image/svg+xml' }
    '.json' { return 'application/json; charset=utf-8' }
    '.ico'  { return 'image/x-icon' }
    default { return 'application/octet-stream' }
  }
}

while ($listener.IsListening) {
  $ctx = $null
  try { $ctx = $listener.GetContext() } catch { break }
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $urlPath = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($urlPath -eq '/' -or $urlPath -eq '') {
      $res.StatusCode = 302
      $res.RedirectLocation = '/' + [System.Uri]::EscapeDataString($shellName)
      $res.Close()
      continue
    }
    $rel = $urlPath.TrimStart('/')
    $full = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
    $rootFull = [System.IO.Path]::GetFullPath($root).TrimEnd('\') + '\'
    if (-not $full.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $res.StatusCode = 403
      $res.Close()
      continue
    }
    if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
      $res.StatusCode = 404
      $res.Close()
      continue
    }
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $res.ContentType = Get-Mime ([System.IO.Path]::GetExtension($full))
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
    $res.Close()
  } catch {
    try { $res.StatusCode = 500; $res.Close() } catch {}
  }
}
