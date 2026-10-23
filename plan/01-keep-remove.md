# 01 — What Carries Over from the Old Site

Decided 2026-10-22. Source: `content-inventory.md` and the wget mirror in `old_site/`.
Scope: only what we keep or remove from the current site. New features are decided in a later session (`02-…`).

## Guiding rule: minimal maintenance
The site should be easy to update, and should only *need* updating when something real changes.
- Stable URLs with no years in them (`/home-groups`, not `/home-groups-2026`).
- Prefer links and embeds that update themselves (YouTube, SoundCloud, Spotify, a Drive file overwritten in place).
- Store content that changes each year (home groups, HG calendar) as simple structured data, separate from layout.
- Leave out anything that goes stale unless someone maintains it.

---

## KEEP

### Site-wide
| Item | Notes |
|---|---|
| Church name | Wallace Presbyterian Church |
| Address | 3725 Metzerott Road, College Park, MD 20740 |
| Phone | 301-935-5900 |
| General email | info@wallacepca.org |
| Logo | Use the existing PNG (`WALLACE_LOGO-1+(1).png`) for now; ask for a vector/SVG original |
| PCA tagline | "A Congregation in the Presbyterian Church in America", in the footer |
| Footer | Name and address plus the tagline |
| Meta descriptions | Write new ones for every page (all are empty today) |

### Home page
| Item | Notes |
|---|---|
| Hero photo(s) | Static hero; **no carousel**. Choose from IMG_8928, DSCF4031, IMG_4992-1, D50BE71C…jpg, IMG_4988 (the photos may be redone) |
| Service times + address | 9:15 AM Sunday School · 10:30 AM Sunday Morning Service |
| Livestream | Real button (no text baked into an image) → `https://www.youtube.com/@wallacepresbyterianchurch/streams` |
| Recent sermons | Embedded SoundCloud playlist (id 2235055211) and a "more sermons" link → `https://soundcloud.com/wallacepresbyterianchurch/sets` |
| Podcast "The Fourth Point" | Fix the broken link → `https://open.spotify.com/show/2cWYm4jCl8oU0fEirRIiRi` |
| What We Believe | Keep the 3 paragraphs. Tidy the links: Westminster Confession → `https://www.pcaac.org/bco/westminster-confession/`; point the Apostles' and Nicene Creeds at a trusted source and drop the web.archive.org link |
| Give link | → Donate page |
| Contact block | Phone, email, address |
| Join a Home Group | Real button → `/home-groups` |
| Sunday bulletin | Fixed link; the Drive file is overwritten weekly at the same URL, so the site never needs editing for it. Fix the "bullet" typo. → `https://drive.google.com/file/d/0B_qe4TZ8DsM8VzBtVHhISjV6T00/view?usp=sharing&resourcekey=0-onu_5-_SDc-Lfc-RlirobQ` |

### Home Groups → `/home-groups` (own page, no year)
| Item | Notes |
|---|---|
| Intro | 2 paragraphs + 1 Cor 12:7 |
| Coordinator | Jamie Duguid, duguid@wallacepca.org |
| Group listings | 9 groups as structured data: name, focus, day/time, frequency, location, childcare, photo, sign-up URL |
| Group photos | One per group |
| Breeze sign-up links | One per group. **Fix:** the Chinese Language group's link goes to `form/burke` and should be `form/chinese-home-group`. **Fix:** spell it "Iszler" everywhere |
| HG calendar | On the same page, below the listings. Replaced once a year. Fix the "Novermber" typo |

Current group data is in `content-inventory.md` §3.

### Donate
| Item | Notes |
|---|---|
| Intro | In person, by mail, or by card. Reword it (drop "see upper right") |
| PayPal buttons | General Fund `hosted_button_id=C3J2B3F7UYA7A`; Deacon Fund `hosted_button_id=6H6NLKE8QFYJA` |
| PayPal fee note | 1.99% fee; suggests adding about 2% |
| PayPal info links | Small and unobtrusive: `https://www.paypal.com/webapps/mpp/how-paypal-works` and `https://www.paypal.com/webapps/mpp/paypal-popup`. Check they still resolve at build time |
| Checks + Bill Pay | Offering plate, or mail to "ATTN: Assistant Treasurer" at the church address; Bill Pay with "offering" as the account number |
| ACH/EFT warning | Do NOT send directly to the bank; gifts won't be recorded for tax |
| Cash + envelopes | Put your name on it for a tax receipt; numbered envelopes are available from the assistant treasurer |

### Contacts
Every existing contact carries over: info@, assistanttreasurer@wallacepca.org, duguid@wallacepca.org, and the phone number. They are **consolidated onto one contacts page**; its layout, and whether a contact is also repeated in context, are decided in the add/IA session.

### Images
Carry over only: hero photo candidates, the logo, and the 9 group photos (from `old_site/images.squarespace-cdn.com/content/v1/6a1f0be59c378c191f8c9f32/`; the plain filename is the original). Many images will be redone. `old_site/` stays as the archive for anything else.

---

## REMOVE
| Item | Why |
|---|---|
| Hero carousel | Use static photo(s) instead |
| Text baked into images (livestream, home group, podcast buttons) | Replaced by real buttons |
| PayPal logo image | Clutter (the info *links* stay) |
| Labor Day page (`labor-day.html`) | The event is over. Whether to add an events or retreat page is for the add session |
| Nav: empty "Projects" folder, Cart, Login | Squarespace leftovers; a real nav comes later |
| "Made with Squarespace" credit | — |
| `new-page.html` | Duplicate of the home page |
| `projects.html`, `projects?format=rss` | Empty |
| `cart.html` | Squarespace commerce |
| Squarespace CSS/JS/fonts (`static1.`, `assets.`, `definitions.sqspcdn.com`, `file.squarespace-cdn.com`) | Platform files |
| All other images (livestream/pastor photo, houses painting, podcast art, Labor Day banner and '25 photo, PayPal images, bulletin screenshot) | Not needed; still in the archive |

---

## Resulting pages (from carried-over content only)
1. Home `/`
2. Home Groups `/home-groups`
3. Donate `/donate`
4. Contact (consolidated contacts; details in a later session)

## Open items
- Request an SVG logo.
- Choose a trusted source for the Apostles' and Nicene Creed links.
- Confirm that the PayPal info links still resolve.
