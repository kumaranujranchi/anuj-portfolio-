import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap, ScrollTrigger, initMagneticButton } from '../utils/animations';

export default function ContactSection() {
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    Meta: true,
    Google: true
  });
  const [selectedSlot, setSelectedSlot] = useState(portfolioData.slots[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    site: '',
    budget: '₹5L - ₹20L / $5K - $20K',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const formCardRef = useRef(null);
  const submitBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Columns entrance
      gsap.fromTo([leftColRef.current, formCardRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      // 2. Magnetic button effect
      if (submitBtnRef.current) {
        initMagneticButton(submitBtnRef.current, 0.2);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [submitted]);

  const togglePlatform = (plat) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [plat]: !prev[plat]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="sec gridbg">
      <div 
        className="wrap two" 
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
          gap: '64px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Audit Details & Fast Booking */}
        <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span className="eyebrow">Free audit</span>
            <h2 className="h2">Let’s scale your ads profitably</h2>
            <p className="lead">
              Send your details and I will review your account within two working days. What the free audit includes:
            </p>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {portfolioData.auditPoints.map((pt, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="ico" style={{ width: '28px', height: '28px', borderRadius: '8px', marginTop: '2px' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '15px', lineHeight: 1.5 }}>{pt}</span>
              </li>
            ))}
          </ul>

          {/* Quick Strategy Call Card */}
          <div className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span className="ico">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"></path>
                </svg>
              </span>
              <div>
                <strong style={{ fontWeight: 600 }}>Prefer to talk it through?</strong>
                <p className="mu" style={{ fontSize: '14px' }}>30-minute strategy call, video or chat.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {portfolioData.slots.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`chip mono ${selectedSlot === s ? 'active' : ''}`}
                  onClick={() => setSelectedSlot(s)}
                  style={{ fontSize: '12px', minHeight: '36px', padding: '0 12px' }}
                >
                  {s}
                </button>
              ))}
            </div>

            <a 
              className="btn btn-p" 
              href="mailto:anuj@example.com?subject=Booking%20Strategy%20Call" 
              style={{ minHeight: '44px' }}
            >
              Book a call ({selectedSlot})
            </a>
          </div>

          {/* Direct Contact Channels */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <a className="btn btn-s" href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
              </svg>
              WhatsApp
            </a>
            <a className="btn btn-s" href="mailto:anuj@example.com">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6"></path>
              </svg>
              Email
            </a>
            <a className="btn btn-s" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Audit Request Form */}
        <div ref={formCardRef}>
          {submitted ? (
            <div 
              className="card" 
              style={{
                background: 'var(--s1)',
                padding: '48px 32px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <span className="ico" style={{ width: '56px', height: '56px', borderRadius: '16px' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <h3 className="h3">Audit Request Received!</h3>
              <p className="mu" style={{ maxWidth: '380px' }}>
                Thank you, {formData.name || 'there'}! I have received your information and will review your account and get back to you within 2 working days.
              </p>
              <button 
                type="button" 
                className="btn btn-s" 
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '8px' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              className="card" 
              style={{
                background: 'var(--s1)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '24px',
                boxShadow: 'var(--sh)'
              }} 
              onSubmit={handleSubmit}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                gap: '16px'
              }}>
                <div className="field">
                  <label htmlFor="f-name">Name</label>
                  <input 
                    className="in" 
                    id="f-name" 
                    type="text" 
                    placeholder="Your name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoComplete="name" 
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input 
                    className="in" 
                    id="f-email" 
                    type="email" 
                    placeholder="you@company.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email" 
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-site">Company / website</label>
                <input 
                  className="in" 
                  id="f-site" 
                  type="text" 
                  placeholder="company.com"
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="f-budget">Monthly ad budget</label>
                <select 
                  className="in" 
                  id="f-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option>Under ₹1L / $1K</option>
                  <option>₹1L - ₹5L / $1K - $5K</option>
                  <option>₹5L - ₹20L / $5K - $20K</option>
                  <option>₹20L - ₹50L / $20K - $50K</option>
                  <option>₹50L+ / $50K+</option>
                </select>
              </div>

              <div className="field">
                <span className="lbl" id="f-plat">Platforms of interest</span>
                <div role="group" aria-labelledby="f-plat" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {portfolioData.formChips.map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      className={`chip ${selectedPlatforms[plat] ? 'active' : ''}`}
                      aria-pressed={!!selectedPlatforms[plat]}
                      onClick={() => togglePlatform(plat)}
                      style={{ fontSize: '13px', minHeight: '38px', padding: '0 14px' }}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-msg">Message</label>
                <textarea 
                  className="in" 
                  id="f-msg" 
                  placeholder="Tell me about your product, current ROAS/CPA, and goals."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                ref={submitBtnRef}
                type="submit" 
                className="btn btn-p" 
                style={{ width: '100%', minHeight: '54px', fontSize: '16px' }}
              >
                Get My Free Audit
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <p className="mu" style={{ fontSize: '13px', textAlign: 'center' }}>
                No spam. Your details are used solely to prepare the custom audit.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
