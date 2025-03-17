"use client";

import React, { useState, useEffect } from 'react';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: {
    src: string;
    alt: string;
  };
  navItems: NavItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  navItems,
  ctaButton,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarClasses = [
    styles.navbar,
    isScrolled ? styles.scrolled : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={navbarClasses}>
      <Container>
        <div className={styles.navbarContent}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={40}
              className={styles.logo}
            />
          </Link>

          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
          </button>

          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {ctaButton && (
              <Link href={ctaButton.href} className={styles.ctaButton}>
                <Button variant="primary">{ctaButton.label}</Button>
              </Link>
            )}
            <div className={styles.langSwitcher}>
              <LanguageSwitcher />
            </div>
            <div className={styles.themeSwitcher}>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
