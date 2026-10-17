# Presentacion Academica Interactiva sobre Automatas Finitos
## React.js + Spectacle + Vite · Identidad Institucional ITESI

### Datos Academicos del Proyecto
- **Institucion:** Instituto Tecnologico Superior de Irapuato (ITESI)
- **Carrera:** Ingenieria en Sistemas Computacionales
- **Semestre:** Quinto Semestre
- **Asignatura:** Lenguajes y Automatas I
- **Docente:** JUAN PABLO SERRANO RUBIO
- **Competencia No. 3:** Crear y reconocer automatas finitos en un lenguaje de programacion para la solucion de un problema
- **Fecha:** Octubre 2026
- **Repositorio:** [https://github.com/MiguelRivera-dev/Presentacion-AFD-y-AFND.git](https://github.com/MiguelRivera-dev/Presentacion-AFD-y-AFND.git)

---

## 1. Descripcion General

Esta aplicacion web interactiva transforma la exposicion tradicional de teoria de la computacion en una experiencia de aprendizaje dinamica y rigurosa, disenada para proyectarse en aulas universitarias con una relacion de contraste superior a 4.5:1 sobre fondo oscuro.

Desarrollada con **React.js 18**, **Spectacle 10** y **Vite 6**, integra en un unico ecosistema componentes teoricos formales, procedimientos matematicos paso a paso, diagramas vectoriales interactivos en SVG, simuladores de ejecucion en tiempo real con cinta de lectura y un caso de estudio funcional de un analizador lexico numerico.

La identidad visual toma como base los lineamientos del Instituto Tecnologico Superior de Irapuato (ITESI), incorporando el logotipo oficial desde el directorio `img/` institucional (`img/ITESI_h23.png`), tipografias tecnicas autoalojadas y un marco de navegacion unificado con sincronizacion de diapositivas en tiempo real.

---

## 2. Contenido Tematico de la Presentacion (22 Diapositivas)

La presentacion se compone de 22 diapositivas agrupadas en 7 secciones accesibles mediante la barra de pestañas superior:

### Seccion 1: Inicio (Diapositivas 1 y 2)
- **Diapositiva 1 · Portada Institucional:** Comunicado oficial con emblema institucional ITESI, buho representativo, nombre de la asignatura, competencia, datos del estudiante y docente.
- **Diapositiva 2 · Mosaico Tematico:** Tablero interactivo inspirado en la oferta educativa del portal ITESI, que permite saltar directamente a cualquiera de los modulos tematicos.

### Seccion 2: Tema 3.1 · Automatas Finitos y Clasificacion (Diapositivas 3 a 6)
- **Diapositiva 3 · Caratula divisoria del Tema 3.1.**
- **Diapositiva 4 · Definicion Formal de la Quintupla:** Desglose riguroso de M = (Q, Sigma, delta, q0, F) con KaTeX y casos de aplicacion en compiladores, protocolos de red y circuitos digitales.
- **Diapositiva 5 · Clasificacion AFD vs. AFND:** Comparativa de funciones de transicion (mapeo determinista a Q vs. conjunto potencia P(Q)), transiciones espontaneas vacias y Teorema Fundamental de Equivalencia (L_AFD = L_AFND = REG).
- **Diapositiva 6 · Simulador Interactivo del AFD '01':** Reconocedor de cadenas binarias con sufijo '01'. Incluye cinta de caracteres, iluminacion secuencial de nodos y aristas activas, selector de cadenas preset y ejecucion automatica o manual paso a paso.

### Seccion 3: Tema 3.2 · Conversion de AFND a AFD (Diapositivas 7 a 10)
- **Diapositiva 7 · Caratula divisoria del Tema 3.2.**
- **Diapositiva 8 · Construccion de Subconjuntos (Algoritmo de Rabin-Scott):** Fundamento de la cerradura-epsilon, generacion inductiva de superestados y demostracion de la cota superior teorica de 2^n estados.
- **Diapositiva 9 · Procedimiento Paso a Paso (Stepper):** Visualizacion dual simultanea del AFND original y del AFD resultante, mostrando la evolucion de la tabla de transiciones en 4 etapas.
- **Diapositiva 10 · Banco de Pruebas de Equivalencia:** Tabla interactiva con cadenas de prueba evaluadas simultaneamente en ambos modelos para comprobar la igualdad de lenguajes.

### Seccion 4: Tema 3.3 · Expresiones Regulares mediante AFND (Diapositivas 11 a 13)
- **Diapositiva 11 · Caratula divisoria del Tema 3.3.**
- **Diapositiva 12 · Operadores e Invariantes del Algoritmo de Thompson:** Construccion inductiva para fragmentos primitivos, union, concatenacion y cerradura de Kleene con complejidad O(m).
- **Diapositiva 13 · Construccion Paso a Paso de r = (a | b)* a:** Diagrama vectorial completo del AFND resultante de 10 estados con transiciones vacias (epsilon), arcos de salto y retorno, y verificacion de cadenas validas e invalidas.

### Seccion 5: Tema 3.4 · Minimizacion de Estados de un AFD (Diapositivas 14 a 16)
- **Diapositiva 14 · Caratula divisoria del Tema 3.4.**
- **Diapositiva 15 · Optimizacion Formal y Teorema de Myhill-Nerode:** Eliminacion de estados inalcanzables via BFS/DFS, clases de equivalencia de Moore y garantia del automata minimo canonico unico.
- **Diapositiva 16 · Procedimiento de Refinamiento de Particiones:** Ejemplo practico con un modelo que reconoce cadenas binarias no vacias de longitud par (|w| en {2, 4, 6, ...}). Ilustra como el automata original de 6 estados bifurcaba innecesariamente caminos para '0' y '1', y como el refinamiento de Moore colapsa los estados indistinguibles en 3 estados canonicos (50% de optimizacion).

### Seccion 6: Tema 3.5 · Caso de Estudio: Analizador Lexico (Diapositivas 17 a 20)
- **Diapositiva 17 · Caratula divisoria del Tema 3.5.**
- **Diapositiva 18 · Especificacion del Tokenizador Numerico:** Expresion regular completa para constantes numericas enteras, de punto flotante y cientificas con exponente e/E y signo opcional.
- **Diapositiva 19 · Simulador en Vivo del Tokenizador:** Interfaz con presets rapidos (42, -3.14159, 1.05e-4, 3., 1e) que ejecuta el automata lexico, muestra la transicion activa y clasifica el token resultante.
- **Diapositiva 20 · Demostracion en Vivo en VS Code:** Arquitectura del software desacoplado en JavaScript puro y guia de ejecucion en entorno de desarrollo.

### Seccion 7: Conclusiones y Bibliografia (Diapositivas 21 y 22)
- **Diapositiva 21 · Sintesis del Pipeline y Logro de la Competencia:** Cadena de transformacion Regex -> Thompson -> Rabin-Scott -> Moore -> Software de produccion.
- **Diapositiva 22 · Bibliografia Formal:** Referencias academicas en formato APA (Hopcroft, Sipser, Aho y Linz).

---

## 3. Decisiones de Arquitectura y Diseno

### Motor de Diapositivas: Spectacle 10 en lugar de Reveal.js
Para garantizar una integracion nativa con el ciclo de vida de React 18 sin conflictos de manipulacion directa del DOM, la aplicacion utiliza **Spectacle 10**. Esto permite:
- Control declarativo de diapositivas mediante JSX.
- Sincronizacion directa con el contexto `DeckContext`.
- Navegacion programatica instantanea a traves de la barra de pestañas superior sin recargas de pagina.
- Rendimiento optimizado sin dependencias externas pesadas.

### Marco Institucional Unificado (InstitutionalFrame)
- **Barra Superior Integrada:** Integra el logotipo oficial del ITESI (`/img/ITESI_h23.png`) y 7 botones de navegacion seccional. La pestaña activa se resalta automaticamente segun la diapositiva en curso.
- **Pie Discreto:** Proporciona controles de accesibilidad para ajuste fino de tamaño de letra (A- / A+) en la esquina inferior izquierda y un contador de diapositivas en tiempo real (`N / 22`) en la esquina inferior derecha.
- **Eliminacion de Elementos Redundantes:** Se removieron franjas externas gubernamentales, botones superfluos y textos extensos de pie de pagina para maximizar el area util de proyeccion.

### Motor de Graficado Vectorial (StateDiagram)
- Rutas matematicas bezier (`M ... Q ...`) calculadas dinamicamente segun la orientacion relativa de los estados.
- Las curvas superiores e inferiores salen y llegan por los cuadrantes diagonales de los circulos (+-45 grados), evitando atravesar el eje horizontal donde se ubican las transiciones directas.
- Soporte para desplazamiento de insignias (`labelPos` y `labelOffset`) en aristas cruzadas en 'X'.
- Separacion automatica entre identificador de estado (A, B, C) centrado en el circulo y etiqueta de subconjunto ({q0}, [q1, q3]) posicionada como subtexto inferior.

### Paleta de Colores de Alto Contraste
- `--bg: #0A1630`: Fondo azul marino profundo para proyeccion sin fatiga visual.
- `--surface: #12234A`: Fondo de tarjetas, paneles y simuladores.
- `--structure: #5BA4F5`: Azul celeste para estructura, estados no finales y titulos.
- `--active: #FBBF24`: Ambar brillante para el estado y transicion en ejecucion.
- `--accept: #34D399`: Verde esmeralda para estados de aceptacion (doble anillo) y cadenas validas.
- `--reject: #F87171`: Rojo suave para estado de trampa, transiciones invalidas y rechazo.

### Modo 100% Sin Conexion (Offline)
Todas las fuentes tipograficas estan empaquetadas localmente a traves de `@fontsource/montserrat` y `@fontsource/jetbrains-mono`, y las formulas matematicas son renderizadas localmente por KaTeX, permitiendo proyectar la presentacion sin requerir conexion a internet.

---

## 4. Estructura del Proyecto

```text
Presentacion/
├── .gitignore                      # Reglas de exclusion de Git
├── index.html                      # Punto de entrada HTML
├── package.json                    # Definicion de dependencias y scripts
├── package-lock.json               # Arbol de dependencias bloqueado
├── vite.config.js                  # Configuracion de Vite y puerto 3000
├── README.md                       # Documentacion tecnica del proyecto
├── Instrucciones.md                # Requerimientos y especificaciones originales
├── Guion_Exposicion.md             # Guion detallado del orador minuto a minuto
├── img/
│   └── ITESI_h23.png               # Logotipo oficial ITESI provisto
├── public/
│   ├── assets/
│   │   ├── buho.png                # Mascota institucional ITESI
│   │   └── itesi-logo.png          # Variante grafica institucional
│   └── img/
│       └── ITESI_h23.png           # Logotipo servido por Vite
└── src/
    ├── main.jsx                    # Entrada principal de React
    ├── App.jsx                     # Mapeo de diapositivas y configuracion de Spectacle
    ├── automata/
    │   ├── definitions.js          # Quintuplas, tablas y grafos de todos los temas
    │   └── simulation.js           # Motores de simulacion de AFD y analizador lexico
    ├── components/
    │   ├── AutomatonSimulator.jsx  # Componente reactivo con cinta y controles de paso
    │   ├── CodePanel.jsx           # Visor de codigo fuente con resaltado sintetico
    │   ├── InstitutionalFrame.jsx  # Marco superior e inferior con logotipos y a11y
    │   ├── MathView.jsx            # Envoltorio para formulas KaTeX
    │   ├── StateDiagram.jsx        # Renderizador vectorial SVG de automatas
    │   ├── StepController.jsx      # Barra de control para procedimientos paso a paso
    │   └── TransitionTable.jsx     # Tablas academicas formales
    ├── slides/
    │   ├── Introduction.jsx        # Diapositivas 1 y 2: Portada y Mosaico
    │   ├── Topic31.jsx             # Diapositivas 3 a 6: Fundamentos y AFD 01
    │   ├── Topic32.jsx             # Diapositivas 7 a 10: Conversion de subconjuntos
    │   ├── Topic33.jsx             # Diapositivas 11 a 13: Algoritmo de Thompson
    │   ├── Topic34.jsx             # Diapositivas 14 a 16: Minimizacion de estados
    │   ├── Topic35.jsx             # Diapositivas 17 a 19: Analizador lexico numerico
    │   ├── LiveDemo.jsx            # Diapositiva 20: Demostracion en vivo en VS Code
    │   └── Conclusions.jsx         # Diapositivas 21 y 22: Sintesis y Bibliografia
    └── styles/
        ├── global.css              # Reset, fuentes @fontsource y variables CSS
        ├── presentation.css        # Diseno de diapositivas, tarjetas, marcos y layout
        └── diagrams.css            # Estilos de nodos SVG, pulsos, aristas y tablas
```

---

## 5. Instalacion y Ejecucion Local

### Requisitos del Sistema
- Node.js version 18.0.0 o superior instalada.
- Gestor de paquetes npm.

### Instrucciones de Arranque
1. Clonar el repositorio o ingresar a la carpeta del proyecto:
   ```bash
   git clone https://github.com/MiguelRivera-dev/Presentacion-AFD-y-AFND.git
   cd Presentacion-AFD-y-AFND
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```text
   http://localhost:3000
   ```

### Generacion del Paquete de Produccion
Para compilar la aplicacion optimizada para produccion:
```bash
npm run build
```
Los archivos estaticos generados se ubicaran en la carpeta `dist/`. Para previsualizar el bundle de produccion localmente:
```bash
npm run preview
```

---

## 6. Controles de Navegacion durante la Exposicion

| Tecla / Accion | Funcion |
| :--- | :--- |
| **Flecha Derecha** o **Espacio** | Avanzar a la siguiente diapositiva |
| **Flecha Izquierda** | Retroceder a la diapositiva anterior |
| **Pestañas Superiores** | Saltar directamente a cualquier seccion tematica |
| **Boton Auto / Pausar** | Reproducir o pausar la simulacion automatica de cadenas |
| **Boton Paso** | Avanzar manualmente un caracter en la cinta del automata |
| **Boton Reiniciar** | Volver al estado inicial de la evaluacion actual |
| **Botones Preset** | Cargar cadenas de prueba predefinidas (validas e invalidas) |
| **Botones A- / A+** | Disminuir o aumentar la escala de fuente para la proyeccion |
| **F11** | Activar el modo de pantalla completa en el navegador |

---

## 7. Referencias Bibliograficas

- **Hopcroft, J. E., Motwani, R., & Ullman, J. D.** (2006). *Introduction to Automata Theory, Languages, and Computation* (3ra ed.). Pearson / Addison-Wesley.
- **Sipser, M.** (2013). *Introduction to the Theory of Computation* (3ra ed.). Cengage Learning.
- **Aho, A. V., Lam, M. S., Sethi, R., & Ullman, J. D.** (2006). *Compilers: Principles, Techniques, and Tools* (2da ed. - Dragon Book). Addison-Wesley.
- **Linz, P.** (2016). *An Introduction to Formal Languages and Automata* (6ta ed.). Jones & Bartlett Learning.
