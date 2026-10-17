import React, { useState } from 'react';
import { Copy, Check, Code, Terminal } from 'lucide-react';

export default function CodePanel({ snippets = [], activeSnippetIndex = 0 }) {
  const [selectedTab, setSelectedTab] = useState(activeSnippetIndex);
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets[selectedTab] || snippets[0];

  const handleCopy = () => {
    if (!currentSnippet) return;
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: '#0a0f1d', borderRadius: '12px', border: '1px solid var(--border-light)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Tab bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0f172a', borderBottom: '1px solid var(--border-subtle)', padding: '0.4rem 0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
          {snippets.map((snip, idx) => (
            <button
              key={snip.title}
              onClick={() => setSelectedTab(idx)}
              style={{
                background: selectedTab === idx ? '#1e293b' : 'transparent',
                color: selectedTab === idx ? '#38bdf8' : '#94a3b8',
                border: selectedTab === idx ? '1px solid var(--border-light)' : '1px solid transparent',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Code size={13} />
              <span>{snip.fileName || snip.title}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          style={{
            background: 'transparent',
            color: copied ? '#34d399' : '#94a3b8',
            border: 'none',
            padding: '0.35rem 0.6rem',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            cursor: 'pointer'
          }}
          title="Copiar código"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copiado' : 'Copiar'}</span>
        </button>
      </div>

      {/* Code description */}
      {currentSnippet?.description && (
        <div style={{ padding: '0.5rem 1rem', background: '#131e33', fontSize: '0.78rem', color: '#94a3b8', borderBottom: '1px solid var(--border-subtle)' }}>
          {currentSnippet.description}
        </div>
      )}

      {/* Code body */}
      <pre style={{
        margin: 0,
        padding: '1rem',
        overflow: 'auto',
        flex: 1,
        fontSize: '0.82rem',
        lineHeight: 1.5,
        color: '#e2e8f0',
        fontFamily: 'var(--font-mono)'
      }}>
        <code>{currentSnippet?.code}</code>
      </pre>
    </div>
  );
}
