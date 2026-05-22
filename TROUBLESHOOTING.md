# 🆘 Troubleshooting - Problemas Comuns

## 1. App não carrega/fica em branco

### Problema
Abro o app no Expo Go e fica em branco ou mostra "Waiting for the bundler..."

### Solução

**Passo 1:** Pressione `Ctrl+C` no terminal do Codespace

**Passo 2:** Execute:
```bash
npm start -- --reset-cache
```

**Passo 3:** Aguarde 30-60 segundos até ver:
```
[INFO] Tunneling is set up
[INFO] QR Code: ...
```

**Passo 4:** Reescaneie o QR code no Expo Go

---

## 2. "Connection refused" ou não conecta

### Problema
Expo Go não consegue conectar ao servidor

### Causas Possíveis

#### A) Redes Diferentes
Se celular e computador estão em redes diferentes:

```bash
npm run start:tunnel
```

#### B) Firewall Bloqueando
Se está detrás de firewall:

```bash
npm run start:tunnel
```

#### C) Porta 8081 em Uso
Se outra aplicação está usando a porta:

```bash
npm start -- --port 8082
```

---

## 3. "Metro bundler error" ou erro ao atualizar

### Problema
Modifiquei um arquivo mas aparece erro estranho

### Solução

**Opção 1: Recarregar o App**
- Android: Agite o celular → "Reload"
- iOS: Agite o celular → "Reload"
- Terminal: Pressione `r`

**Opção 2: Limpar Cache**
```bash
npm start -- --reset-cache
```

**Opção 3: Reinstalar Tudo**
```bash
rm -rf node_modules
npm install
npm start
```

---

## 4. "Cannot find module" ou import error

### Problema
Erro de módulo não encontrado mesmo depois de instalar

### Solução

```bash
# 1. Verifique se o módulo está em package.json
npm list nome-do-modulo

# 2. Se não estiver, instale:
npm install nome-do-modulo

# 3. Se ainda não funcionar, reinstale tudo:
rm -rf node_modules
npm install
npm start
```

---

## 5. App crasheia ao iniciar

### Problema
App abre mas fecha imediatamente

### Solução

**Passo 1:** Verifique os erros no terminal

**Passo 2:** Abra o menu no Expo Go
- Android: Agite o celular
- iOS: Agite o celular

**Passo 3:** Toque em "Show Logs"

**Passo 4:** Procure por erros em vermelho

**Passo 5:** Se for erro de módulo:
```bash
npm install
npm start -- --reset-cache
```

---

## 6. TypeScript Errors

### Problema
Aparecem erros de tipo no código

### Solução

A maioria são avisos e não afetam o app. Mas para corrigi-los:

**Opção 1: Adicione tipos faltantes**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const user: User = { ... };
```

**Opção 2: Use `any` temporariamente (⚠️ evite em produção)**
```typescript
const data: any = ...;
```

---

## 7. Mudanças não aparecem no app

### Problema
Editei um arquivo mas a mudança não aparece

### Solução

**A) Espere mais tempo**
Às vezes o Metro bundler leva alguns segundos

**B) Recarregue manualmente**
- Terminal: Pressione `r`
- App: Agite o celular → "Reload"

**C) Feche e reabra**
```bash
Ctrl+C (no terminal)
npm start
# Reescaneie o QR code
```

---

## 8. Erro de rede/DNS

### Problema
"Network request failed" ou "getaddrinfo ENOTFOUND"

### Solução

Este erro geralmente é em chamadas de API. Se não tem API, ignore.

Para testar API:
```bash
curl https://api.example.com/endpoint
```

---

## 9. Expo Go não encontra o app

### Problema
Escaneio o QR code mas Expo Go não abre o app

### Solução

**Opção 1: Verificar Código QR**
- Certifique-se que está escaneando um código QR válido
- O código QR deve estar em branco/verde

**Opção 2: Usar URL Manual**
No Expo Go:
1. Toque em "Scan QR code"
2. Ou vá para "Projects"
3. Digite a URL que aparece no terminal:
   - Exemplo: `exp://192.168.1.100:8081`

**Opção 3: Usar Tunnel**
```bash
npm run start:tunnel
```

---

## 10. Performance lenta/app travando

### Problema
App está muito lento ou travando

### Solução

**A) Feche aplicativos no celular**
Libere memória fechando outros apps

**B) Feche outras abas/windows do Codespace**
Libere memória do servidor

**C) Reinicie o servidor**
```bash
Ctrl+C
npm start -- --reset-cache
```

**D) Use modo produção** (avançado)
```bash
npm run build:android
```

---

## 🆘 Ainda não funcionou?

### Passos Finais

1. **Copie a mensagem de erro completa**
   - Terminal ou Logs do Expo Go

2. **Verifique a versão do Expo**
   ```bash
   npm list expo
   ```

3. **Procure no Stack Overflow**
   - https://stackoverflow.com/questions/tagged/expo

4. **Veja documentação oficial**
   - https://docs.expo.dev/debugging/runtime-issues/

5. **Crie uma issue no GitHub**
   - Inclua: erro, versão do Node, versão do Expo, SO

---

## 💡 Dicas Extras

### Atalhos Úteis

| Comando | O que faz |
|---------|-----------|
| `r` | Recarregar app |
| `d` | Abre DevTools |
| `i` | Abre iOS (se disponível) |
| `a` | Abre Android (se disponível) |
| `w` | Abre web |
| `c` | Limpa console |
| `m` | Menu no app |

### Monitorar Performance

No Codespace:
```bash
npm start
```

Agite o celular e vá para "Show Logs" → veja o uso de memória

### Debugging

Para debug avançado:
```bash
npm start -- --dev-client
```

---

**Boa sorte! 🚀 Se tiver dúvidas, consulte [EXPO_SETUP.md](EXPO_SETUP.md)**
