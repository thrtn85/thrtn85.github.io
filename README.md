# thrtn85 Solutions — website

Marketing site for thrtn85 Solutions. It's a static site built with
[Astro 6](https://astro.build/): you edit small content/component files in `src/`,
run a build, and Astro generates the final HTML into `dist/`.

The shared header, footer, and `<head>` live in **one place each** (as Astro
components), and all six service pages share **one layout** — so a change to the
nav or footer updates every page at once, instead of editing seven HTML files by
hand. The six service pages are driven by data files validated against a schema.

---

## Requirements

- [Node.js](https://nodejs.org/) — version pinned in `.nvmrc` (`node --version` to check)
- npm (comes with Node)

## First-time setup

From the project root:

```bash
npm install
```

This installs Astro into `node_modules/` (already gitignored).

---

## Running the site locally

```bash
npm run dev
```

This starts a live-reload dev server (Astro prints the URL, typically
**http://localhost:4321**). Leave it running; when you save a file in `src/`, the
browser refreshes automatically. Stop the server with `Ctrl+C`.

## Building for production

```bash
npm run build
```

Generates the final static site into the `dist/` folder. That's the folder a host
serves. `dist/` is gitignored — it's a build artifact, not source.

Preview the production build locally with `npm run preview`. Run `npm run check`
to type-check the project and validate the service data against its schema.

---

## Project structure

```
src/
  data/
    site.ts            # brand info, email, nav items, the list of services
                       #   -> drives the nav dropdown, mobile menu, AND footer
    icons.ts           # named SVG icons (e.g. "monitor", "shieldCheck")
    services/          # one YAML file per service page (hero, cards, FAQ, etc.)
      technology-services.yaml
      creative-branding.yaml
      customer-experience.yaml
      technology-assessments.yaml
      managed-support.yaml
      strategic-partnerships.yaml
  content.config.ts    # content collection + schema validating the service data
  components/
    Head.astro         # <head> contents (analytics, fonts, stylesheet, title)
    Header.astro       # top nav + mobile menu
    Footer.astro       # footer
    Icon.astro         # renders a named icon from icons.ts
  layouts/
    Base.astro         # the page shell: <html>, <head>, header, footer, script
    Service.astro      # the shared layout for ALL service pages (7 sections)
  pages/
    index.astro        # the homepage (its own body content)
    services/
      [slug].astro     # generates one page per service: /services/<slug>/

public/
  assets/              # css, js, images — served unchanged at /assets/...
astro.config.mjs       # Astro configuration
```

You generally only touch `src/` and `public/`. Never edit `dist/` directly — it
gets overwritten on every build.

---

## Making common changes

### Edit text or wording on a service page
Open that service's file in `src/data/services/` (e.g.
`managed-support.yaml`). The content is structured (hero text, the cards, the
FAQ, etc.). Edit the text, save, and the dev server reloads.

### Change the nav, the Services dropdown, or the footer service list
Edit `src/data/site.ts`. Because the header and footer both read from this one
file, your change appears on **every page** after a rebuild.

### Edit the header or footer markup itself
Edit `src/components/Header.astro` or `src/components/Footer.astro`. Applies to
all pages.

### Add a brand-new service page
1. Add the service to the `services` list in `src/data/site.ts` (so it shows up
   in the nav dropdown and footer).
2. Copy an existing file in `src/data/services/` (e.g. `managed-support.yaml`) to
   a new name, and update its content. The filename becomes the URL slug, so the
   page is published at `/services/<filename>/` automatically.
3. If it uses an icon you haven't used before, add it to `src/data/icons.ts` and
   reference it by name. (Unknown icon names fail the build.)
4. Run `npm run build` and check the new page in `dist/services/`.

### Change styles or scripts
Edit `public/assets/css/style.css` or `public/assets/js/main.js` directly. These
are served as-is.

---

## Deploying

The site is hosted on **Cloudflare Pages**. Configure the project with:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Cloudflare runs the build automatically on every push and serves the generated
`dist/` folder. The custom domain is configured in the Cloudflare Pages dashboard
under **Custom domains**, not in the repo.

---

## Verifying a build looks right

After `npm run dev` (or `npm run preview` on the production build), click through
the homepage and each service page:

- Header nav + Services dropdown links work from both the homepage and a service page
- FAQ accordions open/close
- Mobile menu (narrow window) toggles
- Scroll-reveal animations and the sticky header behave on scroll
- Footer links resolve

Service pages live at clean directory URLs (`/services/<slug>/`).
