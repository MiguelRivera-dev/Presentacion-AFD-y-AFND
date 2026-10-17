# Guion Académico y Plan de Exposición Universitaria
## Asignatura: Lenguajes y Autómatas I (Quinto Semestre)
## Instituto Tecnológico Superior de Irapuato (ITESI)
### Competencia No. 3: *Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema*
**Tiempo Estimado:** 20 a 30 minutos (Planificado: 25.5 minutos)  
**Formato:** Proyección interactiva web con React.js, Spectacle y Vite  

---

## 1. Cronograma y Distribución de Tiempos (22 Diapositivas · 25:30 minutos)

| No. | Sección / Diapositiva | Tiempo | Enfoque Pedagógico y Acciones en Pantalla |
| :---: | :--- | :---: | :--- |
| **01** | Portada Institucional (Comunicado) | 1:00 min | Apertura formal, mención de la asignatura, docente (JUAN PABLO SERRANO RUBIO), institución y objetivo de la Competencia No. 3. |
| **02** | Mosaico Temático de la Unidad | 1:00 min | Resumen de los 5 subtemas (3.1 a 3.5), caso de estudio práctico y arquitectura de software de la presentación. |
| **03** | Divisoria 3.1: Autómatas y Clasificación | 0:30 min | Introducción al concepto de modelo formal con memoria finita. |
| **04** | Tema 3.1: Quíntupla Formal $M=(Q, \Sigma, \delta, q_0, F)$ | 1:15 min | Desglose formal de los 5 elementos y aplicaciones industriales en compiladores, protocolos de red y circuitos digitales. |
| **05** | Tema 3.1: AFD vs. AFND y Equivalencia | 1:15 min | Mapeo determinista vs. conjunto potencia $\mathcal{P}(Q)$; Teorema Fundamental de Lenguajes Regulares ($L_{AFD} = L_{AFND} = \text{REG}$). |
| **06** | Tema 3.1: Simulador Interactivo '01' | 1:45 min | **Acción:** Probar en vivo '101' (Aceptada) y '100' (Rechazada); observar la cinta y los nodos activos. |
| **07** | Divisoria 3.2: Conversión AFND a AFD | 0:30 min | Justificación técnica: eliminación del no determinismo para ejecución en hardware real. |
| **08** | Tema 3.2: Construcción de Subconjuntos y Cota $2^n$ | 1:15 min | Algoritmo de Rabin-Scott, cerradura-$\epsilon$ y justificación matemática de la cota $2^n$ en el peor de los casos. |
| **09** | Tema 3.2: Stepper Interactivo (Paso a Paso) | 2:00 min | **Acción:** Avanzar por las 4 etapas mostrando los superestados $A=\{q_0\}$, $B=\{q_0, q_1\}$ y $C=\{q_0, q_2\}$ en el diagrama dual. |
| **10** | Tema 3.2: Verificación de Equivalencia de Cadenas | 1:00 min | **Acción:** Probar simultáneamente 'ab', 'aab', 'bab' vs 'aba', 'b', 'ba' en ambos modelos para validar igualdad de lenguaje. |
| **11** | Divisoria 3.3: Expresiones Regulares mediante AFND | 0:30 min | Puente entre la especificación algebraica declarativa y el autómata ejecutable. |
| **12** | Tema 3.3: Operadores e Invariantes de Thompson | 1:15 min | Construcción inductiva para unión, concatenación y cerradura de Kleene con complejidad $O(m)$ e invariante de único estado inicial y final. |
| **13** | Tema 3.3: Stepper de Construcción para $(a \mid b)^* a$ | 1:45 min | **Acción:** Mostrar la integración modular del autómata de 10 estados con arcos de salto y retorno $\epsilon$; probar cadenas válidas e inválidas. |
| **14** | Divisoria 3.4: Minimización de Estados de un AFD | 0:30 min | Importancia de la minimización: reducción de tablas en memoria caché L1 y Flip-Flops en hardware digital ($\lceil \log_2 |Q| \rceil$). |
| **15** | Tema 3.4: Estados Inalcanzables y Myhill-Nerode | 1:15 min | Eliminación de nodos inalcanzables vía BFS/DFS, clases de equivalencia de Moore y Teorema de Myhill-Nerode. |
| **16** | Tema 3.4: Stepper de Minimización (6 a 3 Estados) | 2:00 min | **Acción:** Explicar el modelo reconocedor de cadenas binarias no vacías de longitud par; purgar $q_5$, refinar particiones $P_0$ y $P_1$ y colapsar bifurcaciones redundantes. |
| **17** | Divisoria 3.5: Aplicaciones y Caso de Estudio | 0:30 min | Introducción al análisis léxico en compiladores reales. |
| **18** | Tema 3.5: Especificación del Tokenizador Numérico | 1:15 min | Expresión regular completa, quíntupla con estados finales diferenciados ($q_2$ int, $q_4$ float, $q_7$ sci) y estado de error `dead`. |
| **19** | Tema 3.5: Simulador en Vivo del Analizador Léxico | 2:00 min | **Acción:** Probar presets `-3.14159` (float), `42` (int), `1.05e-4` (sci) y `3.` (rechazo inmediato por falta de mantisa). |
| **20** | Sección 4: Demostración en Vivo en VS Code | 1:15 min | Explicar el código en `src/automata/simulation.js`, desacoplamiento entre lógica formal y renderizado, y ejecución local con Vite. |
| **21** | Conclusiones: Pipeline y Logro de Competencia | 1:00 min | Síntesis integral de la cadena Regex $\to$ Thompson $\to$ Rabin-Scott $\to$ Moore $\to$ Software de Producción. Logro de la Competencia No. 3. |
| **22** | Bibliografía Académica Formal | 0:45 min | Citas en formato APA (Hopcroft, Sipser, Aho y Linz) y despedida formal de la exposición. |

**Tiempo Total Acumulado:** 25 minutos y 30 segundos (rango óptimo entre 20 y 30 minutos).

---

## 2. Guion Detallado del Expositor (Texto sugerido para cada diapositiva)

### Diapositiva 01: Portada Institucional
> *"Buenos días, profesor Juan Pablo Serrano Rubio y compañeros de clase. A continuación presento la evaluación correspondiente a la Competencia Número 3 de Lenguajes y Autómatas I: 'Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema'. Hemos diseñado esta presentación como una aplicación web interactiva universitaria desarrollada con React.js, Spectacle y Vite, adoptando la identidad visual oficial del Instituto Tecnológico Superior de Irapuato (ITESI) para proyectar modelos matemáticos rigurosos y simulaciones de autómatas en tiempo real."*

### Diapositiva 02: Mosaico Temático de la Unidad
> *"Nuestra exposición cubre de forma sistemática los temas de la unidad a través de siete bloques de navegación: comenzamos con los fundamentos y la clasificación formal entre modelos deterministas y no deterministas (3.1); analizamos la conversión mediante construcción de subconjuntos de Rabin-Scott (3.2); el algoritmo inductivo de Thompson para expresiones regulares (3.3); la optimización y minimización de estados con el Teorema de Myhill-Nerode (3.4); el diseño e implementación de un analizador léxico numérico industrial (3.5); la demostración de código desacoplado en Visual Studio Code; y cerramos con la síntesis del pipeline y la bibliografía canónica."*

### Diapositiva 03: Divisoria Tema 3.1 - Autómatas Finitos y Clasificación
> *"Iniciamos con el Tema 3.1. Un autómata finito es el modelo formal de computación con memoria finita más elemental y eficiente. Su objetivo es decidir si una secuencia de símbolos pertenece a un lenguaje determinado sin requerir estructuras de almacenamiento infinito como pilas o cintas bidireccionales."*

### Diapositiva 04: Tema 3.1 - Definición Formal de la Quíntupla
> *"Formalmente, un autómata finito se define mediante una quíntupla matemática: $M = (Q, \Sigma, \delta, q_0, F)$. $Q$ representa el conjunto finito no vacío de estados; $\Sigma$ es el alfabeto finito de entrada; $\delta$ es la función de transición de estados; $q_0$ es el estado de inicio único; y $F$ es el subconjunto de estados de aceptación o finales. En la práctica de la ingeniería de software, este modelo sustenta los analizadores léxicos de compiladores, los motores de validación en protocolos de red (como TCP) y el diseño de circuitos secuenciales sincrónicos en hardware digital."*

### Diapositiva 05: Tema 3.1 - Clasificación AFD vs. AFND y Equivalencia
> *"La diferencia formal estriba en la definición de la función de transición $\delta$. En un Autómata Finito Determinista (AFD), para cada estado y cada símbolo del alfabeto existe una única transición bien definida hacia un solo estado destino: $\delta: Q \times \Sigma \to Q$. Esto garantiza un tiempo de ejecución determinista y estrictamente lineal $O(|w|)$. Por el contrario, en un Autómata Finito No Determinista (AFND), la función mapea al conjunto potencia $\mathcal{P}(Q)$ y puede incluir transiciones espontáneas sin consumir símbolo ($\epsilon$). Sin embargo, el Teorema Fundamental de Equivalencia establece que la capacidad de reconocimiento de ambos modelos es idéntica: la familia de los Lenguajes Regulares ($L_{AFD} = L_{AFND} = \text{REG}$)."*

### Diapositiva 06: Tema 3.1 - Simulador Interactivo del AFD '01'
> *(Interactuar con el simulador en pantalla)*:  
> *"En pantalla tenemos un AFD interactivo que reconoce el lenguaje sobre $\{0, 1\}$ cuyas cadenas culminan con el sufijo '01'. Si introducimos la cadena '101' y pulsamos 'Ejecutar', observamos cómo el cursor se desplaza por la cinta y el nodo activo se ilumina en color ámbar: comienza en $q_0$, permanece en $q_0$ con el '1', transita a $q_1$ con el '0', y alcanza $q_2$ con el '1'. Dado que $q_2$ tiene doble anillo verde de aceptación, el resultado es 'Aceptada'. Si en cambio probamos '100', la máquina finaliza en $q_1$, emitiendo un veredicto de rechazo."*

### Diapositiva 07: Divisoria Tema 3.2 - Conversión de AFND a AFD
> *"Pasamos al Tema 3.2. ¿Por qué es indispensable convertir un AFND a un AFD si ambos son equivalentes? Porque el hardware real de una computadora no puede duplicarse físicamente para seguir múltiples caminos en paralelo ni tolera retrocesos (backtracking) que degraden el rendimiento. Necesitamos transformar la flexibilidad no determinista en una máquina determinista ejecutable."*

### Diapositiva 08: Tema 3.2 - Algoritmo de Rabin-Scott y Cota $2^n$
> *"El algoritmo de Rabin y Scott (1959) resuelve este problema mediante la construcción de subconjuntos. La idea fundamental es agrupar los múltiples estados posibles del AFND en 'superestados' del AFD. La operación cerradura-$\epsilon$ calcula el conjunto de estados alcanzables únicamente mediante transiciones vacías. Aunque la cota teórica superior indica que un AFND de $n$ estados puede generar hasta $2^n$ estados en su AFD equivalente, en aplicaciones prácticas de ingeniería la inmensa mayoría de estos subconjuntos no son alcanzables desde el estado inicial, manteniéndose el crecimiento bajo control."*

### Diapositiva 09: Tema 3.2 - Stepper Interactivo de Conversión
> *(Avanzar progresivamente los 4 pasos del stepper)*:  
> *"Sigamos el procedimiento interactivo en pantalla:  
> • **Paso 1:** Calculamos el superestado inicial $A = \epsilon\text{-cerradura}(q_0) = \{q_0\}$.  
> • **Paso 2:** Con el símbolo 'a' descubrimos el nuevo conjunto alcanzable $B = \{q_0, q_1\}$.  
> • **Paso 3:** Desde $B$, la lectura de 'b' genera el subconjunto $C = \{q_0, q_2\}$. Dado que contiene a $q_2$ (estado final original), $C$ se convierte en estado de aceptación.  
> • **Paso 4:** Cerramos todas las transiciones posibles, completando un AFD determinista de 3 estados sin pérdida de información."*

### Diapositiva 10: Tema 3.2 - Verificación de Equivalencia de Cadenas
> *(Mostrar la tabla comparativa de cadenas)*:  
> *"En este banco de pruebas demostramos empíricamente que ambos modelos exhiben idéntico comportamiento: cadenas como 'ab', 'aab' y 'bab' son aceptadas por ambas máquinas al concluir en el patrón requerido, mientras que cadenas como 'aba', 'b' y 'ba' son rechazadas de manera unánime."*

### Diapositiva 11: Divisoria Tema 3.3 - Expresiones Regulares mediante AFND
> *"El Tema 3.3 vincula la especificación formal declarativa con el autómata físico. Una expresión regular describe un patrón algebraico; el algoritmo inductivo de Ken Thompson nos permite traducirla automáticamente a un autómata reconocedor."*

### Diapositiva 12: Tema 3.3 - Operadores e Invariantes de Thompson
> *"Propuesto en 1968, el algoritmo de Thompson traduce una expresión regular de longitud $m$ en un AFND-$\epsilon$ con un máximo de $2m$ estados en tiempo lineal $O(m)$. Su elegancia se basa en el principio de inducción estructural sobre tres operadores fundamentales: unión (con bifurcación $\epsilon$), concatenación (enlace directo) y cerradura de Kleene (lazos de repetición y bypass $\epsilon$). Cada bloque construido preserva dos invariantes esenciales: exactamente un estado inicial sin transiciones entrantes y exactamente un estado de aceptación sin transiciones salientes."*

### Diapositiva 13: Tema 3.3 - Stepper de Thompson para $(a \mid b)^* a$
> *(Recorrer el diagrama SVG de 10 estados)*:  
> *"En pantalla se aprecia la construcción completa para la expresión $(a \mid b)^* a$:  
> 1. Se generan los bloques primitivos para 'a' y 'b'.  
> 2. Se combinan mediante transiciones $\epsilon$ para formar la unión $(a \mid b)$.  
> 3. Se envuelven en el lazo de cerradura de Kleene con arco de retorno y arco de salto en vacío.  
> 4. Se concatena la transición terminal con 'a'. El banco de pruebas confirma que cadenas como 'a', 'ba' y 'abba' son reconocidas exitosamente."*

### Diapositiva 14: Divisoria Tema 3.4 - Minimización de Estados de un AFD
> *"El Tema 3.4 aborda la optimización formal de autómatas. Tener un AFD funcional no basta si este contiene estados redundantes o inaccesibles. La minimización garantiza la máxima eficiencia tanto en software como en silicio."*

### Diapositiva 15: Tema 3.4 - Estados Inalcanzables y Teorema de Myhill-Nerode
> *"El proceso de minimización opera en dos fases: primero, eliminamos estados inalcanzables explorando el grafo mediante búsqueda en anchura (BFS) desde $q_0$. Segundo, agrupamos los estados en clases de equivalencia de indistinguibilidad usando el algoritmo de particiones de Moore. De acuerdo con el Teorema de Myhill-Nerode, para todo lenguaje regular existe un único AFD mínimo salvo isomorfismo. En sistemas embebidos, esto reduce la cantidad de Flip-Flops requeridos en hardware a $\lceil \log_2 |Q| \rceil$, y en compiladores compacta las tablas de salto para alojarlas en la memoria caché L1."*

### Diapositiva 16: Tema 3.4 - Stepper de Minimización (6 a 3 Estados)
> *(Avanzar por las fases de partición)*:  
> *"Examinemos este ejemplo pedagógico: el autómata reconoce cadenas binarias no vacías de longitud par ($L = \{w \in \{0, 1\}^+ \mid |w| \text{ es par}\}$).  
> • **Fase 1:** Detectamos que el estado $q_5$ es inalcanzable (sin aristas entrantes) y lo purgamos.  
> • **Fase 2:** Partición $P_0$, separando no finales $\{q_0, q_1, q_3\}$ de finales $\{q_2, q_4\}$.  
> • **Fase 3:** Refinamiento $P_1$. El autómata original bifurcaba innecesariamente caminos separados para '0' y '1'. Al evaluar las transiciones, descubrimos que $q_1 \equiv q_3$ (ambos representan longitud impar) y $q_2 \equiv q_4$ (ambos representan longitud par).  
> • **Resultado:** Fusión en los superestados $B$ y $C$, colapsando de 6 a solo 3 estados canónicos: una optimización del 50% preservando el lenguaje."*

### Diapositiva 17: Divisoria Tema 3.5 - Aplicaciones y Caso de Estudio
> *"Llegamos al Tema 3.5: la aplicación industrial de los autómatas finitos. Desarrollamos un caso de estudio real: el analizador léxico numérico que opera en las etapas iniciales de un compilador de programación."*

### Diapositiva 18: Tema 3.5 - Especificación del Tokenizador Numérico
> *"El tokenizador procesa literales numéricos bajo la expresión regular `[+-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?`. La quíntupla formal incluye un alfabeto con dígitos, punto decimal, signos y exponentes; y define tres estados de aceptación especializados: $q_2$ para enteros (`TOKEN_INT`), $q_4$ para flotantes (`TOKEN_FLOAT`) y $q_7$ para notación científica (`TOKEN_EXP`). Si la entrada contiene caracteres no válidos o sintaxis incompleta, el autómata transita a un estado trampa `dead`."*

### Diapositiva 19: Tema 3.5 - Demostración del Simulador en Vivo
> *(Probar los botones de presets y evaluar)*:  
> *"Probemos la simulación en tiempo real:  
> • Al cargar el preset `-3.14159`: lee el signo en $q_1$, consume la parte entera en $q_2$, el punto decimal en $q_3$ y los dígitos en $q_4$, clasificando exitosamente el token como `TOKEN_FLOAT`.  
> • Con el preset científico `1.05e-4`: transita por la mantisa decimal hasta $q_4$, lee el exponente hacia $q_5$, el signo en $q_6$ y finaliza en $q_7$ como `TOKEN_EXP`.  
> • Al probar la entrada incompleta `3.`: el flujo se detiene en $q_3$; como no es un estado final, la cadena es rechazada por carecer de mantisa tras el punto."*

### Diapositiva 20: Sección 4 - Demostración de Código en VS Code
> *"En esta diapositiva mostramos la arquitectura de implementación en Visual Studio Code. La lógica formal reside en `src/automata/simulation.js`, desacoplada en funciones puras de transición $\delta(q, c)$ sin dependencias del DOM ni trucos de animación. Este desacoplamiento garantiza que los algoritmos puedan ejecutarse en entornos de producción, empaquetarse con Vite y proyectarse en aula de manera totalmente local sin requerir conexión a internet."*

### Diapositiva 21: Conclusiones - Pipeline y Logro de Competencia
> *"Sintetizamos el pipeline completo de la teoría a la práctica: una expresión regular declarativa se transforma en un AFND mediante Thompson; el no determinismo se erradica mediante la construcción de subconjuntos de Rabin-Scott; la máquina resultante se optimiza al mínimo canónico con Myhill-Nerode; y finalmente se codifica como un módulo de software de alta eficiencia. Con esto damos pleno cumplimiento a la Competencia No. 3: diseñar, verificar y codificar autómatas finitos para resolver problemas computacionales reales."*

### Diapositiva 22: Bibliografía Académica Formal
> *"Concluimos nuestra presentación respaldando el sustento teórico en las obras clásicas de la computación formal:  
> • Hopcroft, Motwani y Ullman (*Introduction to Automata Theory, Languages, and Computation*).  
> • Michael Sipser (*Introduction to the Theory of Computation*).  
> • Aho, Lam, Sethi y Ullman (*Compilers: Principles, Techniques, and Tools* - el libro del dragón).  
> • Peter Linz (*An Introduction to Formal Languages and Automata*).  
> Quedo a su disposición para la sesión de preguntas y retroalimentación docente. Muchas gracias por su atención."*

---

## 3. Banco de Preguntas y Respuestas para la Evaluación Docente

1. **¿Por qué la conversión de un AFND de $n$ estados puede producir hasta $2^n$ estados en el AFD equivalente?**
   - *Respuesta:* Porque en el algoritmo de Rabin-Scott cada estado del nuevo autómata corresponde a un subconjunto de estados del autómata original. El número total de combinaciones posibles de un conjunto con $n$ elementos es la cardinalidad de su conjunto potencia: $|\mathcal{P}(Q)| = 2^n$. Aunque en la práctica solo se visitan los subconjuntos accesibles desde el estado inicial.

2. **¿Cuál es la función exacta de la cerradura-$\epsilon$ en el algoritmo de subconjuntos?**
   - *Respuesta:* Identificar exhaustivamente todos los estados a los que la máquina puede transitar desde un conjunto dado utilizando únicamente transiciones vacías ($\epsilon$), sin consumir ningún símbolo de la cadena de entrada.

3. **¿Cómo se define formalmente que dos estados son equivalentes en el procedimiento de minimización?**
   - *Respuesta:* Dos estados $p$ y $q$ son indistinguibles o equivalentes ($p \equiv q$) si y solo si para toda cadena posible $w \in \Sigma^*$, las funciones de transición extendida $\delta^*(p, w)$ y $\delta^*(q, w)$ conducen simultáneamente a estados de aceptación o simultáneamente a estados de no aceptación.

4. **¿Por qué un compilador moderno exige un AFD en su analizador léxico en lugar de evaluar el AFND directamente?**
   - *Respuesta:* Porque la simulación de un AFND con múltiples bifurcaciones puede requerir retroceso (backtracking), elevando el tiempo de procesamiento de forma exponencial o cuadrática ante entradas extensas o erróneas. Un AFD garantiza una única lectura por carácter, logrando tiempo estrictamente lineal $O(|w|)$ y un consumo de memoria constante $O(1)$.

5. **¿Qué garantiza el algoritmo de Thompson respecto a la complejidad y el tamaño del autómata resultante?**
   - *Respuesta:* Garantiza que para cualquier expresión regular de longitud $m$, el AFND-$\epsilon$ generado tendrá como máximo $2m$ estados y a lo sumo $4m$ transiciones, construyéndose en tiempo lineal $O(m)$ y conservando siempre exactamente un único estado inicial y un único estado de aceptación.
