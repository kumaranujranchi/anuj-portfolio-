import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Attaches a magnetic spring effect to an element on mouse hover
 */
export function initMagneticButton(el, strength = 0.35) {
  if (!el || window.matchMedia('(max-width: 768px)').matches) return () => {};

  const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

  const handleMouseMove = (e) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    xTo(distanceX);
    yTo(distanceY);
  };

  const handleMouseLeave = () => {
    xTo(0);
    yTo(0);
  };

  el.addEventListener('mousemove', handleMouseMove);
  el.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    el.removeEventListener('mousemove', handleMouseMove);
    el.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * 3D Card tilt effect on hover
 */
export function init3DTilt(container, card, maxAngle = 8) {
  if (!container || !card || window.matchMedia('(max-width: 768px)').matches) return () => {};

  const rotXTo = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power2.out' });
  const rotYTo = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power2.out' });
  const scaleTo = gsap.quickTo(card, 'scale', { duration: 0.6, ease: 'power2.out' });

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1; // -1 to 1

    rotXTo(-normY * maxAngle);
    rotYTo(normX * maxAngle);
    scaleTo(1.02);
  };

  const handleMouseLeave = () => {
    rotXTo(0);
    rotYTo(0);
    scaleTo(1);
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
}

