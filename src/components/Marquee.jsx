import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Marquee() {
  const mq = portfolioData.platforms.map((x) => ({ g: x.g, n: x.n }));
  // Double the list for infinite looping animation
  const marqueeItems = [...mq, ...mq, ...mq];

  return (
    <div style={{ borderBlock: '1px solid var(--ln)', background: 'var(--s1)', padding: '20px 0' }} aria-label="Ad platforms I work with">
      <div className="mqw">
        <div className="mq">
          {marqueeItems.map((m, idx) => (
            <span 
              key={idx} 
              className="disp" 
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--mu)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span className="tile" style={{ width: '32px', height: '32px', fontSize: '11px' }}>
                {m.g}
              </span>
              {m.n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

