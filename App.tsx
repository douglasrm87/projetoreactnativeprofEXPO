// Componente principal da aplicação

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./src/context";
import Routes from "./src/navigation";
import { colors } from "./src/styles/colors";

/**
 
npx expo start
npx expo start --web

npm install
npx expo start --tunnel

Endereço ngrok
 Metro waiting on exp://tsal5dc-anonymous-8081.exp.direct
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

Incompativel - Expo Go com SDK 54 e Projeto criado no Github com SDK 51.
  npx expo install expo@latest
  npm install
  npx expo start --tunnel
  npx expo start --clear
  EXPO_NO_DEVTOOLS=1 npx expo start --clear --tunnel

* 
 * Componente App - Ponto de entrada da aplicação
 *
 * Estrutura:
 * 1. GestureHandlerRootView - Necessário para gestos
 * 2. AppProvider - Context API para estado global
 * 3. Routes - Sistema de navegação
 * 4. StatusBar - Barra de status
 */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <Routes />
        <StatusBar style="light" backgroundColor={colors.primary} />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
