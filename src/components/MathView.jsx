import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathView({ math = '', display = false, className = '' }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        throwOnError: false,
        displayMode: display,
      });
    } catch (err) {
      console.warn("KaTeX render error:", err);
      return `<span>${math}</span>`;
    }
  }, [math, display]);

  return (
    <span
      className={`math-view ${display ? 'tex-block' : 'math-inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
