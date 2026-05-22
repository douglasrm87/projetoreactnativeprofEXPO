// Hooks customizados

import { useState, useCallback } from 'react';

/**
 * Hook customizado para gerenciar um toggle
 * @param initialValue - valor inicial (padrão: false)
 * @returns [value, toggle] - valor atual e função para alternar
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle] as const;
}

/**
 * Hook customizado para gerenciar um contador
 * @param initialValue - valor inicial (padrão: 0)
 * @returns { count, increment, decrement, reset }
 */
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
