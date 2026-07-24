import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { sveltiaLoader } from "astro-loader-sveltia-cms/loader";

const locations = defineCollection({
  loader: sveltiaLoader("locations"),
  schema: ({ image }) => z.object({
    name: z.string(),
    address: z.string(),
    maps_url: z.string().url(),
    image: image(),
    directions_pt: z.string(),
    directions_en: z.string(),
  }),
});

const events = defineCollection({
  loader: sveltiaLoader("events"),
  schema: ({ image }) => z.object({
    title_pt: z.string(),
    title_en: z.string(),
    type: z.enum(["Weekly", "Monthly", "InvictaCon"]),
    location: z.object({
      collection: z.literal("locations"),
      id: z.string(),
    }),
    images: z.array(image()).min(1),
    dates: z.array(z.object({
      start: z.coerce.date(),
      end: z.coerce.date(),
    })).min(1),
    description_pt: z.string(),
    description_en: z.string(),
  }),
});

export const collections = { events, locations };
