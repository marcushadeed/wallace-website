# Site-wide (every page)

Source: `../content-inventory.md`, answers in `04-open-questions.md`.
`[TBD: …]` marks a placeholder still to be filled in (listed in `04-open-questions.md`).

## Guiding rule: minimal maintenance
- Stable URLs with no years in them (`/home-groups`, not `/home-groups-2026`)
- Prefer links and embeds that update themselves (YouTube, SoundCloud, Spotify, a Drive file overwritten in place)
- Content that changes each year goes in structured data, separate from layout
- Leave out anything that goes stale unless someone maintains it

## Header
- Logo → `/`. Use the existing PNG for now; Marcus is making an SVG version. On Home the banner replaces the header logo, so it doesn't appear twice; the nav stays
- Nav: Plan Your Visit · About · Sermons & Media · Home Groups · Events · Give · Contact
- No livestream button in the header; the livestream lives on Sermons & Media

## Footer
- Church name and address
- "A Congregation in the Presbyterian Church in America" → `https://pcanet.org`
- Social links: YouTube, SoundCloud, Spotify, Facebook (`https://www.facebook.com/wallacepcachurch/`), Instagram (`https://www.instagram.com/wallacepresbyterian/`)
- Newsletter signup link/form (also on Contact) `[TBD: signup link — depends on what sends the newsletter]`

## Per-page metadata
- Meta description (drafts in each page's file, to approve), Open Graph title/description/image, favicon from the logo
- schema.org `Church` markup (name, address, phone, service times), on Home at least

## Redirects (no page, set once)
| Old URL | → |
|---|---|
| `/home-groups-2026` | `/home-groups` |
| `/labor-day` | `/events` (or `/` if there's no Events page) |
| `/new-page`, `/projects`, `/cart` | `/` |

## Not on the site (decided)
| Item | Why |
|---|---|
| Prayer requests | No one is set up to monitor them |
| Church history, students / campus ministry | Left out by choice |
| Membership class dates, holiday service times | Go stale (holiday times can go on the Events calendar) |
| Wedding / facility rental | Out of scope |

## Build & hosting
- Static site generator with content in data files; whichever is easiest and free
- Content that changes (home groups, HG calendar, staff, etc.) must be editable by a non-technical person
- Dev hosting: GitHub Pages. Production currently on Squarespace; the move is planned later
- Domain (wallacepca.org): believed to be church-controlled; not a concern yet
