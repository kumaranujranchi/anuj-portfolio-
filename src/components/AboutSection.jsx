import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function AboutSection() {
  const { profile } = portfolioData;
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Portrait entrance with tilt
      gsap.fromTo(portraitRef.current,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      // 2. Content entrance
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
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
    <section ref={sectionRef} id="about" className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)' }}>
      <div 
        className="wrap two" 
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 400px) minmax(0, 1fr)',
          gap: '72px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Portrait Frame */}
        <div 
          ref={portraitRef}
          style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            borderRadius: '24px',
            border: '1px solid var(--ln)',
            background: 'linear-gradient(160deg, var(--s2), var(--bg))',
            overflow: 'hidden',
            boxShadow: 'var(--sh)',
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src="/anuj-about.jpg" 
            alt="Anuj Kumar" 
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 10%'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11,13,18,0.7) 0%, transparent 40%)',
              pointerEvents: 'none'
            }}
          />
          <span className="mono" style={{ position: 'absolute', left: '20px', bottom: '18px', fontSize: '11px', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            ANUJ KUMAR · PERFORMANCE MARKETER
          </span>
        </div>

        {/* Right Column: Bio & Core Philosophy */}
        <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px', willChange: 'transform, opacity' }}>
          <span className="eyebrow">About me</span>
          <h2 className="h2">Fifteen years of making marketing answer for its numbers.</h2>
          
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} className="lead" style={{ fontSize: '17px' }}>
              {paragraph}
            </p>
          ))}

          <blockquote 
            className="disp" 
            style={{
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: 1.3,
              padding: '20px 24px',
              border: '1px solid var(--ln)',
              borderRadius: '16px',
              background: 'var(--bg)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }}
          >
            “Every rupee should be <span className="acc">accountable.</span>”
          </blockquote>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {profile.industries.map((ind, idx) => (
              <span key={idx} className={`badge ${idx === 0 ? 'badge-a' : ''}`}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
