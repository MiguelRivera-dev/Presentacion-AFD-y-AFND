# Guion Académico y Plan de Exposición Universitaria
## Asignatura: Lenguajes y Autómatas I (Quinto Semestre)
## Instituto Tecnológico Superior de Irapuato (ITESI)
### Competencia No. 3: *Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema*
**Tiempo Estimado:** 20 a 30 minutos  
**Formato:** Proyección interactiva web con React.js, Reveal.js y Vite

---

## 1. Cronograma y Distribución de Tiempos (20 – 30 minutos)

| No. | Sección / Diapositiva | Tiempo | Enfoque Pedagógico y Acciones en Pantalla |
| :---: | :--- | :---: | :--- |
| **01** | Portada Institucional (Comunicado) | 1:00 min | Presentación del estudiante, asignatura, docente e institución. Explicar el propósito de la Competencia No. 3. |
| **02** | Mosaico Temático de la Unidad | 1:00 min | Resumen de los 5 subtemas y demostración interactiva del menú de mosaico. |
| **03** | Divisoria 3.1: Autómatas y Clasificación | 0:30 min | Introducción al concepto de modelo con memoria finita. |
| **04** | Tema 3.1: Quíntupla Formal $M=(Q, \Sigma, \delta, q_0, F)$ | 1:30 min | Desglose formal de los 5 elementos y aplicaciones industriales (compiladores, redes). |
| **05** | Tema 3.1: AFD vs. AFND y Equivalencia | 1:30 min | Mapeo determinista vs. conjunto potencia $\mathcal{P}(Q)$; Teorema de Lenguajes Regulares. |
| **06** | Tema 3.1: Simulador Interactivo '01' | 2:00 min | **Acción:** Probar en vivo '101' (Aceptada) y '100' (Rechazada); observar la cinta y los nodos activos. |
| **07** | Divisoria 3.2: Conversión AFND a AFD | 0:30 min | Necesidad práctica del determinismo para el hardware real. |
| **08** | Tema 3.2: Construcción de Subconjuntos y Cota $2^n$ | 1:30 min | Algoritmo de Rabin-Scott, cerradura-$\epsilon$ y justificación de la explosión exponencial teórica. |
| **09** | Tema 3.2: Stepper Interactivo (Paso a Paso) | 2:30 min | **Acción:** Avanzar por los pasos 1, 2, 3 y 4; explicar los superestados $A=\{q_0\}$, $B=\{q_0, q_1\}$ y $C=\{q_0, q_2\}^*$. |
| **10** | Tema 3.2: Verificación de Equivalencia de Cadenas | 1:30 min | Comparar el comportamiento de ambos modelos con las cadenas 'ab', 'aab', 'bab', 'aba', 'b' y 'ba'. |
| **11** | Divisoria 3.3: Expresiones Regulares mediante AFND | 0:30 min | Paso de la descripción algebraica al autómata computacional. |
| **12** | Tema 3.3: Operadores e Invariantes de Thompson | 1:30 min | Unión, concatenación y cerradura de Kleene; complejidad lineal $O(m)$ sin retrocesos. |
| **13** | Tema 3.3: Stepper de Construcción para $(a \mid b)^* a$ | 2:30 min | **Acción:** Recorrer las etapas mostrando el armado modular de los 10 estados y probar cadenas. |
| **14** | Divisoria 3.4: Minimización de Estados | 0:30 min | Optimización para cachés de procesadores y síntesis en silicio (FPGA/ASIC). |
| **15** | Tema 3.4: Estados Inalcanzables y Myhill-Nerode | 1:30 min | Detección por grafos (DFS/BFS), clases de equivalencia $[p]$ y canonicidad del AFD mínimo. |
| **16** | Tema 3.4: Stepper de Minimización (6 a 3 Estados) | 2:30 min | **Acción:** Mostrar eliminación de $q_5$, partición $P_0$, refinamiento $P_1$ y fusión del 50%. |
| **17** | Divisoria 3.5: Aplicaciones y Caso de Estudio | 0:30 min | Introducción al analizador léxico de compiladores modernos. |
| **18** | Tema 3.5: Especificación del Tokenizador Numérico | 1:30 min | Expresión regular completa, quíntupla con estados de aceptación $q_2$ (int), $q_4$ (float), $q_7$ (sci). |
| **19** | Tema 3.5: Simulador en Vivo del Analizador Léxico | 3:00 min | **Acción:** Ejecutar presets `-3.14159` (Válido, float), `42` (Válido, int), `1.05e-4` (sci) y `3.` (Inválido). |
| **20** | Sección 4: Demostración en Vivo en VS Code | 1:30 min | Explicar el código fuente en `src/automata/simulation.js`, desacoplamiento del modelo y ejecución local. |
| **21** | Sección 5: Divisoria Technical English | 0:30 min | Presentación de la sección en idioma extranjero para el perfil de egreso. |
| **22** | Sección 5: Subset Construction & Glossary | 2:30 min | **Acción:** Discurso oral en inglés; alternar el botón *"Ver Apoyo en Español"* si se requiere apoyo. |
| **23** | Conclusiones: Pipeline y Logro de Competencia | 1:30 min | Síntesis de la cadena Regex $\to$ AFND $\to$ AFD $\to$ AFD Mínimo $\to$ Software de Producción. |
| **24** | Bibliografía Académica y Sitios de Interés | 1:00 min | Citar autores canónicos (Hopcroft, Sipser, Aho, Linz, Rabin-Scott) y despedida institucional. |

---

## 2. Guion Detallado del Expositor (Texto sugerido para cada momento)

### Diapositiva 01: Portada Institucional
> *"Buenos días, profesor y compañeros. A continuación presento la evaluación correspondiente a la Competencia Número 3 de Lenguajes y Autómatas I: 'Crear y reconocer autómatas finitos en un lenguaje de programación para la solución de un problema'. Hemos diseñado esta presentación como una aplicación web interactiva universitaria desarrollada con React.js, Reveal.js y Vite, adoptando la identidad visual oficial del ITESI para proyectar modelos matemáticos y simulaciones en tiempo real."*

### Diapositiva 02: Mosaico Temático
> *"Nuestra exposición cubre de forma exhaustiva los cinco temas del temario: iniciando con la clasificación formal entre modelos deterministas y no deterministas (3.1); la conversión mediante construcción de subconjuntos (3.2); el algoritmo inductivo de Thompson (3.3); la minimización de estados y Myhill-Nerode (3.4); y concluyendo con el diseño e implementación de un analizador léxico interactivo para números enteros, decimales y científicos (3.5), junto con una defensa técnica en inglés."*

### Diapositiva 03 & 04: Tema 3.1 - Fundamentación y Quíntupla
> *"Un autómata finito es el modelo computacional con memoria finita más eficiente que existe. Formalmente se define mediante una quíntupla matemática: $M = (Q, \Sigma, \delta, q_0, F)$. $Q$ es el conjunto finito de estados; $\Sigma$ es el alfabeto de entrada; $\delta$ es la función de transición; $q_0$ es el estado de inicio único; y $F$ es el subconjunto de estados de aceptación. En la industria del software, este modelo se implementa en escáneres léxicos de compiladores y controladores de protocolo en redes."*

### Diapositiva 05: Tema 3.1 - AFD vs. AFND
> *"La diferencia teórica fundamental radica en la función delta: en un AFD, para cada estado y cada símbolo existe exactamente una transición hacia un único estado destino: $\delta: Q \times \Sigma \to Q$, lo que garantiza tiempo de ejecución lineal $O(|w|)$ en memoria. En cambio, en un AFND, la función mapea al conjunto potencia $\mathcal{P}(Q)$ y admite transiciones espontáneas $\epsilon$. A pesar de esta aparente diferencia de poder, el Teorema Fundamental de Equivalencia demuestra que ambos modelos reconocen exactamente la misma familia de lenguajes: los Lenguajes Regulares."*

### Diapositiva 06: Tema 3.1 - Simulador Interactivo '01'
> *(Interactuar con el simulador en pantalla)*:  
> *"Probemos nuestro primer simulador interactivo. Este autómata reconoce cadenas que terminan con '01'. Si introducimos la cadena '101' y damos clic en 'Ejecutar', observamos cómo el estado activo se ilumina en color ámbar conforme avanza por la cinta: de $q_0$ a $q_0$, luego a $q_1$ con '0', y a $q_2$ con '1'. Como $q_2$ tiene doble anillo verde de aceptación, el veredicto es 'Aceptada'. Si probamos '100', el autómata finaliza en $q_1$, resultando rechazada."*

### Diapositiva 07 & 08: Tema 3.2 - Conversión de AFND a AFD
> *"¿Por qué debemos convertir un AFND a AFD? Porque una CPU real o un microcontrolador no puede duplicar su hardware en tiempo real para explorar múltiples caminos no deterministas en paralelo sin incurrir en retroceso exponencial. El algoritmo de Rabin y Scott construye superestados donde cada nuevo estado representa un subconjunto de estados originales. La cerradura-$\epsilon$ calcula todos los estados alcanzables mediante transiciones vacías. Aunque la cota teórica superior es de $2^n$ estados, en la práctica industrial solo se generan los subconjuntos alcanzables."*

### Diapositiva 09: Tema 3.2 - Stepper de Conversión
> *(Avanzar los pasos del stepper)*:  
> *"Sigamos el procedimiento interactivo:  
> • **Paso 1:** Definimos el estado inicial $A = \{q_0\}$.  
> • **Paso 2:** Con el símbolo 'a' descubrimos el nuevo subconjunto $B = \{q_0, q_1\}$.  
> • **Paso 3:** Desde $B$, con la entrada 'b' descubrimos el subconjunto $C = \{q_0, q_2\}$. Dado que $q_2$ era el estado final original, $C$ se convierte en estado de aceptación.  
> • **Paso 4:** Cerramos la tabla de transiciones obteniendo un AFD equivalente de exactamente 3 estados."*

### Diapositiva 10: Tema 3.2 - Pruebas de Equivalencia
> *"Aquí verificamos empíricamente que ambos autómatas aceptan exactamente el mismo lenguaje: cadenas como 'ab', 'aab' y 'bab' son aceptadas porque culminan con la secuencia requerida, mientras que 'aba', 'b' y 'ba' son rechazadas de forma idéntica en ambos modelos."*

### Diapositiva 11 & 12: Tema 3.3 - Expresiones Regulares y Thompson
> *"El tema 3.3 establece el puente entre el álgebra regular declarativa y el autómata físico. Toda expresión regular se compone de unión, concatenación y cerradura de Kleene. En 1968, Ken Thompson diseñó un algoritmo inductivo que garantiza que cualquier expresión regular de tamaño $m$ se traduce en un AFND de a lo sumo $2m$ estados en tiempo lineal $O(m)$, con un único estado inicial y un único estado final."*

### Diapositiva 13: Tema 3.3 - Stepper de Thompson
> *(Mostrar las etapas en el diagrama SVG)*:  
> *"Analicemos la expresión $(a \mid b)^* a$:  
> 1. Primero construimos los fragmentos base para los símbolos 'a' y 'b'.  
> 2. Implementamos la unión con bifurcaciones $\epsilon$.  
> 3. Añadimos el lazo de repetición $\epsilon$ y el bypass directo para la cerradura de Kleene.  
> 4. Concatenamos el estado terminal que reconoce la 'a' final. El banco de pruebas verifica cadenas válidas como 'a', 'ba' y 'abba'."*

### Diapositiva 14 & 15: Tema 3.4 - Minimización y Myhill-Nerode
> *"Minimizar un AFD persigue dos objetivos: eliminar estados inalcanzables (aquellos a los que no llega ningún camino desde el estado inicial) y fusionar estados indistinguibles. De acuerdo con el Teorema de Myhill-Nerode, para todo lenguaje regular existe un único autómata mínimo canónico. En software, esto reduce el tamaño de las tablas de salto para que quepan en la memoria caché L1; y en hardware digital reduce el número de Flip-Flops necesarios a $\lceil \log_2 |Q| \rceil$."*

### Diapositiva 16: Tema 3.4 - Stepper de Minimización
> *(Avanzar por las particiones)*:  
> *"En el paso 1 purgamos $q_5$ porque no tiene aristas entrantes. En el paso 2 dividimos en la partición inicial $P_0$: estados no finales $\{q_0, q_1, q_3\}$ y estados finales $\{q_2, q_4\}$. En el paso 3 analizamos las transiciones y descubrimos que $q_1 \equiv q_3$ y $q_2 \equiv q_4$. Al fusionarlos en los superestados $B$ y $C$, pasamos de 6 estados originales a solo 3 estados mínimos, logrando una reducción del 50% sin alterar el lenguaje."*

### Diapositiva 17 & 18: Tema 3.5 - Analizador Léxico Numérico
> *"Para el caso de estudio práctico, modelamos un componente central de compiladores reales: el reconocedor de constantes numéricas bajo la expresión regular `[+-]?[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?`. Definimos tres estados finales diferenciados según el tipo de token: $q_2$ para Enteros, $q_4$ para Flotantes con punto decimal, y $q_7$ para Notación Científica, además del estado trampa `dead` para abortar errores léxicos."*

### Diapositiva 19: Tema 3.5 - Demostración del Simulador en Vivo
> *(Interactuar con los botones de presets y ejecutar)*:  
> *"Probemos el simulador en vivo:  
> • Cargamos el preset `-3.14159`: el autómata lee el signo en $q_1$, avanza al entero en $q_2$, cruza el punto decimal hacia $q_3$ y procesa los dígitos decimales hasta $q_4$. El veredicto es 'Aceptada' y clasifica el token como `TOKEN_FLOAT`.  
> • Ahora probamos el preset inválido `3.`: el escaneo se detiene en $q_3$; como $q_3$ no pertenece a $F$, la cadena es rechazada explicando que faltan dígitos decimales tras el punto."*

### Diapositiva 20: Sección 4 - Demostración de Código en VS Code
> *"En esta diapositiva mostramos el visor de código integrado. El motor de simulación en `src/automata/simulation.js` implementa la función delta pura sin trucos visuales, desacoplada por completo de la capa de componentes en React. Esto permite que el proyecto se ejecute de forma 100% local en Visual Studio Code mediante `npm run dev` sin conexión externa."*

### Diapositiva 21 & 22: Sección 5 - Technical English Presentation
> *(Exponer en inglés con dicción pausada)*:  
> *"Good morning, Professor and classmates. In this section, I present the Subset Construction Algorithm in technical English. In compiler design, lexical analyzers require Deterministic Finite Automata to tokenize source code in strict linear time $O(|w|)$ without backtracking. Through the powerset construction and epsilon-closure operations, we systematically convert any non-deterministic automaton into an equivalent deterministic machine. If needed, the presentation includes a direct Spanish support toggle for the audience."*

### Diapositiva 23 & 24: Conclusiones y Bibliografía
> *"En conclusión, hemos completado con éxito la Competencia No. 3, articulando la teoría matemática de autómatas, algoritmos formales de conversión y minimización, y una implementación funcional en JavaScript dentro de una aplicación web institucional para el ITESI. Respaldamos nuestro trabajo en las obras clásicas de Hopcroft, Ullman, Sipser, el Dragon Book de Aho y Peter Linz. Quedamos a su disposición para cualquier pregunta. Muchas gracias por su atención."*

---

## 3. Banco de Preguntas y Respuestas para la Evaluación Docente

1. **¿Por qué la conversión de un AFND de $n$ estados puede producir $2^n$ estados en el AFD?**
   - *Respuesta:* Porque cada estado del nuevo autómata corresponde a un subconjunto del conjunto de estados original. El número total de subconjuntos posibles de un conjunto con $n$ elementos es la cardinalidad de su conjunto potencia: $|\mathcal{P}(Q)| = 2^n$.

2. **¿Cuál es la función exacta de la cerradura-$\epsilon$ en el algoritmo de subconjuntos?**
   - *Respuesta:* Identificar todos los estados a los que el autómata puede llegar a partir de un conjunto de estados determinado utilizando únicamente transiciones vacías ($\epsilon$), sin consumir ningún símbolo de la cadena de entrada.

3. **¿Cómo se define formalmente que dos estados son equivalentes en la minimización?**
   - *Respuesta:* Dos estados $p$ y $q$ son equivalentes ($p \equiv q$) si y solo si para toda cadena de entrada $w \in \Sigma^*$, tanto $\delta^*(p, w)$ como $\delta^*(q, w)$ son simultáneamente de aceptación o simultáneamente de rechazo.

4. **¿Por qué un compilador no puede utilizar un autómata con retroceso (backtracking) en su analizador léxico?**
   - *Respuesta:* Porque el retroceso generaría una complejidad temporal exponencial $O(2^n)$ o cúbica ante cadenas ambiguas o erróneas. Un AFD garantiza una sola lectura por carácter en tiempo estrictamente lineal $O(|w|)$.
