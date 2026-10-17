# Presentación Académica Interactiva sobre Autómatas Finitos (React.js + Spectacle + Vite)

### Instituto Tecnológico Superior de Irapuato (ITESI)
**Carrera:** Ingeniería en Sistemas Computacionales  
**Asignatura:** Lenguajes y Autómatas I (Quinto Semestre)  
**Competencia No. 3:** *Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema*  
**Dirección Institucional:** Carretera Irapuato-Silao km 12.5, Col. El Copal, Irapuato, Gto.  
**Portal Web:** [irapuato.tecnm.mx](https://irapuato.tecnm.mx)  

---

## 🌟 Descripción General

Esta aplicación web combina la potencia pedagógica del motor de presentaciones en React **Spectacle 10** con **React.js 18** y el empaquetador ultrarrápido **Vite 6** para transformar la exposición tradicional en una **experiencia académica interactiva universitaria de clase mundial**.

Diseñada bajo las pautas oficiales de **identidad visual institucional del ITESI** adaptada para proyección en aula (fondo oscuro de alto contraste $\ge 4.5:1$), integra:
- **Logotipo Oficial ITESI**: Cargado directamente desde la carpeta `img/` institucional (`img/ITESI_h23.png`).
- Definiciones matemáticas formales con **KaTeX** sin dependencias externas.
- Diagramas de estados vectoriales interactivos en **SVG puro**.
- Steppers paso a paso para la **Construcción de Subconjuntos (Rabin-Scott)**, **Thompson** y **Minimización de Particiones (Moore)**.
- **Simulador en vivo del Analizador Léxico** de constantes numéricas (enteros, decimales y notación científica) ejecutando lógica matemática pura en JavaScript.
- **Sección técnica en inglés (Technical English)** con glosario de términos y guion oral bilingüe conmutable.
- **Modo 100% Offline**: tipografías Montserrat y JetBrains Mono autoalojadas localmente mediante paquetes `@fontsource/*`.

---

## 🏛️ Identidad Visual Institucional y Marco Fijo (3 Zonas)

La presentación está contenida en un marco institucional fijo (`InstitutionalFrame.jsx`) sincronizado bidireccionalmente con el motor de Spectacle (`DeckContext`):

1. **Encabezado Institucional (56 px, Fondo Blanco):**
   - Franja de logotipos oficiales (Gobierno de México, SEP Educación, TecNM, SEG Guanajuato y el **Logotipo Oficial ITESI** desde `img/ITESI_h23.png`).
   - Título oficial: `Autómatas Finitos · Competencia No. 3`.
   - **Barra de Accesibilidad (A11y):** Alternador de modo de **Alto Contraste** y controles de escala de fuente **A+** / **A−**.
2. **Barra de Pestañas ITESI (40 px, Fondo `#1B396A`):**
   - Menú horizontal: `Inicio | 3.1 Clasificación | 3.2 Conversión | 3.3 Thompson | 3.4 Minimización | 3.5 Caso de Estudio | English | Conclusiones`.
   - **Integración con Spectacle:** La pestaña activa se sincroniza automáticamente con el índice de diapositiva (`activeView.slideIndex`). Al hacer clic en una pestaña se invoca la API `deck.skipTo({ slideIndex, stepIndex: 0 })` sin recargar la página.
3. **Pie Institucional (32 px):**
   - Dirección oficial: *Instituto Tecnológico Superior de Irapuato · Carr. Irapuato-Silao km 12.5, Col. El Copal, Irapuato, Gto.*
   - Contador de diapositivas en tiempo real (ej. `1 / 24`).

### Semántica de Color Fija (Variables CSS en `:root`):
| Variable | Color | Significado Estricto en toda la Presentación |
| :--- | :---: | :--- |
| `--structure` | `#5BA4F5` | Estructura del autómata, estados no finales, títulos |
| `--active` | `#FBBF24` | Estado o transición que se está ejecutando **ahora mismo** |
| `--accept` | `#34D399` | Estados de aceptación (doble círculo), veredicto de éxito |
| `--reject` | `#F87171` | Estado de trampa (`dead`), transiciones erróneas, rechazo |
| `--itesi-blue` | `#1B396A` | Azul institucional para barra de navegación y acentos |
| `--bg` | `#0A1630` | Fondo principal oscuro para proyección en aula |
| `--surface` | `#12234A` | Tarjetas, tablas y paneles |

---

## 📁 Archivos de Logotipos y Recursos en `img/` y `public/`

El proyecto utiliza el logotipo institucional oficial provisto en la carpeta `img/`:

| Archivo | Ubicación | Descripción |
| :--- | :--- | :--- |
| `img/ITESI_h23.png` | Raíz del proyecto / `img/` | Logotipo vectorial oficial del Instituto Tecnológico Superior de Irapuato |
| `public/img/ITESI_h23.png` | Servido por Vite | Versión servida en producción y desarrollo web |
| `public/assets/buho.png` | `public/assets/` | Mascota institucional (Búho blanco ITESI) |
| `public/assets/gob-mx.png` | `public/assets/` | Escudo Gobierno de México |
| `public/assets/sep-logo.png` | `public/assets/` | Logotipo Secretaría de Educación Pública |
| `public/assets/tecnm-logo.png` | `public/assets/` | Logotipo del Tecnológico Nacional de México |
| `public/assets/seg-logo.png` | `public/assets/` | Logotipo SEG Guanajuato |

*Nota: La aplicación incluye fallbacks visuales automáticos con bordes institucionales si algún recurso visual llegara a faltar.*

---

## 🚀 Instalación y Ejecución Local en Visual Studio Code

### Requisitos previos
- **Node.js** (v18.0.0 o superior recomendada).
- **npm** (incluido con Node.js).
- Navegador web moderno (Chrome, Edge, Firefox).

### Pasos de ejecución:

1. **Abrir la terminal en la carpeta del proyecto:**
   ```bash
   cd "C:\Users\Adrian\OneDrive\Documentos\ITESI\Quinto Semestre\Juanpu\Presentacion"
   ```

2. **Instalar dependencias declaradas en `package.json`:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor local de desarrollo con Vite:**
   ```bash
   npm run dev
   ```

4. **Visualizar la presentación:**
   Abra en su navegador la URL mostrada en consola:
   ```text
   http://localhost:3000
   ```

5. **Compilar para producción (validación de empaquetado):**
   ```bash
   npm run build
   ```

---

## ⌨️ Controles de Teclado y Navegación

| Tecla | Acción |
| :---: | :--- |
| **`→`** o **`Espacio`** | Avanzar a la siguiente diapositiva (Spectacle) |
| **`←`** | Regresar a la diapositiva anterior |
| **Pestañas superiores** | Salto directo a cualquier tema mediante la API `skipTo` de Spectacle |
| **Mosaico temático (Slide 2)** | Clic en cualquier tarjeta para navegar directamente a ese tema |
| **Inputs de texto** | Escribir en los simuladores sin interferencia (las teclas de flecha no cambian diapositivas al interactuar con `<input>`) |
| **`Alt + P`** | Modo presentador de Spectacle |
| **`Alt + O`** | Vista de cuadrícula / visión general (Overview Mode) |
| **`F`** | Modo pantalla completa nativo del navegador |

---

## 📑 Estructura de Diapositivas (24 Diapositivas)

```text
Diapositiva 01  [Inicio]       Portada institucional tipo comunicado con logotipo oficial ITESI y metadatos
Diapositiva 02  [Inicio]       Mosaico temático interactivo estilo oferta educativa ITESI
Diapositiva 03  [Tema 3.1]     Divisoria 3.1: Autómatas Finitos y Clasificación
Diapositiva 04  [Tema 3.1]     Fundamentación matemática: Quíntupla formal M = (Q, Σ, δ, q₀, F)
Diapositiva 05  [Tema 3.1]     Comparación rigurosa: AFD vs. AFND y Teorema de Equivalencia
Diapositiva 06  [Tema 3.1]     Simulador interactivo del AFD para cadenas binarias terminadas en '01'
Diapositiva 07  [Tema 3.2]     Divisoria 3.2: Conversión de AFND a AFD
Diapositiva 08  [Tema 3.2]     Construcción de subconjuntos, cerradura-ε y cota de explosión 2ⁿ
Diapositiva 09  [Tema 3.2]     Stepper paso a paso de conversión (subconjuntos A, B y C)
Diapositiva 10  [Tema 3.2]     Pruebas empíricas de equivalencia de lenguajes L(N) = L(D)
Diapositiva 11  [Tema 3.3]     Divisoria 3.3: Expresiones Regulares mediante AFND
Diapositiva 12  [Tema 3.3]     Operadores de álgebra regular e invariantes lineales O(m) de Thompson
Diapositiva 13  [Tema 3.3]     Stepper de construcción de Thompson por etapas para (a | b)* a
Diapositiva 14  [Tema 3.4]     Divisoria 3.4: Minimización de Estados de un AFD
Diapositiva 15  [Tema 3.4]     Estados inalcanzables, clases de equivalencia y Teorema de Myhill-Nerode
Diapositiva 16  [Tema 3.4]     Stepper interactivo de minimización por particiones (reducción de 6 a 3 estados: 50%)
Diapositiva 17  [Tema 3.5]     Divisoria 3.5: Aplicaciones y Caso de Estudio Práctico
Diapositiva 18  [Tema 3.5]     Especificación formal del Analizador Léxico Numérico de Compiladores
Diapositiva 19  [Tema 3.5]     Simulador interactivo en vivo del Lexer (enteros, flotantes y notación científica)
Diapositiva 20  [Sección 4]    Demostración en vivo en VS Code y visor de código fuente
Diapositiva 21  [Sección 5]    Divisoria English: Technical Presentation
Diapositiva 22  [Sección 5]    Subset Construction in English, Technical Glossary y guion oral bilingüe
Diapositiva 23  [Conclusiones] Síntesis del pipeline computacional y verificación de la Competencia No. 3
Diapositiva 24  [Conclusiones] Bibliografía académica en formato APA y franja de sitios de interés institucional
```

---

## 🔬 Arquitectura del Código Fuente

```text
Presentacion/
├── img/
│   └── ITESI_h23.png               # Logotipo oficial del ITESI provisto por el usuario
├── public/
│   ├── img/
│   │   └── ITESI_h23.png           # Logotipo ITESI servido para el encabezado y portada
│   └── assets/                     # buho.png, logos de ITESI y TecNM
├── src/
│   ├── automata/                   # LÓGICA MATEMÁTICA PURA (desacoplada de React)
│   │   ├── definitions.js          # Quíntuplas formales, tablas de transición y pasos de los 5 temas
│   │   └── simulation.js           # Motores de evaluación determinista lineal O(|w|)
│   ├── components/                 # COMPONENTES REUTILIZABLES
│   │   ├── InstitutionalFrame.jsx  # Marco institucional de 3 zonas con logotipos, tabs y accesibilidad
│   │   ├── StateDiagram.jsx        # Renderizador de grafos SVG con animación de nodos y aristas
│   │   ├── TransitionTable.jsx     # Tablas de transición con resaltado de estado activo
│   │   ├── AutomatonSimulator.jsx  # Simulador universal con cinta de símbolos y presets
│   │   ├── StepController.jsx      # Controlador de pasos con indicadores numerados
│   │   ├── CodePanel.jsx           # Visor de código con tema VS Code Dark+
│   │   └── MathView.jsx            # Renderizador KaTeX con soporte display e inline
│   ├── slides/                     # COMPONENTES DE DIAPOSITIVAS (Spectacle <Slide>)
│   │   ├── Introduction.jsx        # Portada comunicada con logo ITESI y mosaico temático
│   │   ├── Topic31.jsx             # Tema 3.1: Quíntupla, clasificación y simulador 01
│   │   ├── Topic32.jsx             # Tema 3.2: Subconjuntos y stepper de conversión
│   │   ├── Topic33.jsx             # Tema 3.3: Expresiones regulares y stepper de Thompson
│   │   ├── Topic34.jsx             # Tema 3.4: Particiones y stepper de minimización
│   │   ├── Topic35.jsx             # Tema 3.5: Analizador léxico y simulador numérico
│   │   ├── LiveDemo.jsx            # Sección 4: Guion de demostración y código
│   │   ├── EnglishSection.jsx      # Sección 5: Exposición técnica en inglés con apoyo en español
│   │   └── Conclusions.jsx         # Cierre, bibliografía APA y enlaces institucionales
│   ├── styles/                     # SISTEMA DE DISEÑO CSS3
│   │   ├── global.css              # Variables :root, resets, tokens y modo alto contraste
│   │   ├── presentation.css        # Marco institucional, tema Spectacle, tarjetas y layouts
│   │   └── diagrams.css            # Estilos vectoriales SVG, pulsos de nodos y tablas académicas
│   ├── App.jsx                     # Componente raíz con Deck de Spectacle y plantilla institucional
│   └── main.jsx                    # Punto de entrada con fuentes autoalojadas importadas
├── Guion_Exposicion.md             # Guion detallado del orador para la defensa de 20-30 min
├── Instrucciones.md                # Requisitos del proyecto institucional
├── package.json                    # Dependencias estrictas (React, Spectacle, KaTeX, Fontsource)
├── vite.config.js                  # Configuración de Vite en puerto 3000
└── index.html                      # Documento base HTML5
```

---

## 📚 Bibliografía Académica (Formato APA)

1. **Hopcroft, J. E., Motwani, R., & Ullman, J. D.** (2006). *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Pearson / Addison-Wesley.
2. **Sipser, M.** (2013). *Introduction to the Theory of Computation* (3rd ed.). Cengage Learning.
3. **Aho, A. V., Lam, M. S., Sethi, R., & Ullman, J. D.** (2006). *Compilers: Principles, Techniques, and Tools* (2nd ed. - "Dragon Book"). Addison-Wesley.
4. **Linz, P.** (2016). *An Introduction to Formal Languages and Automata* (6th ed.). Jones & Bartlett Learning.
5. **Rabin, M. O., & Scott, D.** (1959). *Finite Automata and Their Decision Problems*. IBM Journal of Research and Development, 3(2), 114–125.
