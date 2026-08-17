import { defineCollection, z } from 'astro:content';

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.string(),
    topic: z.string(),
    author: z.string().default('Swetha Ranganathan'),
    image: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    format: z.enum([
      'article',
      'visual-guide',
      'web-guide',
      'long-form-guide',
      'white-paper',
    ]).default('article'),
    asset: z.string().optional(),
    downloadLabel: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  resources,
};
