# 02 — What We Add to the New Site

Decided 2026-10-22. Source: `content-inventory.md` §8, plus a final review of gaps.
Builds on `01-keep-remove.md`, and follows the same minimal-maintenance rule. Together the two files cover all of the site's content; the next step is structure (IA).

---

## ADD

### New pages
| Item | Notes |
|---|---|
| About / Our Staff | Pastor and staff: name, role, email (photos optional). **Includes leadership**: elders and deacons by name. Only changes when staff or officers change |
| Mission partners | Missionaries and organizations the church supports: name, field, link. Rarely changes. Its placement (on About or a page of its own) is decided in the IA session |
| Plan Your Visit | What a service is like, parking, accessibility, what to expect. **Includes children and youth**: nursery, kids' and youth programs, Sunday School in general terms. No class topics or teacher names |

### Added to existing pages
| Item | Where | Notes |
|---|---|---|
| Map / directions | Visit and Contact | A Google Maps embed or a "Directions" link. Zero upkeep |
| Calendar / events | TBD in IA | **Only as an embedded Google Calendar** (it updates itself). Never a hand-written list. Recurring events like the Labor Day retreat go on the calendar |
| Newsletter signup | TBD in IA | A signup form or link through whatever service sends the newsletter (Breeze if possible). Prayer requests are **not** added |
| Deacon Fund explanation | Donate | A short note next to the Deacon Fund button saying what it's for and who to contact if you need help |
| PCA homepage link | Footer | The tagline links to `https://pcanet.org` |
| Social links | Footer | YouTube, SoundCloud, Spotify, plus Facebook or Instagram if they exist |

### Technical (set once)
| Item | Notes |
|---|---|
| Redirects from old URLs | `/home-groups-2026` → `/home-groups`; `/labor-day` → the calendar (or `/` if there's no calendar); `/new-page`, `/projects`, `/cart` → `/`. Old links live on in printed bulletins and QR codes |
| Service times in Google | schema.org `Church` markup (name, address, phone, service times); check the Google Business Profile matches |
| Link previews | Open Graph title, description and image on every page; a favicon from the logo |

---

## NOT ADDED
| Item | Why |
|---|---|
| Prayer requests | No one is set up to monitor them |
| Church history | Left out by choice |
| Students / campus ministry | Left out by choice |
| Membership class dates, holiday service times | Go stale. Holiday times can go on the calendar |
| Wedding / facility rental | Out of scope |

---

## Resulting pages (01 + 02)
1. Home `/`
2. About `/about` (staff and leadership; maybe mission partners)
3. Plan Your Visit `/visit` (including kids and youth, and the map)
4. Home Groups `/home-groups`
5. Donate `/donate` (including the Deacon Fund note)
6. Contact `/contact` (consolidated contacts and the map)
7. Possibly Mission Partners and Calendar/Events, depending on the IA session

## Open items (need facts from the church)
- Names, roles and emails for the pastor and staff; names of elders and deacons.
- List of mission partners.
- Visit details: parking, accessibility, nursery, children's and youth programs.
- Does the church keep a Google Calendar?
- Is there a newsletter, and what service sends it?
- Facebook or Instagram URLs, if any.
- Who manages the Google Business Profile?
- What the Deacon Fund covers, and who to contact for help.
