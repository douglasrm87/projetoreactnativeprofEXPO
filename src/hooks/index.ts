// Hooks customizados
//
// Informações de documentação:
// Pasta: src/hooks
// Programa/Projeto: projetoreactnativeprofEXPO

import { useState, useCallback } from "react";

/**
 * Hook customizado para gerenciar um toggle
 *
 * Documentação adicional:
 * @folder src/hooks
 * @program projetoreactnativeprofEXPO
 *
 * @param initialValue - valor inicial (padrão: false)
 * @returns [value, toggle] - valor atual e função para alternar
 */
export function useToggle(initialValue: boolean = false) {
  // O estado atual do toggle. Inicialmente definido como o valor passado ou false por padrão.
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev); // Alterna o valor entre true e false. Usamos a função de atualização para garantir que estamos sempre usando o valor mais recente.
  }, []);

  return [value, toggle] as const;
}

/**
 * Hook customizado para gerenciar um contador
 * @param initialValue - valor inicial (padrão: 0)
 * @returns { count, increment, decrement, reset }
 */
// O hook useCounter é um exemplo de hook customizado que gerencia um contador. Ele fornece o valor atual do contador e funções para incrementá-lo, decrementá-lo e resetá-lo.
// O contador é inicializado com o valor passado como argumento ou 0 por padrão. As funções de incremento, decremento e reset são memoizadas usando useCallback para evitar recriações desnecessárias em cada renderização.
// O reset depende do initialValue para garantir que ele sempre resete para o valor inicial correto, mesmo que este valor mude ao longo do tempo.
// O hook retorna um objeto contendo o valor atual do contador e as funções para manipulá-lo, permitindo que os componentes que o utilizam possam facilmente gerenciar o estado do contador.

/**
 * Hook customizado para gerenciar um contador
 *
 * Documentação adicional:
 * @folder src/hooks
 * @program projetoreactnativeprofEXPO
 *
 * @param initialValue - valor inicial (padrão: 0)
 * @returns { count, increment, decrement, reset }
 */
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  // Função para incrementar o contador. Usa useCallback para evitar recriação em cada renderização.
  const increment = useCallback(() => {
    setCount((prev) => prev + 2);
  }, []);

  // Função para decrementar o contador. Usa useCallback para evitar recriação em cada renderização.
  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  // Função para resetar o contador para o valor inicial. Usa useCallback e depende do initialValue para garantir que o reset funcione corretamente mesmo se o valor inicial mudar.
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
