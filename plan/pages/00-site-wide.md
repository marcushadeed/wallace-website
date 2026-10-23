# Site-wide (every page)

Source: `03-page-index.md`.

## Header
- Logo (PNG for now, SVG when we get one) → `/`. On Home the banner replaces the header logo, so it doesn't appear twice; the nav stays
- Nav: Plan Your Visit · About · Sermons & Media · Home Groups · Calendar · Give · Contact **(proposed)**
- Livestream button → YouTube streams **(proposed)**

## Footer
- Church name and address
- "A Congregation in the Presbyterian Church in America" → `https://pcanet.org`
- Social links: YouTube, SoundCloud, Spotify (+ Facebook/Instagram if they exist)
- Newsletter signup link/form **(proposed: footer, so it's everywhere)**

## Per-page metadata
- Meta description, Open Graph title/description/image, favicon from the logo
- schema.org `Church` markup (name, address, phone, service times), on Home at least

## Redirects (no page, set once)
| Old URL | → |
|---|---|
| `/home-groups-2026` | `/home-groups` |
| `/labor-day` | `/calendar` (or `/` if no calendar) |
| `/new-page`, `/projects`, `/cart` | `/` |

## Decisions to confirm
- Nav items and order.
- Newsletter signup in the footer + Contact.
