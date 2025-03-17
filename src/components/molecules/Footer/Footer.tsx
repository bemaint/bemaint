"use client";

import React from 'react';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: {
    src: string;
    alt: string;
  };
  description: string;
  columns: FooterColumn[];
  socialLinks?: {
    icon: string;
    href: string;
    label: string;
  }[];
  copyright?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  description,
  columns,
  socialLinks = [],
  copyright,
  className = '',
}) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} BeMaint. All rights reserved.`;

  return (
    <footer className={`${styles.footer} ${className}`}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logoContainer}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={40}
                className={styles.logo}
              />
            </Link>
            <Typography variant="body2" color="secondary" className={styles.description}>
              {description}
            </Typography>
            {socialLinks.length > 0 && (
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.label}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className={styles.footerLinks}>
            {columns.map((column, index) => (
              <div key={index} className={styles.footerColumn}>
                <Typography variant="h6" gutterBottom>
                  {column.title}
                </Typography>
                <ul className={styles.linkList}>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className={styles.linkItem}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <Typography variant="caption" color="light" className={styles.copyright}>
            {copyrightText}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
