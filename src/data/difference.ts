// "The Strategy Circle Difference" — four pillars.
// `icon` maps to a key in the Icon component.

export interface Pillar {
  title: string;
  subLabel: string;
  copy: string;
  icon: 'partner' | 'precision' | 'scale' | 'holistic';
}

export const differenceSection = {
  eyebrow: 'THE STRATEGY CIRCLE DIFFERENCE',
  heading: 'Why Ambitious Teams Choose Us',
};

export const pillars: Pillar[] = [
  {
    title: 'Expert Led',
    subLabel: 'EXPERTISE',
    copy: 'Every engagement is led directly by a qualified professional, ensuring senior commercial judgment on every decision.',
    icon: 'partner',
  },
  {
    title: 'A Decade of Precision',
    subLabel: 'INSIGHT',
    copy: 'Over 10 years of hands-on experience navigating complex corporate finance, indirect taxation, and financial due diligence.',
    icon: 'precision',
  },
  {
    title: 'Built from Seed to Scale-Up',
    subLabel: 'AGILITY',
    copy: 'Scalable compliance frameworks and financial infrastructure designed to support your operational growth from seed rounds through Series B and beyond.',
    icon: 'scale',
  },
  {
    title: 'A Holistic Approach',
    subLabel: 'INTEGRATION',
    copy: 'We ensure every decision seamlessly balances tax efficiency, regulatory compliance, and your broader corporate growth strategy for optimal outcomes.',
    icon: 'holistic',
  },
];
