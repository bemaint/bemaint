import {useTranslations} from 'next-intl';
import LandingPage from '@/components/templates/LandingPage';

interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
}

export default function Home() {
  const t = useTranslations();

  // Navbar props
  const navbarProps = {
    logo: {
      src: '/images/bemaint-logo.svg',
      alt: 'BeMaint Logo',
    },
    navItems: [
      { label: t('navbar.home'), href: '/' },
      { label: t('navbar.features'), href: '#features' },
      { label: t('navbar.pricing'), href: '#pricing' },
      { label: t('navbar.about'), href: '#about' },
      { label: t('navbar.contact'), href: '#contact' },
    ],
    ctaButton: {
      label: t('navbar.getStarted'),
      href: '/signup',
    },
  };

  // Hero props
  const heroProps = {
    title: t('hero.title'),
    subtitle: t('hero.subtitle'),
    primaryCta: {
      text: t('hero.primaryCta'),
      href: '/signup',
    },
    secondaryCta: {
      text: t('hero.secondaryCta'),
      href: '#features',
    },
    imageSrc: '/images/hero-image.svg',
  };

  // Feature section props
  const featureSectionProps = {
    title: t('features.title'),
    subtitle: t('features.subtitle'),
    features: [
      {
        title: t('features.monitoring.title'),
        description: t('features.monitoring.description'),
        iconSrc: '/images/monitoring-icon.svg',
      },
      {
        title: t('features.scheduling.title'),
        description: t('features.scheduling.description'),
        iconSrc: '/images/schedule-icon.svg',
      },
      {
        title: t('features.assetManagement.title'),
        description: t('features.assetManagement.description'),
        iconSrc: '/images/asset-icon.svg',
      },
      {
        title: t('features.analytics.title'),
        description: t('features.analytics.description'),
        iconSrc: '/images/analytics-icon.svg',
      },
      {
        title: t('features.teamManagement.title'),
        description: t('features.teamManagement.description'),
        iconSrc: '/images/team-icon.svg',
      },
      {
        title: t('features.mobileAccess.title'),
        description: t('features.mobileAccess.description'),
        iconSrc: '/images/mobile-icon.svg',
      },
    ],
  };

  // Testimonial section props
  const testimonialSectionProps = {
    title: t('testimonials.title'),
    subtitle: t('testimonials.subtitle'),
    testimonials: t.raw('testimonials.items').map((item: TestimonialItem) => ({
      quote: item.quote,
      author: item.author,
      position: item.position,
      company: '',
    })),
  };

  // CTA section props
  const ctaSectionProps = {
    title: t('cta.title'),
    subtitle: t('cta.subtitle'),
    primaryCta: {
      text: t('cta.primaryCta'),
      href: '/signup',
    },
    secondaryCta: {
      text: t('cta.secondaryCta'),
      href: '/contact',
    },
    backgroundImage: '/images/cta-background.jpg',
  };

  // Footer props
  const footerProps = {
    logo: {
      src: '/images/bemaint-logo.svg',
      alt: 'BeMaint Logo',
    },
    description: t('footer.description'),
    columns: t.raw('footer.columns'),
    socialLinks: t.raw('footer.socialLinks'),
    copyright: t('footer.copyright'),
  };

  return (
    <LandingPage
      navbarProps={navbarProps}
      heroProps={heroProps}
      featureSectionProps={featureSectionProps}
      testimonialSectionProps={testimonialSectionProps}
      ctaSectionProps={ctaSectionProps}
      footerProps={footerProps}
    />
  );
}
