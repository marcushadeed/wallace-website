# Wallace Presbyterian Church site

Static rebuild of www.wallacepca.org. **Eleventy 3** (Nunjucks templates) + **Pages CMS** for non-technical edits, deployed to **GitHub Pages**. Plans live in `plan/` (build sessions: `plan/05-build-sessions.md`).

Goal: minimal maintenance. Stable URLs, content that changes lives in data files, nothing that goes stale unless someone maintains it.

## Commands
Run from `new_site/` (Node 24, already installed via nvm).
- `npm install`: first time only
- `npm start`: dev server with live reload at http://localhost:8080
- `npm run build`: build to `_site/`
- Test a GitHub Pages sub-path build: `PATH_PREFIX=/repo/ SITE_URL=https://user.github.io/repo SITE_NOINDEX=true npm run build`
- Deploy: push to `main`; `.github/workflows/deploy.yml` builds and deploys. `new_site/` is meant to be the repo root. One-time repo setting: Settings → Pages → Source: GitHub Actions. Not deployed yet (Session 4).

## Where things live
| What | Where |
|---|---|
| Pages | `src/*.njk`, one per page (`src/index.njk` = Home). Output URL is `/<name>/` |
| Base layout | `src/_includes/layouts/base.njk` (head, meta, OG, favicon, header, footer) |
| Header / footer / schema.org | `src/_includes/partials/` |
| Data (content that changes) | `src/_data/*.yml` |
| Styles | `src/assets/css/style.css` (single file) |
| JS | `src/assets/js/nav.js` (mobile menu only) |
| Images | `src/assets/img/` (logo, favicons, OG image); CMS uploads in `src/assets/img/uploads/` |
| Fonts | `src/assets/fonts/` (vendored woff2: Source Serif 4, Source Sans 3) |
| Redirects | `src/_data/redirects.yml` → `src/redirects.njk` makes a forwarding page per old URL |
| Build-time values | `src/_data/build.js` (`build.url`, `build.noindex`, from env vars) |
| Config | `eleventy.config.js` (YAML data, path prefix, passthrough, filters `telHref`, `serviceTimes`, `requireDescription`, `churchSchema`, `findBy`, `mapEmbedUrl`, `directionsUrl`) |

### Data files
| File | Used by | Status |
|---|---|---|
| `site.yml` | header, footer, schema.org, Visit/Contact | filled. Service times live here (`services`); `newsletter_url` empty until open question 2 |
| `nav.yml` | header nav | filled (7 items). Not in the CMS |
| `redirects.yml` | redirect pages | filled. Not in the CMS |
| `staff.yml` | About, Visit, Contact | filled (10 staff). Visit finds the accessibility contact by role `Facilities Manager` (falls back to `site.email`) |
| `leadership.yml` | About | filled |
| `missionPartners.yml` | About | empty, `[TBD]` until Marcus supplies partners |
| `homeGroups.yml` | Home Groups (Contact should reuse `coordinator`) | filled (coordinator + 9 groups). The Chinese Language group has no photo |
| `hgCalendar.yml` | Home Groups | filled (Fall 2026 – Spring 2027). `intro` paragraphs split on blank lines; an entry with empty `when` renders as a break ("Break for Advent"). The section hides when `seasons` is empty |

`missionPartners.yml` keeps a commented example of its shape. The field names must match `.pages.yml`.

## How to add a page
1. Create `src/<slug>.njk` with front matter:
   ```yaml
   ---
   layout: layouts/base.njk
   title: Plan Your Visit          # → "<title> | Wallace Presbyterian Church"; omit only on Home
   description: "…"                # required (build fails without it); draft text is in the page's plan file
   ---
   ```
   Optional: `schema: true` (adds schema.org `Church` JSON-LD; Home has it), `hide_header_logo: true` (Home only).
2. Start with `<section class="page-header"><div class="container"><h1>…</h1><p class="lead prose">…</p></div></section>` (tint band; every page except Home).
   Then write sections as `<section class="section">` (add `section--tint` or `section--navy` for bands) with a `<div class="container">` inside. Use `container prose` for a centred reading column.
3. One `<h1>` per page, then `<h2>` per section.
4. Pull changing content from `src/_data/` (e.g. `{% for g in homeGroups.groups %}`), never hard-code it.
5. The nav already links `/visit/ /about/ /media/ /home-groups/ /events/ /donate/ /contact/`; `/creeds/` is linked from Home (`#apostles`, `#nicene` anchors expected). Use these slugs.
6. `npm run build`, then preview at phone width (no sideways scroll) and desktop.

Links: write root-relative URLs (`/visit/`, `/assets/img/x.png`). `HtmlBasePlugin` adds the GitHub Pages sub-path automatically in `href`/`src`. For absolute URLs (OG, canonical, meta refresh, JSON-LD) use `{{ build.url }}` + path.

## Styling conventions
- **Direction (open question 5):** cues from the logo, but bolder: logo blue `#224C86` as accent, deep navy bands, large serif headings.
- Everything uses the tokens at the top of `style.css`: `--color-*`, `--step-*` (type scale, body is 18px), `--space-*`, `--container`, `--measure`. Don't hard-code colors or sizes.
- `--color-blue` (logo blue) is for accents, rules and the focus ring on white/tint; links use `--color-blue-dark` (currently the same value). On navy use `--color-blue-light`, since the logo blue doesn't show there.
- Headings: `--font-serif`, navy. Body: `--font-sans`.
- Components: `.button` (navy), `.button--light` (on navy bands), `.button--large`, `.more-link` ("More about … →"), `.lead`, `.prose`.
  - `.page-header` (top band), `.cta` (centred navy call-to-action band: `section section--navy cta`, used on Home, Visit, Media)
  - `.split` (2 columns from 48rem), `.cards` + `.card` (auto grid of white bordered boxes, ~3 across; `.cards--wide` caps at 2), `.card__title` (when a card's heading is an `h2`)
  - `.details` (`<dl>` label/value grid), `.embed` (iframes: SoundCloud, map), `.map` (4:3), `.visually-hidden`
- Maps: `site.address | mapEmbedUrl` (keyless Google Maps embed) and `| directionsUrl`.
- Section bands alternate: white → `section--tint` / `section--navy`. Home: tint banner → navy CTA → white → tint.
- **Placeholders:** `<span class="tbd">[TBD: …]</span>`, yellow highlight. Keep them visible; don't invent content.
- Mobile nav: below 64rem the `<nav>` collapses behind a "Menu" button, a sibling placed just before it (`nav.js` + `.js` class set inline in `<head>`). Escape closes it. Without JS the nav wraps.
- Add page-specific CSS at the end of `style.css` under a `/* ---------- <Page> ---------- */` heading.
- The logo is `assets/img/logo.svg` (2084×555, one color `#224C86`), used in `header.njk` and `index.njk`. `favicon.svg` is the same file cropped to the circle mark (`viewBox="0 0 555 555"`, wordmark subpaths removed). Rendered from them with `inkscape` (+ `convert` for the `.ico`): `logo.png` (600w, for schema.org), `favicon-32.png`, `apple-touch-icon.png` (144px mark on 180×180 white), `src/favicon.ico` (16/32/48), and `og-image.png` (1200×630: tint bands, white middle with the logo, `--color-blue-light` rule, navy bar). Regenerate all of them if the logo changes.

## Metadata
- Per page: `title`, `description` front matter → `<title>`, meta description, OG title/description/url, canonical. OG image is `assets/img/og-image.png` for every page.
- Meta descriptions are drafts from the plan files, still awaiting Marcus's approval. Don't hard-code facts that live in data files: Home builds its description with `eleventyComputed` + the `serviceTimes` filter.
- schema.org `Church` (Home, `schema: true`): built in the `churchSchema` filter from `site.yml`. Service times are `openingHoursSpecification` entries (not Events, which would need a `startDate`).
- `SITE_NOINDEX=true` (set in the deploy workflow) adds a `noindex` meta tag so the dev copy isn't indexed. Flip to `false` at launch. `robots.txt` always allows crawling, because a crawler blocked by it never sees the `noindex`.
- `sitemap.xml` lists every page in `collections.all`. Utility pages set `eleventyExcludeFromCollections: true`.

## CMS (Pages CMS)
- Config: `.pages.yml` at the repo root. One editing screen per data file (church details, staff, elders & deacons, mission partners, home groups, HG calendar).
- Editors sign in at https://app.pagescms.org. Either they use a GitHub account with write access to the repo, or (better for non-technical editors) the Pages CMS GitHub App is installed on the repo and they're invited as collaborators by email, with no GitHub account needed. Saving commits to `main`, which redeploys.
- Service `day` is a dropdown and `start` must be 24-hour `HH:MM`, because both feed the schema.org markup.
- Image uploads go to `src/assets/img/uploads/` and are stored as `/assets/img/uploads/<file>`. The home-group photos are in `src/assets/img/uploads/home-groups/<name>.jpg` (converted from the old site's WebP, max 1000px, shown square-cropped).
- Pages CMS rewrites the YAML on save, so comments in data files may be lost. Don't put anything important in comments.
- When you add or rename a data field, update `.pages.yml` to match.
- Not yet tested against a live repo (needs the GitHub repo from Session 4).

## Old site
Mirror in `../old_site/`. Images are under `images.squarespace-cdn.com/content/v1/6a1f0be59c378c191f8c9f32/<id>/<name>`. The plain filename is the original, but the files are **WebP despite `.jpg`/`.png` names**. Convert them (e.g. `python3 -I -c "from PIL import Image; Image.open(src).save(dst)"`) or save them with a `.webp` extension.
