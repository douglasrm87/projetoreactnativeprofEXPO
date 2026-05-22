# Alô Mundo - React Native com Expo 🚀

Um projeto educacional completo para alunos de ADS aprenderem React Native com Expo.

## 📱 O que é este projeto?

Este é um exemplo funcional de **"Alô Mundo"** em React Native que demonstra conceitos fundamentais de desenvolvimento mobile, incluindo:

- ✅ Componentes reutilizáveis
- ✅ Context API para estado global
- ✅ Hooks customizados
- ✅ React Navigation
- ✅ TypeScript
- ✅ Validação de formulários
- ✅ Integração com APIs

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Button/        # Botão com variantes
│   └── Header/        # Cabeçalho
├── screens/           # Telas da aplicação
│   ├── Home/          # Tela inicial
│   └── Login/         # Tela de login
├── navigation/        # Sistema de rotas
├── hooks/             # Hooks customizados
├── context/           # Context API
├── services/          # Integração com APIs
├── styles/            # Tema e cores
├── utils/             # Funções utilitárias
└── types/             # Tipagens TypeScript
```

## 🚀 Início Rápido

### 1. Clonar o Projeto

```bash
git clone https://github.com/douglasrm87/projetoreactnativeprofEXPO.git
cd projetoreactnativeprofEXPO
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Iniciar o Servidor Expo

```bash
npm start
```

### 4. Conectar ao Expo Go

Escaneie o QR code com seu celular usando o **Expo Go** app.

> **Nota:** Para instruções detalhadas sobre como conectar seu celular ao Codespace, veja [EXPO_SETUP.md](EXPO_SETUP.md)

## 📱 Conectando ao Seu Celular

### Para Redes Locais (Recomendado)

```bash
npm run start:lan
```

Celular e computador devem estar na **mesma rede Wi-Fi**.

### Para Redes Diferentes (via Tunnel)

```bash
npm run start:tunnel
```

Mais lento, mas funciona mesmo com redes diferentes.

### Para o Navegador

```bash
npm run start:web
```

> **Veja [EXPO_SETUP.md](EXPO_SETUP.md) para guia completo de setup com Codespace**

## 🎯 Funcionalidades

### Home Screen

- 👋 Mensagem de boas-vindas
- 🔢 Contador com hooks customizados
- 👤 Exibe informações do usuário (se logado)
- 📚 Mostra a estrutura do projeto
- 🔗 Botões para navegar

### Login Screen

- 📝 Formulário com validação
- ✉️ Validação de email
- 🔐 Integração com Context API
- 💾 Salva dados do usuário

### Componentes Reutilizáveis

- **Button:** Botão com cores primárias e secundárias
- **Header:** Cabeçalho com estilo consistente

## 🛠️ Tecnologias

- **React Native:** Framework para desenvolvimento mobile
- **Expo:** Plataforma de desenvolvimento
- **TypeScript:** Tipagem estática
- **React Navigation:** Sistema de rotas
- **Context API:** Gerenciamento de estado

## 📚 Exemplos de Código

### Usar um Hook Customizado

```typescript
import { useCounter } from '../../hooks';

function MyComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </View>
  );
}
```

### Usar Context API

```typescript
import { useApp } from '../../context';

function MyComponent() {
  const { user, setUser } = useApp();

  return (
    <View>
      <Text>{user?.name || 'Não autenticado'}</Text>
    </View>
  );
}
```

### Usar Componente Button

```typescript
import { Button } from '../../components/Button';

function MyScreen() {
  return (
    <Button 
      title="Clique aqui" 
      onPress={() => alert('Clicado!')}
      variant="primary"
    />
  );
}
```

## 🎓 Exercícios para Alunos

### Básico

1. **Altere as cores:** Abra `src/styles/colors.ts` e mude `primary` para outra cor
2. **Modifique textos:** Altere as mensagens nas telas
3. **Adicione um novo botão:** Copie um botão existente e personalize

### Intermediário

4. **Crie um novo Hook:** Adicione em `src/hooks/index.ts` um hook chamado `useForm()`
5. **Adicione uma nova tela:** Crie em `src/screens/` uma tela de "Sobre"
6. **Estenda o componente Header:** Adicione um ícone à esquerda

### Avançado

7. **Integre com uma API real:** Use `src/services/api.ts` para buscar dados
8. **Crie um sistema de temas:** Implement modo escuro em `src/styles/theme.ts`
9. **Adicione notificações:** Use `react-native-toast-notifications`

## 📖 Documentação Útil

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🐛 Troubleshooting

### App não carrega

```bash
# Limpe o cache
npm start -- --reset-cache
```

### Porta 8081 em uso

```bash
# Use outra porta
expo start --port 8081
```

### Erro de módulo não encontrado

```bash
# Reinstale as dependências
rm -rf node_modules
npm install
```

## 🤝 Contribuindo

Este é um projeto educacional. Sugestões e contribuições são bem-vindas!

## 📝 Licença

MIT - Sinta-se livre para usar e modificar este projeto.

---

## 📞 Suporte

Para mais informações sobre Expo e React Native, visite a [documentação oficial do Expo](https://docs.expo.dev/).

**Projeto Educacional - ADS 2024** 🎓
