import React from 'react';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';
import FeatureCard from '../../molecules/FeatureCard';
import styles from './FeatureSection.module.css';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  iconSrc?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  className = '',
}) => {
  return (
    <section className={`${styles.featureSection} ${className}`}>
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
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconSrc={feature.iconSrc}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;
