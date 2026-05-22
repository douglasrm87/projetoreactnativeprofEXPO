// Tela Home - Exemplo de Alô Mundo!

import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { useApp } from "../../context";
import { useCounter } from "../../hooks";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  const { user } = useApp(); // Acessa o usuário autenticado do contexto

  // Funções do contador: increment (soma 1), decrement (subtrai 1), reset (volta para 0)
  const { count, increment, decrement, reset } = useCounter(0); // Exemplo de uso do hook useCounter

  // Função para mostrar um alerta de Alô Mundo
  const handleAlert = () => {
    Alert.alert(
      "Alô Mundo! 👋",
      "Bem-vindo ao exemplo de React Native com Expo!\n\nEste é um projeto educacional para alunos de ADS.",
      [{ text: "OK" }],
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Alô Mundo!" />
      <Navbar
        activeRoute="Home"
        onNavigate={(route) => navigation.navigate(route as any)}
      />

      <ScrollView style={styles.content}>
        {/* Seção de Boas-vindas */}
        <View style={styles.section}>
          <Text style={styles.title}>Bem-vindo ao React Native! 🚀</Text>
          <Text style={styles.description}>
            Este é um exemplo básico de projeto React Native com Expo. Uma ótima
            forma para aprender os conceitos fundamentais.
          </Text>
        </View>

        {/* Informações do Usuário */}
        {user ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informações do Usuário</Text>
            <View style={styles.userInfo}>
              <Text style={styles.label}>
                {/* Exibe o nome do usuário autenticado */}
                Nome: <Text style={styles.value}>{user.name}</Text>
              </Text>
              <Text style={styles.label}>
                Email: <Text style={styles.value}>{user.email}</Text>
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Não autenticado</Text>
            <Text style={styles.description}>
              Faça login para ver suas informações
            </Text>
          </View>
        )}

        {/* Contador - Exemplo de Hook */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contador (useCounter Hook)</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{count}</Text>
          </View>
          <Button title="Incrementar (+)" onPress={increment} />
          <Button
            title="Decrementar (-)"
            onPress={decrement}
            variant="secondary"
          />
          <Button title="Resetar" onPress={reset} variant="secondary" />
        </View>

        {/* Estrutura do Projeto */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estrutura do Projeto</Text>
          <Text style={styles.structureItem}>
            <Text style={styles.structureLabel}>📁 src/</Text>
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"}{" "}
            <Text style={styles.structureLabel}>├── components/</Text> -
            Componentes reutilizáveis
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── screens/</Text> -
            Telas da aplicação
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"}{" "}
            <Text style={styles.structureLabel}>├── navigation/</Text> -
            Configuração de rotas
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── hooks/</Text> -
            Hooks customizados
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── context/</Text> -
            Context API
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── services/</Text>{" "}
            - Chamadas de API
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── styles/</Text> -
            Temas e cores
          </Text>
          <Text style={styles.structureItem}>
            {"\u2502"} <Text style={styles.structureLabel}>├── utils/</Text> -
            Funções utilitárias
          </Text>
          <Text style={styles.structureItem}>
            {"\u2514"} <Text style={styles.structureLabel}>└── types/</Text> -
            Tipagens TypeScript
          </Text>
        </View>

        {/* Botões de Ação */}
        <View style={styles.section}>
          <Button title="Mostrar Alô Mundo!" onPress={handleAlert} />
          <Button
            title="Ir para Login"
            onPress={() => navigation.navigate("Login")}
            variant="secondary"
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Projeto Educacional - ADS 2024</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  userInfo: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
  },
  value: {
    fontWeight: "600",
    color: colors.primary,
  },
  counterContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 12,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.primary,
  },
  structureItem: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 4,
    fontFamily: "monospace",
  },
  structureLabel: {
    fontWeight: "600",
    color: colors.primary,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 12,
    color: colors.textLight,
  },
});
