import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { icons } from "./data/icons";

// Icon names must match a key in the shared icon set, so a typo in any service
// YAML fails the build instead of rendering an empty <svg>.
const iconName = z.enum(
  Object.keys(icons) as [keyof typeof icons, ...(keyof typeof icons)[]],
);

// A card/item with an icon name, a title/heading, and a body paragraph.
// Reused by the `included`, `why`, `idealFor`, and `finalCta` sections.
const iconCard = z.object({
  icon: iconName,
  title: z.string(),
  body: z.string(),
});

// The six service pages. Each YAML file under src/data/services/ maps to a
// page at /services/<filename>/. Schema mirrors the structured front matter
// the former Eleventy `service.njk` layout consumed.
const services = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      h1_pre: z.string(),
      h1_hl: z.string(),
      sub: z.string(),
      cta_secondary: z.object({
        href: z.string(),
        label: z.string(),
      }),
    }),
    overview: z.object({
      eyebrow: z.string(),
      h2_pre: z.string(),
      h2_hl: z.string(),
      paras: z.array(z.string()),
    }),
    included: z.object({
      eyebrow: z.string(),
      h2_pre: z.string(),
      h2_hl: z.string(),
      cards: z.array(iconCard),
    }),
    why: z.object({
      h2_pre: z.string(),
      h2_hl: z.string(),
      intro: z.string(),
      items: z.array(iconCard),
    }),
    idealFor: z.object({
      eyebrow: z.string(),
      h2_pre: z.string(),
      h2_hl: z.string(),
      cards: z.array(iconCard),
    }),
    faqs: z.object({
      idPrefix: z.string(),
      items: z.array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      ),
    }),
    finalCta: z.object({
      h2_pre: z.string(),
      h2_hl: z.string(),
      sub: z.string(),
      feats: z.array(
        z.object({
          icon: iconName,
          h4: z.string(),
          body: z.string(),
        }),
      ),
    }),
  }),
});

export const collections = { services };
