import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function CaseStudiesSection({ onSelectCaseStudy }) {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const spans = ['span7', 'span5', 'span5', 'span7'];

  const filteredCases = portfolioData.caseStudies.filter(
    (c) => filter === 'All' || c.tags.includes(filter)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // 2. Case study cards scroll reveal
      gsap.fromTo('.case-study-card',
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%'
          }
        }
      );

      // 3. SVG Bar growth on scroll
      gsap.fromTo('.case-svg-bar',
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 70%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  const handleFilterChange = (cat) => {
    if (filter === cat) return;
    
    // Quick fade out old, set state, then GSAP context will animate in new
    gsap.to('.case-study-card', {
      opacity: 0,
      y: 15,
      duration: 0.2,
      onComplete: () => {
        setFilter(cat);
      }
    });
  };

  return (
    <section ref={sectionRef} id="work" className="sec">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header & Filter Controls */}
        <div 
          ref={headerRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '640px' }}>
            <span className="eyebrow">Featured work</span>
            <h2 className="h2">Case studies, measured in revenue</h2>
          </div>

          <div role="group" aria-label="Filter case studies" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {portfolioData.filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chip ${filter === cat ? 'active' : ''}`}
                aria-pressed={filter === cat}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div 
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '20px'
          }}
        >
          {filteredCases.map((c, i) => {
            const spanClass = spans[i % spans.length];
            const by = 82 - c.b * 0.7;
            const bh = c.b * 0.7;
            const ay = 82 - c.a * 0.7;
            const ah = c.a * 0.7;

            return (
              <article 
                key={c.id || i}
                className={`card case-study-card ${spanClass}`} 
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px',
                  willChange: 'transform, opacity'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="badge badge-a">{c.industry}</span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {c.plats.map((pl, pIdx) => (
                      <span key={pIdx} className="badge">{pl}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 className="h3">{c.client}</h3>
                  <p className="mu">
                    <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>Challenge:</strong> {c.challenge}
                  </p>
                  <p className="mu">
                    <strong style={{ color: 'var(--tx)', fontWeight: 600 }}>Result:</strong> {c.result}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '20px',
                  flexWrap: 'wrap',
                  marginTop: 'auto'
                }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {c.metrics.map((m, mIdx) => (
                      <li key={mIdx} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="mono mu" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>{m.k}</span>
                        <span className="mono acc" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>{m.v}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Before / After SVG Bar Chart with GSAP scaleY */}
                  <svg viewBox="0 0 170 100" width="170" height="100" role="img" aria-label="Before and after bar chart">
                    <path d="M10 82H160" stroke="var(--ln)"></path>
                    <rect className="case-svg-bar" x="26" y={by} width="40" height={bh} rx="5" fill="var(--s2)" stroke="var(--ln)"></rect>
                    <rect className="case-svg-bar" x="104" y={ay} width="40" height={ah} rx="5" fill="var(--acc)"></rect>
                    <text x="46" y="96" textAnchor="middle" fontSize="10" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>
                      BEFORE
                    </text>
                    <text x="124" y="96" textAnchor="middle" fontSize="10" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>
                      AFTER
                    </text>
                  </svg>
                </div>

                <button 
                  type="button"
                  onClick={() => onSelectCaseStudy(c)}
                  className="acc btn-g" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 600,
                    minHeight: '44px',
                    padding: 0,
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px'
                  }}
                >
                  Read the case study
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
