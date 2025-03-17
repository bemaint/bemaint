import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  bordered?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  elevated = false,
  bordered = false,
  onClick,
}) => {
  const cardClasses = [
    styles.card,
    elevated ? styles.elevated : '',
    bordered ? styles.bordered : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
