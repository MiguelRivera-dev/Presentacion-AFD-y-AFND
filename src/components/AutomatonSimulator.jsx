import React, { useState, useEffect } from 'react';
import StateDiagram from './StateDiagram';
import { Play, Pause, SkipForward, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

export default function AutomatonSimulator({
  automaton,
  edges = [],
  simulateFn,
  initialInput = '101',
  samplePresets = [],
  height = '240px',
  viewBox = '0 0 540 260'
}) {
  const [inputVal, setInputVal] = useState(initialInput);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simulation, setSimulation] = useState(() => simulateFn(initialInput));

  const runWithInput = (str) => {
    setInputVal(str);
    const result = simulateFn(str);
    setSimulation(result);
    setStepIndex(0);
    setIsPlaying(false);
  };

  const handleStep = () => {
    if (stepIndex < simulation.steps.length - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  // Temporizador para auto-reproducción
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      if (stepIndex < simulation.steps.length - 1) {
        timer = setTimeout(() => {
          setStepIndex((prev) => prev + 1);
        }, 850);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, stepIndex, simulation.steps.length]);

  const currentStep = simulation.steps[stepIndex] || simulation.steps[0];
  const activeState = currentStep ? currentStep.toState : automaton.initialState;
  const isFinished = stepIndex === simulation.steps.length - 1;

  const activeTransition = currentStep && currentStep.fromState ? {
    from: currentStep.fromState,
    to: currentStep.toState
  } : null;

  return (
    <div className="sim">
      {/* Columna Izquierda: Diagrama SVG y Cinta */}
      <div className="sim-col">
        <StateDiagram
          nodes={automaton.nodePositions}
          edges={edges.length ? edges : automaton.edges}
          activeState={activeState}
          activeTransition={activeTransition}
          height={height}
          viewBox={viewBox}
          title=""
        />

        {/* Cinta de caracteres */}
        <div className="card" style={{ padding: '10px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="sim-label">Cinta de entrada</span>
            <span style={{ fontSize: '15px', color: 'var(--structure)', fontFamily: 'var(--font-mono)' }}>
              {currentStep?.desc || currentStep?.message || `Paso ${stepIndex + 1} de ${simulation.steps.length}`}
            </span>
          </div>

          <div className="tape">
            {inputVal.split('').map((ch, idx) => {
              const isProcessed = idx < currentStep?.charIndex;
              const isCurrent = idx === currentStep?.charIndex;
              return (
                <div
                  key={idx}
                  className={`tape-cell ${isCurrent ? 'is-current' : (isProcessed ? 'is-done' : '')}`}
                >
                  <span>{ch}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Columna Derecha: Entrada, Controles, Presets y Resultado */}
      <div className="sim-col">
        {/* Formulario y botones */}
        <div className="card" style={{ padding: '12px 16px' }}>
          <div className="sim-label" style={{ marginBottom: '6px' }}>Cadena a evaluar</div>
          <div className="sim-form">
            <input
              type="text"
              className="sim-input"
              value={inputVal}
              onChange={(e) => runWithInput(e.target.value)}
              placeholder="Ingresa una cadena..."
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pausar' : 'Auto'}</span>
            </button>
          </div>

          {/* Fila de controles de paso y reinicio */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <button
              type="button"
              className="btn"
              style={{ flex: 1 }}
              onClick={handleStep}
              disabled={isFinished}
            >
              <SkipForward size={16} />
              <span>Paso ({stepIndex + 1}/{simulation.steps.length})</span>
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setStepIndex(0);
                setIsPlaying(false);
              }}
              title="Reiniciar simulación"
            >
              <RotateCcw size={16} />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Ejemplos predeterminados */}
        {samplePresets.length > 0 && (
          <div className="card" style={{ padding: '10px 14px' }}>
            <div className="sim-label" style={{ marginBottom: '6px' }}>Ejemplos rápidos</div>
            <div className="btn-row">
              {samplePresets.map((sp, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`btn btn-example ${sp.valid || sp.expected ? 'expect-accept' : 'expect-reject'}`}
                  onClick={() => runWithInput(sp.str)}
                >
                  <span>{sp.str}</span>
                  <span style={{ fontSize: '13px', color: (sp.valid || sp.expected) ? 'var(--accept)' : 'var(--reject)' }}>
                    {(sp.valid || sp.expected) ? '✓' : '✗'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rastro de estados visitados */}
        <div className="card" style={{ padding: '10px 14px' }}>
          <div className="sim-label" style={{ marginBottom: '6px' }}>Ruta de estados visitados</div>
          <div className="trace">
            {simulation.steps.slice(0, stepIndex + 1).map((s, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span style={{ color: 'var(--text-muted)' }}>&rarr;</span>}
                <span
                  className={`trace-chip ${idx === stepIndex ? 'is-current' : ''} ${s.isAccepted || s.isFinal ? 'is-final' : ''} ${s.isError ? 'is-error' : ''}`}
                >
                  {s.toState}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Banner de resultado */}
        <div className={`result ${isFinished ? (simulation.accepted ? 'is-accept' : 'is-reject') : (isPlaying ? 'is-running' : 'is-idle')}`}>
          <div className="result-title">
            {isFinished ? (
              simulation.accepted ? (
                <>
                  <CheckCircle2 size={20} />
                  <span>Cadena ACEPTADA</span>
                </>
              ) : (
                <>
                  <XCircle size={20} />
                  <span>Cadena RECHAZADA</span>
                </>
              )
            ) : (
              <span>Procesando entrada...</span>
            )}
          </div>
          <div style={{ fontSize: '16px', color: 'var(--text)' }}>
            {simulation.reason}
          </div>
          {simulation.token && (
            <div style={{ marginTop: '4px', fontSize: '15px', color: 'var(--structure)', fontWeight: 700 }}>
              Token: {simulation.token.label} ({simulation.token.type})
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
