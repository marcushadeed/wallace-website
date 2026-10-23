# 03 — Page Index

Drafted 2026-10-22. Source: `01-keep-remove.md`, `02-add.md`, `content-inventory.md`.
Lists every page on the new site and what goes on it. Items marked **(proposed)** settle questions that 01/02 left for the IA session; confirm or change them.

---

## Site-wide (every page)

### Header
- Logo (PNG for now, SVG when we get one) → `/`
- Nav: Plan Your Visit · About · Sermons & Media · Home Groups · Calendar · Give · Contact **(proposed)**
- Livestream button → YouTube streams **(proposed)**

### Footer
- Church name and address
- "A Congregation in the Presbyterian Church in America" → `https://pcanet.org`
- Social links: YouTube, SoundCloud, Spotify (+ Facebook/Instagram if they exist)
- Newsletter signup link/form **(proposed: footer, so it's everywhere)**

### Per-page metadata
- Meta description, Open Graph title/description/image, favicon from the logo
- schema.org `Church` markup (name, address, phone, service times), on Home at least

---

## Pages

### 1. Home `/`
Kept short. Everything else from the old home page has moved: service times → Visit; livestream, sermons, podcast, bulletin → Sermons & Media; home groups, giving and contact are reached via the nav and footer.

| Section | Content |
|---|---|
| Hero | One static photo (no carousel) |
| Plan Your Visit | Prominent link → `/visit` (service times, directions, what to expect) |
| About us | A short paragraph (new text needed) + link → `/about` |
| What We Believe | The 3 paragraphs; links to Westminster Confession (pcaac.org) and the Apostles' and Nicene Creeds (trusted source TBD) |

### 2. Sermons & Media `/sermons`
| Section | Content |
|---|---|
| Livestream | Button → `youtube.com/@wallacepresbyterianchurch/streams` |
| Recent sermons | SoundCloud playlist embed (2235055211) + "more sermons" → SoundCloud sets |
| Podcast | "The Fourth Point" → Spotify show |
| Sunday bulletin | Fixed Google Drive link (overwritten weekly) |

### 3. Plan Your Visit `/visit`
| Section | Content |
|---|---|
| Service times + address | Same as Home |
| What to expect | What a service is like |
| Parking | — |
| Accessibility | — |
| Children & youth | Nursery, kids' and youth programs, Sunday School in general terms (no topics or teacher names) |
| Map | Google Maps embed or Directions link |
| Can't make it? | Link → `/sermons` **(proposed)** |

### 4. About `/about`
| Section | Content |
|---|---|
| Staff | Pastor and staff: name, role, email (photos optional) |
| Leadership | Elders and deacons by name |
| Mission partners | Name, field, link **(proposed: a section here, not its own page — it's short and rarely changes)** |

### 5. Home Groups `/home-groups`
| Section | Content |
|---|---|
| Intro | 2 paragraphs + 1 Cor 12:7 |
| Coordinator | Jamie Duguid, duguid@wallacepca.org |
| Group listings | 9 groups from structured data: name, focus, day/time, frequency, location, childcare, photo, Breeze sign-up link (Chinese-group link and "Iszler" spelling fixed) |
| HG calendar | Yearly schedule, below the listings ("Novermber" fixed) |

### 6. Donate `/donate`
| Section | Content |
|---|---|
| Intro | In person, by mail, or by card (reworded) |
| Online (PayPal) | General Fund and Deacon Fund buttons; Deacon Fund note (what it covers, who to contact); 1.99% fee note; small PayPal info links |
| Checks + Bill Pay | Offering plate or mail to "ATTN: Assistant Treasurer"; Bill Pay with "offering" as account number |
| ACH/EFT warning | Don't send directly to the bank |
| Cash + envelopes | Name for a tax receipt; numbered envelopes from the assistant treasurer |
| Contact | assistanttreasurer@wallacepca.org **(proposed: repeated here in context)** |

### 7. Calendar `/calendar` **(proposed: own page; only if the church keeps a Google Calendar)**
| Section | Content |
|---|---|
| Calendar | Embedded Google Calendar (events, retreats, holiday service times) |

If there's no Google Calendar, drop this page and the nav item.

### 8. Contact `/contact`
| Section | Content |
|---|---|
| General | Phone 301-935-5900, info@wallacepca.org, address |
| Directory | Assistant treasurer (giving), Home Groups coordinator, staff emails (from About) |
| Map | Google Maps embed or Directions link |
| Newsletter | Signup (also in footer) |

---

## Redirects (no page, set once)
| Old URL | → |
|---|---|
| `/home-groups-2026` | `/home-groups` |
| `/labor-day` | `/calendar` (or `/` if no calendar) |
| `/new-page`, `/projects`, `/cart` | `/` |

## Decisions to confirm
- Nav items and order.
- Short "About us" text for Home (needs writing).
- Mission partners as a section on About.
- Calendar as its own page (pending: does a Google Calendar exist?).
- Newsletter signup in the footer + Contact.
- Contacts repeated in context (treasurer on Donate, coordinator on Home Groups) as well as on Contact.
