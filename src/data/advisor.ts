// "Meet Your Advisor" — founder profile content.
import { linkedinUrl } from './site';

export const advisor = {
  heading: 'Meet Swetha Ranganathan, Founder & Chartered Accountant',
  intro:
    'Swetha Ranganathan is a Chartered Accountant and founder of Strategy Circle, a financial advisory practice for startups, corporates, and investors.',
  body:
    'With 10+ years of hands-on experience in finance, tax, compliance, and due diligence—including tenures at BDO India, Tata Consulting Engineers, MGB Advisors, and HNA and Co LLP—she brings deep expertise across industries including engineering consulting, real estate, SaaS, hospitality, manufacturing, and education.',
  sectors:
    'At Strategy Circle, she combines this experience with a hands-on advisory approach. She works alongside founders and finance teams on fractional CFO services, financial due diligence, investment readiness, and business structuring.',
  cta: { label: 'Connect on LinkedIn', href: linkedinUrl },
  // Replace with a real portrait at src/assets/images/swetha-ranganathan.jpg
  portraitAlt: 'Portrait of Swetha Ranganathan, Founder & Chartered Accountant of Strategy Circle',
  // Credential chips shown beside the portrait placeholder.
  credentials: ['Chartered Accountant', '10+ Years', 'Bengaluru'],
} as const;
