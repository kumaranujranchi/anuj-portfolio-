import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsListRef = useRef(null);
  const progressLineRef = useRef(null);

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

      // 2. Step items staggered reveal
      const steps = gsap.utils.toArray('.process-step-item');
      gsap.fromTo(steps,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsListRef.current,
            start: 'top 75%'
          }
        }
      );

      // 3. Scroll scrub progress bar filling across steps
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: {
              trigger: stepsListRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.5
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)', position: 'relative' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <div ref={headerRef} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
          <span className="eyebrow">My process</span>
          <h2 className="h2">Five steps from audit to scale</h2>
        </div>

        {/* Relative Container with Progress Track */}
        <div style={{ position: 'relative' }}>
          {/* Global scrub progress line spanning horizontally */}
          <div 
            style={{
              position: 'absolute',
              top: '22px',
              left: '20px',
              right: '20px',
              height: '2px',
              background: 'var(--ln)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          >
            <div 
              ref={progressLineRef}
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--acc), #60A5FA)',
                boxShadow: '0 0 12px var(--glow)'
              }}
            />
          </div>

          <ol 
            ref={stepsListRef}
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '24px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {portfolioData.steps.map((s, idx) => (
              <li 
                key={idx} 
                className="process-step-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  background: 'var(--s1)',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid var(--ln)',
                  transition: 'border-color 0.25s, transform 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--acc)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ln)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="ico" style={{ boxShadow: '0 4px 16px -4px var(--glow)' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={s.icon}></path>
                    </svg>
                  </span>
                  <span className="mono mu" style={{ fontSize: '12px', fontWeight: 600 }}>STEP {s.n}</span>
                </div>
                <h3 className="h3" style={{ fontSize: '20px' }}>{s.t}</h3>
                <p className="mu" style={{ fontSize: '15px', lineHeight: 1.55 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
