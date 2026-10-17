Prompt: Presentación interactiva de Autómatas Finitos con React.js, Reveal.js y Vite (identidad visual ITESI)
Actúa como un ingeniero en sistemas computacionales especializado en teoría de la computación, lenguajes formales, desarrollo frontend y diseño de presentaciones académicas interactivas.
Necesito que desarrolles una presentación académica sobre Autómatas Finitos, implementada como una aplicación web utilizando obligatoriamente React.js, Reveal.js y Vite.
La presentación corresponde a la Competencia No. 3: Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema, y se presenta en el Instituto Tecnológico Superior de Irapuato (ITESI).
Debe combinar explicaciones teóricas, procedimientos matemáticos, diagramas de estados, tablas de transición, simulaciones interactivas y una demostración funcional de un autómata.
El resultado debe parecer una presentación institucional profesional diseñada para proyectarse en un salón de clases, con la identidad visual del ITESI, no una página web convencional ni un conjunto de documentos independientes.
1. Tecnologías obligatorias
Utiliza las siguientes tecnologías:
• React.js: construcción de la interfaz mediante componentes funcionales y JSX.
• Vite: configuración, desarrollo y ejecución del proyecto.
• Reveal.js: estructura de presentación, navegación entre diapositivas, controles de teclado, transiciones y progreso.
• JavaScript: implementación de algoritmos y simulaciones de autómatas.
• CSS3: identidad visual, diseño de las diapositivas, animaciones y adaptación a diferentes pantallas.
• Lucide React: iconos opcionales para controles e indicadores visuales.
• Fuentes autoalojadas mediante paquetes @fontsource/* declarados en package.json, para que la presentación funcione sin conexión.
Puedes utilizar KaTeX o MathJax para representar fórmulas matemáticas y una biblioteca como React Flow o SVG para los diagramas interactivos, siempre que exista una justificación técnica.
No agregues dependencias innecesarias.
Responsabilidades de cada tecnología
Reveal.js debe encargarse de:
• Organizar el contenido en diapositivas y secciones.
• Navegar hacia adelante y hacia atrás.
• Permitir la navegación con las teclas de dirección.
• Mostrar los controles de navegación y el progreso.
• Aplicar transiciones entre diapositivas.
• Permitir iniciar la exposición en modo de pantalla completa cuando el navegador lo admita.
• Gestionar el índice de diapositivas y las secciones anidadas.
React.js debe encargarse de:
• Renderizar los componentes y el contenido de cada diapositiva.
• Gestionar las entradas y los resultados de las simulaciones.
• Mostrar y actualizar diagramas, tablas y recorridos de estados.
• Implementar controles interactivos y ejemplos.
• Mantener el estado de los componentes durante la presentación, cuando corresponda.
• Renderizar el marco institucional (encabezado, pestañas y pie) descrito en la sección 2.
Vite debe encargarse de:
• Crear el entorno de desarrollo.
• Resolver los módulos y dependencias.
• Proporcionar el servidor local para ejecutar la aplicación.
Requisito crítico de integración
Integra Reveal.js correctamente con el ciclo de vida de React.
• Inicializa Reveal.js después de que React haya renderizado la estructura de diapositivas.
• Utiliza useEffect y useRef cuando corresponda para inicializar y limpiar la instancia de Reveal.js.
• Evita inicializaciones duplicadas durante el desarrollo con React Strict Mode.
• Actualiza o sincroniza Reveal.js cuando cambie la estructura de las diapositivas.
• Garantiza que los componentes interactivos sigan respondiendo después de navegar entre diapositivas.
• Evita que Reveal.js y React intenten controlar simultáneamente los mismos elementos del DOM.
• Si se agregan o modifican diapositivas dinámicamente, utiliza los mecanismos de actualización correspondientes de Reveal.js.
• No implementes una segunda navegación manual que entre en conflicto con la navegación nativa de Reveal.js. Las pestañas del marco institucional solo pueden navegar llamando a la API de Reveal.js y deben sincronizarse escuchando sus eventos (por ejemplo slidechanged).
La aplicación debe funcionar correctamente con las versiones concretas de las dependencias instaladas. No utilices métodos inexistentes ni mezcles ejemplos de APIs de distintas versiones.
2. Diseño visual: identidad institucional del ITESI
La presentación debe verse como material oficial del ITESI, tomando como referencia el sitio institucional (irapuato.tecnm.mx), pero adaptado a un formato de proyección con fondo oscuro.
2.1 Elementos de referencia del sitio institucional
Reproduce la lógica visual del sitio, no una copia literal:
• Franja superior de logos sobre fondo blanco: Gobierno de México, Educación, TecNM, Secretaría de Educación de Guanajuato (SEG) e ITESI.
• Barra de utilidades con controles de accesibilidad (Contraste, A+, A−).
• Menú principal horizontal con pestañas de sección (Acerca de ITESI, Aspirantes, Oferta Educativa, Vinculación, etc.).
• Mosaico de tarjetas para la oferta educativa (cuadrícula de iconos con nombre).
• Banners a ancho completo para comunicados.
• Pie institucional con dirección y contacto: Carretera Irapuato-Silao km 12.5, Col. El Copal, Irapuato, Gto.
• Mascota: búho blanco, que puede usarse como elemento gráfico discreto.
2.2 Logotipos
• El usuario colocará los archivos oficiales en public/assets/ (por ejemplo itesi-logo.png y tecnm-logo.png). Referéncialos con rutas locales; no los enlaces desde internet, porque la demostración debe funcionar sin conexión.
• No deformes, recolorees ni agregues efectos a los logotipos.
• Muéstralos siempre sobre la franja blanca del encabezado, nunca directamente sobre el fondo oscuro.
• Si un archivo de logotipo no existe, muestra un texto "ITESI" como marcador temporal y documenta en el README qué archivos faltan.
• No inventes lemas, cifras ni datos institucionales. Usa únicamente el nombre oficial y la dirección indicados arriba.
2.3 Paleta de colores (como variables CSS)
Define todos los colores como variables en :root para poder ajustarlos en un solo lugar. Los valores del azul institucional son aproximados y deben verificarse contra el logotipo oficial; déjalos agrupados y comentados en global.css.
Variable
Uso
Valor sugerido
--itesi-blue
Azul institucional (barra de pestañas, acentos de marca)
#1B396A (verificar contra el logo)
--bg
Fondo principal de diapositivas
#0A1630
--surface
Tarjetas, tablas, paneles
#12234A
--text
Texto principal
#E6EDF7
--text-muted
Texto secundario
#9FB0CC
--structure
Estructura del autómata (estados, títulos)
#5BA4F5
--active
Transición o estado en ejecución
#FBBF24
--accept
Estados finales y aceptación
#34D399
--reject
Rechazo y error
#F87171
--header-bg
Franja de logos
#FFFFFF
Lógica de color con significado fijo en toda la presentación: azul claro es la estructura del autómata, ámbar es "lo que se está ejecutando ahora", verde es aceptación y coral es rechazo. No uses estos colores con otro significado.
Verifica un contraste mínimo de 4.5:1 entre texto y fondo.
2.4 Tipografía
• Títulos y cuerpo: Montserrat (paquete @fontsource/montserrat), coherente con el estilo de los portales institucionales.
• Código, estados y símbolos (q₀, δ, Σ): JetBrains Mono (paquete @fontsource/jetbrains-mono).
• Tamaño mínimo de 28 px para texto de cuerpo en el lienzo de 1280×720.
• Incluye una pila de respaldo (system-ui, sans-serif y monospace).
2.5 Marco fijo de cada diapositiva
Implementa un componente de marco (por ejemplo InstitutionalFrame.jsx) con tres zonas fijas, renderizado por React:
1. Encabezado (≈56 px, fondo blanco): logotipos a la izquierda; a la derecha, el texto "Autómatas Finitos · Competencia No. 3".
2. Barra de pestañas (≈40 px, fondo --itesi-blue): pestañas Inicio | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | English | Conclusiones, con la pestaña activa subrayada en --structure, imitando el menú principal del sitio.
    ◦ La pestaña activa se determina escuchando los eventos de Reveal.js.
    ◦ Al hacer clic en una pestaña se llama a la API de Reveal.js para ir a esa sección; no se implementa navegación propia.
3. Pie (≈32 px): "Instituto Tecnológico Superior de Irapuato · Carr. Irapuato-Silao km 12.5" y, a la derecha, el número de diapositiva.
El contenido de las diapositivas ocupa el espacio restante. El marco no debe tapar los controles ni la barra de progreso de Reveal.js.
2.6 Diapositivas especiales
• Portada tipo comunicado: banner a ancho completo con el título, el subtítulo y un bloque de datos con marcadores para completar: [Nombre del estudiante], [Materia], [Docente], [Grupo], [Fecha]. No inventes estos datos.
• Índice como mosaico: cinco tarjetas en cuadrícula (una por tema, 3.1 a 3.5), con icono de Lucide, número y nombre, al estilo del mosaico de oferta educativa. Más una tarjeta para la sección en inglés.
• Diapositivas divisorias de tema: número grande (3.1, 3.2…) en --structure, título del tema y una línea con lo que se verá. No incluyas tiempos.
• Cierre: conclusiones, bibliografía y una franja con los logotipos institucionales al estilo de "Sitios de interés".
2.7 Elementos gráficos
• Fondo: cuadrícula de puntos muy sutil (estilo papel milimétrico) y un degradado radial tenue en una esquina.
• Estados del diagrama: círculos con borde --structure y brillo suave; el estado inicial lleva flecha de entrada; los estados finales usan doble círculo en --accept; el estado activo se ilumina en --active con una pulsación leve.
• Transiciones: flechas con etiquetas en tipografía monoespaciada; la transición recorrida se resalta en --active y se anima trazándose.
• Tarjetas: esquinas redondeadas, borde fino y sin sombras pesadas.
• Tablas de transición: fila y columna del estado activo resaltadas; encabezados en --structure.
• Código: tema oscuro tipo VS Code (Dark+), coherente con la demostración en vivo, con resaltado de sintaxis cuando sea posible.
• Fórmulas: correctamente representadas con KaTeX o MathJax.
• Búho: uso opcional y discreto (por ejemplo, en la portada), solo si el usuario aporta el archivo.
2.8 Composición y contenido
• Dos columnas cuando haya teoría y diagrama (texto a la izquierda, visual a la derecha).
• Una sola idea por diapositiva y máximo 5 líneas de texto.
• Evita diapositivas saturadas. Prioriza ejemplos, diagramas, comparaciones y explicaciones visuales.
• Contenido breve, con títulos destacados.
2.9 Accesibilidad inspirada en el sitio
Agrega, en el encabezado o la barra de utilidades, controles discretos equivalentes a los del sitio institucional:
• Contraste: alterna un modo de alto contraste (más claro, bordes más gruesos).
• A+ / A−: aumenta o reduce la escala de fuente mediante una variable CSS.
Gestiona su estado con useState y aplícalo mediante clases o variables CSS en la raíz, sin tocar los elementos que controla Reveal.js. Todos los controles deben ser accesibles por teclado, con aria-label y foco visible.
2.10 Movimiento
• Transición entre diapositivas: slide horizontal entre temas y fade dentro de un mismo tema.
• Animaciones cortas (200–400 ms): aparición escalonada de elementos, trazado de flechas y pulso del estado activo.
• Respeta prefers-reduced-motion.
2.11 Configuración de Reveal.js
Configura adecuadamente:
• controls para los controles de navegación.
• progress para la barra de progreso.
• slideNumber para indicar la posición de la diapositiva (o, si se muestra en el pie del marco, desactiva el nativo para no duplicarlo).
• transition para establecer transiciones suaves.
• hash si resulta útil para acceder a diapositivas específicas mediante la URL.
• center, width y height (1280×720) para controlar la composición visual.
Selecciona los valores adecuados en lugar de activar todas las opciones sin criterio.
Organiza las secciones anidadas de Reveal.js para separar los cinco temas principales. Los componentes interactivos deben estar dentro de las diapositivas correspondientes y no deben bloquear la navegación normal.
3. Estructura académica de la presentación
Organiza el contenido de acuerdo con los cinco subtemas del programa.
Tema 3.1. Autómatas finitos y clasificación
Incluye:
1. Definición de autómata finito y sus aplicaciones.
2. Definición matemática formal mediante la quíntupla M = (Q, Σ, δ, q₀, F).
3. Explicación de cada componente de la quíntupla.
4. Comparación entre Autómata Finito Determinista (AFD) y Autómata Finito No Determinista (AFND).
5. Diferencias entre sus funciones de transición y sus formas de procesar cadenas.
6. Diagrama de estados y tabla de transiciones de un ejemplo sencillo.
7. Explicación de la aceptación y el rechazo de cadenas.
8. Aclaración de que AFD y AFND reconocen los mismos lenguajes regulares.
Interacción con React: permite introducir una cadena y ejecutar el autómata, mostrando los estados recorridos y el resultado.
Tema 3.2. Conversión de AFND a AFD
Incluye:
1. Propósito de la conversión.
2. Explicación del método de construcción de subconjuntos.
3. Cómo cada estado del AFD representa un subconjunto de estados del AFND.
4. Tratamiento del cierre ε si el ejemplo incluye transiciones ε.
5. Ejemplo completo de conversión paso a paso.
6. Tabla de transiciones original y tabla resultante.
7. Diagramas del AFND y del AFD.
8. Pruebas con cadenas aceptadas y rechazadas.
9. Explicación de que un AFND con n estados puede dar lugar a un AFD de hasta 2^n estados.
Interacción con React: presenta la conversión por etapas. Permite avanzar mediante botones para mostrar los subconjuntos descubiertos, sus transiciones y los estados finales.
Los diagramas, las tablas y las operaciones matemáticas deben corresponder exactamente al mismo ejemplo.
Tema 3.3. Representación de expresiones regulares mediante AFND
Incluye:
1. Definición de expresión regular y lenguaje regular.
2. Operadores de unión, concatenación y cerradura de Kleene.
3. Explicación del algoritmo de Thompson.
4. Construcción de un AFND a partir de una expresión regular.
5. Diagramas de los fragmentos y del autómata completo.
6. Identificación del estado inicial, el estado final y las transiciones ε.
7. Pruebas de aceptación y rechazo.
8. Relación con el reconocimiento de patrones en programas informáticos.
Interacción con React: permite recorrer las etapas de construcción de Thompson y resaltar los fragmentos de autómata que se agregan en cada paso.
No es necesario implementar un conversor universal de expresiones regulares. Prioriza un ejemplo acotado, completo y correcto.
Tema 3.4. Minimización de estados de un autómata finito
Incluye:
1. Definición de estados alcanzables, inalcanzables y equivalentes.
2. Justificación de la eliminación de estados inalcanzables.
3. Explicación del método de particiones o de la tabla de distinguibilidad.
4. Ejemplo completo de minimización de un AFD.
5. Identificación de estados equivalentes y distinguibles.
6. Diagrama original y diagrama minimizado.
7. Tabla de transiciones final.
8. Verificación de que ambos autómatas reconocen el mismo lenguaje.
9. Ventajas de la minimización para la implementación.
Interacción con React: revela progresivamente las particiones, los estados que se eliminan y las fusiones realizadas. Muestra el número de estados antes y después.
No fusiones estados distinguibles ni elimines estados sin justificación matemática.
Tema 3.5. Aplicaciones y caso de estudio práctico
Selecciona un problema que pueda resolverse con un autómata finito. Se recomienda un validador de cadenas o identificadores, o un analizador léxico sencillo.
Desarrolla:
1. Planteamiento del problema y reglas de aceptación.
2. Definición del alfabeto, estados, transiciones, estado inicial y estados finales.
3. Diagrama del autómata y tabla de transiciones.
4. Implementación del algoritmo en JavaScript.
5. Correspondencia entre el modelo matemático y el código.
6. Al menos tres pruebas válidas y tres inválidas.
7. Limitaciones y posibles aplicaciones adicionales.
Simulador interactivo obligatorio en React:
Implementa un simulador funcional dentro de la presentación. Debe permitir:
• Introducir una cadena.
• Ejecutar el autómata con un botón.
• Mostrar si la cadena es aceptada o rechazada.
• Visualizar el recorrido por los estados.
• Resaltar las transiciones recorridas en el diagrama.
• Mostrar la secuencia de estados visitados.
• Explicar el resultado de forma breve.
• Reiniciar la simulación.
• Cargar ejemplos válidos e inválidos mediante botones.
La lógica debe ejecutar el autómata real en JavaScript. No utilices resultados predeterminados ni animaciones que simulen una ejecución inexistente.
El diagrama, la tabla, el algoritmo y las pruebas deben describir exactamente el mismo autómata.
La simulación debe seguir funcionando al navegar entre diapositivas y volver al caso de estudio.
4. Demostración en vivo con Visual Studio Code
Reserva una sección de la exposición para ejecutar el proyecto y demostrar el simulador.
Prepara un guion que explique:
1. Cómo iniciar el proyecto.
2. Cómo abrir la presentación en el navegador.
3. Cómo navegar mediante Reveal.js.
4. Cómo ejecutar el autómata con una cadena válida.
5. Cómo ejecutar el autómata con una cadena inválida.
6. Cómo observar los estados y las transiciones.
7. Qué componentes React y funciones de JavaScript realizan el procesamiento.
Incluye comandos exactos de instalación y ejecución.
La demostración debe funcionar localmente, sin depender de servicios externos durante la exposición, salvo la instalación inicial de dependencias. Esto incluye fuentes y logotipos, que deben estar en el proyecto.
5. Sección en inglés
Incluye diapositivas completamente en inglés que resuman uno de los temas principales, preferentemente Conversion from NFA to DFA o Finite Automata and Their Applications.
La sección debe incluir:
• Definiciones técnicas.
• Explicación del procedimiento.
• Un ejemplo breve.
• Terminología correcta.
• Un guion oral apropiado para un estudiante universitario.
• Una versión de apoyo en español.
Integra estas diapositivas en la misma instancia de Reveal.js y conserva el diseño visual y el marco institucional. La pestaña "English" del marco y una etiqueta discreta "EN" en las diapositivas distinguen esta sección.
6. Arquitectura del proyecto
Organiza el código en componentes reutilizables. Utiliza la siguiente estructura como referencia y ajústala según las necesidades reales.
automatas-finitos/
├── public/
│   └── assets/            # logotipos del ITESI y TecNM (aportados por el usuario)
├── src/
│   ├── components/
│   │   ├── RevealPresentation.jsx
│   │   ├── InstitutionalFrame.jsx
│   │   ├── StateDiagram.jsx
│   │   ├── TransitionTable.jsx
│   │   ├── AutomatonSimulator.jsx
│   │   ├── StepController.jsx
│   │   └── CodePanel.jsx
│   ├── slides/
│   │   ├── Introduction.jsx
│   │   ├── Topic31.jsx
│   │   ├── Topic32.jsx
│   │   ├── Topic33.jsx
│   │   ├── Topic34.jsx
│   │   ├── Topic35.jsx
│   │   ├── EnglishSection.jsx
│   │   └── Conclusions.jsx
│   ├── automata/
│   │   ├── definitions.js
│   │   ├── conversion.js
│   │   ├── minimization.js
│   │   └── simulation.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── presentation.css
│   │   └── diagrams.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
No crees archivos vacíos ni componentes innecesarios. La estructura final debe corresponder al código entregado.
Requisitos técnicos
• Utiliza componentes funcionales y JSX.
• Separa la lógica de los autómatas de los componentes visuales.
• Usa useState para gestionar el estado interactivo.
• Usa useEffect y useRef para la integración con Reveal.js cuando corresponda.
• Inicializa y destruye correctamente la instancia de Reveal.js.
• Evita listeners duplicados y problemas de montaje con React Strict Mode.
• Mantén consistentes los datos de los diagramas y las tablas.
• Maneja cadenas vacías, símbolos no válidos y transiciones inexistentes.
• Asegura la accesibilidad básica de controles y entradas.
• No uses funciones o métodos de Reveal.js que no estén disponibles en la versión instalada.
7. Entregables obligatorios
Entrega el proyecto en el siguiente orden:
1. Índice de diapositivas.
2. Proyecto React completo y ejecutable con Vite.
3. Configuración e integración funcional de Reveal.js.
4. Componentes y estilos CSS completos, incluido el marco institucional.
5. Contenido de cada diapositiva y guion del expositor.
6. Diagramas y tablas de transiciones.
7. Desarrollo matemático de la conversión y minimización.
8. Construcción de Thompson por etapas.
9. Simulador de autómata funcional.
10. Pruebas válidas e inválidas.
11. Sección en inglés y versión de apoyo en español.
12. Conclusión y bibliografía académica.
13. Instrucciones para instalar dependencias y ejecutar el proyecto, y lista de los archivos de logotipo que el usuario debe colocar en public/assets/.
Si el proyecto es demasiado extenso para una sola respuesta, entrégalo en partes numeradas. No omitas archivos ni sustituyas el código por comentarios como "resto del código aquí". Las partes deben integrarse en un único proyecto funcional.
8. Verificación final
Antes de entregar el proyecto, comprueba que:
• React.js y Reveal.js estén integrados correctamente.
• Vite pueda iniciar la aplicación sin errores.
• La navegación, los controles, el progreso y las transiciones funcionen.
• Las pestañas del marco institucional naveguen mediante la API de Reveal.js y reflejen la diapositiva actual.
• Las cinco secciones académicas estén cubiertas.
• Los ejemplos matemáticos sean correctos.
• Los diagramas coincidan con las tablas y el código.
• Las simulaciones procesen entradas reales.
• El estado interactivo no se rompa al navegar.
• La sección en inglés esté completa.
• Los logotipos aparezcan sin deformarse, sobre la franja blanca, y la presentación no falle si faltan.
• Los colores respeten el significado fijo definido y el contraste sea suficiente.
• Las fuentes y los recursos carguen sin conexión.
• La demostración pueda ejecutarse localmente en Visual Studio Code.
• Todas las dependencias estén declaradas en package.json.
Resultado esperado: una presentación web universitaria con la identidad visual del ITESI, profesional e interactiva, desarrollada con React.js, Vite y Reveal.js, que explique los autómatas finitos y permita demostrar su diseño, conversión, minimización e implementación mediante ejemplos funcionales.