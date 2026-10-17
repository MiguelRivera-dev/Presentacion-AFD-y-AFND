import React, { useState } from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import StateDiagram from '../components/StateDiagram';
import StepController from '../components/StepController';
import { MINIMIZATION_DATA } from '../automata/definitions';

export default function Topic34() {
  const [stepIdx, setStepIdx] = useState(0);

  const steps = MINIMIZATION_DATA.steps;
  const currentStep = steps[stepIdx];
  const origDFA = MINIMIZATION_DATA.originalDFA;
  const minDFA = MINIMIZATION_DATA.minimizedDFA;

  return (
    <>
      {/* 1. Diapositiva divisoria 3.4 */}
      <Slide id="topic-34-divider" padding={0} backgroundColor="var(--bg)">
        <div className="divider">
          <div className="divider-num">3.4</div>
          <h2 className="divider-title">Minimización de Estados de un AFD</h2>
          <p className="divider-line">
            Detección de estados inalcanzables, refinamiento de particiones de equivalencia de Moore y Teorema de Myhill-Nerode para obtener el autómata mínimo canónico.
          </p>
        </div>
      </Slide>

      {/* 2. Definición formal de estados y Myhill-Nerode */}
      <Slide id="topic-34-theory" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.4 &bull; Optimización Formal</div>
            <h2 className="slide-title">Estados Inalcanzables y Clases de Equivalencia</h2>
          </div>

          <div className="cols">
            <div className="card stack">
              <div className="card-title">Clasificación de Estados</div>
              <div>
                <strong style={{ color: 'var(--reject)' }}>1. Estados Inalcanzables:</strong>
                <p className="muted" style={{ margin: '2px 0 0', fontSize: '0.9em' }}>
                  No existe camino desde <MathView math="q_0" /> hasta <MathView math="p" />. Se purgan mediante búsqueda en anchura (BFS) o profundidad (DFS) en <MathView math="O(|V| + |E|)" />.
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--accept)' }}>2. Estados Equivalentes (<MathView math="p \equiv q" />):</strong>
                <p className="muted" style={{ margin: '2px 0 0', fontSize: '0.9em' }}>
                  Para toda cadena posible <MathView math="w \in \Sigma^*" />, ambos aceptan o ambos rechazan:
                </p>
                <div style={{ textAlign: 'center', marginTop: '4px' }}>
                  <MathView math="\forall w \in \Sigma^*: \left(\delta^*(p, w) \in F \iff \delta^*(q, w) \in F\right)" />
                </div>
              </div>
            </div>

            <div className="card stack">
              <div className="card-title">Teorema de Myhill-Nerode y Beneficios</div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Para cualquier lenguaje regular <MathView math="L" />, existe un <strong>único</strong> AFD mínimo con el menor número posible de estados (salvo isomorfismo).
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9em', marginTop: '6px' }}>
                <div style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px' }}>
                  <strong>Caché de software:</strong> Matrices de salto compactas que caben en la caché L1 de CPU.
                </div>
                <div style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px' }}>
                  <strong>Circuitos digitales (FPGA/ASIC):</strong> Requiere <MathView math="\lceil \log_2 |Q| \rceil" /> Flip-Flops, reduciendo silicio y consumo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. Stepper de Minimización Paso a Paso: de 6 a 3 estados */}
      <Slide id="topic-34-stepper" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.4 &bull; Refinamiento de Particiones</div>
            <h2 className="slide-title">Minimización Interactiva: De 6 Estados a 3 Óptimos</h2>
            <div style={{ fontSize: '15px', color: 'var(--structure)', marginTop: '2px' }}>
              <strong>Lenguaje modelo:</strong> Cadenas binarias con longitud par y no vacía (<MathView math="|w| \ge 2, |w| \equiv 0 \pmod 2" />).
            </div>
          </div>

          <StepController
            totalSteps={steps.length}
            currentStep={stepIdx}
            onStepChange={(idx) => setStepIdx(idx)}
            stepTitle={currentStep.title}
          />

          <div className="cols" style={{ marginTop: '8px' }}>
            {/* Grafos comparativos antes y después */}
            <div className="stack">
              <div className="card" style={{ padding: '8px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 700, color: 'var(--text-muted)' }}>
                  <span>AFD Original (6 estados &bull; contiene q₅ inalcanzable)</span>
                  {stepIdx === 0 && <span style={{ color: 'var(--reject)' }}>q₅ inalcanzable</span>}
                </div>
                <StateDiagram
                  nodes={origDFA.nodePositions}
                  edges={[
                    { from: 'q0', to: 'q1', symbol: '0', type: 'straight' },
                    { from: 'q0', to: 'q3', symbol: '1', type: 'straight' },
                    { from: 'q1', to: 'q2', symbol: '0', type: 'straight' },
                    { from: 'q1', to: 'q4', symbol: '1', type: 'straight', labelPos: 0.3 },
                    { from: 'q3', to: 'q2', symbol: '0', type: 'straight', labelPos: 0.3 },
                    { from: 'q3', to: 'q4', symbol: '1', type: 'straight' },
                    { from: 'q2', to: 'q1', symbol: '0,1', type: 'curve-top' },
                    { from: 'q4', to: 'q3', symbol: '0,1', type: 'curve-bottom' }
                  ]}
                  activeState={stepIdx === 0 ? 'q5' : null}
                  height="125px"
                  viewBox="10 5 440 215"
                  title=""
                />
              </div>

              <div className="card" style={{ padding: '8px 12px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accept)' }}>
                  AFD Mínimo Resultante (3 estados: A, B, C)
                </div>
                <StateDiagram
                  nodes={minDFA.nodePositions}
                  edges={minDFA.edges}
                  activeState={stepIdx === 3 ? 'C' : null}
                  height="120px"
                  viewBox="30 10 400 160"
                  title=""
                />
              </div>
            </div>

            {/* Detalle del paso y métrica de reducción */}
            <div className="card stack">
              <p style={{ margin: 0, fontSize: '20px', whiteSpace: 'pre-line' }}>
                {currentStep.description}
              </p>

              {currentStep.rule && (
                <div style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid var(--structure)', fontSize: '18px', color: 'var(--structure)' }}>
                  {currentStep.rule}
                </div>
              )}

              {/* Indicador de reducción 6 -> 3 */}
              <div style={{ background: 'var(--surface-2)', padding: '12px 18px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                  <div className="muted small">Antes</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--reject)' }}>6 estados</div>
                </div>
                <div style={{ fontSize: '28px', color: 'var(--text-muted)' }}>&rarr;</div>
                <div>
                  <div className="muted small">Después</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accept)' }}>3 estados</div>
                </div>
                <div>
                  <div className="muted small">Reducción</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--structure)' }}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
