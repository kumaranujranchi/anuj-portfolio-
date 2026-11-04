import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudyPage({ onBackToWork }) {
  const cs = portfolioData.detailedCaseStudy;

  // Revenue chart curve points for 13 weeks
  const rev = [18, 20, 19, 22, 21, 24, 40, 62, 84, 110, 138, 160, 176];
  const mx = Math.max(...rev);
  const pts = rev.map((v, i) => [10 + (i / (rev.length - 1)) * 380, 180 - (v / mx) * 150]);
  const revLine = pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  const revArea = `${revLine} L390 180 L10 180 Z`;

  const bar = (v, max) => {
    const h = (v / max) * 150;
    return { h, y: 180 - h, ty: 180 - h - 8 };
  };

  const ba = bar(1.8, 5);
  const aa = bar(4.6, 5);

  return (
    <div className="case-study-page">
      {/* Sub-header Navigation */}
      <div style={{
        background: 'var(--s1)',
        borderBottom: '1px solid var(--ln)',
        padding: '12px 0'
      }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            type="button"
            className="btn btn-g"
            onClick={onBackToWork}
            style={{ padding: '0 8px', fontSize: '14px', fontWeight: 600 }}
          >
            ← Back to all case studies
          </button>
          <span className="badge badge-a">Case Study Deep-Dive</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="gridbg" style={{ position: 'relative', padding: '80px 0 72px' }}>
        <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge badge-a">Case study</span>
            <span className="badge badge-a">E-commerce · D2C</span>
          </div>

          <h1 className="h1" style={{ maxWidth: '960px' }}>
            {cs.client}: from 1.8x to <span className="acc">4.6x ROAS</span> in 90 days.
          </h1>

          <p className="lead" style={{ maxWidth: '640px' }}>
            {cs.subtitle}
          </p>

          <dl 
            className="glass" 
            style={{
              margin: 0,
              padding: '24px 28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
              gap: '24px'
            }}
          >
            {cs.meta.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <dt className="mono mu" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>{m.k}</dt>
                <dd className="disp" style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 · The Challenge */}
      <section className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)', padding: '96px 0' }}>
        <div 
          className="wrap two" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)',
            gap: '72px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="eyebrow">01 · The challenge</span>
            <h2 className="h2">Spend was growing. Returns were not.</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="lead">
              {cs.client} was scaling budget across Meta and Google, but ROAS had stalled at 1.8x and every new rupee spent made the blended CPA worse.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cs.problems.map((p, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '16px', lineHeight: 1.6 }}>
                  <span className="mono acc" style={{ fontSize: '16px', marginTop: '2px' }}>-</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02 · Strategy */}
      <section className="sec">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
            <span className="eyebrow">02 · Strategy</span>
            <h2 className="h2">A funnel that spends where it earns</h2>
            <p className="lead">
              Budget was reallocated systematically across three stages, each with its own creative, audience gating, and target metric.
            </p>
          </div>

          <div 
            className="two" 
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
              gap: '56px',
              alignItems: 'center'
            }}
          >
            {/* Visual Funnel Diagram */}
            <div role="img" aria-label="Funnel diagram: prospecting, consideration, conversion" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '100%',
                height: '96px',
                clipPath: 'polygon(0 0, 100% 0, 92% 100%, 8% 100%)',
                background: 'color-mix(in srgb, var(--acc) 16%, var(--s1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <strong className="disp" style={{ fontSize: '20px' }}>Prospecting</strong>
                <span className="mono mu" style={{ fontSize: '12px' }}>Meta Advantage+ · YouTube Demand Gen</span>
              </div>

              <div style={{
                width: '84%',
                height: '96px',
                clipPath: 'polygon(0 0, 100% 0, 91% 100%, 9% 100%)',
                background: 'color-mix(in srgb, var(--acc) 34%, var(--s1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <strong className="disp" style={{ fontSize: '20px' }}>Consideration</strong>
                <span className="mono" style={{ fontSize: '12px', opacity: 0.8 }}>Retargeting · Dynamic Product Ads</span>
              </div>

              <div style={{
                width: '68%',
                height: '96px',
                clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)',
                background: 'var(--acc)',
                color: '#0B0D12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <strong className="disp" style={{ fontSize: '20px', color: '#0B0D12' }}>Conversion</strong>
                <span className="mono" style={{ fontSize: '12px', color: '#0B0D12', fontWeight: 600 }}>Search · Shopping · High-Intent PMax</span>
              </div>
            </div>

            {/* Strategy Steps List */}
            <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cs.strategy.map((s, idx) => (
                <li key={idx} className="card" style={{ padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span className="mono acc" style={{ fontSize: '20px', fontWeight: 700 }}>{s.n}</span>
                  <div>
                    <h3 className="h3" style={{ fontSize: '18px' }}>{s.t}</h3>
                    <p className="mu" style={{ fontSize: '15px', marginTop: '4px', lineHeight: 1.55 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 03 · Execution */}
      <section className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
            <span className="eyebrow">03 · Execution</span>
            <h2 className="h2">The creative that carried the scale</h2>
            <p className="lead">
              Tested formats, angles, and aspect ratios deployed across every stage of the audience lifecycle:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '20px'
          }}>
            {cs.creatives.map((c, idx) => (
              <figure key={idx} className="card" style={{ background: 'var(--bg)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  aspectRatio: c.ratio,
                  borderRadius: '12px',
                  border: '1px dashed var(--ln)',
                  background: 'var(--s2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="mono mu" style={{ fontSize: '12px' }}>{c.fmt}</span>
                </div>
                <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', padding: '0 4px 4px' }}>
                  <span style={{ fontWeight: 600, fontSize: '15px' }}>{c.name}</span>
                  <span className="badge badge-a">{c.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · Results */}
      <section className="sec">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
            <span className="eyebrow">04 · Results</span>
            <h2 className="h2">What changed in 90 days</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '20px'
          }}>
            {cs.kpis.map((k, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  boxShadow: 'inset 0 0 60px -30px var(--glow)'
                }}
              >
                <span className="mono mu" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>{k.k}</span>
                <span className="mono acc" style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>{k.v}</span>
                <span className="mu" style={{ fontSize: '14px' }}>{k.s}</span>
              </div>
            ))}
          </div>

          <div className="two" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '20px' }}>
            {/* Before vs After Bar Chart */}
            <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="h3" style={{ fontSize: '18px' }}>ROAS: before vs. after</h3>
                <span className="badge">Verified data</span>
              </div>
              <svg viewBox="0 0 400 220" width="100%" role="img" aria-label="Bar chart: ROAS rose from 1.8x before to 4.6x after">
                <g stroke="var(--ln)">
                  <path d="M30 20H390M30 70H390M30 120H390M30 170H390"></path>
                </g>
                <rect className="bar" x="90" y={ba.y} width="80" height={ba.h} rx="8" fill="var(--s2)" stroke="var(--ln)"></rect>
                <rect className="bar" x="240" y={aa.y} width="80" height={aa.h} rx="8" fill="var(--acc)"></rect>
                <text x="130" y={ba.ty} textAnchor="middle" fontSize="18" fontWeight="700" style={{ fill: 'var(--tx)', fontFamily: "'JetBrains Mono', monospace" }}>1.8x</text>
                <text x="280" y={aa.ty} textAnchor="middle" fontSize="18" fontWeight="700" style={{ fill: 'var(--tx)', fontFamily: "'JetBrains Mono', monospace" }}>4.6x</text>
                <text x="130" y="203" textAnchor="middle" fontSize="12" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>BEFORE</text>
                <text x="280" y="203" textAnchor="middle" fontSize="12" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>AFTER</text>
              </svg>
            </div>

            {/* Weekly Revenue Curve */}
            <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="h3" style={{ fontSize: '18px' }}>Weekly revenue growth</h3>
                <span className="badge">13 Weeks</span>
              </div>
              <svg viewBox="0 0 400 220" width="100%" role="img" aria-label="Line chart: weekly revenue rising sharply after the rebuild">
                <g stroke="var(--ln)">
                  <path d="M10 20H390M10 70H390M10 120H390M10 170H390"></path>
                </g>
                <path d="M200 20V180" stroke="var(--mu)" strokeDasharray="3 5"></path>
                <text x="206" y="34" fontSize="11" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>REBUILD</text>
                <path className="fadein" d={revArea} fill="var(--acc)" opacity="0.13"></path>
                <path className="draw" pathLength="1" d={revLine} fill="none" stroke="var(--acc)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <text x="10" y="203" fontSize="12" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>WK 1</text>
                <text x="390" y="203" textAnchor="end" fontSize="12" style={{ fill: 'var(--mu)', fontFamily: "'JetBrains Mono', monospace" }}>WK 13</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Key Learnings */}
      <section className="sec" style={{ background: 'var(--s1)', borderBlock: '1px solid var(--ln)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="eyebrow">05 · Key learnings</span>
            <h2 className="h2">What I would repeat on any account</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '20px'
          }}>
            {cs.learnings.map((l, idx) => (
              <article key={idx} className="card" style={{ background: 'var(--bg)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span className="mono acc" style={{ fontSize: '13px' }}>{l.n}</span>
                <h3 className="h3">{l.t}</h3>
                <p className="mu" style={{ lineHeight: 1.6 }}>{l.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="sec">
        <div className="wrap">
          <figure 
            className="card two" 
            style={{
              margin: 0,
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" fill="var(--acc)" aria-hidden="true">
                <path d="M3 21c0-5 1-9 5-12l1.500 1.800C7.500 12.500 7 14 7 15.500h3V21H3zm10 0c0-5 1-9 5-12l1.500 1.800C17.500 12.500 17 14 17 15.500h3V21h-7z"></path>
              </svg>
              <blockquote className="disp" style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.35, fontWeight: 500 }}>
                “{cs.testimonial.quote}”
              </blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="tile" style={{ width: '52px', height: '52px', borderRadius: '50%', fontSize: '14px' }}>
                  {cs.testimonial.initials}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ fontWeight: 600 }}>{cs.testimonial.name}</strong>
                  <span className="mu" style={{ fontSize: '14px' }}>{cs.testimonial.role}</span>
                </span>
              </figcaption>
            </div>

            <div style={{
              background: 'var(--s1)',
              border: '1px solid var(--ln)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span className="mono mu" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>{cs.testimonial.metricLabel}</span>
              <span className="mono acc" style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>{cs.testimonial.metricVal}</span>
              <span className="mu" style={{ fontSize: '14px' }}>{cs.testimonial.metricSub}</span>
            </div>
          </figure>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section id="cta" className="gridbg" style={{ position: 'relative', padding: '112px 0', borderTop: '1px solid var(--ln)' }}>
        <div className="wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', textAlign: 'center' }}>
          <h2 className="h1" style={{ fontSize: 'clamp(36px, 4.6vw, 64px)', maxWidth: '820px' }}>
            Want results <span className="acc">like this?</span>
          </h2>
          <p className="lead" style={{ maxWidth: '520px' }}>
            Get a free audit of your ad account and a 90-day roadmap showing where the next gains are.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="btn btn-p" href="#contact" onClick={onBackToWork}>
              Book a Free Audit
            </a>
            <button type="button" className="btn btn-s" onClick={onBackToWork}>
              Back to all case studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

