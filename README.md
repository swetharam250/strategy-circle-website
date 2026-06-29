# Strategy Circle

A premium one-page landing site for **Strategy Circle** — a boutique, CA-led
financial advisory and compliance practice led by Swetha Ranganathan, Bengaluru.

Built with **Astro + TypeScript**, plain scoped CSS, design tokens, and minimal
JavaScript. Static-rendered and portable to Vercel, Netlify, Cloudflare Pages, or
GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build static output to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
strategy-circle/
├── astro.config.mjs            # static output + site URL (canonical/OG)
├── tsconfig.json               # strict TS + path aliases
├── public/
│   └── favicon.svg             # concentric-ring brand mark
└── src/
    ├── assets/images/          # local images (logo, portrait) — see README inside
    ├── components/
    │   ├── Header.astro         # sticky nav + accessible mobile menu
    │   ├── Footer.astro         # near-black multi-column footer
    │   ├── Button.astro         # link/button, variants
    │   ├── Icon.astro           # self-authored inline SVG icons
    │   ├── SectionEyebrow.astro # accent-line eyebrow label
    │   ├── Hero.astro           # navy split hero + ring signature
    │   ├── DifferenceGrid.astro # 4-pillar grid
    │   ├── ServiceCard.astro    # one service card
    │   ├── ServicesSection.astro# 6-card services grid
    │   ├── AdvisorSection.astro # founder profile + portrait placeholder
    │   ├── CTASection.astro     # dark navy closing CTA
    │   └── ResourceCard.astro   # resource entry card
    ├── content/
    │   ├── config.ts            # future Content Collections schema (sketched)
    │   └── resources/           # future markdown resource entries
    ├── data/
    │   ├── site.ts              # brand, nav, contact, SEO, calendlyUrl
    │   ├── hero.ts              # hero copy
    │   ├── difference.ts        # 4 pillars
    │   ├── services.ts          # 6 services
    │   ├── advisor.ts           # founder profile copy
    │   ├── cta.ts               # closing CTA copy
    │   └── resources.ts         # resource model + placeholder entries
    ├── layouts/
    │   └── BaseLayout.astro     # head, SEO/OG, fonts, header/footer, reveal JS
    ├── pages/
    │   ├── index.astro          # homepage (composes sections)
    │   └── resources.astro      # /resources (filters + placeholder cards)
    └── styles/
        └── global.css           # design tokens, reset, utilities, motion
```

## Editing content

All copy is data-driven — edit the files in `src/data/`, not the markup:

- **Booking link:** change `calendlyUrl` in `src/data/site.ts` (currently `#contact`).
- **Navigation / contact / SEO:** `src/data/site.ts`.
- **Sections:** `hero.ts`, `difference.ts`, `services.ts`, `advisor.ts`, `cta.ts`.
- **Resources:** add typed entries to `src/data/resources.ts`.

## Brand tokens

Defined as CSS variables in `src/styles/global.css`:

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | `#1c3362` | Navy — headings, primary CTAs, brand |
| `--color-secondary` | `#f37920` | Orange — accents, highlights |
| `--color-dark` | `#101820` | Dark navy backgrounds, deep text |
| `--color-dark-blue` | `#202a44` | Secondary dark accents |
| `--color-white` | `#ffffff` | Clean backgrounds |
| `--color-light-gray` | `#dad9d6` | Muted surfaces, borders |
| `--color-gold` | `#fec64f` | Sparing premium highlights |

## Assets still to add

- `src/assets/images/swetha-ranganathan.jpg` — founder portrait (replaces the
  graceful placeholder in `AdvisorSection.astro`; see the comment there).
- `src/assets/images/strategy-circle-logo.svg` — optional logo to replace the
  text logo in `Header.astro` / `Footer.astro`.
- `public/og-image.png` — social share image (wire it up in `BaseLayout.astro`).
- A real favicon if desired (`public/favicon.svg` ships a brand-mark placeholder).

## Future TODOs (CMS / resources / blog)

- Migrate `/resources` from the typed data file to **Astro Content Collections**
  (schema already sketched in `src/content/config.ts`).
- Add a `/resources/[slug]` dynamic route to render long-form `body` content.
- Wire LinkedIn articles via `externalUrl` (they already open in a new tab).
- Optional: add `@astrojs/sitemap` and an RSS feed once posts exist.
- Optional: replace the `#contact` CTA target with a real Calendly URL or a
  lightweight contact form.

---

© 2026 Strategy Circle. Content provided by the client; no third-party assets are
bundled. Fonts are loaded from Google Fonts (Inter, Inter Tight).
