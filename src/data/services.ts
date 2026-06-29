// "Services Framework" — six service offerings.
// `icon` maps to a key in the Icon component.

export interface Service {
  title: string;
  copy: string;
  icon: 'cfo' | 'structuring' | 'diligence' | 'contract' | 'investment' | 'dpdp';
}

export const servicesSection = {
  eyebrow: 'EXPERTISE & ADVISORY',
  heading: 'Tailored Financial Infrastructure',
  description:
    'Comprehensive financial advisory and compliance architecture, designed to protect and accelerate businesses at every stage of growth.',
};

export const services: Service[] = [
  {
    title: 'Fractional CFO Services',
    copy: 'Senior financial leadership on demand. Streamline your accounting, financial planning (FP&A), fundraising strategies, decision support, and process automation without full-time executive overhead.',
    icon: 'cfo',
  },
  {
    title: 'Business Structuring & Compliance Setup',
    copy: 'Bulletproof compliance architecture. End-to-end entity structuring, corporate governance frameworks, and tax strategy (GST & Income Tax) built natively for Indian operations.',
    icon: 'structuring',
  },
  {
    title: 'Financial & Tax Due Diligence',
    copy: 'Rigorous analysis and strategic risk assessment during M&A transactions, acquisitions, and investment/funding decisions.',
    icon: 'diligence',
  },
  {
    title: 'Contract Financial Risk Management',
    copy: 'Navigate complex commercial contracts with complete confidence. Integrated advisory covering payment structure optimization, trade finance solutions, insurance alignment, and tax-optimized terms.',
    icon: 'contract',
  },
  {
    title: 'Investment Readiness Support',
    copy: 'Designed to provide structural clarity, financial discipline, and regulatory compliance from the early stages of business. Complete data room management, financial modeling, and dedicated advisory throughout financial due diligence.',
    icon: 'investment',
  },
  {
    title: 'DPDP Act 2023 Implementation',
    copy: "Align your business with India's Digital Personal Data Protection mandates. Comprehensive data review, data classification, policy architecture, consent frameworks, and compliant security safeguards.",
    icon: 'dpdp',
  },
];
