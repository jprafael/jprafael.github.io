import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { sveltiaLoader } from "astro-loader-sveltia-cms/loader";

const posts = defineCollection({
  loader: sveltiaLoader("posts"),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
