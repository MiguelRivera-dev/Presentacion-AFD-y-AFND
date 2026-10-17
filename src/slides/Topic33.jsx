import React, { useState } from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import StateDiagram from '../components/StateDiagram';
import StepController from '../components/StepController';
import { THOMPSON_CONSTRUCTION_DATA } from '../automata/definitions';

export default function Topic33() {
  const [stageIdx, setStageIdx] = useState(0);

  const stages = THOMPSON_CONSTRUCTION_DATA.stages;
  const currentStage = stages[stageIdx];
  const fullNfa = THOMPSON_CONSTRUCTION_DATA.fullNfa;

  const testCases = [
    { str: "a", valid: true, note: "0 ciclos de (a|b) + 'a' final" },
    { str: "ba", valid: true, note: "Ciclo por 'b' + 'a' final" },
    { str: "abba", valid: true, note: "Ciclos mixtos + 'a' final" },
    { str: "b", valid: false, note: "No culmina en 'a'" },
    { str: "ab", valid: false, note: "Último símbolo no es 'a'" },
    { str: "ε", valid: false, note: "Cadena vacía: exige 'a' terminal" },
  ];

  return (
    <>
      {/* 1. Diapositiva divisoria 3.3 */}
      <Slide id="topic-33-divider" padding={0} backgroundColor="var(--bg)">
        <div className="divider">
          <div className="divider-num">3.3</div>
          <h2 className="divider-title">Representación de Expresiones Regulares mediante AFND</h2>
          <p className="divider-line">
            El algoritmo inductivo de Ken Thompson: unión, concatenación y cerradura de Kleene con transiciones vacías (ε) en tiempo lineal O(m).
          </p>
        </div>
      </Slide>

      {/* 2. Operadores de Expresiones Regulares y Propiedades de Thompson */}
      <Slide id="topic-33-theory" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.3 &bull; Álgebra Regular</div>
            <h2 className="slide-title">Operadores de Expresiones Regulares y Thompson</h2>
          </div>

          <div className="cols">
            <div className="card stack">
              <div className="card-title">Tres Operadores Inductivos Fundamentales</div>
              <div>
                <strong>1. Unión (<MathView math="r_1 \mid r_2" />):</strong>
                <div className="muted small">Acepta cadenas en <MathView math="L(r_1)" /> o en <MathView math="L(r_2)" /> (<MathView math="L(r_1 \mid r_2) = L(r_1) \cup L(r_2)" />).</div>
              </div>
              <div>
                <strong>2. Concatenación (<MathView math="r_1 \cdot r_2" />):</strong>
                <div className="muted small">Cadenas formadas por <MathView math="w_1 \in L(r_1)" /> seguida de <MathView math="w_2 \in L(r_2)" />.</div>
              </div>
              <div>
                <strong>3. Cerradura de Kleene (<MathView math="r^*" />):</strong>
                <div className="muted small">Cero o más repeticiones de la expresión (incluye siempre la cadena vacía <MathView math="\epsilon" />).</div>
              </div>
            </div>

            <div className="card stack">
              <div className="card-title">Invariantes Estructurales de Thompson (1968)</div>
              <ul className="list">
                <li>Exactamente <strong>un estado inicial</strong> sin transiciones entrantes.</li>
                <li>Exactamente <strong>un estado final</strong> sin transiciones salientes.</li>
                <li>Cada estado posee a lo sumo <strong>dos transiciones-ε</strong> o <strong>una transición con símbolo</strong>.</li>
                <li><strong>Complejidad lineal O(m):</strong> Para una expresión regular de tamaño <MathView math="m" />, genera a lo sumo <MathView math="2m" /> estados y <MathView math="4m" /> transiciones.</li>
              </ul>
              <div className="muted small" style={{ marginTop: '4px' }}>
                Aplicado en herramientas como <span className="mono">grep</span>, <span className="mono">sed</span> y escáneres léxicos (<span className="mono">Flex</span>).
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. Stepper de Construcción de Thompson por Etapas */}
      <Slide id="topic-33-stepper" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.3 &bull; Construcción Inductiva</div>
            <h2 className="slide-title">Construcción Paso a Paso: <MathView math="r = (a \mid b)^* a" /></h2>
          </div>

          <StepController
            totalSteps={stages.length}
            currentStep={stageIdx}
            onStepChange={(idx) => setStageIdx(idx)}
            stepTitle={currentStage.title}
          />

          <div className="cols" style={{ marginTop: '8px' }}>
            {/* Diagrama del autómata resultante de 10 estados */}
            <div className="card" style={{ padding: '8px 12px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--structure)', marginBottom: '4px' }}>
                AFND con Transiciones-ε Resultante (Estados 0 al 9)
              </div>
              <StateDiagram
                nodes={fullNfa.nodePositions}
                edges={fullNfa.edges}
                height="235px"
                viewBox="0 5 560 285"
                title=""
              />
            </div>

            {/* Explicación de la etapa y regla */}
            <div className="stack">
              <div className="card stack">
                <p style={{ margin: 0, fontSize: '22px' }}>
                  {currentStage.description}
                </p>
                <div style={{ background: 'var(--surface-2)', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid var(--structure)', fontSize: '18px', color: 'var(--structure)' }}>
                  <strong>Regla de Thompson:</strong> {currentStage.rule}
                </div>
              </div>

              {/* Banco de pruebas con cadenas */}
              <div className="card" style={{ padding: '10px 14px' }}>
                <div className="card-title">Pruebas con Cadenas para (a | b)* a</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {testCases.map((tc, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '6px',
                        background: 'var(--surface-2)',
                        border: `1px solid ${tc.valid ? 'var(--accept)' : 'var(--reject)'}`,
                        fontSize: '17px'
                      }}
                    >
                      <span className="mono" style={{ fontWeight: 700, color: tc.valid ? 'var(--accept)' : 'var(--reject)' }}>
                        "{tc.str}"
                      </span>
                      <span style={{ marginLeft: '6px' }}>{tc.valid ? '✓' : '✗'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
