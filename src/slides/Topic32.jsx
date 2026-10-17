import React, { useState } from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import StateDiagram from '../components/StateDiagram';
import StepController from '../components/StepController';
import { NFA_CONVERSION_DATA } from '../automata/definitions';

export default function Topic32() {
  const [stepIdx, setStepIdx] = useState(0);

  const steps = NFA_CONVERSION_DATA.steps;
  const currentStep = steps[stepIdx];
  const nfaData = NFA_CONVERSION_DATA.nfa;
  const dfaData = NFA_CONVERSION_DATA.dfaResult;

  const testStrings = [
    { str: "ab", accept: true, reason: "Culmina con 'ab'" },
    { str: "aab", accept: true, reason: "Prefijo 'a' + 'ab' final" },
    { str: "bab", accept: true, reason: "Prefijo 'b' + 'ab' final" },
    { str: "aba", accept: false, reason: "Termina en 'a', no en 'ab'" },
    { str: "b", accept: false, reason: "Cadena incompleta" },
    { str: "ba", accept: false, reason: "Falta símbolo 'b'" },
  ];

  return (
    <>
      {/* 1. Diapositiva divisoria 3.2 */}
      <Slide id="topic-32-divider" padding={0} backgroundColor="var(--bg)">
        <div className="divider">
          <div className="divider-num">3.2</div>
          <h2 className="divider-title">Conversión de AFND a AFD</h2>
          <p className="divider-line">
            El algoritmo de Construcción de Subconjuntos de Rabin-Scott: cálculo de cerradura-ε, generación de superestados deterministas y análisis de la cota superior 2ⁿ.
          </p>
        </div>
      </Slide>

      {/* 2. Fundamentos teóricos y Cota 2ⁿ */}
      <Slide id="topic-32-theory" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.2 &bull; Teoría de Conversión</div>
            <h2 className="slide-title">Construcción de Subconjuntos y Cota 2ⁿ</h2>
          </div>

          <div className="cols">
            <div className="stack">
              <div className="card">
                <div className="card-title">¿Por qué convertir a AFD?</div>
                <p style={{ margin: 0, fontSize: '0.95em' }}>
                  Un procesador o circuito secuencial no puede duplicarse físicamente para seguir ramas no deterministas simultáneas. El AFD permite ejecución en tiempo <MathView math="O(|w|)" /> en memoria sin retroceso (backtracking).
                </p>
              </div>

              <div className="card">
                <div className="card-title">Cerradura-ε (Epsilon-Closure)</div>
                <p style={{ margin: 0, fontSize: '0.9em' }}>
                  Dado un conjunto de estados <MathView math="S" />, <MathView math="\text{cerradura-}\epsilon(S)" /> es el conjunto de todos los estados alcanzables desde cualquier <MathView math="s \in S" /> utilizando exclusivamente transiciones <MathView math="\epsilon" /> (incluyendo al propio <MathView math="S" />).
                </p>
              </div>
            </div>

            <div className="card stack">
              <div className="card-title">Cota de Explosión Combinatoria: 2ⁿ</div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Para un AFND con <MathView math="n" /> estados, el nuevo espacio de estados pertenece al conjunto potencia <MathView math="\mathcal{P}(Q)" />, cuyo límite máximo teórico es <MathView math="2^n" />.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center' }}>
                <div style={{ background: 'var(--surface-2)', padding: '8px', borderRadius: '8px' }}>
                  <div className="muted small">n = 3</div>
                  <div style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--structure)' }}>2³ = 8</div>
                </div>
                <div style={{ background: 'var(--surface-2)', padding: '8px', borderRadius: '8px' }}>
                  <div className="muted small">n = 10</div>
                  <div style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--structure)' }}>2¹⁰ = 1,024</div>
                </div>
                <div style={{ background: 'var(--surface-2)', padding: '8px', borderRadius: '8px' }}>
                  <div className="muted small">n = 20</div>
                  <div style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--reject)' }}>2²⁰ ≈ 1.04M</div>
                </div>
              </div>

              <div style={{ fontSize: '0.88em', color: 'var(--text-muted)' }}>
                💡 En la práctica industrial (evaluación bajo demanda), solo se generan los subconjuntos alcanzables desde el estado inicial, manteniéndose casi siempre en el orden de <MathView math="n" /> a <MathView math="2n" />.
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. Stepper Interactivo de Conversión Paso a Paso */}
      <Slide id="topic-32-stepper" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.2 &bull; Procedimiento Paso a Paso</div>
            <h2 className="slide-title">Conversión Interactiva: Cadenas que terminan en 'ab'</h2>
          </div>

          <StepController
            totalSteps={steps.length}
            currentStep={stepIdx}
            onStepChange={(idx) => setStepIdx(idx)}
            stepTitle={currentStep.title}
          />

          <div className="cols" style={{ marginTop: '8px' }}>
            {/* Diagramas comparativos */}
            <div className="stack">
              <div className="card" style={{ padding: '8px 12px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--structure)', marginBottom: '4px' }}>
                  AFND Original: N = ({'{q₀, q₁, q₂}'}, {'{a, b}'}, δ_N, q₀, {'{q₂}'})
                </div>
                <StateDiagram
                  nodes={nfaData.nodePositions}
                  edges={nfaData.edges}
                  height="125px"
                  viewBox="30 15 440 145"
                  title=""
                />
              </div>

              <div className="card" style={{ padding: '8px 12px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accept)', marginBottom: '4px' }}>
                  AFD Resultante: D = ({'{A, B, C}'}, {'{a, b}'}, δ_D, A, {'{C}'})
                </div>
                <StateDiagram
                  nodes={dfaData.nodePositions}
                  edges={dfaData.edges}
                  activeState={stepIdx === 0 ? 'A' : (stepIdx === 1 ? 'B' : (stepIdx >= 2 ? 'C' : null))}
                  height="125px"
                  viewBox="30 5 440 180"
                  title=""
                />
              </div>
            </div>

            {/* Detalle matemático y tabla en evolución */}
            <div className="card stack">
              <p style={{ margin: 0, fontSize: '20px', whiteSpace: 'pre-line' }}>
                {currentStep.description}
              </p>

              <div style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--active)', whiteSpace: 'pre-line' }}>
                {currentStep.mathDetail}
              </div>

              {/* Tabla de subconjuntos */}
              <div className="transition-table-container">
                <table className="academic-table">
                  <thead>
                    <tr>
                      <th>Estado AFD</th>
                      <th>Con entrada 'a'</th>
                      <th>Con entrada 'b'</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStep.tableRows.map((r, i) => (
                      <tr key={i} className={r.state.includes(currentStep.highlightSubset) ? 'highlighted' : ''}>
                        <td className="state-name">
                          {r.initial && <span className="initial-arrow">&rarr;</span>}
                          {r.isFinal && <span className="final-star">*</span>}
                          {r.state}
                        </td>
                        <td>{r.transA}</td>
                        <td>{r.transB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 4. Pruebas de equivalencia de cadenas */}
      <Slide id="topic-32-tests" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.2 &bull; Verificación Formal</div>
            <h2 className="slide-title">Pruebas de Aceptación y Rechazo: L(N) = L(D)</h2>
          </div>

          <p className="lead">
            Demostración empírica de que tanto el AFND como el AFD resultante reconocen exactamente las mismas cadenas sobre el alfabeto <MathView math="\Sigma = \{a, b\}" />:
          </p>

          <div className="test-grid">
            {testStrings.map((t, idx) => (
              <div key={idx} className={`test-item ${t.accept ? 'is-accept' : 'is-reject'}`}>
                <span>"{t.str}"</span>
                <span className="verdict">
                  {t.accept ? '✓ Aceptada' : '✗ Rechazada'}
                </span>
              </div>
            ))}
          </div>

          <div className="card stack" style={{ marginTop: '16px' }}>
            <div className="card-title">Conclusión de Equivalencia</div>
            <p style={{ margin: 0, fontSize: '22px' }}>
              Cadenas que contienen un prefijo arbitrario seguido de <MathView math="\text{'ab'}" /> alcanzan el estado final <MathView math="C = \{q_0, q_2\}" />. Cadenas que finalizan con <MathView math="\text{'a'}" /> o <MathView math="\text{'b'}" /> sin la secuencia requerida terminan en <MathView math="A" /> o <MathView math="B" />, siendo rechazadas por ambos autómatas.
            </p>
          </div>
        </div>
      </Slide>
    </>
  );
}
