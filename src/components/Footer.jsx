import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: 'var(--s1)', borderTop: '1px solid var(--ln)', padding: '72px 0 32px' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: '40px'
        }}>
          {/* Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="disp" style={{ fontWeight: 600, fontSize: '20px' }}>
              {portfolioData.profile.name}
            </span>
            <p className="mu" style={{ fontSize: '15px', maxWidth: '300px' }}>
              Performance marketer and paid media specialist. Predictable revenue from Meta, Google, LinkedIn, TikTok and Bing.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a className="btn btn-s" style={{ width: '44px', minHeight: '44px', padding: 0 }} href={portfolioData.profile.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </a>
              <a className="btn btn-s" style={{ width: '44px', minHeight: '44px', padding: 0 }} href={portfolioData.profile.social.x} aria-label="X" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l16 16M20 4L4 20"></path>
                </svg>
              </a>
              <a className="btn btn-s" style={{ width: '44px', minHeight: '44px', padding: 0 }} href={portfolioData.profile.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <path d="M16 11.400a4 4 0 11-7.900 1.200 4 4 0 017.900-1.200zM17.500 6.500h.01"></path>
                </svg>
              </a>
              <a className="btn btn-s" style={{ width: '44px', minHeight: '44px', padding: 0 }} href={portfolioData.profile.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.500 6.400a2.800 2.800 0 00-2-2C18.800 4 12 4 12 4s-6.800 0-8.500.5a2.800 2.800 0 00-2 2C1 8.100 1 12 1 12s0 3.900.5 5.600a2.800 2.800 0 002 2C5.200 20 12 20 12 20s6.800 0 8.500-.5a2.800 2.800 0 002-2c.5-1.700.5-5.600.5-5.600s0-3.900-.5-5.600z"></path>
                  <path d="M9.700 15.500l5.800-3.500-5.800-3.500z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="eyebrow" style={{ marginBottom: '10px', color: 'var(--mu)' }}>Quick links</span>
            <a className="mu" style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }} href="#work">Work</a>
            <a className="mu" style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }} href="#services">Services</a>
            <a className="mu" style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }} href="#platforms">Platforms</a>
            <a className="mu" style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }} href="#about">About</a>
            <a className="mu" style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }} href="#contact">Contact</a>
          </nav>

          {/* Newsletter Signup */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} onSubmit={handleSubscribe}>
            <label htmlFor="nl" className="eyebrow" style={{ color: 'var(--mu)' }}>Weekly paid ads insights</label>
            <p className="mu" style={{ fontSize: '15px' }}>One short email a week: what is working in paid media right now.</p>
            {subscribed ? (
              <span className="mono acc" style={{ fontSize: '14px' }}>✓ Subscribed successfully!</span>
            ) : (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input 
                  className="in" 
                  id="nl" 
                  type="email" 
                  placeholder="you@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ flex: '1 1 180px', width: 'auto' }}
                />
                <button type="submit" className="btn btn-p">Subscribe</button>
              </div>
            )}
          </form>
        </div>

        {/* Copyright notice */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          borderTop: '1px solid var(--ln)',
          paddingTop: '24px'
        }}>
          <span className="mu mono" style={{ fontSize: '13px' }}>
            © {new Date().getFullYear()} Anuj Kumar. All rights reserved.
          </span>
          <span className="mu mono" style={{ fontSize: '13px' }}>
            Gaya, India · Remote, worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}

