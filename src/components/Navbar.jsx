import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onNavigate, currentPage, onOpenMobileMenu }) {
  const { theme, toggleTheme, accent, toggleAccent } = useTheme();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'color-mix(in srgb, var(--bg) 84%, transparent)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--ln)'
    }}>
      <div className="wrap" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        minHeight: '72px'
      }}>
        {/* Brand Logo & Name */}
        <a 
          href="#top" 
          onClick={(e) => {
            if (currentPage !== 'home') {
              e.preventDefault();
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', minHeight: '44px' }} 
          aria-label="Anuj Kumar, home"
        >
          <span className="disp" style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--acc)',
            color: '#0B0D12',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '15px'
          }}>
            AK
          </span>
          <span className="disp" style={{ fontWeight: 600, fontSize: '18px' }}>
            Anuj Kumar
          </span>
        </a>

        {/* Primary Desktop Nav Links */}
        <nav className="nav-links" aria-label="Primary" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            Work
          </button>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            Services
          </button>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('platforms');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            Platforms
          </button>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('results');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            Results
          </button>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            About
          </button>
          <button 
            type="button" 
            className="btn btn-g" 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          >
            Contact
          </button>

          {/* Page Switcher Links */}
          <button 
            type="button" 
            className={`btn btn-g ${currentPage === 'case-study' ? 'acc' : ''}`}
            style={{ fontWeight: currentPage === 'case-study' ? 600 : 500 }}
            onClick={() => onNavigate('case-study')}
          >
            Case Study
          </button>
        </nav>

        {/* Right Controls: Theme Toggles & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Accent toggle button */}
          <button
            type="button"
            className="btn btn-s"
            onClick={toggleAccent}
            title={`Switch to ${accent === 'lime' ? 'Blue' : 'Lime'} accent`}
            style={{
              padding: '0 12px',
              minHeight: '38px',
              height: '38px',
              fontSize: '12px',
              borderRadius: '999px',
              gap: '6px'
            }}
          >
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: accent === 'lime' ? '#3B82F6' : '#C6F432',
              display: 'inline-block'
            }}></span>
            <span className="mono" style={{ textTransform: 'capitalize' }}>
              {accent === 'lime' ? 'Blue' : 'Lime'}
            </span>
          </button>

          {/* Dark / Light toggle button */}
          <button
            type="button"
            className="btn btn-s"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            style={{
              width: '38px',
              minHeight: '38px',
              height: '38px',
              padding: 0,
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle light or dark theme"
          >
            {theme === 'dark' ? (
              /* Sun icon for switching to light */
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              /* Moon icon for switching to dark */
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Desktop Primary CTA */}
          <button 
            type="button" 
            className="btn btn-p hide-s"
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            style={{ minHeight: '42px', padding: '0 18px', fontSize: '14px' }}
          >
            Book a Strategy Call
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            className="btn btn-s"
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            style={{
              width: '42px',
              minHeight: '42px',
              padding: 0,
              display: 'none'
            }}
            id="mobile-nav-toggle"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #mobile-nav-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}

