// Componente principal da aplicação

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./src/context";
import Routes from "./src/navigation";
import { colors } from "./src/styles/colors";

/**
 * Componente App - Ponto de entrada da aplicação
 *
 * Estrutura:
 * 1. GestureHandlerRootView - Necessário para gestos
 * 2. AppProvider - Context API para estado global
 * 3. Routes - Sistema de navegação
 * 4. StatusBar - Barra de status
 *
 *
 *
 *
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
