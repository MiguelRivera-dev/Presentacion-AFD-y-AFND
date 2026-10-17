import React from 'react';

export default function TransitionTable({
  states = [],
  alphabet = [],
  transitions = {},
  initialState = null,
  finalStates = [],
  activeState = null,
  activeSymbol = null,
  title = "Tabla de Transición de Estados δ"
}) {
  return (
    <div className="transition-table-container">
      <div style={{ padding: '0.65rem 1rem', background: '#0e1726', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f1f5f9' }}>{title}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--color-accent)' }}>→</span> Inicio &nbsp;|&nbsp; <span style={{ color: 'var(--color-warning)' }}>*</span> Aceptación
        </span>
      </div>
      <table className="academic-table">
        <thead>
          <tr>
            <th style={{ width: '35%' }}>Estado (q ∈ Q)</th>
            {alphabet.map((symbol) => (
              <th key={symbol} style={{ color: activeSymbol === symbol ? 'var(--color-primary)' : '#38bdf8' }}>
                Entrada '{symbol}'
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {states.map((state) => {
            const isInitial = state === initialState;
            const isFinal = finalStates.includes(state);
            const isCurrent = state === activeState;

            return (
              <tr key={state} className={isCurrent ? 'highlighted' : ''}>
                <td className="state-name">
                  {isInitial && <span className="initial-arrow">→</span>}
                  {isFinal && <span className="final-star">*</span>}
                  {state}
                </td>
                {alphabet.map((symbol) => {
                  const target = transitions[state] ? transitions[state][symbol] : '—';
                  const isCellTarget = isCurrent && activeSymbol === symbol;
                  const displayTarget = Array.isArray(target)
                    ? (target.length > 0 ? `{ ${target.join(', ')} }` : '∅')
                    : (target || '∅');

                  return (
                    <td
                      key={`${state}-${symbol}`}
                      style={{
                        background: isCellTarget ? 'rgba(56, 189, 248, 0.25)' : 'inherit',
                        fontWeight: isCellTarget ? 700 : 'normal'
                      }}
                    >
                      {displayTarget}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
