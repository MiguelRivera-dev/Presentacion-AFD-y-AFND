import { LEXER_NUMERIC_DFA } from './definitions';

/**
 * Simula la ejecución de un AFD genérico sobre una cadena dada.
 * Retorna el historial detallado paso a paso para animación visual.
 */
export function simulateDFA(dfa, inputString) {
  const steps = [];
  let currentState = dfa.initialState;

  // Paso inicial (antes de leer cualquier símbolo)
  steps.push({
    stepIndex: 0,
    char: null,
    charIndex: -1,
    fromState: null,
    toState: currentState,
    isAccepted: dfa.finalStates.includes(currentState),
    message: `Estado inicial establecido en ${currentState}.`
  });

  if (inputString.length === 0) {
    const isAccepted = dfa.finalStates.includes(currentState);
    return {
      accepted: isAccepted,
      finalState: currentState,
      steps,
      reason: isAccepted
        ? `La cadena vacía (ε) es aceptada porque el estado inicial ${currentState} es un estado de aceptación.`
        : `La cadena vacía (ε) es rechazada porque ${currentState} no es un estado de aceptación.`
    };
  }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    const from = currentState;

    if (!dfa.alphabet.includes(char)) {
      steps.push({
        stepIndex: i + 1,
        char,
        charIndex: i,
        fromState: from,
        toState: 'dead',
        isAccepted: false,
        isError: true,
        message: `Símbolo '${char}' no pertenece al alfabeto Σ = {${dfa.alphabet.join(', ')}}. Rechazo inmediato.`
      });
      return {
        accepted: false,
        finalState: 'dead',
        steps,
        reason: `Rechazada: El carácter '${char}' en la posición ${i} no forma parte del alfabeto permitido.`
      };
    }

    const nextState = dfa.transitions[from] ? dfa.transitions[from][char] : null;

    if (!nextState) {
      steps.push({
        stepIndex: i + 1,
        char,
        charIndex: i,
        fromState: from,
        toState: 'dead',
        isAccepted: false,
        isError: true,
        message: `Sin transición definida para (${from}, '${char}'). Estado trampa.`
      });
      return {
        accepted: false,
        finalState: 'dead',
        steps,
        reason: `Rechazada: No existe transición definida desde el estado ${from} con el símbolo '${char}'.`
      };
    }

    currentState = nextState;
    const isFinal = dfa.finalStates.includes(currentState);

    steps.push({
      stepIndex: i + 1,
      char,
      charIndex: i,
      fromState: from,
      toState: currentState,
      isAccepted: isFinal,
      message: `Leyendo '${char}': Transición δ(${from}, '${char}') → ${currentState}.`
    });
  }

  const accepted = dfa.finalStates.includes(currentState);
  return {
    accepted,
    finalState: currentState,
    steps,
    reason: accepted
      ? `Aceptada: La cadena consumió todos los símbolos y finalizó en ${currentState} (Estado de aceptación F).`
      : `Rechazada: La cadena finalizó en ${currentState}, el cual NO es un estado de aceptación.`
  };
}

/**
 * Simulación especializada para el caso de estudio léxico (Tema 3.5).
 * Analiza constantes numéricas: enteros, flotantes y notación científica.
 */
export function simulateNumericLexer(inputString) {
  const steps = [];
  let currentState = LEXER_NUMERIC_DFA.initialState;
  const chars = inputString.split('');

  // Paso inicial
  steps.push({
    index: 0,
    char: null,
    charIndex: -1,
    category: null,
    fromState: null,
    toState: currentState,
    desc: LEXER_NUMERIC_DFA.stateDescriptions[currentState],
    status: 'pending'
  });

  if (inputString.trim() === '') {
    return {
      accepted: false,
      token: null,
      finalState: currentState,
      steps,
      reason: "Cadena vacía: Se requiere al menos un dígito para constituir una constante numérica."
    };
  }

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const category = LEXER_NUMERIC_DFA.classifyChar(ch);
    const from = currentState;

    if (category === 'other') {
      steps.push({
        index: i + 1,
        char: ch,
        charIndex: i,
        category: 'desconocido',
        fromState: from,
        toState: 'dead',
        desc: `Carácter no léxico '${ch}'. Transición a estado de error.`,
        status: 'error'
      });
      return {
        accepted: false,
        token: null,
        finalState: 'dead',
        steps,
        reason: `Error léxico en la posición ${i + 1}: El símbolo '${ch}' no está permitido en constantes numéricas.`
      };
    }

    const nextState = LEXER_NUMERIC_DFA.delta(from, category);

    if (nextState === 'dead') {
      steps.push({
        index: i + 1,
        char: ch,
        charIndex: i,
        category,
        fromState: from,
        toState: 'dead',
        desc: `Secuencia inválida: '${ch}' no permitido desde ${from} (${category}).`,
        status: 'error'
      });
      return {
        accepted: false,
        token: null,
        finalState: 'dead',
        steps,
        reason: `Error de sintaxis: No se esperaba el carácter '${ch}' (${category}) estando en el estado ${from}.`
      };
    }

    currentState = nextState;
    const isFinal = LEXER_NUMERIC_DFA.finalStates.includes(currentState);

    steps.push({
      index: i + 1,
      char: ch,
      charIndex: i,
      category,
      fromState: from,
      toState: currentState,
      desc: LEXER_NUMERIC_DFA.stateDescriptions[currentState],
      isFinal,
      status: isFinal ? 'accepting_step' : 'processing'
    });
  }

  const isAccepted = LEXER_NUMERIC_DFA.finalStates.includes(currentState);
  const tokenInfo = isAccepted ? LEXER_NUMERIC_DFA.tokenTypes[currentState] : null;

  let reason = "";
  if (isAccepted) {
    reason = `¡Cadena ACEPTADA! Finalizó en ${currentState}. Token reconocido: ${tokenInfo?.label} (${tokenInfo?.type}).`;
  } else {
    reason = `Cadena RECHAZADA: La entrada terminó en ${currentState} (${LEXER_NUMERIC_DFA.stateDescriptions[currentState]}), el cual no es un estado final.`;
  }

  return {
    accepted: isAccepted,
    token: tokenInfo,
    finalState: currentState,
    steps,
    reason
  };
}
