import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ImpactStats from '../components/ImpactStats';
import PlatformsSection from '../components/PlatformsSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ProcessSection from '../components/ProcessSection';
import ToolsSection from '../components/ToolsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onSelectCaseStudy }) {
  return (
    <main>
      <Hero />
      <Marquee />
      <ImpactStats />
      <PlatformsSection />
      <ServicesSection />
      <CaseStudiesSection onSelectCaseStudy={onSelectCaseStudy} />
      <ProcessSection />
      <ToolsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

