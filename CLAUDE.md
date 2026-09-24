# Snatched & Nailed — Project Rules

## Where the project lives
Work ONLY in `C:\Users\charb\Documents\salon-website` (the GitHub repo). Do not create or edit
project files anywhere else. (The old folder `C:\Users\charb\snatched-and-nailed` no longer exists.)

## Project
Public website for a nail salon in Lebanon. Working name: "Snatched & Nailed" (may change).

**Goal:** When people search the salon's name on Google or open the link on their phone, they see
services, prices, her work, and location, and can contact her on WhatsApp.

## Rules
- Plain HTML, CSS and JavaScript only. No frameworks, no npm, no build tools.
- Must open by double-clicking `index.html`, and later be hosted on GitHub Pages.
- All salon content (name, tagline, services, prices, hours, address, map, WhatsApp, Instagram,
  colors) lives in ONE file: `config.js` (as `window.SITE = {...}`). The page reads from it.
  This site will become a template for other salons.
- **Exception:** the page title, meta description, social preview tags (Open Graph) and the
  LocalBusiness structured data (JSON-LD) must be written directly in `index.html`, because Google
  and WhatsApp link previews don't reliably run JavaScript. When salon details change in
  `config.js`, update these in `index.html` too.
- Mobile-first: most visitors are on phones. Must also look good on desktop.
- Look: elegant, modern, feminine but clean.
- Images go in `/images`. Use simple local placeholder images for now, nothing from the internet.
- Keep code simple and commented so a beginner can follow it.
- Only push to GitHub when the user explicitly asks for it.
- **Search engines are blocked for now:** `index.html` has a temporary
  `<meta name="robots" content="noindex, nofollow">` tag so Google doesn't list the site while it
  has placeholder content (phone is `961XXXXXXXX`, photos are placeholders). Remove that tag
  (and its comment block) once the real content is in — otherwise the site will never show up on Google.
- **Version number (cache busting):** `index.html` loads `style.css?v=N`, `config.js?v=N` and
  `script.js?v=N`, all with the SAME number. Every time any of these three files changes,
  increase N by 1 on all three links, so visitors' browsers load the new files instead of an
  old saved copy. Current version: **v=5**.

## File layout
- `index.html` — page structure + SEO/social tags + structured data
- `config.js`  — ALL salon content (edit this to change the site)
- `style.css`  — styles (mobile-first; desktop rules in `@media (min-width: ...)` blocks)
- `script.js`  — reads `window.SITE` and fills the page; gallery lightbox
- `images/`    — logo, gallery photos, social preview image

## Phases
- **Phase 1 (done):** one page — hero, services & prices, gallery (tap to enlarge), about,
  location (map, address, hours), contact, footer, floating WhatsApp button on mobile.
- **Design fixes (done):** fixed top menu with "Book" button, optional hero photo
  (`heroImage` in config.js), contact cards with icons, floating WhatsApp button hides while the
  hero's Book button is visible.
