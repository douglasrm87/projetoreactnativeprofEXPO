# 📚 Índice de Arquivos - Guia Completo

Bem-vindo ao Projeto React Native com Expo! 👋

## 🚀 COMECE AQUI

### Para Iniciar Rapidamente (5 min)
👉 **[QUICK_START.md](QUICK_START.md)** - Guia de 5 minutos

### Para Entender Setup Completo (15 min)
👉 **[EXPO_SETUP.md](EXPO_SETUP.md)** - Guia completo de configuração

### Se Algo Deu Errado
👉 **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Solução de problemas

---

## 📖 Documentação

| Arquivo | O que contém |
|---------|-------------|
| **[README.md](README.md)** | Visão geral do projeto e exemplos |
| **[QUICK_START.md](QUICK_START.md)** | Setup em 5 minutos ⚡ |
| **[EXPO_SETUP.md](EXPO_SETUP.md)** | Configuração detalhada com Codespace |
| **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** | Solução de problemas comuns |

---

## 🏗️ Estrutura do Código

```
📦 Projeto
├── 📄 App.tsx                    # Componente principal
├── 📄 index.ts                   # Entry point do Expo
├── 📄 app.json                   # Configuração do Expo
├── 📄 package.json               # Dependências
├── 📄 tsconfig.json              # Configuração TypeScript
│
├── 📁 src/
│   ├── 📁 components/            # Componentes reutilizáveis
│   │   ├── Button/               # Botão customizável
│   │   └── Header/               # Cabeçalho
│   │
│   ├── 📁 screens/               # Telas da app
│   │   ├── Home/                 # Tela inicial (Alô Mundo!)
│   │   └── Login/                # Tela de login
│   │
│   ├── 📁 navigation/            # Sistema de rotas
│   │   └── index.tsx             # Configuração de navegação
│   │
│   ├── 📁 context/               # State management
│   │   └── index.tsx             # Context API
│   │
│   ├── 📁 hooks/                 # Hooks customizados
│   │   └── index.ts              # useCounter, useToggle
│   │
│   ├── 📁 services/              # Integração com APIs
│   │   └── api.ts                # ApiService class
│   │
│   ├── 📁 styles/                # Tema e cores
│   │   ├── colors.ts             # Paleta de cores
│   │   └── theme.ts              # Configuração de tema
│   │
│   ├── 📁 utils/                 # Funções utilitárias
│   │   └── index.ts              # helpers, validators
│   │
│   └── 📁 types/                 # Tipagens TypeScript
│       └── index.ts              # Interfaces e types
│
├── 📁 assets/                    # Imagens, ícones, fontes
│
├── 📁 .vscode/                   # Configuração VS Code
│   ├── extensions.json           # Extensões recomendadas
│   └── settings.json             # Configurações do editor
│
└── 📁 .expo/                     # Arquivos gerados pelo Expo
```

---

## 🛠️ Configuração

| Arquivo | Propósito |
|---------|----------|
| `package.json` | Dependências e scripts |
| `app.json` | Configuração do Expo (LAN, tunnel, etc) |
| `tsconfig.json` | Configuração TypeScript |
| `.env.example` | Variáveis de ambiente (exemplo) |
| `.gitignore` | Arquivos ignorados pelo git |

---

## 🤖 Scripts Disponíveis

```bash
npm start              # Inicia em modo desenvolvimento
npm run start:lan      # Conexão LAN (mesma rede)
npm run start:tunnel   # Via tunnel (redes diferentes)
npm run start:web      # Testa no navegador
npm run android        # Apenas Android
npm run ios            # Apenas iOS
```

---

## 📱 Como Usar

### Primeira Vez

```bash
# 1. Instale dependências
npm install

# 2. Inicie servidor
npm start

# 3. Escaneie QR code com Expo Go
# (Seu celular deve estar com Expo Go instalado)
```

### Para Desenvolvimento

1. Faça mudanças no código
2. Salve o arquivo
3. Veja as mudanças no celular automaticamente
4. Se não atualizar, pressione `r` no terminal

---

## 🎓 Estrutura de Aprendizado

### Básico (Comece aqui)
1. Leia [QUICK_START.md](QUICK_START.md)
2. Rode o app no seu celular
3. Abra `src/screens/Home/index.tsx`
4. Mude o texto e veja a mudança

### Intermediário
1. Estude `src/components/Button/index.tsx`
2. Crie um novo componente em `src/components/`
3. Use-o em uma das telas

### Avançado
1. Veja `src/context/index.tsx` (Context API)
2. Veja `src/hooks/index.ts` (Hooks customizados)
3. Adicione uma nova tela em `src/screens/`

---

## 🐛 Se Algo Deu Errado

### Etapa 1: Verifique Pré-Requisitos
- ✅ Expo Go instalado no celular?
- ✅ Celular e PC na mesma rede?
- ✅ Node.js instalado?

### Etapa 2: Tente Solução Rápida
```bash
npm start -- --reset-cache
```

### Etapa 3: Veja [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📚 Recursos Úteis

### Documentação Oficial
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/) ⭐
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tutoriais
- [Expo Tutorial](https://docs.expo.dev/tutorial/create-your-first-app/)
- [React Native Getting Started](https://reactnative.dev/docs/getting-started)
- [Context API Guide](https://react.dev/reference/react/useContext)

### Comunidade
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)
- [Expo Community](https://forums.expo.dev/)
- [React Native Community](https://github.com/react-native-community)

---

## 🎯 Checklist de Configuração

- [ ] Git clonado localmente
- [ ] `npm install` executado com sucesso
- [ ] Expo Go instalado no celular
- [ ] `npm start` rodando
- [ ] Código QR escaneado com sucesso
- [ ] App visível no celular
- [ ] Primeira mudança feita e refletida no celular

---

## 💾 Guardando Arquivos

O seu código é salvo em:
- `App.tsx` - Componente principal
- `src/` - Todo seu código

Para sincronizar com GitHub:
```bash
git add .
git commit -m "Sua mensagem"
git push
```

---

## 🎊 Próximos Passos

1. **Customize o projeto**
   - Mude cores em `src/styles/colors.ts`
   - Adicione nova tela em `src/screens/`

2. **Integre uma API**
   - Use `src/services/api.ts`

3. **Compartilhe com colegas**
   - Todos com Expo Go podem ver o app

4. **Publique no Expo Go**
   - Siga [documentação de deployment](https://docs.expo.dev/deployment/overview/)

---

## ❓ FAQ

**P: Preciso fazer isso toda vez?**
R: Não! Depois da primeira vez, é só `npm start`.

**P: Posso usar em múltiplos celulares?**
R: Sim! Todos podem escanear o mesmo QR code.

**P: Funciona offline?**
R: LAN sim. Tunnel precisa de internet.

**P: Quanto tempo leva para atualizar?**
R: Rápido! 1-2 segundos geralmente.

**P: Posso usar em outro PC?**
R: Sim! O código fica no GitHub.

---

## 📞 Suporte

- 📖 Leia [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- 🔍 Procure em [Stack Overflow](https://stackoverflow.com/questions/tagged/expo)
- 📚 Veja [Expo Docs](https://docs.expo.dev/)
- 💬 Pergunte em comunidades

---

## 🎓 Projeto Educacional

Este é um projeto de exemplo para alunos de ADS. Use livremente para aprendizado!

**Bom desenvolvimento! 🚀**

---

**Última atualização:** Maio 2024  
**Versão Expo:** 54.0.33  
**Versão React Native:** 0.81.5
