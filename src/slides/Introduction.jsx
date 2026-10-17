import React, { useContext } from 'react';
import { Slide, DeckContext } from 'spectacle';
import { BookOpen, GitMerge, FileCode, Sliders, Laptop, PlayCircle } from 'lucide-react';

export default function Introduction({ onNavigateToSlide }) {
  const deckCtx = useContext(DeckContext);
  const skipTo = deckCtx?.skipTo;

  const handleCardClick = (slideIndex) => {
    if (onNavigateToSlide) {
      onNavigateToSlide(slideIndex);
    } else if (skipTo) {
      skipTo({ slideIndex, stepIndex: 0 });
    }
  };

  return (
    <>
      {/* 1. Portada tipo comunicado institucional */}
      <Slide id="intro-cover" padding={0} backgroundColor="var(--bg)">
        <div className="cover">
          <div className="cover-banner">
            <div className="cover-banner-head">
              <div className="slide-kicker">
                Instituto Tecnológico Superior de Irapuato &bull; Quinto Semestre
              </div>
              <img
                src="/img/ITESI_h23.png"
                alt="Logotipo Oficial ITESI"
                className="cover-itesi-badge"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <h1 className="cover-title">
              Autómatas Finitos
            </h1>
            <p className="cover-subtitle">
              Competencia No. 3: Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema
            </p>
            <img
              src="/assets/buho.png"
              alt="Mascota institucional ITESI"
              className="cover-owl"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <dl className="cover-data">
            <div className="cover-field">
              <dt>Estudiante</dt>
              <dd>Miguel Adrián Rivera Jaime <span className="cover-id">(IS24110500)</span></dd>
            </div>
            <div className="cover-field">
              <dt>Asignatura</dt>
              <dd>Lenguajes y Autómatas I</dd>
            </div>
            <div className="cover-field">
              <dt>Profesor</dt>
              <dd>JUAN PABLO SERRANO RUBIO</dd>
            </div>
            <div className="cover-field">
              <dt>Grupo</dt>
              <dd>ISC 5° Semestre</dd>
            </div>
            <div className="cover-field">
              <dt>Fecha</dt>
              <dd>Octubre 2026</dd>
            </div>
          </dl>

          <div className="cover-hint">
            Usa las teclas <kbd className="mono">&rarr;</kbd> o <kbd className="mono">Espacio</kbd> para avanzar &bull; Pestañas superiores para ir directo a cada tema
          </div>
        </div>
      </Slide>

      {/* 2. Índice como mosaico (estilo oferta educativa del ITESI) */}
      <Slide id="intro-mosaic" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Programa de la Competencia No. 3</div>
            <h2 className="slide-title">Mosaico Temático de la Exposición</h2>
          </div>

          <div className="mosaic">
            <div className="mosaic-card" onClick={() => handleCardClick(2)}>
              <BookOpen size={28} />
              <div className="mosaic-num">Tema 3.1</div>
              <div className="mosaic-name">Autómatas finitos y clasificación</div>
              <div className="muted small">Quíntupla formal, AFD vs AFND y simulación interactiva</div>
            </div>

            <div className="mosaic-card" onClick={() => handleCardClick(6)}>
              <GitMerge size={28} />
              <div className="mosaic-num">Tema 3.2</div>
              <div className="mosaic-name">Conversión de AFND a AFD</div>
              <div className="muted small">Construcción de subconjuntos, cerradura-ε y cota 2ⁿ</div>
            </div>

            <div className="mosaic-card" onClick={() => handleCardClick(10)}>
              <FileCode size={28} />
              <div className="mosaic-num">Tema 3.3</div>
              <div className="mosaic-name">Expresiones regulares mediante AFND</div>
              <div className="muted small">Algoritmo de Thompson inductivo y pruebas de cadenas</div>
            </div>

            <div className="mosaic-card" onClick={() => handleCardClick(13)}>
              <Sliders size={28} />
              <div className="mosaic-num">Tema 3.4</div>
              <div className="mosaic-name">Minimización de estados</div>
              <div className="muted small">Estados inalcanzables, particiones de Moore y AFD mínimo</div>
            </div>

            <div className="mosaic-card" onClick={() => handleCardClick(16)}>
              <Laptop size={28} />
              <div className="mosaic-num">Tema 3.5</div>
              <div className="mosaic-name">Caso de estudio: Analizador Léxico</div>
              <div className="muted small">Simulador real en JavaScript de números enteros, flotantes y científicos</div>
            </div>

            <div className="mosaic-card" onClick={() => handleCardClick(19)}>
              <PlayCircle size={28} />
              <div className="mosaic-num">Demostración</div>
              <div className="mosaic-name">Simulación en Vivo en VS Code</div>
              <div className="muted small">Pruebas en tiempo real de cadenas válidas e inválidas</div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
