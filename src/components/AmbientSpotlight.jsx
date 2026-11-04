import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AmbientSpotlight() {
  const spotRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) return;

    const spot = spotRef.current;
    if (!spot) return;

    // Smooth mouse coordinates with GSAP quickTo
    const xTo = gsap.quickTo(spot, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(spot, 'y', { duration: 0.6, ease: 'power3.out' });

    let isVisible = false;

    const handleMouseMove = (e) => {
      if (!isVisible) {
        gsap.to(spot, { opacity: 1, duration: 0.4 });
        isVisible = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to(spot, { opacity: 0, duration: 0.4 });
      isVisible = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        margin: '-300px 0 0 -300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--glow) 0%, rgba(198, 244, 50, 0.04) 35%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0,
        willChange: 'transform, opacity',
        mixBlendMode: 'screen'
      }}
      aria-hidden="true"
    />
  );
}

