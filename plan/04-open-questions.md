# 04 — Open Questions (fill in before building)

Compiled 2026-10-22 from every open item in `01-keep-remove.md`, `02-add.md`, `03-page-index.md` and `content-inventory.md`.
Write answers after each **A:**. Where there's a proposed default, "ok" accepts it. Leave blank if unknown.

---

## A. Facts from the church

### Staff & leadership (About page)
1. Pastor and staff, one per line: name — role — email.
    - Senior Pastor: Rev. Ryan Moore – moore@wallacepca.org
    - Assistant Pastor: Rev. Dr. Jamie Duguid – duguid@wallacepca.org
    - Assistant Pastor: Rev. Dr. David Miner – miner@wallacepca.org
    - Youth Director: Reed Berger – berger@wallacepca.org
    - Children’s Ministries: Lindsey Alder – childrensministries@wallacepca.org,
    - Michelle Hemphill – mhemphill@wallacepca.org
    - Church Office: Chris Pressau – info@wallacepca.org
    - Facilities Manager: Bob Werth – facilitiesmanager@wallacepca.org
    - Treasurer: Dawn Miggins – treasurer@wallacepca.org
    - Receipts Administrator: Katie Waterhouse – receiptsadministrator@wallacepca.org
    - Wallace Elders: Rock Brockman, Andy Cavanaugh, Kerry Gilliard, Dorry Kenyon, Frank McGovern, Marty Rabenhorst, and Charles Robinson (on sabbatical: Joe Alder, Terry Carman, John Daly; elder emeritus: Bashir Khan)
    - Wallace Deacons: Brecht Cantalice, Doug Cookson, Daniel Greco, Jim Hessler, Dan Lanterman, Jon Mease, Kyle Schick, Irfan Timothy, Ben VanDine, Jansen VanderMeulen, and Bob Werth (on sabbatical: Chris Brady, and Adnan Timothy)
2. Include staff photos? If yes, where do they come from?
    No, don't provide staff photos.

### Mission partners (About page)
5. Each partner: name — field/location — link (if any).
    I will provide this later. Leave a placeholder for now.
6. Any partners whose names shouldn't be published (security-sensitive fields)?
    They do exist, so this should be taken into consideration on the website.

### Plan Your Visit
7. What a service is like (length, style, music, communion frequency, dress, anything a first-timer should know).
    - Usually ends at about 12:15
    - Music is generally hymns and contemporary songs.
    - Communion every week
    - Dressy casual attire
8. Parking: where, and any notes (lot size, overflow, street).
    - We have plenty of free, on-premise parking.
   
9. Accessibility: step-free entrance, accessible restroom, elevator, hearing assistance, large-print bulletins?
    - Step-free entrance, elevator, hearing assistance. Contact Bob Werth for info on this.
10. Nursery: ages, which services/times, staffed by whom (in general terms)?
    - Nursery for infants - three years old during sunday school hours and during the whole service.
    - First floor, children's wing
11. Kids' programs (during service, Sunday School, other): what exists?
    - Sunday school for ages 4 - grade 6. second floor, children’s wing
    - During the second half of the service, children age 4 through 2nd grade
12. Youth programs: what exists?
    - Youth group grades 7-12.
    - Meet every Sunday evening. add placeholder for the times. Meet at HATC (House at the Crossroads)
    - Men's Bible study. add placeholder for location, leaders, and date/time.
    - Women's bible study led by Rebecca Hadeed and Hannah Shick at - add placeholder for time - pm every Wednesday at - add placeholder for location.
    - Retreats
13. Sunday School at 9:15: for all ages, or kids/adults separately?
    - separated by kids age 4-grade 6, youth grades 7-12, and adults.
    - add a placeholder for the adult ones. We need to consolidate that information and put it on there.


### Giving
14. What the Deacon Fund covers, in a sentence.
    - Meet temporary financial needs
15. Who to contact if you need help from the Deacon Fund (name/email)?
    plcaeholder for this information

### Calendar, newsletter, social
16. Does the church keep a Google Calendar? If yes, the public embed URL (or who owns it).
    **A:**
17. Is there a newsletter? What sends it (Breeze, Mailchimp, email list…)? Signup link/form if one exists.
    - yes, but keep this question here too. I need more details on what it's through and how it's sent out.
18. Facebook URL, if any.
    https://www.facebook.com/wallacepcachurch/
19. Instagram URL, if any.
    https://www.instagram.com/wallacepresbyterian/
20. Who manages the Google Business Profile? (Needed to check it matches the new site.)
    **A:**

### Assets
21. Can someone send a vector/SVG version of the logo? Who would have it?
    - Use the PNG for now. I'll make an SVG version of it
22. Hero photo: pick one of IMG_8928, DSCF4031, IMG_4992-1, D50BE71C…jpg, IMG_4988, or are new photos coming?
    **A:** No hero photo; Home uses a logo + name banner.
23. Are the 9 home-group photos staying, or being retaken?
    Keep them

---

## B. Decisions (yours)

### Navigation & layout
24. Nav items and order. Proposed: Plan Your Visit · About · Sermons & Media · Home Groups · Calendar · Give · Contact.
    **A:** That's good
25. Livestream button in the header on every page? Proposed: yes.
    **A:** No. That goes under sermons and media
26. Show service times on Home as well as Visit? (03 moves them to Visit only; the old site led with them.)
    **A:** No, Visit only. That's what the link to "Plan Your Visit" on the home page.
27. Mission partners as a section on About, not its own page? Proposed: yes.
    **A:** Yes
28. Calendar as its own page `/calendar` (only if Q16 is yes)? Proposed: yes.
    **A:** Change calendar to Events.
29. Newsletter signup in the footer + Contact page? Proposed: yes (only if Q17 is yes).
    **A:** Yes
30. Repeat contacts in context (treasurer on Donate, coordinator on Home Groups) as well as on Contact? Proposed: yes.
    **A:** Yes
31. "Can't make it?" link from Visit → Sermons & Media? Proposed: yes.
    **A:** Yes
32. Map: Google Maps embed, or just a "Directions" link? Proposed: embed on Visit, link on Contact.
    **A:** That is correct

### Content
33. Short "About us" paragraph for Home: write it yourself, or should I draft one for you to edit?
    **A:** Add a placeholder for now.
34. Source for the Apostles' and Nicene Creed links (e.g. PCA site, Ligonier, CCEL)?
    - We can add these to our site. Don't put them in nav, just link to them inline.
35. Meta descriptions for each page: should I draft them for you to approve?
    **A:** Yes

---

## C. Not covered by the plan yet (needed to build)

36. Hosting: where does the site live (Netlify, Cloudflare Pages, GitHub Pages, Squarespace replacement…)? Free tier OK?
    **A:** Right now it lives on Squarespace, but we can plan that later. I'm not worrying about that right now. For dev, we'll use GiHub Pages.
37. Domain: who controls wallacepca.org DNS, and can we point it at the new host?
    **A:** Not worrying about that right now. I believe that we control it.
38. Tech: a static site generator (e.g. Astro, Eleventy, Hugo) with content in data files — any preference?
    **A:** I like that idea, whatever is easiest and free.
39. Who will make the yearly updates (home groups, HG calendar)? Does it need to be editable by a non-technical person (e.g. a CMS or a spreadsheet), or is editing a file in Git fine?
    **A:** Yes, it should be editable by a non-technical person.
40. Email: is `info@` / `assistanttreasurer@` / `duguid@` mail hosted somewhere independent of Squarespace? (Moving off Squarespace must not break it.)
    **A:**
41. Visual style: any colors, fonts or sites you like, or should we take cues from the logo?
    **A:**

---

## Will check at build time (no answer needed)
- PayPal info links still resolve.
- Breeze sign-up links all work (incl. the corrected Chinese group link).
- PayPal button IDs still valid.
