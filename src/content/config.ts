// -----------------------------------------------------------------------------
// Future-ready Astro Content Collections schema for resources.
//
// Phase 1 serves resources from src/data/resources.ts (typed data file), so this
// collection is intentionally LEFT INACTIVE to keep the build warning-free while
// src/content/resources/ is empty.
//
// TO ACTIVATE (when markdown/MDX content is ready):
//   1. Drop entries into src/content/resources/ with frontmatter matching the
//      schema below.
//   2. Uncomment the block and the `export const collections` line.
//   3. Read entries with `getCollection('resources')` and render them via a
//      /resources/[slug] route.
// -----------------------------------------------------------------------------
import { defineCollection, z } from 'astro:content';

const resourceSchema = z.object({
  title: z.string(),
  type: z.enum(['blog', 'newsletter', 'insight', 'linkedin']),
  date: z.coerce.date(),
  excerpt: z.string(),
  externalUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

// Inactive until src/content/resources/ has files — see header note.
// const resources = defineCollection({ type: 'content', schema: resourceSchema });
// export const collections = { resources };

// Re-exported so the schema stays importable/testable even while inactive.
export { resourceSchema, defineCollection };
