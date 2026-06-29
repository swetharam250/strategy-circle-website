// -----------------------------------------------------------------------------
// Global site configuration for Strategy Circle.
// Single source of truth for brand, navigation, contact, SEO and the
// booking URL. Change these values here rather than editing markup.
// -----------------------------------------------------------------------------

/**
 * Booking / contact destination for all primary CTAs.
 * Replace with the live Calendly (or contact) URL when ready.
 * e.g. 'https://calendly.com/strategycircle/strategy-call'
 */
export const calendlyUrl = 'https://calendly.com/swetharam250/30min';

/** Swetha's LinkedIn profile. */
export const linkedinUrl = 'https://www.linkedin.com/in/swetharanganathan2';

export interface NavLink {
  label: string;
  /** Anchor (#id) for on-page sections or a route path for separate pages. */
  href: string;
}

/** Primary header navigation. */
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#advisor' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '/resources' },
];

export const site = {
  name: 'Strategy Circle',
  tagline:
    'Financial advisory and compliance partner for high-growth startups, scale-ups, and corporate teams.',
  founder: 'Swetha Ranganathan',
  founderTitle: 'Founder & Chartered Accountant',
  location: 'Bengaluru, Karnataka',

  contact: {
    email: 'hello@strategycircle.co.in',
    phone: '+91 9585442481',
    // tel: link form (digits only) for accessibility on mobile
    phoneHref: 'tel:+919585442481',
    location: 'Bengaluru, Karnataka',
  },

  seo: {
    title: 'Strategy Circle | Financial Advisory & Compliance Consulting',
    description:
      'Strategy Circle is a CA-led financial advisory and compliance practice helping startups, scale-ups, and corporate teams build investor-ready, highly compliant, and scalable enterprises.',
  },
} as const;

/** Footer link groups. */
export const footerQuickLinks: NavLink[] = [
  { label: 'About Swetha', href: '#advisor' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '/resources' },
  { label: 'Contact', href: calendlyUrl },
];

export const footerServiceLinks: NavLink[] = [
  { label: 'Fractional CFO Services', href: '#services' },
  { label: 'Business Structuring & Compliance Setup', href: '#services' },
  { label: 'Financial & Tax Due Diligence', href: '#services' },
  { label: 'Contract Financial Risk Management', href: '#services' },
  { label: 'Investment Readiness Support', href: '#services' },
  { label: 'DPDP Act 2023 Implementation', href: '#services' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy Notice', href: '/privacy-notice' },
];

export const legalText =
  '© 2026 Strategy Circle. All rights reserved. | CA Swetha Ranganathan';
