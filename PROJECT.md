# Derek Verdonck — Website Build

## Client Info
- **Client:** Jenell Masse (`jenell.masse@gmail.com`)
- **Subject:** Derek Verdonck (Jenell's husband)
- **Referred by:** Parker (existing client)
- **Deposit paid:** $450 (50% of $900 total)
- **Remaining:** $450 due on completion
- **Domain purchased:** `derekverdonck.com` (via Porkbun, June 3)
- **Hosting:** Netlify (free tier, same as other Huddy Digital projects)

---

## What Derek Does
Derek Verdonck is a 3D computer animator transitioning into Film Art Departments.
- 20+ years in television animation (Nelvana, DHX, JAM-Filled, NFB, etc.)
- Most recently working on live-action film productions in Art Department roles
- Credits include shows like Bubble Guppies, Mike The Knight, Sullivan's Crossing, and We Were Liars

---

## What They Want (Jenell's Outline)

- **CV / Credits** — List of creative projects in Animation leading into Film (they will send)
- **IMDB link** — Link to Derek's IMDB profile
- **Short bio** — They will write and send
- **Visuals** — Screen grabs to complement CV (they will send)
- **Inspiration tab** — What inspires Derek? Reference materials, mood board. Blog-like without commitment. Can be updated over time.
- **The Script Called For ____** — Before/after: script description → final product
- **Let's Connect** — LinkedIn + contact info
- **Quotes** — Derek to reach out to 3 close contacts for credential quotes
- **Client logos** — Disney, Sony, Nelvana, NFB, Jim Henson, etc. (if it makes sense)

---

## Reference Sites (What Derek Likes)

> Note from Jenell: "Much more elaborate than he needs."

1. **Matt Likely** — http://mlikely.com/portfolio/
   - Production Designer for Film & Television
   - Dark, image-heavy layout
   - Minimal nav: Home / Portfolio / Blog / IMDB / Contact
   - Social links: Twitter, Instagram, Vimeo

2. **Tamara Deverell** — https://tamaradeverell.com/
   - Production Designer for Film & Television
   - Masonry grid gallery layout
   - White/minimal aesthetic
   - Strong visual hierarchy — artwork first, nav out of the way

### Key Design Takeaways
- Let the imagery do the work — UI stays invisible
- Minimal navigation (5 items max)
- Large, full-bleed images
- Clean typography (Montserrat / Oswald / Spartan style)

---

## Design Decisions Made

- **Framework:** Next.js 16 (App Router) + Tailwind CSS
- **Theme:** Dark mode (black background) — makes film stills and 3D renders pop
- **Typography:** Inter (Google Fonts)
- **Gallery:** CSS Columns masonry grid (no JS dependency)
- **Hosting:** Netlify (free, auto-deploy from GitHub)
- **Domain:** `derekverdonck.com`

---

## Site Structure

| Section | Status |
|---|---|
| Navigation (fixed top bar) | ✅ Built |
| Hero / Bio | ✅ Built (placeholder bio) |
| The Script Called For | ✅ Built (placeholder images) |
| CV & Credits — Film | ✅ Built with real data |
| CV & Credits — TV Animation | ✅ Built with real data |
| Inspiration (masonry grid) | ✅ Built (placeholder images) |
| Footer + contact links | ✅ Built |
| Quotes section | ⏳ Waiting on Derek's 3 contacts |
| Real bio text | ⏳ Waiting on Jenell |
| Real images / screen grabs | ⏳ Waiting on Google Drive folder |
| IMDB URL | ⏳ Waiting on Derek |
| LinkedIn URL | ⏳ Waiting on Derek |
| Studio logos | ⏳ To add after content arrives |

---

## Full TV Animation Credits

| Year | Title | Studio | Role | Accolades |
|---|---|---|---|---|
| 2022 | Rubble And Crew | JAM-Filled / Spin Master | 3D Animator | 2022 Canadian Screen Awards Nominated |
| 2022 | Slugterra | DHX/IOM Media | Layout Artist | |
| 2021 | Lucas The Spider | DHX/IOM Media | Layout Artist | |
| 2020 | Norman Price And the Mistery in the Sky | DHX/IOM Media | Layout Artist | |
| 2020 | Fireman Sam | DHX/IOM Media | Layout Artist | |
| 2018 | Charlie's Colorforms City | DHX/IOM Media | Layout Supervisor | 2019 Parent's Choice Fun Stuff Award |
| 2017 | Rev & Roll | DHX/IOM Media | Layout Artist | |
| 2017 | Doozers | Jim Henson Company | Layout Supervisor & 3D Animator | |
| 2017 | Bob The Builder | DHX/IOM Media | Animator | |
| 2016 | Wishenpoof! | DHX/IOM Media | Animator | |
| 2015 | Little Charmers | NELVANA | Animator | |
| 2014–2015 | Trucktown | NELVANA | Animator & Layout Artist | |
| 2012–2015 | Mike The Knight | NELVANA | Animator | Won 2015 International Emmy Kids Award |
| 2011–2012 | Bubble Guppies | NELVANA | Lead Animator Season 2 | 2013 Daytime Emmy Outstanding Pre-School Program |
| 2006 | Di-Gata Defenders | NELVANA | FX Animator | |
| 2006 | Franklin | NELVANA | Animator | |
| 2006–2008 | Handy Manny | NELVANA | Animator | 2009 Daytime Emmy Nom; NAMIC Vision Awards 2008 & 2009; Genesis Awards |
| 2004–2007 | Miss Spider | NELVANA | Layout Artist & Animator | 2006 Daytime Emmy Annie Awards Nominated |
| 2003 | Monster By Mistake | CATAPULT | Animator | |
| 2002 | Ryan (dir. Chris Landreth) | NFB | Previsualization Artist | 2004 Best Animated Short: Annecy, SIGGRAPH Jury Award |
| 2001 | Action Man | MAINFRAME ENTERTAINMENT | Animator | |
| 2001 | Heavy Gear | MAINFRAME ENTERTAINMENT | Animator | |

## Full Film Credits

| Year | Title | Role |
|---|---|---|
| 2026 | We Were Liars Season 2 | Scenic Art Department Painter |
| 2025 | Sullivan's Crossing Season 4 | 3rd Assistant Art Director |
| 2024 | Sullivan's Crossing Season 3 | Art Department PA |

---

## Content Waiting On (Google Drive)
Jenell confirmed she will create a shared Google Drive folder and drop everything in. When it arrives:
1. Swap placeholder images in Inspiration grid (`/public/inspiration/`)
2. Swap Script Called For images (`/public/script/`)
3. Update `src/lib/data.ts` → `bio` field
4. Update `src/lib/data.ts` → `contacts` → real LinkedIn + IMDB URLs
5. Add quotes to a `Quotes` section (3 contacts)
6. Add studio logo images to `/public/logos/`

---

## Communication Log
- **May 26** — First contact via Instagram DM (referred by Parker)
- **Jun 3** — Email thread: scope confirmed, quote sent ($900 flat)
- **Jun 3** — Deposit ($450) received via e-transfer
- **Jun 3** — `derekverdonck.com` domain purchased
- **Jun 3** — Google Drive setup agreed upon for content delivery
- **Jun 6** — Full CV and outline document received from Jenell
- **Jun 6** — Build started
