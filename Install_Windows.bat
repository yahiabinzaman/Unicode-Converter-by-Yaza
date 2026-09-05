@echo off
pushd "%~dp0"
title Converter by Yaza - 1-Click Installer
color 0B

echo ==========================================================
echo  Converter by Yaza - 1-Click Installer
echo ==========================================================
echo.

set "TARGET_DIR=%APPDATA%\Adobe\CEP\extensions\com.yaza.converter"

reg add "HKCU\Software\Adobe\CSXS.9" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.10" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.11" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.12" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.13" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.14" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.15" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1
reg add "HKCU\Software\Adobe\CSXS.16" /v PlayerDebugMode /t REG_SZ /d "1" /f >nul 2>&1

if not exist "%APPDATA%\Adobe\CEP\extensions" mkdir "%APPDATA%\Adobe\CEP\extensions" >nul 2>&1
if exist "%TARGET_DIR%" rmdir /s /q "%TARGET_DIR%" >nul 2>&1

if exist "%~dp0Bornomala_Converter_Extension\index.html" (
    xcopy /E /I /Y /Q "%~dp0Bornomala_Converter_Extension" "%TARGET_DIR%" >nul 2>&1
) else if exist "%~dp0Converter_by_Yaza\index.html" (
    xcopy /E /I /Y /Q "%~dp0Converter_by_Yaza" "%TARGET_DIR%" >nul 2>&1
) else (
    xcopy /E /I /Y /Q "%~dp0*" "%TARGET_DIR%" >nul 2>&1
)

echo ==========================================================
echo  [SUCCESS] Converter by Yaza installed successfully!
echo  Restart Adobe Illustrator and open:
echo  Window ^> Extensions ^> Converter by Yaza
echo ==========================================================
echo.
pause
popd
