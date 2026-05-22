// Componente Button reutilizável

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../styles/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  const buttonStyle: ViewStyle[] = [
    styles.button,
    variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
  ];

  const textStyle: TextStyle[] = [
    styles.text,
    variant === 'primary' ? styles.textPrimary : styles.textSecondary,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.white,
  },
});