import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ToolsSection() {
  return (
    <section className="sec">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
          <span className="eyebrow">Tools &amp; tech stack</span>
          <h2 className="h2">The stack behind the numbers</h2>
        </div>

        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {portfolioData.tools.map((t, idx) => (
            <li 
              key={idx} 
              className="card" 
              style={{
                padding: '0 20px 0 12px',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderRadius: '14px'
              }}
            >
              <span className="tile" style={{ width: '34px', height: '34px', fontSize: '11px' }}>
                {t.g}
              </span>
              <span style={{ fontWeight: 500, fontSize: '15px' }}>{t.n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

