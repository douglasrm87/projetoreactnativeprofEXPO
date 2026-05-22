import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "RNFlutterCuriosities">;

export function RNFlutterCuriositiesScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header title="React Native & Flutter" />
      <Navbar
        activeRoute="RNFlutterCuriosities"
        onNavigate={(route) => navigation.navigate(route as any)}
      />
      <ScrollView style={styles.content}>
        {/* Seção de Introdução */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            ⚛️ React Native vs Flutter: Curiosidades
          </Text>
          <Text style={styles.description}>
            Duas frameworks revolucionárias que transformaram o desenvolvimento
            mobile. Conheça fatos interessantes e diferenças importantes.
          </Text>
        </View>

        {/* React Native */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>React Native 📱</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📜 Origem Interessante</Text>
            <Text style={styles.cardContent}>
              Criado pelo Facebook (Meta) em 2013 e lançado publicamente em
              2015. Nasceu da necessidade de reutilizar código JavaScript entre
              plataformas.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              🌟 "Learn Once, Write Anywhere"
            </Text>
            <Text style={styles.cardContent}>
              Lema do React Native: você aprende React uma vez e pode escrever
              para iOS, Android, Web e até TV usando os mesmos conceitos.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎁 Empresas Que Usam</Text>
            <Text style={styles.cardContent}>
              Meta, Shopify, Walmart, Uber Eats, Airbnb, Skype, Pinterest. Mais
              de 100 milhões de downloads em apps baseadas em React Native.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚡ Performance</Text>
            <Text style={styles.cardContent}>
              Usa a JavaScript Engine nativa (JavaScriptCore no iOS, V8 no
              Android). Performance próxima ao código nativo, mas com
              desenvolvimento mais rápido.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🛠️ Ecossistema Massivo</Text>
            <Text style={styles.cardContent}>
              Comunidade grande, npm tem centenas de milhares de pacotes. Fácil
              encontrar bibliotecas para quase qualquer necessidade.
            </Text>
          </View>
        </View>

        {/* Flutter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flutter 🦋</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔷 Criado pelo Google</Text>
            <Text style={styles.cardContent}>
              Lançado em 2017 como framework de código aberto. Desenvolvido para
              criar apps bonitas e rápidas para múltiplas plataformas.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎨 Design Impressionante</Text>
            <Text style={styles.cardContent}>
              Flutter inclui dois design systems: Material Design (Android) e
              Cupertino (iOS). Apps Flutter são conhecidos por terem visual
              consistente e polido.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚡ Performance Superior</Text>
            <Text style={styles.cardContent}>
              Compila para código nativo (AOT compilation). Geralmente mais
              rápido que React Native, com 60-120 FPS facilmente.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌐 Google Ads e Google Home</Text>
            <Text style={styles.cardContent}>
              Google usa Flutter internamente em seus apps. Também usado por
              Alibaba, Tencent, BMW, além de startups.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🚀 Curva de Aprendizado</Text>
            <Text style={styles.cardContent}>
              Usa Dart (linguagem criada também pelo Google). Sintaxe intuitiva
              para quem vem de JavaScript ou Java.
            </Text>
          </View>
        </View>

        {/* Comparação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comparação Rápida</Text>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Linguagem</Text>
              <View style={styles.comparisonValues}>
                <Text style={styles.comparisonText}>
                  RN: JavaScript/TypeScript
                </Text>
                <Text style={styles.comparisonText}>Flutter: Dart</Text>
              </View>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Performance</Text>
              <View style={styles.comparisonValues}>
                <Text style={styles.comparisonText}>RN: Boa</Text>
                <Text style={styles.comparisonText}>Flutter: Excelente ⭐</Text>
              </View>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Design</Text>
              <View style={styles.comparisonValues}>
                <Text style={styles.comparisonText}>
                  RN: Bom (customização)
                </Text>
                <Text style={styles.comparisonText}>Flutter: Excelente ⭐</Text>
              </View>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Comunidade</Text>
              <View style={styles.comparisonValues}>
                <Text style={styles.comparisonText}>RN: Maior ⭐</Text>
                <Text style={styles.comparisonText}>Flutter: Crescendo</Text>
              </View>
            </View>
          </View>

          <View style={styles.comparisonItem}>
            <View style={styles.comparisonRow}>
              <Text style={styles.comparisonLabel}>Plataformas</Text>
              <View style={styles.comparisonValues}>
                <Text style={styles.comparisonText}>RN: iOS, Android, Web</Text>
                <Text style={styles.comparisonText}>
                  Flutter: iOS, Android, Web, Desktop, IoT
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Fatos Curiosos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fatos Curiosos! 🤓</Text>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>
              🎬 Apps Famosos em React Native
            </Text>
            <Text style={styles.factContent}>
              Instagram, Discord, Soundcloud Cloud, UberEats começaram como
              React Native. Alguns depois tiveram partes reescritas em código
              nativo.
            </Text>
          </View>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>🌍 Flutter é Open Source</Text>
            <Text style={styles.factContent}>
              Repositório no GitHub com contribuições de milhares de
              desenvolvedores. Código ativo e bugs são resolvidos rapidamente.
            </Text>
          </View>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>🏃 Performance em Números</Text>
            <Text style={styles.factContent}>
              Flutter consegue 120 FPS facilmente em animações. React Native
              geralmente fica em 60 FPS, mas pode ser otimizado.
            </Text>
          </View>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>💬 Comunidade React Native</Text>
            <Text style={styles.factContent}>
              ~40 milhões de downloads do expo por mês. Maior comunidade de
              desenvolvimento mobile além de Kotlin e Swift nativos.
            </Text>
          </View>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>🚀 Flutter Web e Desktop</Text>
            <Text style={styles.factContent}>
              Flutter permite criar apps para web e desktop com o mesmo código.
              Suporte a Windows, Linux e Web como first-class citizens.
            </Text>
          </View>

          <View style={styles.fact}>
            <Text style={styles.factTitle}>⚙️ Hot Reload / Hot Restart</Text>
            <Text style={styles.factContent}>
              Ambas têm recarga em tempo real. Flutter é mais confiável, RN às
              vezes precisa de restart completo em casos complexos.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ambas são excelentes! A escolha depende de seus requisitos,
            preferências de linguagem e deadline.
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
  comparisonItem: {
    marginBottom: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FF6B6B",
  },
  comparisonRow: {
    flexDirection: "row",
  },
  comparisonLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
    width: "30%",
  },
  comparisonValues: {
    flex: 1,
  },
  comparisonText: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 4,
  },
  fact: {
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  factTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  factContent: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
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
