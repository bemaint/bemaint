"use client";

import React from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');

  const switchLocale = (newLocale: string) => {
    // Chuyển đến cùng đường dẫn nhưng với locale mới
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={styles.container}>
      <button 
        className={`${styles.button} ${locale === 'vi' ? styles.active : ''}`} 
        onClick={() => switchLocale('vi')}
      >
        {t('vi')}
      </button>
      <span className={styles.divider}>|</span>
      <button 
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`} 
        onClick={() => switchLocale('en')}
      >
        {t('en')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
