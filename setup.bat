@echo off
REM Script para configurar e rodar o projeto Expo com GitHub Codespace (Windows)
REM Uso: setup.bat

setlocal enabledelayedexpansion

echo.
echo ============================================
echo  Projeto React Native com Expo
echo ============================================
echo.

REM Cores para output (Windows não suporta cores nativamente)
echo Configurando Projeto...
echo.

REM 1. Verificar Node.js
echo Verificando Node.js...
node -v >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Node.js nao instalado!
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION%

REM 2. Verificar npm
echo Verificando npm...
npm -v >nul 2>&1
if errorlevel 1 (
    echo [ERRO] npm nao instalado!
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo [OK] npm %NPM_VERSION%

REM 3. Instalar dependências
echo.
echo Instalando dependencias...
call npm install
if errorlevel 1 (
    echo [ERRO] Erro ao instalar dependencias!
    exit /b 1
)
echo [OK] Dependencias instaladas!

REM 4. Criar .env se não existir
if not exist .env (
    echo.
    echo Criando arquivo .env...
    copy .env.example .env >nul
    echo [OK] Arquivo .env criado!
)

REM 5. Mostrar informações
echo.
echo ============================================
echo  Setup concluido com sucesso!
echo ============================================
echo.
echo Proximos passos:
echo.
echo 1. Instale o Expo Go no seu celular:
echo    iOS: App Store
echo    Android: Google Play Store
echo.
echo 2. Inicie o servidor com um destes comandos:
echo    npm start        (modo desenvolvimento)
echo    npm run start:lan   (conexao LAN)
echo    npm run start:tunnel (via tunnel)
echo.
echo 3. Escaneie o QR code com seu celular
echo.
echo Para mais informacoes, leia:
echo    EXPO_SETUP.md
echo    README.md
echo.
echo Bom desenvolvimento!
echo.
