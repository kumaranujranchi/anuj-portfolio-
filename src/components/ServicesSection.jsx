import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

      // 2. Staggered card entrance
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div ref={headerRef} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
          <span className="eyebrow">Services</span>
          <h2 className="h2">What I do for your ad account</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: '20px'
        }}>
          {portfolioData.services.map((s, idx) => (
            <article 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className="card" 
              style={{
                background: 'var(--bg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s, box-shadow 0.3s',
                willChange: 'transform, opacity'
              }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector('.ico');
                if (icon) gsap.to(icon, { rotate: 8, scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector('.ico');
                if (icon) gsap.to(icon, { rotate: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
              }}
            >
              <span className="ico" style={{ transition: 'transform 0.3s ease' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.icon}></path>
                </svg>
              </span>
              <h3 className="h3">{s.t}</h3>
              <p className="mu" style={{ flex: 1, fontSize: '15px', lineHeight: 1.6 }}>{s.o}</p>
              <a 
                href="#contact" 
                className="acc" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600,
                  fontSize: '15px',
                  minHeight: '44px'
                }}
              >
                Learn more
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10"></path>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
