import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation with card glow
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Animated numbers count-up
      statRefs.current.forEach((el, index) => {
        if (!el) return;

        // Animate counter values
        if (index === 0) { // ₹50Cr+
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 50,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            },
            onUpdate: () => {
              el.innerText = `₹${Math.round(obj.val)}Cr+`;
            }
          });
        } else if (index === 1) { // 4.8x
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 4.8,
            duration: 2.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            },
            onUpdate: () => {
              el.innerText = `${obj.val.toFixed(1)}x`;
            }
          });
        } else if (index === 2) { // -42%
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 42,
            duration: 2.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            },
            onUpdate: () => {
              el.innerText = `-${Math.round(obj.val)}%`;
            }
          });
        } else if (index === 3) { // 320+
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 320,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            },
            onUpdate: () => {
              el.innerText = `${Math.round(obj.val)}+`;
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="results" style={{ padding: '80px 0 0' }}>
      <div className="wrap">
        <div 
          ref={cardRef} 
          className="card" 
          style={{
            padding: '8px',
            borderRadius: '24px',
            boxShadow: '0 20px 50px -20px var(--glow)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))'
          }}>
            {portfolioData.stats.map((s, idx) => (
              <div 
                key={idx} 
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderRight: idx < portfolioData.stats.length - 1 ? '1px solid var(--ln)' : 'none',
                  transition: 'background 0.25s, transform 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--s2) 60%, transparent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span 
                  ref={(el) => (statRefs.current[idx] = el)}
                  className="mono acc" 
                  style={{
                    fontSize: 'clamp(34px, 4vw, 52px)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                  }}
                >
                  {s.v}
                </span>
                <span className="mu" style={{ fontSize: '15px' }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
