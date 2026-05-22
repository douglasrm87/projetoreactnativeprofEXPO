# 📱 Setup do Expo Go com GitHub Codespace

Este guia explica como conectar seu celular ao projeto React Native que está rodando no GitHub Codespace.

## ✅ Pré-requisitos

1. **Expo Go instalado no seu celular**
   - iOS: Baixar na App Store
   - Android: Baixar no Google Play Store

2. **Node.js e npm instalados** (já vem com o Codespace)

3. **Celular e Codespace na mesma rede** (importante!)

## 🚀 Passo a Passo

### 1. Instalar Dependências

```bash
cd /workspaces/projetoreactnativeprofEXPO
npm install
```

### 2. Iniciar o Servidor Expo

Existem 3 modos de conexão. **Escolha um:**

#### Opção A: LAN (Local Network) - ⭐ Recomendado
Funciona se celular e computador estão na mesma rede Wi-Fi:

```bash
npm run start:lan
```

Você verá no terminal:
```
LAN: exp://192.168.1.100:8081
```

#### Opção B: Tunnel (Expo Tunnel)
Funciona mesmo em redes diferentes (mais lento):

```bash
npm run start:tunnel
```

#### Opção C: Web
Para testar no navegador do computador:

```bash
npm run start:web
```

### 3. Conectar o Celular

#### Com Código QR (Recomendado)

1. Abra o **Expo Go** no seu celular
2. Escaneie o **código QR** que aparece no terminal
3. Espere o app carregar (pode levar 30-60 segundos na primeira vez)

#### Sem Código QR (Manual)

1. Abra o **Expo Go** no seu celular
2. Toque em **"Scan QR code"** ou vá para **Projects**
3. Digite o endereço que aparece no terminal:
   - Exemplo: `exp://192.168.1.100:8081`

## 🔧 Troubleshooting

### ❌ "Connection refused" ou não consegue conectar

**Solução:**
- Certifique-se de que celular e Codespace estão na **mesma rede Wi-Fi**
- Tente usar `npm run start:tunnel` em vez de `npm run start:lan`
- Verifique se o firewall não está bloqueando a porta 8081

### ❌ Expo Go diz "Couldn't connect to ..."

**Solução:**
1. Feche o Expo Go completamente
2. Pressione `Ctrl+C` no terminal do Codespace
3. Digite `npm start` novamente
4. Reabra o Expo Go e escaneie o novo QR code

### ❌ "Metro server encountered an error"

**Solução:**
```bash
# Limpe o cache
rm -rf node_modules/.cache
npm start
```

## 📝 Comandos Úteis

```bash
# Iniciar em modo desenvolvimento (padrão)
npm start

# Iniciar apenas para Android
npm run android

# Iniciar apenas para iOS
npm run ios

# Iniciar para web
npm run start:web

# Limpar cache e reinstalar
npm install
npm start
```

## 🎯 Como Recarregar o App

**Enquanto está no Expo Go:**

- **Android:** Abra o menu (agite o celular ou pressione Ctrl+M se usar emulador) → "Reload"
- **iOS:** Agite o celular → "Reload"
- **Atalho:** Pressione `r` no terminal

## 📚 Recursos Educacionais

O projeto inclui exemplos de:

✅ Componentes reutilizáveis (Button, Header)  
✅ Context API para estado global  
✅ Hooks customizados (useCounter, useToggle)  
✅ React Navigation  
✅ Validação de formulários  
✅ TypeScript  
✅ Serviço de API

## 🤔 FAQ

**P: Qual é a melhor modo de conexão?**
R: Use `npm run start:lan` se celular e PC estão na mesma rede. Senão, use `npm run start:tunnel`.

**P: O app está lento na primeira vez?**
R: Normal! Expo está compilando o JavaScript. Fique tranquilo, fica mais rápido depois.

**P: Preciso de um servidor backend?**
R: Para este exemplo educacional, não. Está tudo rodando localmente.

**P: Posso usar em múltiplos celulares?**
R: Sim! Todos podem escanear o mesmo QR code.

**P: Quando chego em casa, preciso fazer tudo novamente?**
R: Sim, porque a rede muda. Mas é bem rápido.

## 🎓 Dicas para Alunos

1. **Abra o DevTools:** Agite o celular e toque em "Show Element Inspector"
2. **Veja os Logs:** Agite o celular e toque em "Show Logs"
3. **Estude o Código:** Comece pelo `src/screens/Home/index.tsx`
4. **Modifique:** Tente alterar cores em `src/styles/colors.ts` e veja as mudanças em tempo real!

---

Pronto! Agora você está pronto para desenvolver com React Native e Expo! 🚀
