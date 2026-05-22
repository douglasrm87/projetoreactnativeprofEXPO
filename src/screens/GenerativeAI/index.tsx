import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { colors } from "../../styles/colors";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "GenerativeAI">;

export function GenerativeAIScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Header title="IA Generativa" />
      <Navbar
        activeRoute="GenerativeAI"
        onNavigate={(route) => navigation.navigate(route as any)}
      />
      <ScrollView style={styles.content}>
        {/* Seção de Introdução */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            🤖 IA Generativa: O Futuro da Criatividade
          </Text>
          <Text style={styles.description}>
            IA Generativa é um ramo da inteligência artificial que cria novo
            conteúdo (texto, imagens, código, áudio) baseado em padrões
            aprendidos de dados.
          </Text>
        </View>

        {/* O que é IA Generativa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O Que é IA Generativa?</Text>
          <View style={styles.card}>
            <Text style={styles.cardContent}>
              IA Generativa utiliza modelos de machine learning (especialmente
              redes neurais profundas) para aprender padrões em grandes volumes
              de dados e gerar conteúdo novo e original.
              {"\n\n"}
              Diferencia-se de IAs discriminativas, que classificam dados
              existentes.
            </Text>
          </View>
        </View>

        {/* Principais Modelos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Principais Modelos e Tecnologias
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              💬 Large Language Models (LLMs)
            </Text>
            <Text style={styles.cardContent}>
              Modelos treinados em bilhões de textos. Exemplos: GPT-4, Claude,
              Llama, Gemini. Usados para: diálogos, resumos, tradução, geração
              de código.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              🎨 Modelos de Geração de Imagens
            </Text>
            <Text style={styles.cardContent}>
              Criam imagens a partir de descrições textuais. Exemplos: DALL-E,
              Midjourney, Stable Diffusion. Revolucionando design, arte e
              criação visual.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎵 Modelos Multimodais</Text>
            <Text style={styles.cardContent}>
              Trabalham com múltiplas formas de dados (texto, imagem, áudio,
              vídeo). Permitem análise e geração integrada de conteúdo complexo.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🧬 Arquitetura Transformer</Text>
            <Text style={styles.cardContent}>
              Tecnologia revolucionária baseada em mecanismo de atenção. Permite
              processamento paralelo eficiente e compreensão profunda de
              contexto.
            </Text>
          </View>
        </View>

        {/* Aplicações Práticas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aplicações Práticas</Text>
          <Text style={styles.description} style={{ marginBottom: 12 }}>
            IA Generativa está transformando diversos setores:
          </Text>

          <View style={styles.listItem}>
            <Text style={styles.listText}>
              📝 <Text style={styles.bold}>Redação e Copywriting</Text> -
              Geração de conteúdo para marketing
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              💻 <Text style={styles.bold}>Desenvolvimento</Text> - Copilot
              GitHub, assistentes de código
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🎓 <Text style={styles.bold}>Educação</Text> - Tutoriais
              personalizados e avaliações
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🏥 <Text style={styles.bold}>Saúde</Text> - Diagnóstico assistido
              e pesquisa médica
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🎬 <Text style={styles.bold}>Entretenimento</Text> - Criação de
              histórias, jogos, conteúdo visual
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>
              🏢 <Text style={styles.bold}>Negócios</Text> - Atendimento ao
              cliente, análise de dados
            </Text>
          </View>
        </View>

        {/* Desafios e Considerações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Desafios e Considerações Éticas
          </Text>
          <View style={styles.warningBox}>
            <Text style={styles.warningItem}>
              ⚠️ <Text style={styles.bold}>Viés e Discriminação</Text> - Modelos
              podem perpetuar preconceitos dos dados
            </Text>
            <Text style={styles.warningItem}>
              ⚠️ <Text style={styles.bold}>Privacidade</Text> - Risco de
              exposição de dados sensíveis
            </Text>
            <Text style={styles.warningItem}>
              ⚠️ <Text style={styles.bold}>Desinformação</Text> - Geração de
              conteúdo falso e convincente
            </Text>
            <Text style={styles.warningItem}>
              ⚠️ <Text style={styles.bold}>Propriedade Intelectual</Text> -
              Questões sobre direitos autorais
            </Text>
            <Text style={styles.warningItem}>
              ⚠️ <Text style={styles.bold}>Impacto Laboral</Text> - Preocupações
              com substituição de empregos
            </Text>
          </View>
        </View>

        {/* Futuro */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O Futuro da IA Generativa</Text>
          <Text style={styles.description}>
            Espera-se avanços em: modelos mais eficientes, melhor compreensão de
            contexto, sistemas mais seguros, e integração mais profunda em
            aplicações cotidianas.
            {"\n\n"}A regulação e ética serão fundamentais para garantir
            desenvolvimento responsável.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            IA Generativa é uma ferramenta poderosa que complementa, não
            substitui, a criatividade humana.
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
    borderLeftColor: colors.primary,
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
  warningBox: {
    backgroundColor: "#FFF3CD",
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FFC107",
  },
  warningItem: {
    fontSize: 14,
    color: "#856404",
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
