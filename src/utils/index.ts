// Funções utilitárias

/**
 * Valida um email
 * @param email - email a ser validado
 * @returns true se o email é válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Delay assíncrono
 * @param ms - milissegundos para aguardar
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formata uma data para formato legível
 * @param date - data a ser formatada
 * @returns string com a data formatada
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
