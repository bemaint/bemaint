import React from 'react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import styles from './Hero.module.css';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  imageSrc?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc,
  className = '',
}) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <Typography variant="h1" gutterBottom className={styles.title}>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="secondary" gutterBottom className={styles.subtitle}>
              {subtitle}
            </Typography>
            <div className={styles.ctaContainer}>
              {primaryCta && (
                <a href={primaryCta.href}>
                  <Button variant="primary" size="large">
                    {primaryCta.text}
                  </Button>
                </a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href}>
                  <Button variant="outline" size="large">
                    {secondaryCta.text}
                  </Button>
                </a>
              )}
            </div>
          </div>
          {imageSrc && (
            <div className={styles.imageContainer}>
              <Image
                src={imageSrc}
                alt="BeMaint Hero Image"
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
