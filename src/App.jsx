import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from './components/Footer';
import AmbientSpotlight from './components/AmbientSpotlight';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  const { themeClass } = useTheme();
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#case-study') {
        setCurrentPage('case-study');
      } else if (currentPage !== 'home' && (!hash || hash.startsWith('#top') || hash.startsWith('#work') || hash.startsWith('#services') || hash.startsWith('#platforms') || hash.startsWith('#results') || hash.startsWith('#about') || hash.startsWith('#contact'))) {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'case-study') {
      window.location.hash = '#case-study';
    } else {
      window.location.hash = '#top';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudy = () => {
    handleNavigate('case-study');
  };

  const handleBackToWork = () => {
    handleNavigate('home');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`pf ${themeClass}`}>
      {/* Ambient mouse spotlight glow */}
      <AmbientSpotlight />

      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View */}
      {currentPage === 'home' && (
        <HomePage onSelectCaseStudy={handleSelectCaseStudy} />
      )}

      {currentPage === 'case-study' && (
        <CaseStudyPage onBackToWork={handleBackToWork} />
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Mobile CTA Bar */}
      <StickyMobileCTA 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

