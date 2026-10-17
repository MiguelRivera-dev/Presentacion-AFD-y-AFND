import React from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';
import TransitionTable from '../components/TransitionTable';
import AutomatonSimulator from '../components/AutomatonSimulator';
import { DFA_TOPIC_31 } from '../automata/definitions';
import { simulateDFA } from '../automata/simulation';

export default function Topic31() {
  return (
    <>
      {/* 1. Diapositiva divisoria 3.1 */}
      <Slide id="topic-31-divider" padding={0} backgroundColor="var(--bg)">
        <div className="divider">
          <div className="divider-num">3.1</div>
          <h2 className="divider-title">Autómatas Finitos y Clasificación</h2>
          <p className="divider-line">
            Definición matemática formal mediante la quíntupla, comparación entre modelos deterministas y no deterministas, y simulación de recorrido en tiempo real.
          </p>
        </div>
      </Slide>

      {/* 2. Definición formal y Quíntupla */}
      <Slide id="topic-31-quintuple" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.1 &bull; Fundamentación Matemática</div>
            <h2 className="slide-title">Definición Formal de la Quíntupla</h2>
          </div>

          <div className="cols">
            <div className="stack">
              <p className="lead">
                Un <strong>Autómata Finito</strong> es un modelo matemático de cómputo con memoria finita que reconoce lenguajes regulares.
              </p>

              <div className="card" style={{ textAlign: 'center', padding: '16px 20px' }}>
                <MathView math="M = (Q, \Sigma, \delta, q_0, F)" display />
              </div>

              <div className="card">
                <div className="card-title">Aplicaciones en la Ingeniería de Software</div>
                <ul className="list">
                  <li><strong>Compiladores:</strong> Análisis léxico y tokenización lineal O(|w|).</li>
                  <li><strong>Redes:</strong> Modelado de estados de protocolos (TCP, TLS).</li>
                  <li><strong>Sistemas embebidos:</strong> Controladores de estados finitos en circuitos.</li>
                </ul>
              </div>
            </div>

            <div className="card stack">
              <div className="card-title">Componentes Formales</div>
              <div className="def-row">
                <MathView math="Q" />
                <span>Conjunto finito y no vacío de estados posibles.</span>
              </div>
              <div className="def-row">
                <MathView math="\Sigma" />
                <span>Alfabeto finito de entrada (símbolos permitidos).</span>
              </div>
              <div className="def-row">
                <MathView math="\delta" />
                <span>Función de transición de estados: <MathView math="Q \times \Sigma \to Q" /></span>
              </div>
              <div className="def-row">
                <MathView math="q_0" />
                <span>Estado inicial único de arranque: <MathView math="q_0 \in Q" /></span>
              </div>
              <div className="def-row">
                <MathView math="F" />
                <span>Conjunto de estados finales o de aceptación: <MathView math="F \subseteq Q" /></span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. Comparación entre AFD y AFND */}
      <Slide id="topic-31-comparison" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.1 &bull; Clasificación</div>
            <h2 className="slide-title">AFD vs. AFND: Determinismo y Equivalencia</h2>
          </div>

          <div className="cols">
            {/* Tarjeta AFD */}
            <div className="card stack" style={{ borderTop: '4px solid var(--structure)' }}>
              <div className="card-title" style={{ fontSize: '1.15em' }}>
                AFD (Determinista)
              </div>
              <p className="muted" style={{ margin: 0, fontSize: '0.92em' }}>
                Cada símbolo y estado determinan un <strong>único</strong> siguiente estado.
              </p>
              <div style={{ padding: '6px 10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
                <MathView math="\delta: Q \times \Sigma \to Q" display />
              </div>
              <ul className="list" style={{ fontSize: '0.92em' }}>
                <li>Sin transiciones espontáneas vacías (sin <MathView math="\epsilon" />).</li>
                <li>Ruta de cómputo determinista única.</li>
                <li>Tiempo de escaneo estrictamente lineal <MathView math="O(|w|)" />.</li>
              </ul>
            </div>

            {/* Tarjeta AFND */}
            <div className="card stack" style={{ borderTop: '4px solid var(--active)' }}>
              <div className="card-title" style={{ fontSize: '1.15em', color: 'var(--active)' }}>
                AFND (No Determinista)
              </div>
              <p className="muted" style={{ margin: 0, fontSize: '0.92em' }}>
                Un símbolo puede conducir a <strong>múltiples estados</strong> simultáneos.
              </p>
              <div style={{ padding: '6px 10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
                <MathView math="\delta: Q \times (\Sigma \cup \{\epsilon\}) \to \mathcal{P}(Q)" display />
              </div>
              <ul className="list" style={{ fontSize: '0.92em' }}>
                <li>Permite saltos sin consumir símbolos (<MathView math="\epsilon" />-transiciones).</li>
                <li>Acepta si <em>al menos una</em> rama culmina en un estado de <MathView math="F" />.</li>
                <li>Más sencillo de construir a mano desde una expresión regular.</li>
              </ul>
            </div>
          </div>

          <div className="check-banner" style={{ marginTop: '12px' }}>
            <span style={{ fontWeight: 800, color: 'var(--structure)' }}>Teorema de Equivalencia:</span>
            <span>AFD y AFND reconocen exactamente la misma clase de lenguajes: los <strong>Lenguajes Regulares</strong> (<MathView math="L_{AFD} = L_{AFND} = \text{REG}" />).</span>
          </div>
        </div>
      </Slide>

      {/* 4. Simulación Interactiva en React del AFD '01' */}
      <Slide id="topic-31-simulator" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Tema 3.1 &bull; Demostración Interactiva</div>
            <h2 className="slide-title">Reconocimiento Interactivo de Cadenas que terminan en '01'</h2>
          </div>

          <AutomatonSimulator
            automaton={DFA_TOPIC_31}
            edges={DFA_TOPIC_31.edges}
            simulateFn={(str) => simulateDFA(DFA_TOPIC_31, str)}
            initialInput="101"
            samplePresets={DFA_TOPIC_31.sampleStrings}
            height="225px"
            viewBox="35 35 450 220"
          />
        </div>
      </Slide>
    </>
  );
}
