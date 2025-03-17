import React from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
type ColorVariant = 'primary' | 'secondary' | 'light' | 'white' | 'accent' | 'success' | 'warning' | 'danger';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
  align?: 'left' | 'center' | 'right';
  gutterBottom?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  align = 'left',
  gutterBottom = false,
  className = '',
  children,
  as,
}) => {
  const Component = as || getDefaultComponent(variant);
  
  const classes = [
    styles.typography,
    styles[variant],
    styles[`color-${color}`],
    styles[`align-${align}`],
    gutterBottom ? styles.gutterBottom : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

function getDefaultComponent(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}

export default Typography;
