# 05 — Build Sessions

Each session runs in a fresh Claude Code session. Start it with:
> Do Session N in `plan/05-build-sessions.md`.

## Progress
| Session | Scope | Status |
|---|---|---|
| 1 | Foundation + Home | ☑ 2026-10-22. Eleventy + Pages CMS. Data files staff/leadership/homeGroups/hgCalendar are empty for Session 2 to fill. The deploy workflow and Pages CMS are written but not tried against a real repo yet (Session 4) |
| 2 | Visit, About, Home Groups, Media | ☐ |
| 3 | Donate, Events, Contact, Creeds | ☐ |
| 4 | Verification | ☐ |

---

## Rules for every session
- Read `new_site/CLAUDE.md` (from Session 2 on), `pages/00-site-wide.md`, and the page files for your session. Check `04-open-questions.md` for answers added since the plans were written.
- Follow the patterns Session 1 set up. Don't add new layout or styling conventions unless a page plan truly needs one.
- Keep `[TBD: …]` placeholders visible on the built page. Don't make up content to fill them.
- The old site mirror is in `../old_site/`. Take images and the logo PNG from there (`images.squarespace-cdn.com/.../WALLACE_LOGO-1+(1).png`).
- Don't use subagents, except where Session 4 says to.
- When you finish:
  - The site builds with no errors.
  - Each new page is previewed locally.
  - `new_site/CLAUDE.md` is updated with anything the next session needs.
  - Your row in **Progress** is checked off, noting anything left unfinished.
- If context runs low partway through, stop after a finished page. Record where you stopped in **Progress** so the next session can resume.

---

## Session 1 — Foundation + Home
**Before starting:** open question 5 (visual style) needs an answer. If it's blank, ask Marcus before doing any styling.

1. **Pick the static site generator.**
   - Requirements (from `00-site-wide.md` → Build & hosting):
     - free and easy to use
     - content kept in data files
     - content that changes can be edited by a non-technical person, which likely means a git-based CMS
     - deploys to GitHub Pages
   - Propose a generator and CMS to Marcus with a one-line rationale, and confirm before scaffolding.
2. **Scaffold the project** in `new_site/`, keeping `plan/` as it is.
3. **Build the site-wide parts:**
   - base layout
   - header and nav (Home's banner replaces the header logo)
   - footer
   - style tokens: colors, type, spacing
   - favicon
   - per-page meta and Open Graph
   - schema.org `Church` markup
   - redirects
   - the GitHub Pages deploy setup
4. **Set up the data-file structure** for content that changes, such as home groups, the HG calendar and staff, even if it's empty for now.
5. **Build Home** from `pages/01-home.md`. It sets the pattern for every other page.
6. **Write `new_site/CLAUDE.md`.** Cover:
   - the build, dev and deploy commands
   - where pages, layouts, data files and styles live
   - how to add a page
   - the styling conventions
   - the CMS setup

## Session 2 — Visit, About, Home Groups, Media
Build, in this order:
1. `pages/03-visit.md`
2. `pages/04-about.md`
3. `pages/05-home-groups.md`
4. `pages/02-media.md`

Home groups and staff content goes in the data files from Session 1, not hard-coded in the page.

## Session 3 — Donate, Events, Contact, Creeds
Build, in this order:
1. `pages/06-donate.md`
2. `pages/07-events.md`
3. `pages/08-contact.md`
4. `pages/09-creeds.md`

- **Events** depends on open question 1, the Google Calendar.
  - If there's no answer yet, build it with the embed as a `[TBD]` placeholder.
  - If the answer is "no calendar", ask Marcus whether to drop the page. Dropping it changes the `/labor-day` redirect to point to `/`.
- **Donate**: the PayPal button IDs and links come from the old site and the plan. Keep them exactly as they are.

## Session 4 — Verification
1. **Links.** Check that every external link resolves: PayPal info links, PayPal button IDs, Breeze sign-up links (including the corrected Chinese group link), the social links and pcanet.org.
   - This step may use parallel subagents, one per group of links, since the checks are independent.
2. **Redirects.** Check each redirect in `00-site-wide.md`.
3. **Every page:**
   - meta description and Open Graph tags present
   - nav links work
   - fits at phone width with no sideways scrolling
   - basic accessibility: alt text, heading order, contrast
4. **Deploy and smoke-test.** Deploy to GitHub Pages and confirm the live dev site loads.
5. **Report back** with:
   - a list of the `[TBD]` placeholders still on the site, matched to `04-open-questions.md`
   - anything that failed
