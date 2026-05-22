import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Nutrition">;

export function NutritionScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header title="Guia de Nutrição" />
      <Navbar
        activeRoute="Nutrition"
        onNavigate={(route) => navigation.navigate(route as any)}
      />
      <ScrollView style={styles.content}>
        {/* Seção de Introdução */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            🥗 Nutrição: Fundamentos Essenciais
          </Text>
          <Text style={styles.description}>
            A nutrição é a ciência que estuda os nutrientes e sua relação com a
            saúde, performance e bem-estar do corpo humano.
          </Text>
        </View>

        {/* Macronutrientes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Macronutrientes Principais</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🍖 Proteínas</Text>
            <Text style={styles.cardContent}>
              Essenciais para construção muscular, reparação de tecidos e
              produção de hormônios. Fontes: ovos, frango, peixe, leguminosas,
              nozes.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🍝 Carboidratos</Text>
            <Text style={styles.cardContent}>
              Principal fonte de energia para o corpo e cérebro. Prefira:
              cereais integrais, aveia, arroz integral, frutas e vegetais.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🥑 Gorduras Saudáveis</Text>
            <Text style={styles.cardContent}>
              Importantes para absorção de vitaminas e saúde cardiovascular.
              Fontes: abacate, azeite de oliva, peixes gordurosos, sementes.
            </Text>
          </View>
        </View>

        {/* Micronutrientes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Micronutrientes Importantes</Text>
          <Text style={styles.description}>
            Vitaminas e minerais são essenciais para inúmeras funções corporais.
            Uma dieta variada e colorida garante a ingestão de todos.
          </Text>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              💪 <Text style={styles.bold}>Ferro</Text> - Transporte de oxigênio
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🦷 <Text style={styles.bold}>Cálcio</Text> - Saúde óssea e
              dentária
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              ☀️ <Text style={styles.bold}>Vitamina D</Text> - Absorção de
              cálcio
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🧠 <Text style={styles.bold}>Ômega-3</Text> - Saúde cerebral
            </Text>
          </View>
        </View>

        {/* Dicas Práticas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Dicas Práticas para Alimentação Saudável
          </Text>
          <View style={styles.tipsBox}>
            <Text style={styles.tipItem}>✓ Coma em horários regulares</Text>
            <Text style={styles.tipItem}>
              ✓ Beba bastante água (2-3 litros/dia)
            </Text>
            <Text style={styles.tipItem}>
              ✓ Prefira alimentos naturais e integrais
            </Text>
            <Text style={styles.tipItem}>
              ✓ Reduza açúcares e alimentos ultraprocessados
            </Text>
            <Text style={styles.tipItem}>
              ✓ Inclua vegetais em todas as refeições
            </Text>
            <Text style={styles.tipItem}>
              ✓ Controle porções e sacie-se devagar
            </Text>
            <Text style={styles.tipItem}>✓ Exercite-se regularmente</Text>
            <Text style={styles.tipItem}>
              ✓ Consulte um nutricionista para orientação personalizada
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Uma nutrição adequada é um investimento na sua saúde presente e
            futura.
          </Text>
        </View>
        {/* Botões de Ação */}
        <View style={styles.section}>
          <Button
            title="Mostrar Alô Mundo!"
            onPress={() => alert("Alô Mundo!")}
          />
          <Button
            title="Ir para Home"
            onPress={() => navigation.navigate("Home")}
          />
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
    borderRadius: 12,
    padding: 16,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  listText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "700",
  },
  tipsBox: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
  },
  tipItem: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 24,
  },
  footerText: {
    fontSize: 13,
    color: colors.textLight,
    fontStyle: "italic",
    textAlign: "center",
  },
});
