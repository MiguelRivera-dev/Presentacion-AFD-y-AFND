// Definiciones formales y estructuras de datos para Autómatas Finitos
// Basado en teoría de la computación (Hopcroft, Ullman, Sipser)

// -------------------------------------------------------------
// TEMA 3.1: Autómata Finito Determinista (AFD) Introductorio
// Lenguaje: Cadenas binarias sobre {0, 1} que terminan en '01'
// L = { w in {0,1}* | w termina en 01 }
// -------------------------------------------------------------
export const DFA_TOPIC_31 = {
  name: "AFD Reconocedor de sufijo '01'",
  states: ['q0', 'q1', 'q2'],
  alphabet: ['0', '1'],
  initialState: 'q0',
  finalStates: ['q2'],
  description: "Reconoce cualquier cadena sobre {0, 1} que termine exactamente con '01'.",
  formalDefinition: {
    Q: "{ q₀, q₁, q₂ }",
    Sigma: "{ 0, 1 }",
    q0: "q₀",
    F: "{ q₂ }",
    delta: "Q × Σ → Q"
  },
  // Tabla de transiciones
  transitions: {
    q0: { '0': 'q1', '1': 'q0' },
    q1: { '0': 'q1', '1': 'q2' },
    q2: { '0': 'q1', '1': 'q0' }
  },
  // Nodos para visualización en SVG
  nodePositions: {
    q0: { x: 120, y: 140, label: "q₀", isInitial: true, isFinal: false, desc: "Estado inicial: No se ha detectado '0'" },
    q1: { x: 280, y: 140, label: "q₁", isInitial: false, isFinal: false, desc: "Último símbolo leído fue '0'" },
    q2: { x: 440, y: 140, label: "q₂", isInitial: false, isFinal: true, desc: "Sufijo '01' detectado (Aceptación)" }
  },
  edges: [
    { from: 'q0', to: 'q0', symbol: '1', type: 'self-loop-top' },
    { from: 'q0', to: 'q1', symbol: '0', type: 'straight' },
    { from: 'q1', to: 'q1', symbol: '0', type: 'self-loop-top' },
    { from: 'q1', to: 'q2', symbol: '1', type: 'straight' },
    { from: 'q2', to: 'q1', symbol: '0', type: 'curve-top' },
    { from: 'q2', to: 'q0', symbol: '1', type: 'curve-bottom-long' }
  ],
  sampleStrings: [
    { str: "101", expected: true, label: "101 (Válida)" },
    { str: "001", expected: true, label: "001 (Válida)" },
    { str: "11001", expected: true, label: "11001 (Válida)" },
    { str: "100", expected: false, label: "100 (Rechazada)" },
    { str: "010", expected: false, label: "010 (Rechazada)" },
    { str: "111", expected: false, label: "111 (Rechazada)" }
  ]
};

// -------------------------------------------------------------
// TEMA 3.2: Conversión de AFND a AFD (Construcción de Subconjuntos)
// Lenguaje: Cadenas sobre {a, b} que terminan en 'ab'
// AFND M = ({q0, q1, q2}, {a, b}, δ, q0, {q2})
// -------------------------------------------------------------
export const NFA_CONVERSION_DATA = {
  nfa: {
    name: "AFND original (termina en 'ab')",
    states: ['q0', 'q1', 'q2'],
    alphabet: ['a', 'b'],
    initialState: 'q0',
    finalStates: ['q2'],
    transitions: {
      q0: { 'a': ['q0', 'q1'], 'b': ['q0'] },
      q1: { 'a': [], 'b': ['q2'] },
      q2: { 'a': [], 'b': [] }
    },
    nodePositions: {
      q0: { x: 90, y: 85, label: "q₀", isInitial: true, isFinal: false },
      q1: { x: 250, y: 85, label: "q₁", isInitial: false, isFinal: false },
      q2: { x: 410, y: 85, label: "q₂", isInitial: false, isFinal: true }
    },
    edges: [
      { from: 'q0', to: 'q0', symbol: 'a, b', type: 'self-loop-top' },
      { from: 'q0', to: 'q1', symbol: 'a', type: 'straight' },
      { from: 'q1', to: 'q2', symbol: 'b', type: 'straight' }
    ]
  },
  // Pasos de la construcción de subconjuntos
  steps: [
    {
      step: 1,
      title: "Paso 1: Estado Inicial del AFD",
      description: "El estado inicial del AFD corresponde a la cerradura-ε del estado inicial del AFND: {q₀}. Lo llamamos estado A.",
      currentSubset: "{q₀} [A]",
      discoveredStates: ["A = {q₀}"],
      highlightSubset: "A",
      mathDetail: "q₀,D = cerradura-ε({q₀}) = {q₀}  =>  Estado A",
      tableRows: [
        { state: "A = {q₀}", initial: true, isFinal: false, transA: "—", transB: "—" }
      ]
    },
    {
      step: 2,
      title: "Paso 2: Transiciones desde el estado A con 'a' y 'b'",
      description: "Calculamos δD(A, a) y δD(A, b):\n• δ(q₀, a) = {q₀, q₁}. Nuevo estado descubierto B = {q₀, q₁}.\n• δ(q₀, b) = {q₀} = A (bucle a sí mismo).",
      currentSubset: "{q₀} [A]",
      discoveredStates: ["A = {q₀}", "B = {q₀, q₁}"],
      highlightSubset: "B",
      mathDetail: "δD(A, a) = δ(q₀, a) = {q₀, q₁} = B (Nuevo!)\nδD(A, b) = δ(q₀, b) = {q₀} = A",
      tableRows: [
        { state: "A = {q₀}", initial: true, isFinal: false, transA: "B = {q₀, q₁}", transB: "A = {q₀}" },
        { state: "B = {q₀, q₁}", initial: false, isFinal: false, transA: "—", transB: "—" }
      ]
    },
    {
      step: 3,
      title: "Paso 3: Transiciones desde el nuevo estado B",
      description: "Para B = {q₀, q₁}:\n• Con 'a': δ(q₀,a) ∪ δ(q₁,a) = {q₀, q₁} ∪ ∅ = {q₀, q₁} = B.\n• Con 'b': δ(q₀,b) ∪ δ(q₁,b) = {q₀} ∪ {q₂} = {q₀, q₂}. Nuevo estado C = {q₀, q₂}.",
      currentSubset: "{q₀, q₁} [B]",
      discoveredStates: ["A = {q₀}", "B = {q₀, q₁}", "C = {q₀, q₂}"],
      highlightSubset: "C",
      mathDetail: "δD(B, a) = {q₀, q₁} = B\nδD(B, b) = {q₀} ∪ {q₂} = {q₀, q₂} = C (Nuevo!)",
      tableRows: [
        { state: "A = {q₀}", initial: true, isFinal: false, transA: "B = {q₀, q₁}", transB: "A = {q₀}" },
        { state: "B = {q₀, q₁}", initial: false, isFinal: false, transA: "B = {q₀, q₁}", transB: "C = {q₀, q₂}" },
        { state: "C = {q₀, q₂}", initial: false, isFinal: true, transA: "—", transB: "—" }
      ]
    },
    {
      step: 4,
      title: "Paso 4: Transiciones desde C y Cierre del Algoritmo",
      description: "Para C = {q₀, q₂}:\n• Con 'a': δ(q₀,a) ∪ δ(q₂,a) = {q₀, q₁} ∪ ∅ = B.\n• Con 'b': δ(q₀,b) ∪ δ(q₂,b) = {q₀} ∪ ∅ = A.\nComo C contiene a q₂ (estado final del AFND), C es un estado de aceptación.",
      currentSubset: "{q₀, q₂} [C*]",
      discoveredStates: ["A = {q₀}", "B = {q₀, q₁}", "C = {q₀, q₂}*"],
      highlightSubset: "Finalizado",
      mathDetail: "δD(C, a) = {q₀, q₁} = B\nδD(C, b) = {q₀} = A\nF_D = { C } porque q₂ ∈ C.",
      tableRows: [
        { state: "A = {q₀}", initial: true, isFinal: false, transA: "B", transB: "A" },
        { state: "B = {q₀, q₁}", initial: false, isFinal: false, transA: "B", transB: "C" },
        { state: "C = {q₀, q₂} *", initial: false, isFinal: true, transA: "B", transB: "A" }
      ]
    }
  ],
  // AFD resultante equivalente
  dfaResult: {
    name: "AFD Equivalente Resultante",
    states: ['A', 'B', 'C'],
    alphabet: ['a', 'b'],
    initialState: 'A',
    finalStates: ['C'],
    nodePositions: {
      A: { x: 90, y: 85, label: "A {q₀}", isInitial: true, isFinal: false },
      B: { x: 250, y: 85, label: "B {q₀,q₁}", isInitial: false, isFinal: false },
      C: { x: 410, y: 85, label: "C {q₀,q₂}", isInitial: false, isFinal: true }
    },
    edges: [
      { from: 'A', to: 'A', symbol: 'b', type: 'self-loop-top' },
      { from: 'A', to: 'B', symbol: 'a', type: 'straight' },
      { from: 'B', to: 'B', symbol: 'a', type: 'self-loop-top' },
      { from: 'B', to: 'C', symbol: 'b', type: 'straight' },
      { from: 'C', to: 'B', symbol: 'a', type: 'curve-top' },
      { from: 'C', to: 'A', symbol: 'b', type: 'curve-bottom-long' }
    ]
  }
};

// -------------------------------------------------------------
// TEMA 3.3: Algoritmo de Thompson (Regex a AFND)
// Regex: r = (a | b)* a
// -------------------------------------------------------------
export const THOMPSON_CONSTRUCTION_DATA = {
  regex: "(a | b)* a",
  language: "Cadenas que contienen 'a' y 'b' arbitrarios y culminan obligatoriamente con 'a'",
  stages: [
    {
      id: 1,
      title: "1. Fragmentos Primitivos (Símbolos 'a' y 'b')",
      description: "Para cada símbolo básico se crea un autómata con un estado inicial, una transición etiquetada con el símbolo y un estado final.",
      diagramType: "primitives",
      elementsAdded: "Transición directa q₀ → q₁ con 'a' y q₂ → q₃ con 'b'.",
      rule: "N(a): Estado inicial con arco 'a' hacia estado final."
    },
    {
      id: 2,
      title: "2. Operador de Unión (a | b)",
      description: "Se introduce un nuevo estado inicial que bifurca mediante transiciones-ε a los fragmentos de 'a' y 'b', y ambos convergen con transiciones-ε hacia un nuevo estado final.",
      diagramType: "union",
      elementsAdded: "4 transiciones-ε: 2 desde el nuevo inicio y 2 hacia el nuevo fin.",
      rule: "N(s | t): Nuevo q_start con ε hacia N(s) y N(t); y N(s), N(t) con ε hacia q_end."
    },
    {
      id: 3,
      title: "3. Cerradura de Kleene (a | b)*",
      description: "Se añade un nuevo inicio y fin. Se agrega una transición-ε para permitir cero repeticiones (bypass directo) y una transición-ε de retorno para repetir el ciclo indefinidamente.",
      diagramType: "kleene",
      elementsAdded: "Bucle de retroalimentación ε y camino ε de salto directo (cero repeticiones).",
      rule: "N(r*): Nuevo inicio y fin con bypass ε directo y retorno ε desde el fin anterior al inicio anterior."
    },
    {
      id: 4,
      title: "4. Concatenación Final con 'a': (a | b)* a",
      description: "Se conecta el estado final del subautómata (a | b)* con el estado inicial del fragmento 'a' (mediante fusión directa o transición-ε).",
      diagramType: "concatenation",
      elementsAdded: "Unión del bloque Kleene con el estado reconocedor de la 'a' terminal.",
      rule: "N(r · s): El estado final de N(r) se conecta con el inicial de N(s)."
    }
  ],
  fullNfa: {
    states: ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
    initialState: 's0',
    finalStates: ['s9'],
    nodePositions: {
      s0: { x: 45, y: 140, label: "0", isInitial: true },
      s1: { x: 110, y: 140, label: "1" },
      s2: { x: 180, y: 85, label: "2" },
      s3: { x: 260, y: 85, label: "3" },
      s4: { x: 180, y: 195, label: "4" },
      s5: { x: 260, y: 195, label: "5" },
      s6: { x: 335, y: 140, label: "6" },
      s7: { x: 395, y: 140, label: "7" },
      s8: { x: 455, y: 140, label: "8" },
      s9: { x: 515, y: 140, label: "9", isFinal: true }
    },
    edges: [
      { from: 's0', to: 's1', symbol: 'ε', type: 'straight' },
      { from: 's0', to: 's7', symbol: 'ε', type: 'curve-top-high' },
      { from: 's1', to: 's2', symbol: 'ε', type: 'straight' },
      { from: 's1', to: 's4', symbol: 'ε', type: 'straight' },
      { from: 's2', to: 's3', symbol: 'a', type: 'straight' },
      { from: 's4', to: 's5', symbol: 'b', type: 'straight' },
      { from: 's3', to: 's6', symbol: 'ε', type: 'straight' },
      { from: 's5', to: 's6', symbol: 'ε', type: 'straight' },
      { from: 's6', to: 's7', symbol: 'ε', type: 'straight' },
      { from: 's6', to: 's1', symbol: 'ε', type: 'curve-bottom-long' },
      { from: 's7', to: 's8', symbol: 'ε', type: 'straight' },
      { from: 's8', to: 's9', symbol: 'a', type: 'straight' }
    ]
  }
};

// -------------------------------------------------------------
// TEMA 3.4: Minimización de Estados de un AFD (Refinamiento de Particiones)
// Autómata original con estados redundantes e inalcanzables
// -------------------------------------------------------------
export const MINIMIZATION_DATA = {
  originalDFA: {
    name: "AFD Original (6 estados)",
    states: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5'],
    alphabet: ['0', '1'],
    initialState: 'q0',
    finalStates: ['q2', 'q4'],
    unreachableStates: ['q5'],
    languageDesc: "Cadenas binarias con número par de símbolos (|w| ≥ 2, no vacías)",
    transitions: {
      q0: { '0': 'q1', '1': 'q3' },
      q1: { '0': 'q2', '1': 'q4' },
      q2: { '0': 'q1', '1': 'q3' },
      q3: { '0': 'q2', '1': 'q4' },
      q4: { '0': 'q1', '1': 'q3' },
      q5: { '0': 'q5', '1': 'q2' } // inalcanzable
    },
    nodePositions: {
      q0: { x: 60, y: 110, label: "q₀", isInitial: true, isFinal: false },
      q1: { x: 175, y: 60, label: "q₁", isInitial: false, isFinal: false },
      q2: { x: 295, y: 60, label: "q₂", isInitial: false, isFinal: true },
      q3: { x: 175, y: 160, label: "q₃", isInitial: false, isFinal: false },
      q4: { x: 295, y: 160, label: "q₄", isInitial: false, isFinal: true },
      q5: { x: 400, y: 110, label: "q₅", isInitial: false, isFinal: false, isDead: true }
    }
  },
  steps: [
    {
      step: 1,
      title: "Paso 1: Detección y Eliminación de Estados Inalcanzables",
      description: "Recorremos el grafo desde el estado inicial q₀ (BFS/DFS). El estado q₅ no tiene ningún camino que lo alcance. Se elimina de inmediato, quedando 5 estados.",
      removed: ["q₅"],
      activeStates: ["q₀", "q₁", "q₂", "q₃", "q₄"],
      rule: "Un estado p es inalcanzable si no existe w ∈ Σ* tal que δ*(q₀, w) = p."
    },
    {
      step: 2,
      title: "Paso 2: Partición Inicial P₀ (Finales vs No Finales)",
      description: "Separamos los estados según su condición de aceptación:\n• Grupo I (No finales / longitud 0 o impar): {q₀, q₁, q₃}\n• Grupo II (Finales / longitud par de aceptación): {q₂, q₄}\nObjetivo: Reconocer cadenas con longitud par no nula (|w| ∈ {2, 4, 6, ...}).",
      partitions: [
        { name: "Grupo I (No finales)", states: ["q₀", "q₁", "q₃"] },
        { name: "Grupo II (Finales)", states: ["q₂", "q₄"] }
      ],
      rule: "P₀ = { (Q \\ F), F } = { {q₀, q₁, q₃}, {q₂, q₄} }"
    },
    {
      step: 3,
      title: "Paso 3: Refinamiento de Particiones de Moore (P₁)",
      description: "Analizamos transiciones para {q₀, q₁, q₃} con '0' y '1':\n• δ(q₀, 0) = q₁ (Grupo I), δ(q₀, 1) = q₃ (Grupo I)\n• δ(q₁, 0) = q₂ (Grupo II), δ(q₁, 1) = q₄ (Grupo II)\n• δ(q₃, 0) = q₂ (Grupo II), δ(q₃, 1) = q₄ (Grupo II)\nConclusión intuitiva: q₁ y q₃ representan 'longitud impar' (1 símbolo leído); van exactamente al mismo grupo tanto con '0' como con '1'. Por tanto son indistinguibles (q₁ ≡ q₃). Análogamente, q₂ ≡ q₄ representan 'longitud par'.",
      partitions: [
        { name: "G1", states: ["q₀"] },
        { name: "G2 (Equivalentes q₁ ≡ q₃: longitud impar)", states: ["q₁", "q₃"] },
        { name: "G3 (Equivalentes q₂ ≡ q₄: longitud par)", states: ["q₂", "q₄"] }
      ],
      rule: "P₁ = { {q₀}, {q₁, q₃}, {q₂, q₄} }. Como P₂ = P₁, el algoritmo converge."
    },
    {
      step: 4,
      title: "Paso 4: Fusión en Estados Canónicos (AFD Mínimo)",
      description: "El diseño original bifurcó innecesariamente ramas para '0' y '1'. Al colapsarlas obtenemos la estructura canónica pura de paridad de longitud:\n• Estado A = [q₀]: Longitud 0 (Cadena vacía)\n• Estado B = [q₁, q₃]: Longitud impar (1, 3, 5, ...)\n• Estado C = [q₂, q₄]*: Longitud par no vacía (2, 4, 6, ... ¡Aceptación!)\nDe 6 estados iniciales pasamos a 3 estados mínimos (50% de optimización).",
      reductionStat: "6 estados iniciales → 3 estados mínimos (50% de optimización)"
    }
  ],
  minimizedDFA: {
    name: "AFD Mínimo Resultante (3 estados)",
    states: ['A', 'B', 'C'],
    alphabet: ['0', '1'],
    initialState: 'A',
    finalStates: ['C'],
    transitions: {
      A: { '0': 'B', '1': 'B' },
      B: { '0': 'C', '1': 'C' },
      C: { '0': 'B', '1': 'B' }
    },
    nodePositions: {
      A: { x: 80, y: 75, label: "A [q₀]", isInitial: true, isFinal: false },
      B: { x: 230, y: 75, label: "B [q₁,q₃]", isInitial: false, isFinal: false },
      C: { x: 380, y: 75, label: "C [q₂,q₄]", isInitial: false, isFinal: true }
    },
    edges: [
      { from: 'A', to: 'B', symbol: '0, 1', type: 'straight' },
      { from: 'B', to: 'C', symbol: '0, 1', type: 'straight' },
      { from: 'C', to: 'B', symbol: '0, 1', type: 'curve-bottom' }
    ]
  }
};

// -------------------------------------------------------------
// TEMA 3.5: Caso de Estudio Real - Analizador Léxico Numérico
// Reconoce constantes enteras, decimales y científicas:
// Expresión regular: [+-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?
// -------------------------------------------------------------
export const LEXER_NUMERIC_DFA = {
  name: "Analizador Léxico de Constantes Numéricas (Compilador)",
  alphabetDescription: "Dígitos [0-9], Signos [+,-], Punto [.], Exponente [e,E]",
  states: ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'dead'],
  initialState: 'q0',
  finalStates: ['q2', 'q4', 'q7'], // q2: Entero, q4: Flotante, q7: Científico
  tokenTypes: {
    q2: { type: "TOKEN_INTEGER", label: "Número Entero Válido", color: "#38bdf8" },
    q4: { type: "TOKEN_FLOAT", label: "Número Flotante Decimal Válido", color: "#34d399" },
    q7: { type: "TOKEN_SCIENTIFIC", label: "Número en Notación Científica Válido", color: "#a78bfa" }
  },
  // Descripción semántica de cada estado
  stateDescriptions: {
    q0: "Inicio / Esperando inicio del número",
    q1: "Signo inicial (+ / -) consumido",
    q2: "Dígitos de parte entera leídos (Aceptación: ENTERO)",
    q3: "Punto decimal consumido (esperando parte fraccionaria)",
    q4: "Dígitos de parte decimal leídos (Aceptación: FLOTANTE)",
    q5: "Indicador de exponente (e / E) leído",
    q6: "Signo del exponente (+ / -) leído",
    q7: "Dígitos del exponente leídos (Aceptación: CIENTÍFICO)",
    dead: "Estado trampa / Error de sintaxis léxica"
  },
  // Nodos de visualización con coordenadas optimizadas
  nodePositions: {
    q0: { x: 60, y: 150, label: "q₀", isInitial: true, isFinal: false, title: "Inicio" },
    q1: { x: 170, y: 70, label: "q₁", isInitial: false, isFinal: false, title: "Signo" },
    q2: { x: 170, y: 220, label: "q₂", isInitial: false, isFinal: true, title: "Entero", token: "ENTERO" },
    q3: { x: 290, y: 220, label: "q₃", isInitial: false, isFinal: false, title: "Punto" },
    q4: { x: 410, y: 220, label: "q₄", isInitial: false, isFinal: true, title: "Flotante", token: "FLOTANTE" },
    q5: { x: 290, y: 70, label: "q₅", isInitial: false, isFinal: false, title: "Exp 'e/E'" },
    q6: { x: 410, y: 70, label: "q₆", isInitial: false, isFinal: false, title: "Signo Exp" },
    q7: { x: 530, y: 140, label: "q₇", isInitial: false, isFinal: true, title: "Científico", token: "CIENTÍFICO" },
    dead: { x: 60, y: 280, label: "ERR", isInitial: false, isFinal: false, isError: true, title: "Error" }
  },
  // Clasificador de caracteres para la función delta
  classifyChar: (ch) => {
    if (ch >= '0' && ch <= '9') return 'digit';
    if (ch === '+' || ch === '-') return 'sign';
    if (ch === '.') return 'dot';
    if (ch === 'e' || ch === 'E') return 'exp';
    return 'other';
  },
  // Transiciones formales
  delta: (currentState, category) => {
    switch (currentState) {
      case 'q0':
        if (category === 'sign') return 'q1';
        if (category === 'digit') return 'q2';
        return 'dead';

      case 'q1':
        if (category === 'digit') return 'q2';
        return 'dead';

      case 'q2':
        if (category === 'digit') return 'q2';
        if (category === 'dot') return 'q3';
        if (category === 'exp') return 'q5';
        return 'dead';

      case 'q3':
        if (category === 'digit') return 'q4';
        return 'dead';

      case 'q4':
        if (category === 'digit') return 'q4';
        if (category === 'exp') return 'q5';
        return 'dead';

      case 'q5':
        if (category === 'sign') return 'q6';
        if (category === 'digit') return 'q7';
        return 'dead';

      case 'q6':
        if (category === 'digit') return 'q7';
        return 'dead';

      case 'q7':
        if (category === 'digit') return 'q7';
        return 'dead';

      default:
        return 'dead';
    }
  },
  // Cadenas de prueba preestablecidas exigidas por la rúbrica
  presetTests: [
    { str: "42", type: "valid", desc: "Entero positivo estándar" },
    { str: "-3.14159", type: "valid", desc: "Flotante negativo con signo" },
    { str: "+1.05e-4", type: "valid", desc: "Notación científica completa (+, ., e-)" },
    { str: "128E6", type: "valid", desc: "Entero con exponente 'E'" },
    { str: "3.", type: "invalid", desc: "Punto sin parte decimal (Rechazado en q₃)" },
    { str: "-.5", type: "invalid", desc: "Falta dígito antes del punto" },
    { str: "12e+", type: "invalid", desc: "Exponente incompleto (Rechazado en q₆)" },
    { str: "1.2.3", type: "invalid", desc: "Doble punto decimal (Carácter inesperado)" }
  ]
};
