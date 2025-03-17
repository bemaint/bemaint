import React from 'react';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import styles from './CTASection.module.css';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className = '',
  backgroundImage,
}) => {
  const sectionStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
  } : {};

  return (
    <section className={`${styles.ctaSection} ${className}`} style={sectionStyle}>
      <Container>
        <div className={styles.content}>
          <Typography variant="h2" color="white" align="center" gutterBottom>
            {title}
          </Typography>
          
          {subtitle && (
            <Typography variant="subtitle1" color="white" align="center" gutterBottom className={styles.subtitle}>
              {subtitle}
            </Typography>
          )}
          
          <div className={styles.ctaButtons}>
            <Link href={primaryCta.href}>
              <Button variant="primary" size="large">
                {primaryCta.text}
              </Button>
            </Link>
            
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button variant="outline" size="large" className={styles.secondaryButton}>
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
