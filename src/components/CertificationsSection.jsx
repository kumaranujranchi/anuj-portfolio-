import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsSection() {
  return (
    <section className="sec" style={{ padding: '80px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <span className="eyebrow">Certifications</span>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: '16px'
        }}>
          {portfolioData.certifications.map((c, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                borderRadius: '16px'
              }}
            >
              <span className="ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15a7 7 0 100-14 7 7 0 000 14zM8.200 13.900L7 23l5-3 5 3-1.200-9.100"></path>
                </svg>
              </span>
              <span style={{ fontWeight: 600, fontSize: '15px', lineHeight: 1.3 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

