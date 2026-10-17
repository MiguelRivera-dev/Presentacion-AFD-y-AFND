import React from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import CodePanel from '../components/CodePanel';

export default function LiveDemo() {
  const codeSnippets = [
    {
      title: "Motor de Simulación",
      fileName: "src/automata/simulation.js",
      description: "Función determinista en JavaScript que clasifica la entrada y registra la ruta de estados sin retroceso.",
      code: `// Motor determinista lineal O(|w|)
export function simulateNumericLexer(inputString) {
  const steps = [];
  let currentState = LEXER_NUMERIC_DFA.initialState;
  const chars = inputString.split('');

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const category = LEXER_NUMERIC_DFA.classifyChar(ch);
    const from = currentState;

    // Transición matemática: δ(q, σ)
    const nextState = LEXER_NUMERIC_DFA.delta(from, category);

    if (nextState === 'dead') {
      return { accepted: false, finalState: 'dead', steps, reason: 'Error sintáctico' };
    }

    currentState = nextState;
    steps.push({ index: i + 1, char: ch, fromState: from, toState: currentState });
  }

  const isAccepted = LEXER_NUMERIC_DFA.finalStates.includes(currentState);
  return {
    accepted: isAccepted,
    finalState: currentState,
    token: isAccepted ? LEXER_NUMERIC_DFA.tokenTypes[currentState] : null
  };
}`
    },
    {
      title: "Comandos de Terminal",
      fileName: "Terminal / Bash",
      description: "Instrucciones exactas de ejecución en Visual Studio Code sin conexión externa.",
      code: `# 1. Clonar o abrir la carpeta en VS Code:
code "C:\\Users\\Adrian\\OneDrive\\Documentos\\ITESI\\Quinto Semestre\\Juanpu\\Presentacion"

# 2. Instalar dependencias locales (React, Spectacle, KaTeX, Fuentes):
npm install

# 3. Iniciar el servidor local de desarrollo con Vite:
npm run dev

# 4. Abrir en el navegador:
http://localhost:3000`
    }
  ];

  return (
    <Slide id="live-demo" padding={0} backgroundColor="var(--bg)">
      <div className="slide-inner">
        <div className="slide-head">
          <div className="slide-kicker">Sección 4 &bull; Demostración en Vivo en VS Code</div>
          <h2 className="slide-title">Demostración en Vivo y Código Fuente</h2>
        </div>

        <div className="cols">
          <div className="card stack">
            <div className="card-title">Guion de la Demostración en el Aula</div>
            <ol className="list" style={{ fontSize: '0.9em' }}>
              <li><strong>Iniciar servidor:</strong> Ejecutar <span className="mono">npm run dev</span> en la terminal integrada de VS Code.</li>
              <li><strong>Navegación:</strong> Mostrar el avance con teclado (<span className="mono">&rarr;</span>) y las pestañas sincronizadas.</li>
              <li><strong>Cadena válida:</strong> Probar <span className="mono">-3.14159</span> y verificar el token <span className="mono">TOKEN_FLOAT</span> en <MathView math="q_4" />.</li>
              <li><strong>Cadena inválida:</strong> Probar <span className="mono">3.</span> y explicar el rechazo formal en <MathView math="q_3 \notin F" />.</li>
              <li><strong>Arquitectura:</strong> Explicar el desacoplamiento entre el modelo matemático (<span className="mono">automata/</span>) y la vista (<span className="mono">components/</span>).</li>
            </ol>
            <div className="muted small" style={{ marginTop: '4px' }}>
              ✓ Funciona 100% offline con fuentes autoalojadas y sin APIs externas.
            </div>
          </div>

          <div style={{ height: '360px', display: 'flex', flexDirection: 'column' }}>
            <CodePanel snippets={codeSnippets} activeSnippetIndex={0} />
          </div>
        </div>
      </div>
    </Slide>
  );
}
