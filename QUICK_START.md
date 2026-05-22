# ⚡ Início Rápido - 5 Minutos

## 🎯 Seu objetivo

Rodar o app React Native no seu celular em 5 minutos.

---

## ✅ Checklist Pré-Requisitos

- [ ] Expo Go instalado no celular ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- [ ] Celular conectado ao Wi-Fi
- [ ] GitHub Codespace aberto
- [ ] Terminal aberto no Codespace

---

## 🚀 3 Passos Simples

### 1️⃣ Instalar Dependências (2 min)

No terminal do Codespace:

```bash
npm install
```

Espere terminar. Você verá:

```
added 1234 packages
```

### 2️⃣ Iniciar Servidor (1 min)

```bash
npm start
```

Espere até ver algo assim:

```
LAN: exp://192.168.x.x:8081
Tunnel: ...
```

### 3️⃣ Conectar Celular (2 min)

1. Abra **Expo Go** no seu celular
2. **Escaneie o código QR** branco que aparece no terminal
3. Espere 30-60 segundos
4. **Pronto! 🎉**

## npx expo start --web

## 🆘 Algo Deu Errado?

### "Connection refused" ou não conecta

Tente outro modo:

```bash
npm run start:tunnel
```

### App fica em branco por muito tempo

Pressione `r` no terminal para recarregar.

### Não consegue escanear o QR code

1. Copie a URL que aparece no terminal (ex: `exp://192.168.1.100:8081`)
2. No Expo Go, toque em **"Projects"**
3. Cole a URL em algum lugar

---

## 🎓 Próximas Etapas

### Para Entender o Código

1. Abra `src/screens/Home/index.tsx`
2. Encontre o texto "Bem-vindo ao React Native"
3. Troque para "Alô Mundo ADS"
4. Agite o celular → "Reload"
5. Veja a mudança!

### Para Aprender Mais

- Leia [README.md](README.md)
- Veja [EXPO_SETUP.md](EXPO_SETUP.md) para detalhes
- Consulte [TROUBLESHOOTING.md](TROUBLESHOOTING.md) se houver problemas

---

## 📱 Atalhos Úteis no App

| O que fazer       | Como                           |
| ----------------- | ------------------------------ |
| Recarregar        | Pressione `r` no terminal      |
| Ver erros         | Agite o celular → "Show Logs"  |
| Parar servidor    | Pressione `Ctrl+C` no terminal |
| Modo tunnel       | `npm run start:tunnel`         |
| Web (teste no PC) | `npm run start:web`            |

---

## ✨ Pronto!

Se chegou aqui e o app está funcionando no seu celular, parabéns! 🎉

Agora você pode:

- ✅ Modificar código em tempo real
- ✅ Aprender React Native
- ✅ Compartilhar o app com colegas

---

**Dúvidas? Veja [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**
