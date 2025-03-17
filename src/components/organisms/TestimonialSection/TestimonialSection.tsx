"use client";

import React, { useState } from 'react';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';
import Card from '../../atoms/Card';
import styles from './TestimonialSection.module.css';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarSrc?: string;
}

interface TestimonialSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  subtitle,
  testimonials,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={`${styles.testimonialSection} ${className}`}>
      <Container>
        <div className={styles.sectionHeader}>
          <Typography variant="h2" align="center" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" color="secondary" align="center" gutterBottom className={styles.subtitle}>
              {subtitle}
            </Typography>
          )}
        </div>
        
        <div className={styles.testimonialCarousel}>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`} 
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                elevated 
                className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
              >
                <div className={styles.quoteIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-0.804 0.161C9.113 7.139 8.3 7.436 7.887 7.88c-0.438 0.468-0.887 1.21-0.887 2.548 0 0.901 0.646 1.572 1.5 1.572 0.828 0 1.5 0.672 1.5 1.5v5c0 0.828-0.672 1.5-1.5 1.5h-5C2.672 20 2 19.328 2 18.5v-3.338C2 13.037 2.287 9.961 3.691 6.292zM16.691 6.292C18.094 4.771 20.217 4 23 4h1v2.819l-0.804 0.161c-1.083 0.159-1.896 0.456-2.309 0.9-0.438 0.468-0.887 1.21-0.887 2.548 0 0.901 0.646 1.572 1.5 1.572 0.828 0 1.5 0.672 1.5 1.5v5c0 0.828-0.672 1.5-1.5 1.5h-5c-0.828 0-1.5-0.672-1.5-1.5v-3.338C15 13.037 15.287 9.961 16.691 6.292z"></path>
                  </svg>
                </div>
                
                <Typography variant="body1" className={styles.quote}>
                  {testimonial.quote}
                </Typography>
                
                <div className={styles.authorInfo}>
                  {testimonial.avatarSrc && (
                    <div className={styles.avatar}>
                      <Image
                        src={testimonial.avatarSrc}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                  <div>
                    <Typography variant="subtitle2" className={styles.author}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" color="secondary">
                      {testimonial.position}, {testimonial.company}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`} 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
