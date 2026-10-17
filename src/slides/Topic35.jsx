import React from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import AutomatonSimulator from '../components/AutomatonSimulator';
import { LEXER_NUMERIC_DFA } from '../automata/definitions';
import { simulateNumericLexer } from '../automata/simulation';

export default function Topic35() {
  const edges = [
    { from: 'q0', to: 'q1', symbol: '+, -', type: 'straight' },
    { from: 'q0', to: 'q2', symbol: '[0-9]', type: 'straight' },
    { from: 'q1', to: 'q2', symbol: '[0-9]', type: 'straight' },
    { from: 'q2', to: 'q2', symbol: '[0-9]', type: 'self-loop-top' },
    { from: 'q2', to: 'q3', symbol: '.', type: 'straight' },
    { from: 'q2', to: 'q5', symbol: 'e,E', type: 'curve-top' },
    { from: 'q3', to: 'q4', symbol: '[0-9]', type: 'straight' },
    { from: 'q4', to: 'q4', symbol: '[0-9]', type: 'self-loop-top' },
    { from: 'q4', to: 'q5', symbol: 'e,E', type: 'curve-top' },
    { from: 'q5', to: 'q6', symbol: '+, -', type: 'straight' },
    { from: 'q5', to: 'q7', symbol: '[0-9]', type: 'curve-top' },
    { from: 'q6', to: 'q7', symbol: '[0-9]', type: 'straight' },
    { from: 'q7', to: 'q7', symbol: '[0-9]', type: 'self-loop-top' }
  ];

  return (
    <>
      {/* 1. Diapositiva divisoria 3.5 */}
      <Slide id="topic-35-divider" padding={0} backgroundColor="var(--bg)">
        <div className="divider">
          <div className="divider-num">3.5</div>
          <h2 className="divider-title">Aplicaciones y Caso de Estudio Práctico</h2>
          <p className="divider-line">
            Analizador léxico de constantes numéricas (enteros, decimales y científicos) para compiladores, con simulador interactivo y motor determinista puro en JavaScript.
          </p>
        </div>
      </Slide>

      {/* 2. Planteamiento formal del Tokenizador Léxico */}
      <Slide id="topic-35-theory" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.5 &bull; Arquitectura de Compiladores</div>
            <h2 className="slide-title">Tokenizador Léxico de Constantes Numéricas</h2>
          </div>

          <div className="cols">
            <div className="card stack">
              <div className="card-title">Especificación de la Expresión Regular</div>
              <div style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px', textAlign: 'center' }}>
                <span className="mono" style={{ fontSize: '1.05em', color: 'var(--structure)' }}>
                  [+-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?
                </span>
              </div>

              <ul className="list" style={{ fontSize: '0.9em' }}>
                <li><strong>Enteros (<MathView math="q_2" />):</strong> Signo opcional seguido de uno o más dígitos: <span className="mono">42</span>, <span className="mono">-105</span>.</li>
                <li><strong>Flotantes (<MathView math="q_4" />):</strong> Parte entera con punto y dígitos decimales: <span className="mono">3.14159</span>.</li>
                <li><strong>Científicos (<MathView math="q_7" />):</strong> Exponente 'e/E', signo opcional y dígitos: <span className="mono">1.05e-4</span>.</li>
              </ul>
            </div>

            <div className="card stack">
              <div className="card-title">Quíntupla Formal del Analizador Léxico</div>
              <div className="def-row">
                <MathView math="Q" />
                <span><MathView math="\{q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_7, \text{dead}\}" /></span>
              </div>
              <div className="def-row">
                <MathView math="\Sigma" />
                <span>Dígitos [0-9], signos [+, -], punto [.], exp [e, E]</span>
              </div>
              <div className="def-row">
                <MathView math="q_0" />
                <span>Estado inicial de escaneo</span>
              </div>
              <div className="def-row">
                <MathView math="F" />
                <span><MathView math="\{q_2 \text{ (Entero)}, q_4 \text{ (Flotante)}, q_7 \text{ (Científico)}\}" /></span>
              </div>
              <div className="def-row">
                <span className="mono" style={{ color: 'var(--reject)' }}>dead</span>
                <span>Estado de error/trampa cuando ocurre un símbolo o secuencia no léxica</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. Simulador interactivo en vivo con React */}
      <Slide id="topic-35-simulator" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.5 &bull; Simulación en Vivo</div>
            <h2 className="slide-title">Simulador Interactivo del Analizador Léxico</h2>
          </div>

          <AutomatonSimulator
            automaton={LEXER_NUMERIC_DFA}
            edges={edges}
            simulateFn={(str) => simulateNumericLexer(str)}
            initialInput="-3.14159"
            samplePresets={LEXER_NUMERIC_DFA.presetTests}
            height="210px"
            viewBox="0 0 600 320"
          />
        </div>
      </Slide>
    </>
  );
}
