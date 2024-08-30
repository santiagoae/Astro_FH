import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),

    //relacion
    author: z.string(),

    //relacion
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
