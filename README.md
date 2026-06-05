# thrtn85 Solutions — website

Marketing site for thrtn85 Solutions. It's a static site built with
[Eleventy (11ty)](https://www.11ty.dev/): you edit small content/template files in
`src/`, run a build, and Eleventy generates the final HTML into `dist/`.

The shared header, footer, and `<head>` live in **one place each**, and all six
service pages share **one layout** — so a change to the nav or footer updates
every page at once, instead of editing seven HTML files by hand.

---

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (`node --version` to check)
- npm (comes with Node)

## First-time setup

From the project root:

```bash
npm install
```

This installs Eleventy into `node_modules/` (already gitignored).

---

## Running the site locally

```bash
npm run serve
```

This builds the site and starts a live-reload dev server at
**http://localhost:8080** (if 8080 is busy, Eleventy picks the next free port and
prints the URL — watch the terminal). Leave it running; when you save a file in
`src/`, the browser refreshes automatically.

Stop the server with `Ctrl+C`.

## Building for production

```bash
npm run build
```

Generates the final static site into the `dist/` folder. That's the folder a host
serves. `dist/` is gitignored — it's a build artifact, not source.

---

## Project structure

```
src/
  _data/
    site.json          # brand info, email, nav items, the list of services
                       #   -> drives the nav dropdown, mobile menu, AND footer
    icons.js           # named SVG icons (e.g. "monitor", "shieldCheck")
  _includes/
    base.njk           # the page shell: <html>, <head>, header, footer, scripts
    head.njk           # <head> contents (analytics, fonts, stylesheet, title)
    header.njk         # top nav + mobile menu
    footer.njk         # footer
    service.njk        # the shared layout for ALL service pages (7 sections)
  index.njk            # the homepage (its own body content)
  services/
    services.json      # shared settings applied to every service page
    technology-services.md
    creative-branding.md
    customer-experience.md
    technology-assessments.md
    managed-support.md
    strategic-partnerships.md

assets/                # css, js, images — copied to dist/ unchanged
.eleventy.js           # Eleventy configuration
```

You generally only touch `src/` and `assets/`. Never edit `dist/` directly — it
gets overwritten on every build.

---

## Making common changes

### Edit text or wording on a service page
Open that service's file in `src/services/` (e.g.
`src/services/managed-support.html` → it's `managed-support.md`). The content is
in the YAML "front matter" at the top (hero text, the cards, the FAQ, etc.). Edit
the text, save, and the dev server reloads.

### Change the nav, the Services dropdown, or the footer service list
Edit `src/_data/site.json`. Because the header and footer both read from this one
file, your change appears on **every page** after a rebuild.

### Edit the header or footer markup itself
Edit `src/_includes/header.njk` or `src/_includes/footer.njk`. Applies to all
pages.

### Add a brand-new service page
1. Add the service to the `services` list in `src/_data/site.json` (so it shows up
   in the nav dropdown and footer).
2. Copy an existing file in `src/services/` (e.g. `managed-support.md`) to a new
   name, and update its content.
3. If it uses an icon you haven't used before, add it to `src/_data/icons.js` and
   reference it by name.
4. Run `npm run build` and check the new page in `dist/services/`.

### Change styles or scripts
Edit `assets/css/style.css` or `assets/js/main.js` directly. These are copied as-is.

---

## Deploying

The site is moving to **Cloudflare Pages**. Configure the project with:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Cloudflare runs the build automatically on every push and serves the generated
`dist/` folder. The custom domain (`thrtn85solutions.com`) is configured in the
Cloudflare Pages dashboard under **Custom domains**, not in the repo.

---

## Verifying a build looks right

After `npm run serve`, click through the homepage and each service page:

- Header nav + Services dropdown links work from both the homepage and a service page
- FAQ accordions open/close
- Mobile menu (narrow window) toggles
- Footer links resolve

To confirm the generated HTML matches the previous version after a refactor, you
can diff `dist/` against the committed originals — see the build output for any
unexpected changes.
