import React from 'react';
import styles from './Icon.module.css';

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'light' | 'white' | 'success' | 'warning' | 'danger';
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const iconClasses = [
    styles.icon,
    styles[`size-${size}`],
    styles[`color-${color}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={iconClasses} aria-hidden="true">
      <i className={`icon-${name}`}></i>
    </span>
  );
};

export default Icon;
