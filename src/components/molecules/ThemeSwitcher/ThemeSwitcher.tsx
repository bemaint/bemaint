"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslations } from 'next-intl';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('themeSwitcher');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  // Get the appropriate icon based on the current theme
  const getThemeIcon = () => {
    if (theme === 'system') {
      return resolvedTheme === 'dark' ? '🌙' : '☀️';
    }
    return theme === 'dark' ? '🌙' : '☀️';
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={styles.themeButton} 
        onClick={toggleDropdown}
        aria-label={t('toggle')}
      >
        <span className={styles.themeIcon}>{getThemeIcon()}</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <button 
            className={`${styles.option} ${theme === 'light' ? styles.active : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            <span className={styles.optionIcon}>☀️</span>
            <span>{t('light')}</span>
          </button>
          
          <button 
            className={`${styles.option} ${theme === 'dark' ? styles.active : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            <span className={styles.optionIcon}>🌙</span>
            <span>{t('dark')}</span>
          </button>
          
          <button 
            className={`${styles.option} ${theme === 'system' ? styles.active : ''}`}
            onClick={() => handleThemeChange('system')}
          >
            <span className={styles.optionIcon}>💻</span>
            <span>{t('system')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
