import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Lower numbers are shown first.
      order: z.number(),
      image: image(),
      imageAlt: z.string(),
      imageCaption: z.string().optional(),
      note: z.string().optional(),
      stack: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), url: z.url() })),
    }),
});

export const collections = { projects };
