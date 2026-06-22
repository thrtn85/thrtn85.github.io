// Global site data: drives the nav dropdown and footer services list, plus
// shared contact/legal copy. Ported from the former Eleventy `_data/site.json`.
// Service labels intentionally keep their HTML entities (e.g. `&amp;`) so they
// render byte-for-byte identically to the old `{{ s.label | safe }}` output;
// they are emitted with `set:html` in the components.

export interface NavItem {
  label: string;
  anchor: string;
  dropdown?: boolean;
}

export interface ServiceLink {
  slug: string;
  label: string;
}

export interface Site {
  email: string;
  copyright: string;
  footerAbout: string;
  nav: NavItem[];
  services: ServiceLink[];
}

export const site: Site = {
  email: "hello@thrtn85.com",
  copyright: "© 2026 thrtn85 Solutions LLC. All rights reserved.",
  footerAbout:
    "Helping small businesses and nonprofits grow through technology, branding, and customer experience solutions.",
  nav: [
    { label: "About", anchor: "#about" },
    { label: "Services", anchor: "#services", dropdown: true },
    { label: "Pricing", anchor: "#pricing" },
    { label: "Our Work", anchor: "#work" },
  ],
  services: [
    { slug: "technology-services", label: "Technology Services" },
    { slug: "creative-branding", label: "Creative &amp; Branding" },
    { slug: "customer-experience", label: "Customer Experience" },
    { slug: "technology-assessments", label: "Technology Assessments" },
    { slug: "managed-support", label: "Managed Support" },
    { slug: "strategic-partnerships", label: "Strategic Partnerships" },
  ],
};
