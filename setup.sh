#!/bin/bash

# Script para configurar e rodar o projeto Expo com GitHub Codespace
# Uso: bash setup.sh

echo "🚀 Configurando Projeto React Native com Expo..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar Node.js
echo -e "${YELLOW}📦 Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não instalado!${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js $(node -v)${NC}"

# 2. Verificar npm
echo -e "${YELLOW}📦 Verificando npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não instalado!${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm $(npm -v)${NC}"

# 3. Instalar dependências
echo -e "${YELLOW}📥 Instalando dependências...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependências instaladas!${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências!${NC}"
    exit 1
fi

# 4. Criar .env se não existir
if [ ! -f .env ]; then
    echo -e "${YELLOW}🔧 Criando arquivo .env...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ Arquivo .env criado!${NC}"
fi

# 5. Mostrar informações
echo -e "${GREEN}✅ Setup concluído com sucesso!${NC}"
echo ""
echo -e "${YELLOW}📱 Próximos passos:${NC}"
echo "1. Instale o Expo Go no seu celular:"
echo "   iOS: App Store"
echo "   Android: Google Play Store"
echo ""
echo "2. Inicie o servidor com um destes comandos:"
echo "   ${GREEN}npm start${NC}        (modo desenvolvimento)"
echo "   ${GREEN}npm run start:lan${NC}   (conexão LAN)"
echo "   ${GREEN}npm run start:tunnel${NC} (via tunnel)"
echo ""
echo "3. Escaneie o QR code com seu celular"
echo ""
echo -e "${YELLOW}📚 Para mais informações, leia:${NC}"
echo "   ${GREEN}EXPO_SETUP.md${NC}"
echo "   ${GREEN}README.md${NC}"
echo ""
echo -e "${GREEN}Bom desenvolvimento! 🎉${NC}"
