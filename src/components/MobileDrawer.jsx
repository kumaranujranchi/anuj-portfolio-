import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function MobileDrawer({ isOpen, onClose, onNavigate, currentPage }) {
  const { theme, toggleTheme, accent, toggleAccent } = useTheme();

  if (!isOpen) return null;

  const handleLinkClick = (sectionId) => {
    onClose();
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePageClick = (page) => {
    onClose();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      {/* Drawer Content */}
      <div style={{
        position: 'relative',
        marginLeft: 'auto',
        width: 'min(340px, 85vw)',
        height: '100%',
        background: 'var(--s1)',
        borderLeft: '1px solid var(--ln)',
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        overflowY: 'auto',
        boxShadow: 'var(--sh)',
        zIndex: 101
      }}>
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--ln)', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="disp" style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--acc)',
              color: '#0B0D12',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '13px'
            }}>
              AK
            </span>
            <span className="disp" style={{ fontWeight: 600, fontSize: '16px' }}>
              Anuj Kumar
            </span>
          </div>

          <button
            type="button"
            className="btn btn-s"
            onClick={onClose}
            style={{ width: '38px', minHeight: '38px', padding: 0 }}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Section Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span className="eyebrow" style={{ fontSize: '11px', marginBottom: '6px' }}>Navigation</span>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('top')}>
            Home
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('work')}>
            Featured Work
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('services')}>
            Services
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('platforms')}>
            Platforms
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('results')}>
            Impact Numbers
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('about')}>
            About Me
          </button>
          <button type="button" className="btn btn-g" style={{ justifyContent: 'flex-start', padding: '12px 14px' }} onClick={() => handleLinkClick('contact')}>
            Free Audit & Contact
          </button>
        </div>

        {/* Pages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid var(--ln)', paddingTop: '16px' }}>
          <span className="eyebrow" style={{ fontSize: '11px', marginBottom: '6px' }}>Featured</span>
          <button 
            type="button" 
            className="btn btn-s" 
            style={{ justifyContent: 'flex-start', background: currentPage === 'case-study' ? 'var(--s2)' : 'transparent' }} 
            onClick={() => handlePageClick('case-study')}
          >
            Case Study Detail
          </button>
        </div>

        {/* Theme Preferences */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ln)', paddingTop: '16px' }}>
          <span className="eyebrow" style={{ fontSize: '11px' }}>Appearance</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="chip"
              onClick={toggleTheme}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              type="button"
              className="chip"
              onClick={toggleAccent}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              {accent === 'lime' ? '🔵 Blue' : '🟢 Lime'}
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <button
            type="button"
            className="btn btn-p"
            style={{ width: '100%', minHeight: '48px' }}
            onClick={() => handleLinkClick('contact')}
          >
            Book a Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
}

