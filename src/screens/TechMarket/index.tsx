import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "TechMarket">;

export function TechMarketScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header title="Mercado de TI" />
      <Navbar
        activeRoute="TechMarket"
        onNavigate={(route) => navigation.navigate(route as any)}
      />
      <ScrollView style={styles.content}>
        {/* Seção de Introdução */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            💼 Mercado de Tecnologia: Tendências e Oportunidades
          </Text>
          <Text style={styles.description}>
            O mercado de TI é um dos mais dinâmicos e em crescimento. Conheça as
            principais tendências, salários e oportunidades de carreira.
          </Text>
        </View>

        {/* Cenário Atual */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Cenário Atual do Mercado</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🌐 Mercado Global em Expansão</Text>
            <Text style={styles.cardContent}>
              O mercado global de TI está avaliado em trilhões de dólares.
              Crescimento anual: 5-8% em relação ao PIB em países desenvolvidos.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              🇧🇷 Brasil: Hub Tech da América Latina
            </Text>
            <Text style={styles.cardContent}>
              Brasil é o maior mercado de TI da América Latina com mais de 5
              bilhões em receita. Demanda crescente de profissionais,
              especialialmente em desenvolvimento.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>💰 Salários Competitivos</Text>
            <Text style={styles.cardContent}>
              Profissionais de TI ganham acima da média nacional. Especialistas
              em IA/Cloud podem ganhar 2-3x mais que a média.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📉 Desafios Recentes</Text>
            <Text style={styles.cardContent}>
              2023-2024 viu ajustes no setor com layoffs de grandes tech
              companies. Contudo, demanda por skills específicas (IA, Cloud)
              permanece alta.
            </Text>
          </View>
        </View>

        {/* Tendências Principais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Tendências em Alta</Text>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>
              1️⃣ Inteligência Artificial & Machine Learning
            </Text>
            <Text style={styles.trendContent}>
              IA é a palavra-chave agora. Empresas investem pesadamente em IA
              Generativa. Salários: R$10k-20k+ para especialistas.
            </Text>
          </View>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>2️⃣ Cloud Computing</Text>
            <Text style={styles.trendContent}>
              AWS, Azure, Google Cloud dominam. Migração para nuvem é tendência.
              Profissional de Cloud: R$8k-18k/mês.
            </Text>
          </View>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>3️⃣ Segurança Cibernética</Text>
            <Text style={styles.trendContent}>
              Ataques crescem, demanda por especialistas também. Security
              Engineer: R$9k-17k/mês. Sem desemprego nesta área.
            </Text>
          </View>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>4️⃣ DevOps & Infraestrutura</Text>
            <Text style={styles.trendContent}>
              Containerização (Docker, Kubernetes) é padrão agora. DevOps
              Engineer: R$8k-16k/mês. Alta demanda.
            </Text>
          </View>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>
              5️⃣ Desenvolvimento Web3/Blockchain
            </Text>
            <Text style={styles.trendContent}>
              Blockchain ainda em evolução mas com nichos lucrativos. Web3
              Developer: R$10k-20k/mês em empresas consolidadas.
            </Text>
          </View>

          <View style={styles.trend}>
            <Text style={styles.trendTitle}>6️⃣ Mobile Development</Text>
            <Text style={styles.trendContent}>
              React Native e Flutter ganham espaço. Apps continuam essenciais.
              Mobile Dev: R$7k-15k/mês. Mercado em crescimento.
            </Text>
          </View>
        </View>

        {/* Carreiras e Salários */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            💵 Guia de Carreiras e Salários (Brasil)
          </Text>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Frontend Developer</Text>
              <Text style={styles.salaryRange}>R$5k - R$12k</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Backend Developer</Text>
              <Text style={styles.salaryRange}>R$6k - R$15k</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Full Stack Developer</Text>
              <Text style={styles.salaryRange}>R$7k - R$18k</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Data Scientist</Text>
              <Text style={styles.salaryRange}>R$8k - R$20k+</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>DevOps Engineer</Text>
              <Text style={styles.salaryRange}>R$8k - R$16k</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Security Engineer</Text>
              <Text style={styles.salaryRange}>R$9k - R$17k</Text>
            </View>
          </View>

          <View style={styles.salaryItem}>
            <View style={styles.salaryRow}>
              <Text style={styles.salaryRole}>Tech Lead/Arquiteto</Text>
              <Text style={styles.salaryRange}>R$12k - R$25k+</Text>
            </View>
          </View>

          <Text style={styles.salaryNote}>
            *Valores variam por experiência, localização e empresa.
          </Text>
        </View>

        {/* Dicas para Crescimento */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            🎯 Dicas para Crescimento Profissional
          </Text>
          <View style={styles.tipsBox}>
            <Text style={styles.tipItem}>
              ✓ Nunca pare de aprender - TI muda rapidamente
            </Text>
            <Text style={styles.tipItem}>
              ✓ Especialize em tecnologias em demanda (IA, Cloud, Security)
            </Text>
            <Text style={styles.tipItem}>
              ✓ Contribua em projetos open source no GitHub
            </Text>
            <Text style={styles.tipItem}>
              ✓ Construa um portfólio com projetos reais
            </Text>
            <Text style={styles.tipItem}>
              ✓ Networking é importante - participe de comunidades
            </Text>
            <Text style={styles.tipItem}>
              ✓ Certificações agregam valor (AWS, Google Cloud, etc)
            </Text>
            <Text style={styles.tipItem}>
              ✓ Английский técnico é um diferencial
            </Text>
            <Text style={styles.tipItem}>
              ✓ Trabalhe em equipes, soft skills também importam
            </Text>
          </View>
        </View>

        {/* Empresas Grandes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏢 Maiores Tech Companies</Text>
          <Text style={styles.description} style={{ marginBottom: 12 }}>
            Estas empresas contratam desenvolvedores globalmente:
          </Text>

          <View style={styles.companyItem}>
            <Text style={styles.companyName}>
              Google, Meta, Amazon, Microsoft, Apple
            </Text>
            <Text style={styles.companyDesc}>
              Salários: R$15k-50k+ para posições no Brasil
            </Text>
          </View>

          <View style={styles.companyItem}>
            <Text style={styles.companyName}>Startups Brasileiras</Text>
            <Text style={styles.companyDesc}>
              Nubank, Stone, Quinto Andar, 99, iFood
            </Text>
          </View>

          <View style={styles.companyItem}>
            <Text style={styles.companyName}>Consultoras de Tecnologia</Text>
            <Text style={styles.companyDesc}>
              Accenture, Deloitte, PWC, Capgemini
            </Text>
          </View>
        </View>

        {/* Previsões Futuro */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔮 Previsões para o Futuro</Text>
          <View style={styles.futureBox}>
            <Text style={styles.futureItem}>
              🤖 IA será integrada em todos os softwares
            </Text>
            <Text style={styles.futureItem}>
              ☁️ Cloud será ainda mais predominante
            </Text>
            <Text style={styles.futureItem}>
              🔒 Segurança será ainda mais crítica
            </Text>
            <Text style={styles.futureItem}>
              🌱 Sustentabilidade em TI ganhará importância
            </Text>
            <Text style={styles.futureItem}>
              🎓 Formação continuada será essencial
            </Text>
            <Text style={styles.futureItem}>
              🌍 Trabalho remoto continuará crescendo
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            O mercado de TI é promissor para quem está disposto a aprender e
            evoluir constantemente.
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
  trend: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  trendTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  trendContent: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  salaryItem: {
    marginBottom: 10,
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
  },
  salaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salaryRole: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
  salaryRange: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.secondary,
  },
  salaryNote: {
    fontSize: 12,
    color: colors.textLight,
    fontStyle: "italic",
    marginTop: 8,
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
  companyItem: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 4,
  },
  companyDesc: {
    fontSize: 13,
    color: colors.text,
  },
  futureBox: {
    backgroundColor: "#F3E5F5",
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#9C27B0",
  },
  futureItem: {
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
