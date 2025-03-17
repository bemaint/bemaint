import React from 'react';
import Card from '../../atoms/Card';
import Typography from '../../atoms/Typography';
import styles from './FeatureCard.module.css';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  iconSrc?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconSrc,
  className = '',
}) => {
  return (
    <Card elevated className={`${styles.featureCard} ${className}`}>
      <div className={styles.iconContainer}>
        {iconSrc ? (
          <Image 
            src={iconSrc} 
            alt={title} 
            width={48} 
            height={48} 
            className={styles.icon} 
          />
        ) : icon ? (
          <span className={styles.icon}>{icon}</span>
        ) : null}
      </div>
      <div className={styles.content}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Typography variant="body1" color="secondary">{description}</Typography>
      </div>
    </Card>
  );
};

export default FeatureCard;
