import React from 'react';

export default function StickyMobileCTA({ onNavigate, currentPage }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div 
      className="mobile-sticky-cta"
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 40,
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
        background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderTop: '1px solid var(--ln)',
        display: 'none'
      }}
    >
      <button 
        type="button"
        className="btn btn-p" 
        style={{ width: '100%', minHeight: '52px', fontSize: '16px', color: '#0B0D12', fontWeight: 600 }} 
        onClick={handleClick}
      >
        Book a Strategy Call
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-cta {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}

