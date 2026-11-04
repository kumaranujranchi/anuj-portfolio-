import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger } from '../utils/animations';

export default function TestimonialsSection() {
  const [ti, setTi] = useState(0);
  const tests = portfolioData.testimonials;
  const current = tests[ti];

  const sectionRef = useRef(null);
  const figureRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const metricRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(figureRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

  const changeTestimonial = (nextIndex, direction = 1) => {
    if (nextIndex === ti) return;

    // Smooth GSAP slide dissolve
    const tl = gsap.timeline();
    tl.to([quoteRef.current, authorRef.current, metricRef.current], {
      opacity: 0,
      x: direction * -25,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        setTi(nextIndex);
      }
    })
    .fromTo([quoteRef.current, authorRef.current, metricRef.current],
      { opacity: 0, x: direction * 25 },
      { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out', stagger: 0.05 }
    );
  };

  const prev = () => changeTestimonial((ti + tests.length - 1) % tests.length, -1);
  const next = () => changeTestimonial((ti + 1) % tests.length, 1);

  return (
    <section ref={sectionRef} className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header with Nav Arrows */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="eyebrow">Testimonials</span>
            <h2 className="h2">Clients on the results</h2>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button 
              type="button" 
              className="btn btn-s" 
              style={{ width: '48px', padding: 0 }} 
              aria-label="Previous testimonial" 
              onClick={prev}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button 
              type="button" 
              className="btn btn-s" 
              style={{ width: '48px', padding: 0 }} 
              aria-label="Next testimonial" 
              onClick={next}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <figure 
          ref={figureRef}
          className="card two" 
          style={{
            background: 'var(--bg)',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
            gap: '40px',
            alignItems: 'center',
            position: 'relative',
            boxShadow: '0 20px 60px -30px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Quote & Author */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="var(--acc)" aria-hidden="true">
              <path d="M3 21c0-5 1-9 5-12l1.500 1.800C7.500 12.500 7 14 7 15.500h3V21H3zm10 0c0-5 1-9 5-12l1.500 1.800C17.500 12.500 17 14 17 15.500h3V21h-7z"></path>
            </svg>
            <blockquote 
              ref={quoteRef}
              className="disp" 
              style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.35, fontWeight: 500 }}
            >
              {current.quote}
            </blockquote>
            <figcaption ref={authorRef} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className="tile" style={{ width: '52px', height: '52px', borderRadius: '50%', fontSize: '14px' }}>
                {current.ini}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontWeight: 600 }}>{current.name}</strong>
                <span className="mu" style={{ fontSize: '14px' }}>{current.role}</span>
              </span>
            </figcaption>
          </div>

          {/* Impact Metric Callout */}
          <div 
            ref={metricRef}
            style={{
              background: 'var(--s1)',
              border: '1px solid var(--ln)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <span className="mono mu" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>{current.mk}</span>
            <span className="mono acc" style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {current.mv}
            </span>
          </div>
        </figure>

        {/* Carousel Indicator Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
          {tests.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === ti}
              onClick={() => changeTestimonial(i, i > ti ? 1 : -1)}
              style={{
                width: '44px',
                height: '44px',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{
                width: i === ti ? '28px' : '8px',
                height: '8px',
                borderRadius: '99px',
                background: i === ti ? 'var(--acc)' : 'var(--ln)',
                transition: 'all 0.25s ease'
              }}></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
