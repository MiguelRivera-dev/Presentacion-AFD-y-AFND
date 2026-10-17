import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const TABS = [
  { id: 'inicio', label: 'Inicio', targetSlide: 0 },
  { id: '3.1', label: '3.1 Clasificación', targetSlide: 2 },
  { id: '3.2', label: '3.2 Conversión', targetSlide: 6 },
  { id: '3.3', label: '3.3 Thompson', targetSlide: 10 },
  { id: '3.4', label: '3.4 Minimización', targetSlide: 13 },
  { id: '3.5', label: '3.5 Caso de Estudio', targetSlide: 16 },
  { id: 'conclusiones', label: 'Conclusiones', targetSlide: 20 },
];

export default function InstitutionalFrame({
  activeTab = 'inicio',
  onTabClick,
  slideNumber = '1 / 22',
  children
}) {
  const [fontScale, setFontScale] = useState(1);
  const [logoError, setLogoError] = useState(false);

  const zoomIn = () => {
    setFontScale((prev) => {
      const next = Math.min(1.25, Number((prev + 0.05).toFixed(2)));
      document.documentElement.style.setProperty('--font-scale', String(next));
      return next;
    });
  };

  const zoomOut = () => {
    setFontScale((prev) => {
      const next = Math.max(0.85, Number((prev - 0.05).toFixed(2)));
      document.documentElement.style.setProperty('--font-scale', String(next));
      return next;
    });
  };

  return (
    <div className="inst-frame-overlay">
      {/* 1. Barra superior de navegación institucional (con logo oficial ITESI a la izquierda) */}
      <div className="inst-top-bar">
        <nav className="inst-tabs-bar" aria-label="Menú principal de secciones">
          <div className="inst-nav-brand">
            {!logoError ? (
              <img
                src="/img/ITESI_h23.png"
                alt="ITESI"
                className="inst-brand-logo"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="inst-brand-fallback">ITESI</span>
            )}
          </div>

          <div className="inst-tabs-list">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`inst-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => onTabClick && onTabClick(tab)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {children && (
        <main className="inst-stage">
          {children}
        </main>
      )}

      {/* 2. Pie institucional mínimo: controles discretos de fuente y contador de diapositivas */}
      <footer className="inst-footer" role="contentinfo">
        <div className="inst-footer-a11y" role="group" aria-label="Ajuste de tamaño de fuente">
          <span className="inst-footer-hint">Tamaño:</span>
          <button
            type="button"
            className="a11y-mini-btn"
            onClick={zoomOut}
            title="Reducir tamaño de fuente"
            aria-label="Reducir fuente"
          >
            <Minus size={11} aria-hidden="true" />
            <span>A-</span>
          </button>
          <button
            type="button"
            className="a11y-mini-btn"
            onClick={zoomIn}
            title="Aumentar tamaño de fuente"
            aria-label="Aumentar fuente"
          >
            <Plus size={11} aria-hidden="true" />
            <span>A+</span>
          </button>
        </div>

        <div className="slide-count" aria-live="polite">
          {slideNumber}
        </div>
      </footer>
    </div>
  );
}
