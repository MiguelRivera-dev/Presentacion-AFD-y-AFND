import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Fuentes autoalojadas para funcionamiento 100% offline (sin CDNs externas)
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/700.css';

// Estilos de la aplicación
import './styles/global.css';
import './styles/presentation.css';
import './styles/diagrams.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
