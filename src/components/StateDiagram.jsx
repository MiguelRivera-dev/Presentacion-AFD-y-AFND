import React from 'react';

export default function StateDiagram({
  nodes = {},
  edges = [],
  activeState = null,
  activeTransition = null,
  title = "Diagrama de Transición de Estados",
  width = "100%",
  height = "260px",
  viewBox = "0 0 600 280"
}) {
  const nodeRadius = 22;

  // Calcula el path SVG para cada tipo de arista
  const calculatePath = (edge) => {
    const from = nodes[edge.from];
    const to = nodes[edge.to];
    if (!from || !to) return { path: "", labelX: 0, labelY: 0 };

    if (edge.from === edge.to) {
      // Bucle a sí mismo (Self-loop)
      const x = from.x;
      const y = from.y;
      if (edge.type === 'self-loop-bottom') {
        const path = `M ${x - 12} ${y + 18} C ${x - 30} ${y + 60}, ${x + 30} ${y + 60}, ${x + 12} ${y + 18}`;
        return { path, labelX: x, labelY: y + 54 };
      }
      // Por defecto: bucle superior
      const path = `M ${x - 12} ${y - 18} C ${x - 30} ${y - 60}, ${x + 30} ${y - 60}, ${x + 12} ${y - 18}`;
      return { path, labelX: x, labelY: y - 54 };
    }

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) return { path: "", labelX: 0, labelY: 0 };

    const unitX = dx / dist;
    const unitY = dy / dist;

    // Curvas hacia arriba (salen y llegan por el cuadrante superior para no cruzar la línea ecuatorial)
    if (edge.type === 'curve-top' || edge.type === 'curve-top-high') {
      const isBackward = to.x < from.x;
      const cosA = 0.7071; // cos(45°)
      const sinA = 0.7071; // sin(45°)

      const startX = from.x + (isBackward ? -cosA : cosA) * nodeRadius;
      const startY = from.y - sinA * nodeRadius;
      const endX = to.x + (isBackward ? cosA : -cosA) * (nodeRadius + 4);
      const endY = to.y - sinA * (nodeRadius + 4);

      const archH = edge.type === 'curve-top-high' ? 68 : (dist > 220 ? 62 : 44);
      const midX = (startX + endX) / 2;
      const midY = Math.min(startY, endY) - archH;

      const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
      return { path, labelX: midX, labelY: midY - 6 };
    }

    // Curvas hacia abajo (salen y llegan por el cuadrante inferior)
    if (edge.type === 'curve-bottom' || edge.type === 'curve-bottom-long') {
      const isBackward = to.x < from.x;
      const cosA = 0.7071;
      const sinA = 0.7071;

      const startX = from.x + (isBackward ? -cosA : cosA) * nodeRadius;
      const startY = from.y + sinA * nodeRadius;
      const endX = to.x + (isBackward ? cosA : -cosA) * (nodeRadius + 4);
      const endY = to.y + sinA * (nodeRadius + 4);

      const archH = edge.type === 'curve-bottom-long' ? 68 : (dist > 220 ? 62 : 44);
      const midX = (startX + endX) / 2;
      const midY = Math.max(startY, endY) + archH;

      const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
      return { path, labelX: midX, labelY: midY + 12 };
    }

    // Línea recta por defecto (desplazando la insignia para que no se superponga a la línea)
    const startX = from.x + unitX * nodeRadius;
    const startY = from.y + unitY * nodeRadius;
    const endX = to.x - unitX * (nodeRadius + 4);
    const endY = to.y - unitY * (nodeRadius + 4);

    const t = edge.labelPos !== undefined ? edge.labelPos : 0.5;
    const midX = startX + (endX - startX) * t;
    const midY = startY + (endY - startY) * t;

    const perpX = -unitY * 16;
    const perpY = unitX * 16;
    const isHorizontal = Math.abs(dy) < 5;
    let labelX = midX + (isHorizontal ? 0 : perpX);
    let labelY = midY - (isHorizontal ? 16 : perpY);

    if (edge.labelOffset) {
      labelX += edge.labelOffset.x || 0;
      labelY += edge.labelOffset.y || 0;
    }

    const path = `M ${startX} ${startY} L ${endX} ${endY}`;
    return { path, labelX, labelY };
  };

  const isEdgeActive = (edge) => {
    if (!activeTransition) return false;
    return activeTransition.from === edge.from && activeTransition.to === edge.to;
  };

  return (
    <div className="diagram-card">
      {title && (
        <div className="diagram-header">
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--structure)' }}>{title}</span>
          <div className="diagram-legend">
            <div className="legend-item">
              <div className="legend-circle" />
              <span>Estado</span>
            </div>
            <div className="legend-item">
              <div className="legend-circle final" />
              <span>Aceptación</span>
            </div>
            <div className="legend-item">
              <div className="legend-circle active" />
              <span>En ejecución</span>
            </div>
          </div>
        </div>
      )}

      <div className="svg-diagram-wrapper" style={{ height }}>
        <svg
          viewBox={viewBox}
          className="automata-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Flecha estándar en color de estructura */}
            <marker
              id="arrow-std"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#5BA4F5" />
            </marker>

            {/* Flecha activa en color ámbar en ejecución */}
            <marker
              id="arrow-active"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#FBBF24" />
            </marker>
          </defs>

          {/* Aristas / Transiciones */}
          {edges.map((edge, idx) => {
            const { path, labelX, labelY } = calculatePath(edge);
            const active = isEdgeActive(edge);
            if (!path) return null;

            return (
              <g key={`edge-${idx}`} className={`edge-group ${active ? 'active' : ''}`}>
                <path
                  d={path}
                  className={`transition-path ${active ? 'active' : ''}`}
                  markerEnd={active ? "url(#arrow-active)" : "url(#arrow-std)"}
                />
                {edge.symbol && (
                  <g transform={`translate(${labelX}, ${labelY})`}>
                    <rect
                      x="-14"
                      y="-10"
                      width="28"
                      height="20"
                      className={`symbol-badge-rect ${active ? 'active' : ''}`}
                    />
                    <text className="symbol-badge-text">
                      {edge.symbol}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Nodos / Estados */}
          {Object.entries(nodes).map(([nodeId, node]) => {
            const isActive = activeState === nodeId;
            const isFinal = node.isFinal;
            const isInitial = node.isInitial;
            const isError = node.isError;

            return (
              <g
                key={`node-${nodeId}`}
                className={`node-group ${isActive ? 'active active-pulse' : ''} ${isError ? 'error' : ''}`}
                transform={`translate(${node.x}, ${node.y})`}
              >
                {/* Anillo de pulso animado */}
                {isActive && (
                  <circle
                    className="pulse-ring"
                    cx="0"
                    cy="0"
                    fill="none"
                    strokeWidth="2.5"
                  />
                )}

                {/* Flecha de estado inicial */}
                {isInitial && (
                  <g transform="translate(-56, 0)">
                    <path
                      d="M 0 0 L 26 0"
                      stroke="#5BA4F5"
                      strokeWidth="2.5"
                      markerEnd="url(#arrow-std)"
                    />
                    <text
                      x="12"
                      y="-9"
                      textAnchor="middle"
                      fill="#5BA4F5"
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      fontWeight="700"
                    >
                      inicio
                    </text>
                  </g>
                )}

                {/* Círculo base del nodo */}
                <circle
                  cx="0"
                  cy="0"
                  r={nodeRadius}
                  className="node-circle"
                />

                {/* Segundo círculo concéntrico para Estados Finales (color --accept) */}
                {isFinal && (
                  <circle
                    cx="0"
                    cy="0"
                    r={nodeRadius - 4.5}
                    className="node-inner-circle"
                  />
                )}

                {/* Extracción automática de etiqueta principal y subconjunto */}
                {(() => {
                  let mainLabel = node.label || nodeId;
                  let subLabel = node.title || "";
                  if (!subLabel && typeof mainLabel === 'string' && mainLabel.includes(' ')) {
                    const parts = mainLabel.split(' ');
                    mainLabel = parts[0];
                    subLabel = parts.slice(1).join(' ');
                  }
                  return (
                    <>
                      <text className="node-label">
                        {mainLabel}
                      </text>
                      {subLabel && (
                        <text y={nodeRadius + 14} className="node-subtext">
                          {subLabel}
                        </text>
                      )}
                    </>
                  );
                })()}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
