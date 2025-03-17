import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className = '',
}) => {
  const containerClasses = [
    styles.container,
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
