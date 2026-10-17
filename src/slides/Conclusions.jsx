import React from 'react';
import { Slide } from 'spectacle';
import MathView from '../components/MathView';

export default function Conclusions() {
  const bibliography = [
    {
      author: "Hopcroft, J. E., Motwani, R., & Ullman, J. D.",
      year: "2006",
      title: "Introduction to Automata Theory, Languages, and Computation (3rd ed.)",
      publisher: "Pearson / Addison-Wesley"
    },
    {
      author: "Sipser, M.",
      year: "2013",
      title: "Introduction to the Theory of Computation (3rd ed.)",
      publisher: "Cengage Learning"
    },
    {
      author: "Aho, A. V., Lam, M. S., Sethi, R., & Ullman, J. D.",
      year: "2006",
      title: "Compilers: Principles, Techniques, and Tools (2nd ed. - Dragon Book)",
      publisher: "Addison-Wesley"
    },
    {
      author: "Linz, P.",
      year: "2016",
      title: "An Introduction to Formal Languages and Automata (6th ed.)",
      publisher: "Jones & Bartlett Learning"
    }
  ];

  return (
    <>
      {/* 1. Conclusiones y Logro de la Competencia */}
      <Slide id="conclusions-synthesis" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Cierre Académico &bull; Síntesis</div>
            <h2 className="slide-title">Conclusiones y Logro de la Competencia No. 3</h2>
          </div>

          <div className="cols">
            <div className="card stack">
              <div className="card-title">Pipeline de la Teoría al Software</div>
              <div className="pipeline">
                <span className="node-pill">Regex</span>
                <span>&rarr; Thompson &rarr;</span>
                <span className="node-pill">AFND</span>
                <span>&rarr; Rabin-Scott &rarr;</span>
                <span className="node-pill">AFD</span>
                <span>&rarr; Moore &rarr;</span>
                <span className="node-pill" style={{ borderColor: 'var(--accept)', color: 'var(--accept)' }}>AFD Mínimo</span>
              </div>

              <ul className="list" style={{ fontSize: '20px', marginTop: '6px' }}>
                <li><strong>Equivalencia matemática:</strong> Toda expresión regular puede transformarse en un AFD ejecutable que reconoce el mismo lenguaje.</li>
                <li><strong>Garantía de rendimiento:</strong> El analizador léxico procesa tokens a velocidad de reloj en tiempo rigurosamente lineal <MathView math="O(|w|)" />.</li>
                <li><strong>Optimización del 50%:</strong> La minimización por particiones elimina redundancia sin alterar el comportamiento.</li>
              </ul>
            </div>

            <div className="card stack">
              <div className="card-title">Competencia No. 3 Alcanzada</div>
              <p style={{ margin: 0, fontSize: '22px' }}>
                Se demostró de forma teórica, algorítmica y funcional cómo <em>crear y reconocer autómatas finitos en un lenguaje de programación</em> para resolver el análisis léxico de código en compiladores.
              </p>

              <div style={{ background: 'var(--surface-2)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--accept)' }}>
                <strong style={{ color: 'var(--accept)' }}>Resultado del Proyecto:</strong>
                <p style={{ margin: '4px 0 0', fontSize: '18px', color: 'var(--text)' }}>
                  Aplicación web con Spectacle, React.js y Vite con identidad institucional del ITESI, lista para proyectarse en salón de clases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 2. Bibliografía formal y Sitios de Interés */}
      <Slide id="conclusions-biblio" padding={0} backgroundColor="var(--bg)">
        <div className="slide-inner">
          <div className="slide-head">
            <div className="slide-kicker">Cierre Académico &bull; Fuentes</div>
            <h2 className="slide-title">Bibliografía Académica y Enlaces Institucionales</h2>
          </div>

          <div className="stack" style={{ gap: '16px' }}>
            <div className="card">
              <div className="card-title">Bibliografía Formal Consultada (Formato APA)</div>
              <ul className="biblio">
                {bibliography.map((b, idx) => (
                  <li key={idx}>
                    <strong>{b.author}</strong> ({b.year}). <em>{b.title}</em>. {b.publisher}.
                  </li>
                ))}
              </ul>
            </div>

           

            <div style={{ textAlign: 'center', fontSize: '20px', color: 'var(--text-muted)' }}>
              Instituto Tecnológico Superior de Irapuato &bull; ¡Muchas gracias por su atención!
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
