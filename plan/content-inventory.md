# Wallace PCA — Content Inventory of the Old Site

## Context
The goal is a reviewed list of everything the current Squarespace site (`old_site/`, a wget mirror of www.wallacepca.org) contains, so we can decide what goes into the rebuilt site. The site is small: the crawl got **8 HTML pages**, and only **4 of them have real content** (Home, Home Groups 2026, Donate, Labor Day). The rest are Squarespace leftovers.

Legend: **KEEP** = carry over · **UPDATE** = keep but fix or refresh · **DROP** = leave out · **?** = needs a decision

---

## 1. Site-wide / identity
| Item | Value | Rec |
|---|---|---|
| Church name | Wallace Presbyterian Church | KEEP |
| Denomination tagline (bulletin only, not on site) | "A Congregation in the Presbyterian Church in America" | KEEP. Add to the site footer |
| Address | 3725 Metzerott Road, College Park, MD 20740 | KEEP |
| Phone | 301-935-5900 | KEEP |
| General email | info@wallacepca.org | KEEP |
| Logo | `WALLACE_LOGO-1+(1).png` (blue church windows + wordmark) | KEEP. Ask for a vector/SVG original |
| Footer | Name and address, plus "Made with Squarespace" | KEEP the name and address, DROP the Squarespace credit |
| Nav | Only a "Projects" folder (empty), Cart, and Login | DROP. Needs a real nav |
| Meta descriptions | All empty | UPDATE. Write new ones |

## 2. Home page (`index.html`; `new-page.html` is a duplicate of it)
- **Hero photo carousel** (6 images): IMG_8928, DSCF4031, IMG_4992-1, D50BE71C…jpg, IMG_4988, plus the logo. **DROP** (replaced by a logo + name banner)
- **Service times**: 9:15 AM Sunday School classes · 10:30 AM Sunday Morning Service. **KEEP** (most important info)
- **Address line** repeated under the times. **KEEP**
- **Livestream**: an image button ("Click Here for Service Livestream", photo of the pastor at communion) linking to `youtube.com/@wallacepresbyterianchurch/streams`. **KEEP the link**, and replace the text baked into the image with a real button
- **Recent Sermons**: an embedded SoundCloud playlist player (playlist id 2235055211) plus "Click here for more sermons" linking to `soundcloud.com/wallacepresbyterianchurch/sets`. **KEEP**
- **"Join a Home Group"** image button (abstract houses painting) linking to the Home Groups page. **KEEP the link**, replacing the image-text with a real button
- **Podcast "The Fourth Point"** (image of a microphone and bookshelves). **UPDATE**: the link is **broken (404)**. It points at an old WordPress image URL, not the podcast. **? Need the real podcast URL** (Spotify? Apple?)
- **What We Believe** (3 paragraphs): gospel summary · Bible as God's Word · what "Presbyterian" means, plus links to the Westminster Confession (pcaac.org), Apostles' Creed, and Nicene Creed (Wikipedia; one link oddly goes to web.archive.org). **KEEP the text**, tidy the links (point the creeds at the PCA or another trusted source)
- **"Click Here to Give"** linking to Donate. **KEEP**
- **Contact Us** block (phone, email, address). **KEEP**
- **Sunday Bulletin**: "Click to download bullet[in]" (typo) linking to a fixed Google Drive file, with a screenshot of the bulletin cover as the image. **UPDATE**: fix the typo. **? Is the Drive file replaced each week at the same link?**

## 3. Home Groups 2026 (`home-groups-2026.html`)
- **Intro** (2 paragraphs + 1 Cor 12:7). **KEEP**
- **9 groups**, each with Focus, When, How Often, Location, Childcare (sometimes), a photo, and a Breeze sign-up link:

| Group | Focus | When | Freq | Location | Childcare | Sign-up |
|---|---|---|---|---|---|---|
| Chinese Language | Survey of Biblical Teaching | Sun, after service | weekly | at church | — | form/chinese-home-group (**bug:** the link goes to `/form/burke`) |
| Brockman | Apostles' Creed | Wed 7PM | 2×/mo | University Park, MD | kids play nearby | form/brockman |
| Burke | Dinner, Sharing, Prayer | Sun 5–7 | 2×/mo | Cheverly, MD | kids welcome | form/burke |
| Carman | Relationship Building (+ sermon discussion) | Wed 7PM | 2×/mo | Laurel, MD | — | form/carman |
| Duguid-Dodson | Bible Study | Sun 5PM | 2×/mo | Cathedral Heights, DC | — | form/duguid |
| Iszler (also spelled "Izsler" on the page) | Bible Study | Thu 7PM | 2×/mo | New Carrollton, MD | — | form/iszler |
| Lanterman | Bible Study | Wed 7:30PM | 2×/mo | Virtual | — | form/lanterman |
| Miner | Bible Study | Sun 5PM | 2×/mo | Berwyn Heights | kids play nearby | form/miner |
| Rabenhorst | Sermon Discussion | Sun 5PM | 2×/mo | University Park, MD | none | form/rabenhorst |

  **KEEP** as structured data (easy to update each year). Fix the Chinese group's link and the Iszler/Izsler spelling.
- **Coordinator contact**: Jamie Duguid, duguid@wallacepca.org. **KEEP**
- **Home Group Calendar, Fall 2026 to Spring 2027**: a suggested meeting schedule (13 meetings, HG training Oct 10, leaders' dinners Nov 18/19 and May 5/6, breaks for Advent and Easter, and holiday notes). Also has a typo, "Novermber". **KEEP** for this year. **?** Should it be its own page or a collapsible section?

## 4. Donate (`donate.html`)
- **Intro**: in-person offering, plus mail or card. **KEEP** (the "see upper right" wording is outdated, so UPDATE it)
- **PayPal buttons**: General Fund (`hosted_button_id=C3J2B3F7UYA7A`) and Deacon Fund (`6H6NLKE8QFYJA`). **KEEP**
- **PayPal fee note** (1.99%, suggests adding about 2%). **KEEP**
- **PayPal logo and "How PayPal Works" links**. **DROP** (clutter)
- **Checks**: offering plate, or mail to "ATTN: Assistant Treasurer" at the church address. **KEEP**
- **Bill Pay** instructions (use "offering" as the account number). **KEEP**
- **ACH/EFT warning** (do NOT send directly to the bank; gifts won't be recorded for tax). **KEEP** (important)
- **Cash** (offering plate; put your name on it for a tax receipt; numbered envelopes are available from the assistant treasurer). **KEEP**
- **Contact**: assistanttreasurer@wallacepca.org. **KEEP**

## 5. Labor Day retreat (`labor-day.html`)
- "Labor Day '26" banner (Hebrew הִנֵּנִי, "Here I am"), plus the '25 group photo
- Camp Hemlock · Sept 4–7, 2026 · $200
- Breeze registration: Camper (`form/33655d`) and Adult (`form/33655d75`)
- **?** The event is over (today is 2026-10-14). Suggest an **"Events" pattern** that can be reused each year rather than a fixed page. The '25 photo could go in a gallery.

## 6. Leftovers / junk: DROP
- `new-page.html`: duplicate of the home page
- `projects.html`: empty "Projects" folder
- `cart.html`, the cart icon, and the Login link (Squarespace commerce bits)
- `projects?format=rss`: empty feed
- Squarespace CSS/JS/fonts in `static1.`, `assets.`, `definitions.sqspcdn.com`, `file.squarespace-cdn.com` (only the fonts there; no documents)

## 7. Media assets worth saving (`images.squarespace-cdn.com/content/v1/6a1f0be59c378c191f8c9f32/`)
23 image folders, each with several sizes; the plain filename is the original. Reusable: the 5 hero photos, the logo, the pastor/communion photo (inside `livestream.jpg`), the houses painting, the podcast art, the Labor Day banner and '25 group photo, and 9 home-group photos. The PayPal images, the bulletin screenshot, and the duplicate `houses.jpg` can be dropped.

## 8. Notably MISSING (worth considering for the new site)
- Staff/pastor names and an "About / Our Staff" page (the pastor is pictured but never named)
- "Plan your visit / What to expect" (parking, kids, accessibility)
- Children's and youth ministries, nursery info, Sunday School class details
- A map embed or directions
- Calendar/events listing
- Prayer requests or a newsletter signup
- Link to the PCA denomination homepage
- Social links beyond YouTube/SoundCloud

## Open questions for you
1. What's the real podcast URL for "The Fourth Point"?
2. Is the bulletin Google Drive link permanent (overwritten each week)?
3. Should Labor Day become a generic "Events" section, or be dropped until next year?
4. Which of the "missing" items (§8) should the new site add?

## Status
Draft, 2026-10-14. Recommendations above are proposals; open questions are still unresolved.
