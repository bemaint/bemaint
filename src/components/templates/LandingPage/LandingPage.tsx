"use client";

import React from 'react';
import Navbar from '../../molecules/Navbar';
import Hero from '../../molecules/Hero';
import FeatureSection from '../../organisms/FeatureSection';
import TestimonialSection from '../../organisms/TestimonialSection';
import CTASection from '../../organisms/CTASection';
import Footer from '../../molecules/Footer';
import styles from './LandingPage.module.css';

interface LandingPageProps {
  navbarProps: React.ComponentProps<typeof Navbar>;
  heroProps: React.ComponentProps<typeof Hero>;
  featureSectionProps: React.ComponentProps<typeof FeatureSection>;
  testimonialSectionProps?: React.ComponentProps<typeof TestimonialSection>;
  ctaSectionProps: React.ComponentProps<typeof CTASection>;
  footerProps: React.ComponentProps<typeof Footer>;
}

const LandingPage: React.FC<LandingPageProps> = ({
  navbarProps,
  heroProps,
  featureSectionProps,
  testimonialSectionProps,
  ctaSectionProps,
  footerProps,
}) => {
  return (
    <div className={styles.landingPage}>
      <Navbar {...navbarProps} />
      <main>
        <Hero {...heroProps} />
        <FeatureSection {...featureSectionProps} />
        {testimonialSectionProps && <TestimonialSection {...testimonialSectionProps} />}
        <CTASection {...ctaSectionProps} />
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default LandingPage;
