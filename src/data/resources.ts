// -----------------------------------------------------------------------------
// Resource content model + Phase-1 placeholder entries.
//
// This is intentionally a typed data file rather than a CMS. When real content
// is ready, either keep adding typed entries here or migrate to Astro Content
// Collections (a `src/content/resources/` folder is already scaffolded and a
// matching schema is sketched in src/content/config.ts).
// -----------------------------------------------------------------------------

export type ResourceType = 'blog' | 'newsletter' | 'insight' | 'linkedin';

export interface Resource {
  title: string;
  slug: string;
  type: ResourceType;
  /** ISO date string, e.g. '2026-03-01'. */
  date: string;
  excerpt: string;
  /** For LinkedIn / external resources. Opens in a new tab when present. */
  externalUrl?: string;
  featured?: boolean;
  /** Long-form body, used by a future /resources/[slug] route. */
  body?: string;
  /** Phase-1 flag so the UI can label entries as upcoming. */
  comingSoon?: boolean;
}

/** Human-readable labels for each resource type. */
export const resourceTypeLabels: Record<ResourceType, string> = {
  blog: 'Blog',
  newsletter: 'Newsletter',
  insight: 'Insight',
  linkedin: 'LinkedIn Article',
};

export interface ResourceFilter {
  label: string;
  /** 'all' shows everything; otherwise matches a ResourceType. */
  value: 'all' | ResourceType;
}

export const resourceFilters: ResourceFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Blog', value: 'blog' },
  { label: 'Newsletter', value: 'newsletter' },
  { label: 'Insights', value: 'insight' },
  { label: 'LinkedIn Articles', value: 'linkedin' },
];

export const resourcesPage = {
  heading: 'Resources from Strategy Circle',
  description:
    'Practical notes, founder-focused insights, and advisory perspectives on finance, compliance, due diligence, and business structuring.',
};

/**
 * Placeholder entries for Phase 1. These are clearly marked as upcoming
 * (`comingSoon: true`) and deliberately contain no fabricated article detail.
 */
export const resources: Resource[] = [
  {
    title: 'Insights are on the way',
    slug: 'coming-soon-insights',
    type: 'insight',
    date: '2026-01-01',
    excerpt:
      'Founder-focused notes on compliance, due diligence, and structuring will be published here. Sample entry — content coming soon.',
    comingSoon: true,
  },
  {
    title: 'The Strategy Circle newsletter',
    slug: 'coming-soon-newsletter',
    type: 'newsletter',
    date: '2026-01-01',
    excerpt:
      'A periodic newsletter for founders and finance teams is in the works. Sample entry — content coming soon.',
    comingSoon: true,
  },
  {
    title: 'Advisory perspectives on LinkedIn',
    slug: 'coming-soon-linkedin',
    type: 'linkedin',
    date: '2026-01-01',
    excerpt:
      'Long-form LinkedIn articles will be linked here and open in a new tab. Sample entry — content coming soon.',
    externalUrl: 'https://www.linkedin.com/in/swetharanganathan2',
    comingSoon: true,
  },
];
