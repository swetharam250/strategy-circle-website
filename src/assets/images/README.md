# Local images

Place brand and portrait assets here. Nothing in this folder is required for the
build — the site ships graceful placeholders.

Expected files:

- `swetha-ranganathan.jpg` — founder portrait (recommended ~720×900, 4:5).
  Wire it into `src/components/AdvisorSection.astro` using Astro's `<Image>`
  component (instructions are in a comment at the top of that file).

- `strategy-circle-logo.svg` — optional logo to replace the text logo in
  `Header.astro` and `Footer.astro`.

Optimize images before adding them. Do not hotlink external image URLs in
production.
