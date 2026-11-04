import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function DesignSystemPage({ onBackToHome }) {
  const { theme, toggleTheme, accent, toggleAccent } = useTheme();

  const darkTokens = [
    { n: 'Surface 0 (bg)', hex: '#0B0D12' },
    { n: 'Surface 1', hex: '#11141B' },
    { n: 'Surface 2', hex: '#181C26' },
    { n: 'Line / Border', hex: 'rgba(255,255,255,.10)' },
    { n: 'Text Primary', hex: '#F2F4F8' },
    { n: 'Text Muted', hex: '#9AA3B2' },
    { n: 'Accent Lime', hex: '#C6F432' },
    { n: 'Accent Blue', hex: '#3B82F6' }
  ];

  const lightTokens = [
    { n: 'Surface 0 (bg)', hex: '#F6F7F9' },
    { n: 'Surface 1', hex: '#FFFFFF' },
    { n: 'Surface 2', hex: '#EDEFF3' },
    { n: 'Line / Border', hex: 'rgba(11,13,18,.13)' },
    { n: 'Text Primary', hex: '#0B0D12' },
    { n: 'Text Muted', hex: '#4B5565' },
    { n: 'Accent Lime Dark', hex: '#4B6800' },
    { n: 'Accent Blue Dark', hex: '#1D4ED8' }
  ];

  const typeScale = [
    { sample: 'Predictable revenue', spec: 'Space Grotesk · 700 · 76px', fam: 'Space Grotesk', w: 700, size: 48, ls: '-.035em' },
    { sample: 'Platforms I master', spec: 'Space Grotesk · 700 · 44px', fam: 'Space Grotesk', w: 700, size: 36, ls: '-.03em' },
    { sample: 'What I do for your account', spec: 'Space Grotesk · 600 · 22px', fam: 'Space Grotesk', w: 600, size: 22, ls: '-.02em' },
    { sample: 'Performance marketer scaling brands profitably', spec: 'Inter · 400 · 18px', fam: 'Inter', w: 400, size: 18, ls: 'normal' },
    { sample: 'Every rupee should be accountable.', spec: 'Inter · 400 · 16px', fam: 'Inter', w: 400, size: 16, ls: 'normal' },
    { sample: 'ROAS · 4.6x · +12.4%', spec: 'JetBrains Mono · 700 · 14px', fam: 'JetBrains Mono', w: 700, size: 14, ls: '.05em' }
  ];

  const icons = [
    'M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
    'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3',
    'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.900M16 3.100a4 4 0 010 7.800',
    'M12 2l10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    'M16 18l6-6-6-6M8 6l-6 6 6 6',
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2zM9 14l2 2 4-4',
    'M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z',
    'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
    'M23 6l-9.500 9.500-5-5L1 18M17 6h6v6',
    'M12 15a7 7 0 100-14 7 7 0 000 14zM8.200 13.900L7 23l5-3 5 3-1.200-9.100',
    'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
    'M20 6L9 17l-5-5'
  ];

  const space = [8, 16, 24, 32, 48, 64, 80, 112];

  return (
    <div className="design-system-page" style={{ padding: '60px 0 100px' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {/* Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button type="button" className="btn btn-g" onClick={onBackToHome} style={{ padding: '0 8px', fontWeight: 600 }}>
            ← Back to Portfolio
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="button" className="chip" onClick={toggleTheme}>
              Mode: {theme}
            </button>
            <button type="button" className="chip" onClick={toggleAccent}>
              Accent: {accent}
            </button>
          </div>
        </div>

        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span className="eyebrow">Mini design system</span>
            <h1 className="h1" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Signal. A dashboard-grade personal brand.
            </h1>
          </div>
          <p className="mu" style={{ maxWidth: '400px', fontSize: '15px', lineHeight: 1.6 }}>
            Dark first, one electric-lime accent used only for CTAs, key numbers and chart highlights. Light mode flips surfaces and darkens accent text for contrast.
          </p>
        </header>

        {/* 1. Colors */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2 className="h3">Color tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '24px' }}>
            {/* Dark tokens */}
            <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="eyebrow">Dark (default)</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
                {darkTokens.map((c, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ height: '56px', borderRadius: '12px', border: '1px solid var(--ln)', background: c.hex }}></div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '12px' }}>{c.n}</div>
                      <div className="mono mu" style={{ fontSize: '11px' }}>{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Light tokens */}
            <div style={{
              background: '#FFFFFF',
              color: '#0B0D12',
              borderRadius: '20px',
              border: '1px solid rgba(11,13,18,.13)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <span className="eyebrow" style={{ color: '#4B6800' }}>Light variant</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
                {lightTokens.map((c, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ height: '56px', borderRadius: '12px', border: '1px solid rgba(11,13,18,.13)', background: c.hex }}></div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '12px' }}>{c.n}</div>
                      <div className="mono" style={{ fontSize: '11px', color: '#4B5565' }}>{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mu" style={{ fontSize: '14px' }}>
            Alternate accent: signal blue <span className="mono" style={{ color: '#60A5FA' }}>#3B82F6</span>. Body text on every surface meets WCAG AA 4.5:1 or better contrast.
          </p>
        </section>

        {/* 2. Type Scale */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 className="h3">Type scale</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--ln)' }}>
              {typeScale.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '24px', padding: '14px 0', borderBottom: '1px solid var(--ln)' }}>
                  <span style={{ fontFamily: t.fam, fontWeight: t.w, fontSize: `${t.size}px`, lineHeight: 1.15, letterSpacing: t.ls }}>
                    {t.sample}
                  </span>
                  <span className="mono mu" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>{t.spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 className="h3">Fonts</h2>
            <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span className="mono mu" style={{ fontSize: '11px' }}>DISPLAY · SPACE GROTESK</span>
                <div className="disp" style={{ fontSize: '32px', fontWeight: 700, marginTop: '4px' }}>Aa Predictable revenue</div>
              </div>
              <div>
                <span className="mono mu" style={{ fontSize: '11px' }}>BODY · INTER</span>
                <div style={{ fontSize: '18px', marginTop: '4px' }}>Every rupee should be accountable.</div>
              </div>
              <div>
                <span className="mono mu" style={{ fontSize: '11px' }}>METRICS · JETBRAINS MONO, TABULAR</span>
                <div className="mono acc" style={{ fontSize: '32px', fontWeight: 700, marginTop: '4px' }}>0123456789 4.6x +12.4%</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Buttons & Badges */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 className="h3">Buttons</h2>
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-p">Primary</button>
                <button type="button" className="btn btn-s">Secondary</button>
                <button type="button" className="btn btn-g">Ghost</button>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="btn btn-p" style={{ boxShadow: '0 12px 32px -8px var(--glow)', transform: 'translateY(-2px)' }}>Hover State</span>
                <span className="btn btn-p" style={{ outline: '2px solid var(--acct)', outlineOffset: '3px' }}>Focus State</span>
                <span className="btn" style={{ background: 'var(--s2)', color: 'var(--mu)', cursor: 'not-allowed' }}>Disabled</span>
              </div>
              <p className="mu" style={{ fontSize: '13px' }}>48px height, 12px radius, 24px side padding. Primary CTA appears once per viewport.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 className="h3">Badges and chips</h2>
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge">Meta Ads</span>
                <span className="badge">LinkedIn</span>
                <span className="badge badge-a">E-commerce · D2C</span>
                <span className="badge badge-a">Sample data</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button type="button" className="chip active">Active Chip</button>
                <button type="button" className="chip">B2B</button>
                <button type="button" className="chip">SaaS</button>
                <button type="button" className="chip">Lead Gen</button>
              </div>
              <p className="mu" style={{ fontSize: '13px' }}>Badges are 12px monospace labels. Chips are 44px tall toggle buttons.</p>
            </div>
          </div>
        </section>

        {/* 4. Cards & Form Inputs */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="h3">Standard card</h2>
            <article className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.500 9.500-5-5L1 18M17 6h6v6"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px' }}>Hoverable surface</h3>
              <p className="mu" style={{ fontSize: '14px' }}>20px radius, 1px line border. Hover lifts 4px and tints the border with the accent.</p>
            </article>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="h3">Glow KPI card</h2>
            <div className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: 'inset 0 0 60px -30px var(--glow)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="mono mu" style={{ fontSize: '12px' }}>ROAS</span>
                <span className="mono acc" style={{ fontSize: '12px' }}>+12.4%</span>
              </div>
              <span className="mono" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em' }}>4.6x</span>
              <svg viewBox="0 0 120 28" width="100%" height="28" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 24L20 22L40 23L60 17L80 13L100 9L120 3" fill="none" stroke="var(--acc)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="h3">Form inputs</h2>
            <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="field">
                <label htmlFor="ds-a">Email address</label>
                <input className="in" id="ds-a" type="email" placeholder="you@company.com" readOnly value="sample@company.com" />
              </div>
              <div className="field">
                <label htmlFor="ds-b">Monthly ad budget</label>
                <select className="in" id="ds-b" defaultValue="₹5L - ₹20L">
                  <option>₹1L - ₹5L</option>
                  <option>₹5L - ₹20L</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Icons */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 className="h3">Icon style</h2>
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(48px, 1fr))', gap: '16px' }}>
              {icons.map((ic, idx) => (
                <span key={idx} className="ico">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={ic}></path>
                  </svg>
                </span>
              ))}
            </div>
            <p className="mu" style={{ fontSize: '13px', marginTop: '16px' }}>
              24px grid, 1.75px stroke, round caps and joins. Sits in a 44px tile tinted with 12% accent.
            </p>
          </div>
        </section>

        {/* 6. Spacing Units */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 className="h3">Spacing and layout units</h2>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            {space.map((s, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                <div style={{ width: `${s}px`, height: `${s}px`, background: 'var(--acc)', borderRadius: '3px' }}></div>
                <span className="mono mu" style={{ fontSize: '11px' }}>{s}px</span>
              </div>
            ))}
          </div>
          <p className="mu" style={{ fontSize: '14px', maxWidth: '420px' }}>
            8px base unit. 12-column responsive grid, 24px gutters, 1200px max content width. Breakpoints at 390px, 768px, 960px, 1200px and 1440px.
          </p>
        </section>
      </div>
    </div>
  );
}

