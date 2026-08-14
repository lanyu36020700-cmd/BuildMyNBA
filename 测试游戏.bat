@echo off
chcp 936 >nul
cd /d "%~dp0"
title 完美球员 · 测试中心

:menu
cls
echo.
echo  ════════════════════════════════════════════
echo    完美球员 · 完整测试流程
echo  ════════════════════════════════════════════
echo   [1] 完整测试：回归38项 + 时代结构探针 + UI测试中心
echo   [2] 仅 UI 测试中心（75项界面/流程测试）
echo   [3] 仅回归检查（38项，约5分钟）
echo   [4] 时代矩阵探针（3时代 x 位置 x OVR，约2分钟）
echo   [5] 全量遍历模拟（真实+历史全生涯，约6分钟）
echo   [6] 正常启动游戏
echo   [0] 退出
echo  ════════════════════════════════════════════
set /p sel=请输入编号后回车：

if "%sel%"=="1" goto full
if "%sel%"=="2" goto ui
if "%sel%"=="3" goto regress
if "%sel%"=="4" goto matrix
if "%sel%"=="5" goto traversal
if "%sel%"=="6" goto game
if "%sel%"=="0" exit /b
if "%sel%"=="" exit /b
goto menu

:full
echo.
echo  [1/3] 运行 38 项回归检查……
powershell -NoProfile -ExecutionPolicy Bypass -File "dev-tools\run_checks.ps1"
echo.
echo  [2/3] 运行时代结构探针……
node "dev-tools\probes\_era_fullsim_probe.js"
echo.
echo  [3/3] 打开 UI 测试中心……
goto open_ui

:ui
goto open_ui

:open_ui
call :ensure_server
start "" "http://localhost:8765/dev-tools/ui-test-hub.html"
echo.
echo  UI 测试中心已打开（若页面无法访问，请确认“完美球员本地服务”窗口在运行）。
pause
goto menu

:regress
echo.
echo  ==== 运行 38 项回归检查（约5分钟）====
powershell -NoProfile -ExecutionPolicy Bypass -File "dev-tools\run_checks.ps1"
echo.
echo  回归检查完成，结果见 dev-tools\results\
pause
goto menu

:matrix
echo.
echo  ==== 时代矩阵探针（约2分钟）====
node "dev-tools\probes\_era_matrix_probe.js"
echo  完成，结果见 dev-tools\results\_era_matrix_log.txt
pause
goto menu

:traversal
echo.
echo  ==== 全量遍历模拟（约6分钟）====
node "dev-tools\probes\_traversal_probe.js"
echo  完成，结果见 dev-tools\results\_traversal_result.txt
pause
goto menu

:game
start "" powershell -NoProfile -ExecutionPolicy Bypass -File "server.ps1"
exit /b

:ensure_server
powershell -NoProfile -Command "try { (Invoke-WebRequest -Uri 'http://localhost:8765/' -UseBasicParsing -TimeoutSec 2) | Out-Null; exit 0 } catch { exit 1 }" >nul 2>&1
if errorlevel 1 (
  echo  启动本地服务窗口……
  start "完美球员本地服务" powershell -NoProfile -ExecutionPolicy Bypass -File "server.ps1"
  timeout /t 3 /nobreak >nul
) else (
  echo  本地服务已在运行。
)
exit /b
