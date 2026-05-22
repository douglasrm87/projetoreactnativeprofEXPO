// Tela Login - Exemplo de autenticação

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useApp } from '../../context';
import { isValidEmail } from '../../utils';
import { colors } from '../../styles/colors';
import { RootStackParamList, User } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const { setUser } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Validações
    if (!name.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu nome');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu email');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Email inválido');
      return;
    }

    // Simula um carregamento
    setLoading(true);

    try {
      // Simula uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Cria um usuário
      const user: User = {
        id: Math.random().toString(),
        name,
        email,
      };

      setUser(user);
      
      Alert.alert('Sucesso', `Bem-vindo, ${name}!`, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const handleDemo = () => {
    // Preenche com dados de exemplo
    setName('Aluno ADS');
    setEmail('aluno@ads.com');
  };

  return (
    <View style={styles.container}>
      <Header title="Login" />
      
      <ScrollView style={styles.content}>
        {/* Seção de Informações */}
        <View style={styles.section}>
          <Text style={styles.title}>Bem-vindo! 👋</Text>
          <Text style={styles.description}>
            Faça login para acessar a aplicação
          </Text>
        </View>

        {/* Formulário de Login */}
        <View style={styles.section}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor={colors.textLight}
              value={name}
              onChangeText={setName}
              editable={!loading}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor={colors.textLight}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />
          </View>
        </View>

        {/* Dicas para Alunos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 Dicas de Aprendizado</Text>
          <Text style={styles.tip}>
            • Este é um exemplo educacional{'\n'}
            • Observe como os componentes interagem{'\n'}
            • Veja como o Context API funciona{'\n'}
            • Analise a estrutura do projeto
          </Text>
        </View>

        {/* Botões */}
        <View style={styles.section}>
          <Button
            title={loading ? 'Carregando...' : 'Entrar'}
            onPress={handleLogin}
          />
          <Button
            title="Usar Dados de Exemplo"
            onPress={handleDemo}
            variant="secondary"
          />
          <Button
            title="Voltar para Home"
            onPress={() => navigation.navigate('Home')}
            variant="secondary"
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
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.text,
  },
  tip: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 6,
  },
});
