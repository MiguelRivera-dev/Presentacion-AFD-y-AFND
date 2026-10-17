import React, { useContext } from 'react';
import { Deck, DeckContext, slideTransition } from 'spectacle';
import InstitutionalFrame from './components/InstitutionalFrame';

// Diapositivas organizadas por temas para Spectacle
import Introduction from './slides/Introduction';
import Topic31 from './slides/Topic31';
import Topic32 from './slides/Topic32';
import Topic33 from './slides/Topic33';
import Topic34 from './slides/Topic34';
import Topic35 from './slides/Topic35';
import LiveDemo from './slides/LiveDemo';
import Conclusions from './slides/Conclusions';

/**
 * Mapeo de índice de diapositiva (0 a 21) a pestaña activa del marco institucional ITESI
 * Total: 22 diapositivas
 *  - 0, 1: Portada e Índice Temático (Inicio)
 *  - 2, 3, 4, 5: Tema 3.1 Clasificación
 *  - 6, 7, 8, 9: Tema 3.2 Conversión
 *  - 10, 11, 12: Tema 3.3 Thompson
 *  - 13, 14, 15: Tema 3.4 Minimización
 *  - 16, 17, 18, 19: Tema 3.5 Caso de Estudio & Live Demo
 *  - 20, 21: Conclusiones y Bibliografía
 */
const SLIDE_TO_TAB_MAP = [
  { maxSlide: 1, tab: 'inicio' },
  { maxSlide: 5, tab: '3.1' },
  { maxSlide: 9, tab: '3.2' },
  { maxSlide: 12, tab: '3.3' },
  { maxSlide: 15, tab: '3.4' },
  { maxSlide: 19, tab: '3.5' },
  { maxSlide: 21, tab: 'conclusiones' },
];

/**
 * Configuración del tema oficial de Spectacle para ITESI
 */
const spectacleTheme = {
  size: {
    width: 1366,
    height: 768,
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#DCE4F0',
    tertiary: '#0A1630',
    quaternary: '#1B396A',
    quinary: '#4D82C4',
  },
  fonts: {
    header: '"Montserrat", sans-serif',
    text: '"Montserrat", sans-serif',
    monospace: '"JetBrains Mono", monospace',
  },
  backdropStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0A1630',
  },
};

/**
 * Plantilla institucional de Spectacle:
 * Renderiza la barra de navegación con el logo oficial ITESI y pestañas navegables con skipTo,
 * más los controles discretos de fuente y contador en el pie de página.
 */
function DeckInstitutionalTemplate({ slideNumber, numberOfSlides }) {
  const deck = useContext(DeckContext);
  const slideIndex = deck?.activeView?.slideIndex ?? (typeof slideNumber === 'number' ? slideNumber - 1 : 0);
  const totalSlides = deck?.slideCount || numberOfSlides || 22;

  const currentTabEntry = SLIDE_TO_TAB_MAP.find((m) => slideIndex <= m.maxSlide);
  const activeTab = currentTabEntry ? currentTabEntry.tab : 'inicio';

  const handleTabClick = (tab) => {
    if (deck?.skipTo && typeof tab.targetSlide === 'number') {
      deck.skipTo({ slideIndex: tab.targetSlide, stepIndex: 0 });
    }
  };

  return (
    <InstitutionalFrame
      activeTab={activeTab}
      onTabClick={handleTabClick}
      slideNumber={`${slideIndex + 1} / ${totalSlides}`}
    />
  );
}

export default function App() {
  return (
    <Deck
      theme={spectacleTheme}
      template={(props) => <DeckInstitutionalTemplate {...props} />}
      transition={slideTransition}
    >
      <Introduction />
      <Topic31 />
      <Topic32 />
      <Topic33 />
      <Topic34 />
      <Topic35 />
      <LiveDemo />
      <Conclusions />
    </Deck>
  );
}
