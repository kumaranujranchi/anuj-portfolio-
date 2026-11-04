import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger, init3DTilt, initMagneticButton } from '../utils/animations';

export default function Hero() {
  const [t, setT] = useState(0);

  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);
  const dashboardRef = useRef(null);
  const dashboardCardRef = useRef(null);
  const portraitRef = useRef(null);
  const primaryBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial values counter animation
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        setT(1);
      } else {
        const start = performance.now();
        let frameId;
        const step = (now) => {
          const progress = Math.min(1, (now - start) / 1600);
          setT(1 - Math.pow(1 - progress, 3));
          if (progress < 1) {
            frameId = requestAnimationFrame(step);
          }
        };
        frameId = requestAnimationFrame(step);
      }

      // 2. Cinematic Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.hero-eyebrow', 
        { opacity: 0, y: -16, letterSpacing: '0.25em' },
        { opacity: 1, y: 0, letterSpacing: '0.14em', duration: 0.9 }
      )
      .fromTo('.hero-word',
        { y: '110%', opacity: 0, rotateZ: 2 },
        { y: '0%', opacity: 1, rotateZ: 0, duration: 1.1, stagger: 0.06 },
        '-=0.6'
      )
      .fromTo(leadRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(ctaRef.current?.children || [],
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' },
        '-=0.6'
      )
      .fromTo(dashboardCardRef.current,
        { opacity: 0, scale: 0.92, rotateY: -10, rotateX: 6, transformPerspective: 1200 },
        { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, duration: 1.3, ease: 'power3.out' },
        '-=1.2'
      )
      .fromTo(portraitRef.current,
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'back.out(1.4)' },
        '-=0.8'
      );

      // 3. Subtle floating idle animation on portrait badge
      gsap.to(portraitRef.current, {
        y: '-=10',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 4. ScrollTrigger Parallax on Dashboard & Portrait
      gsap.to(dashboardCardRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(portraitRef.current, {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // 5. Interactive 3D tilt on mousemove
      if (dashboardRef.current && dashboardCardRef.current) {
        init3DTilt(dashboardRef.current, dashboardCardRef.current, 7);
      }

      // 6. Magnetic button effect
      if (primaryBtnRef.current) {
        initMagneticButton(primaryBtnRef.current, 0.25);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const line = (pts, w, h, pad) => {
    const mx = Math.max(...pts), mn = Math.min(...pts);
    return pts.map((v, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - pad - ((v - mn) / (mx - mn || 1)) * (h - pad * 2);
      return (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  };

  const f = (val, decimals) => (val * t).toFixed(decimals);

  const kpis = portfolioData.kpis.map((k) => {
    let displayVal = '';
    if (k.prefix) displayVal += k.prefix;
    displayVal += f(k.targetValue, k.formatDecimals);
    if (k.unit) displayVal += k.unit;

    return {
      ...k,
      displayVal,
      spark: line(k.pts, 120, 28, 3)
    };
  });

  const rev = portfolioData.heroChart.revenueSeries;
  const spd = portfolioData.heroChart.spendSeries;
  const all = rev.concat(spd);
  const mx = Math.max(...all);
  const mn = Math.min(...all);

  const pathFor = (arr) => arr.map((v, i) => {
    const x = (i / (arr.length - 1)) * 520;
    const y = 180 - ((v - mn) / (mx - mn)) * 150;
    return (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }).join(' ');

  const heroLine = pathFor(rev);
  const heroArea = `${heroLine} L520 190 L0 190 Z`;
  const heroSpend = pathFor(spd);
  const heroEndY = 180 - ((rev[rev.length - 1] - mn) / (mx - mn)) * 150;

  // Words for the split headline animation
  const headlineWords = [
    { text: 'I', acc: false },
    { text: 'turn', acc: false },
    { text: 'ad', acc: false },
    { text: 'spend', acc: false },
    { text: 'into', acc: false },
    { text: 'predictable', acc: true },
    { text: 'revenue.', acc: true }
  ];

  return (
    <section ref={heroRef} id="top" className="gridbg" style={{ position: 'relative', padding: '72px 0 64px', overflow: 'hidden' }}>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
          gap: '72px',
          alignItems: 'center'
        }}>
          {/* Left Column: Headlines & Intro */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="hero-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="pulse"></span>
              <span className="eyebrow">{portfolioData.profile.title}</span>
            </div>

            {/* Split headline with overflow-hidden mask for high-end text reveal */}
            <h1 className="h1" ref={headlineRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 14px' }}>
              {headlineWords.map((w, idx) => (
                <span key={idx} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
                  <span 
                    className={`hero-word ${w.acc ? 'acc' : ''}`} 
                    style={{ display: 'inline-block', transformOrigin: 'bottom left' }}
                  >
                    {w.text}
                  </span>
                </span>
              ))}
            </h1>

            <p ref={leadRef} className="lead" style={{ maxWidth: '520px' }}>
              {portfolioData.profile.lead}
            </p>

            <div ref={ctaRef} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a ref={primaryBtnRef} className="btn btn-p" href="#contact">
                Book a Free Audit
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a className="btn btn-s" href="#work">
                See Case Studies
              </a>
            </div>

            <p className="mono mu" style={{ fontSize: '13px' }}>
              {portfolioData.profile.location}
            </p>
          </div>

          {/* Right Column: Live Interactive Dashboard Mockup */}
          <div ref={dashboardRef} style={{ position: 'relative', paddingBottom: '24px', perspective: '1200px' }}>
            {/* Ambient Glow backdrop */}
            <div 
              style={{
                position: 'absolute',
                inset: '-50px -30px',
                background: 'radial-gradient(closest-side, var(--glow), transparent)',
                opacity: 0.65,
                pointerEvents: 'none',
                filter: 'blur(30px)'
              }} 
              aria-hidden="true" 
            />

            <div 
              ref={dashboardCardRef} 
              className="glass" 
              style={{
                position: 'relative',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 'var(--sh)',
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              {/* Dashboard Subheader */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <span className="mono" style={{ fontSize: '12px', color: 'var(--mu)', letterSpacing: '0.05em' }}>
                  CAMPAIGN OVERVIEW · LAST 90 DAYS
                </span>
                <span className="badge badge-a">Sample data</span>
              </div>

              {/* 4 KPI Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
                gap: '12px'
              }}>
                {kpis.map((k, idx) => (
                  <div key={idx} style={{
                    background: 'var(--s1)',
                    border: '1px solid var(--ln)',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'border-color 0.25s, transform 0.25s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--acc)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ln)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontSize: '12px', color: 'var(--mu)' }}>{k.label}</span>
                      <span className="mono acc" style={{ fontSize: '12px' }}>{k.delta}</span>
                    </div>
                    <div className="mono" style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                      {k.displayVal}
                    </div>
                    <svg viewBox="0 0 120 28" width="100%" height="28" preserveAspectRatio="none" aria-hidden="true">
                      <path 
                        className="draw" 
                        pathLength="1" 
                        d={k.spark} 
                        fill="none" 
                        stroke="var(--acc)" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Revenue vs Spend Line Chart */}
              <div style={{
                background: 'var(--s1)',
                border: '1px solid var(--ln)',
                borderRadius: '14px',
                padding: '16px 16px 10px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>Revenue vs. ad spend</span>
                  <span className="mono mu" style={{ fontSize: '12px', display: 'flex', gap: '14px' }}>
                    <span><span style={{ color: 'var(--acct)' }}>━</span> Revenue</span>
                    <span>╌ Spend</span>
                  </span>
                </div>

                <svg viewBox="0 0 520 190" width="100%" role="img" aria-label="Line chart: revenue rising steadily above ad spend over 90 days">
                  <g stroke="var(--ln)" strokeWidth="1">
                    <path d="M0 30H520M0 80H520M0 130H520M0 180H520"></path>
                  </g>
                  <path className="fadein" d={heroArea} fill="var(--acc)" opacity="0.13"></path>
                  <path d={heroSpend} fill="none" stroke="var(--mu)" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round"></path>
                  <path className="draw" pathLength="1" d={heroLine} fill="none" stroke="var(--acc)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle className="fadein" cx="520" cy={heroEndY} r="5" fill="var(--acc)"></circle>
                </svg>
              </div>
            </div>

            {/* Overlaid Floating Portrait Card with Parallax */}
            <div 
              ref={portraitRef}
              className="portrait" 
              style={{
                position: 'absolute',
                left: '-52px',
                bottom: '-30px',
                width: '150px',
                height: '188px',
                borderRadius: '20px',
                border: '1px solid var(--ln)',
                background: 'linear-gradient(160deg, var(--s2), var(--s1))',
                overflow: 'hidden',
                boxShadow: 'var(--sh)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                zIndex: 2,
                willChange: 'transform'
              }}
            >
              <img 
                src="/anuj-portrait.jpg" 
                alt="Anuj Kumar" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center'
                }} 
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11,13,18,0.7) 0%, transparent 45%)',
                  pointerEvents: 'none'
                }}
              />
              <span className="mono" style={{ position: 'relative', fontSize: '10px', letterSpacing: '0.12em', color: '#FFFFFF', paddingBottom: '8px', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                ANUJ KUMAR
              </span>
            </div>
          </div>
        </div>

        {/* Trust Strip with Staggered Entrance */}
        <div className="hero-trust" style={{ marginTop: '88px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--mu)' }}>Trusted by fast-growing brands</span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
            gap: '16px',
            width: '100%'
          }}>
            {portfolioData.clients.map((client, idx) => (
              <div 
                key={idx} 
                className="mono" 
                style={{
                  height: '56px',
                  border: '1px dashed var(--ln)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  color: 'var(--tx)',
                  fontWeight: 500,
                  background: 'color-mix(in srgb, var(--s1) 50%, transparent)',
                  transition: 'border-color 0.2s, transform 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--acc)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ln)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
