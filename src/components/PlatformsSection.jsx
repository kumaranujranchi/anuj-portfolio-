import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function PlatformsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const metersRef = useRef([]);

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

      // 2. Staggered 3D Cards wave
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40, rotateX: 12, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      // 3. Sequential meter bar fill-in
      metersRef.current.forEach((meter, idx) => {
        if (!meter) return;
        const targetWidth = portfolioData.platforms[idx]?.lv || 80;

        gsap.fromTo(meter,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="platforms" className="sec">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section Header */}
        <div ref={headerRef} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
          <span className="eyebrow">Platforms</span>
          <h2 className="h2">Platforms I master</h2>
          <p className="lead">
            One strategist across every channel, so budget moves to wherever the next rupee returns the most.
          </p>
        </div>

        {/* Platforms Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(210px, 100%), 1fr))',
          gap: '16px',
          perspective: '1000px'
        }}>
          {portfolioData.platforms.map((p, idx) => (
            <article 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className="card pcard" 
              tabIndex={0} 
              style={{
                position: 'relative',
                padding: '20px',
                minHeight: '176px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="tile">{p.g}</span>
                <h3 style={{ font: '600 17px/1.2 Space Grotesk, Inter, sans-serif' }}>
                  {p.n}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mu" style={{ fontSize: '13px' }}>Expertise</span>
                  <span className="mono" style={{ fontSize: '13px' }}>{p.lv}%</span>
                </div>
                <div className="meter">
                  <i 
                    ref={(el) => (metersRef.current[idx] = el)}
                    style={{ width: '0%' }}
                  ></i>
                </div>
              </div>

              {/* Hover / Focus Specialties Overlay */}
              <div className="spec">
                <span className="eyebrow">{p.n} specialties</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.sp.map((spec, sIdx) => (
                    <span key={sIdx} className="badge badge-a">{spec}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
