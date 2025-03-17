// Define the pathnames type for our application

export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
};

// Use 'always' for consistent URL structure
export const localePrefix = 'always';

export type PathnameLocale = {
  pathname: string;
  locale?: Locale;
};
