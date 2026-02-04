import { defineCollection, z } from 'astro:content';

const noticiasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Asociación Nadamos con la Diversidad'),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  'noticias': noticiasCollection,
};

