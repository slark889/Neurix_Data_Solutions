# Project Roadmap - Neurix Data Solutions Website

## Project Goal
Build a marketing website for a data automation company (Neurix Data Solutions). The site should showcase Power BI dashboard automation services, with similar style to https://dsadata.com.au/

## Reference Site Research (dsadata.com.au)
Full analysis in `workspace/workspace/tech_researcher/findings.md`

### Design Tokens (from reference)
| Token | Value |
|-------|-------|
| Primary/Accent | `#27aae1` (cyan-blue) |
| Dark/Headings | `#172e54` (navy) |
| Body Text | `#a0a6b0` (gray) |
| Background | `#fafcfc` (off-white) |
| Body Font | Montserrat (400, 13px/21px) |
| Heading Font | Roboto Slab (300-400 weight) |
| Max Width | 1220px |
| Logo Height | ~70px (50px on scroll) |

### Page Structure
- **Home**: Hero → Service Cards → Marketing Copy → Contact Bar → About Blurb → Footer
- **About**: Company story, team
- **Services**: Power BI, Alteryx, SQL Server, Oracle SQL (maps from DSA's "Data Acquisition")
- **Contact**: Form + company details
- **Privacy**: Legal/compliance

## Milestones

### M1: Project Setup & Design Foundation ✅ COMPLETE
- Scaffold Next.js project with TypeScript (v16.2.4) ✅
- Install and configure Tailwind CSS ✅
- Set up Google Fonts (Montserrat + Roboto Slab) ✅
- Create CSS custom properties for design tokens (#27aae1, #172e54, #a0a6b0, #fafcfc) ✅
- Create base Layout component with Header (sticky, logo) and Footer ✅
- Create Navigation component (responsive, mobile hamburger) ✅
- Verify `npm run build` succeeds ✅
- All code in `/repo/` directory ✅
- **Verified by Apollo**: PASS (build, config, CSS, fonts, components all verified)

### M2: Core Pages & Content ✅ COMPLETE
- Home page with hero, 4 service cards, value proposition, CTA ✅
- Services page with 4 areas (Power BI, Alteryx, SQL Server, Oracle SQL) ✅
- About page with company story, mission, values, team ✅
- Contact page with form (name, email, subject, message) + company details ✅
- Privacy page with standard privacy policy content ✅
- Terms of Service page ✅
- All 7 routes render as static content, `npm run build` succeeds ✅
- **Known issues**: 4 lint errors (`<a>` instead of `<Link>`) — to be fixed in M2.5

### M2.5: Polish & AI-Generated Visual Assets
#### M2.5.1: Lint Fixes ✅ COMPLETE
- Fix all lint errors (`<a>` → `<Link>` replacements across all pages + Footer) ✅
- Enable `no-html-link-for-pages` eslint rule (custom implementation) ✅
- `npm run lint` passes with zero errors ✅
- `npm run build` succeeds ✅
- **Verified by Apollo**: Diana confirmed all `<a>` → `<Link>`, Vera confirmed build/lint pass

#### M2.5.2: AI-Generated Visual Assets ⛔ BLOCKED
- Generate hero/background images using minimax API ⛔ No API key
- Generate service/icon images using minimax API ⛔ No API key
- Integrate all visual assets into site pages ⛔ Depends on API key
- **Escalated to human**: GitHub Issue #2 — "HUMAN: minimax API key unavailable"
- **Cannot proceed** without minimax API key from human

### M3: Quality, Accessibility & Polish ✅ COMPLETE
Fixed all issues found in Athena's independent audit (Elara + Nico). Verified by Apollo. Image generation remains BLOCKED.

**CRITICAL — Accessibility:**
1. Fix body text contrast: `--color-body: #a0a6b0` fails WCAG AA (2.38:1 on `#fafcfc`). Darken to `#6b7280` (4.50:1)
2. Fix primary accent contrast: `--color-primary: #27aae1` fails on both white text (2.65:1) and background (2.57:1). Darken to `#1a8ab8`
3. Fix future-dated "Last updated: May 2, 2026" on privacy + terms pages

**HIGH — SEO, UX, Content:**
4. Add per-page `metadata` exports (unique titles + descriptions) to all 6 sub-pages
5. Contact form: add loading state to fake submission, or label as demo
6. Replace placeholder contact info (555 phone, fake address) or mark as placeholder
7. Add `aria-describedby` linking form errors to inputs

**MEDIUM — UX, Content, Code Quality:**
8. Add active nav state indicator using `usePathname()`
9. Expand Footer with additional nav links (Home, Services, About, Contact)
10. Remove dead `prose` classes from privacy + terms pages (typography plugin not installed)
11. Add skip-to-content link for keyboard accessibility
12. Delete unused boilerplate SVGs: `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

**LOW:**
13. Adjust Home page hero padding for mobile (`py-32` → responsive)
14. Fix mobile nav menu edge alignment with header padding
15. Add `maxLength` to contact form inputs
16. Add `error.tsx`, `loading.tsx`, `not-found.tsx`
17. Fix inconsistent quote style in `about/page.tsx`
18. Fix eslint script: `"eslint"` → `"eslint ."`

**Requirements:**
- `npm run build` succeeds with zero errors
- `npm run lint` passes with zero errors
- All code in `/repo/` directory
- Minimax image generation remains BLOCKED — do NOT attempt

### M3: Quality, Accessibility & Polish ✅ COMPLETE
- All 18 issues from independent audit fixed and verified by Apollo
- Build passes, lint zero errors

### M4: Visual Polish & Reference Site Alignment ✅ COMPLETE
Bring the site closer to the dsadata.com.au reference site's polished look and feel. No image generation required — focus on CSS animations, transitions, and structural enhancements.

**Navigation & Header:**
1. Animated underline on desktop nav hover (80% width, centered, primary color — matching reference's `menu-line-below`)
2. Header shrink on scroll (logo height: 48px → 36px, padding reduces)
3. Smooth scroll transition on header state changes

**Sub-page Enhancements:**
4. Add breadcrumbs to all sub-pages (About, Services, Contact, Privacy, Terms) — matching reference's subheader breadcrumb pattern
5. Add decorative turquoise accent bar above sub-page hero titles (matching reference's `#4bc9e8` bar, ~130px × 8px)

**UI Polish:**
6. Add "Back to Top" button (appears on scroll, smooth scroll to top)
7. Enhance hero section on Home page with CSS gradient background (navy-to-dark gradient to add visual depth without images)
8. Add subtle entrance animations to service cards and value props (fade-in on scroll)
9. Improve button hover transitions (scale effect, shadow)
10. Add hover card lift effect (subtle translateY on service/value cards)

**Misc:**
11. Replace default Next.js favicon.ico with a simple SVG-based favicon using the primary color
12. Add `robots.txt` and `sitemap.xml` for SEO

**Requirements:**
- `npm run build` succeeds with zero errors
- `npm run lint` passes with zero errors
- All code in `/repo/` directory
- Do NOT attempt minimax image generation
- Do NOT add new dependencies — use CSS and existing tools only
- **Verified by Apollo**: All 12 items PASS. Build and lint clean.

### M5: Bug Fixes & Final Accessibility ✅ COMPLETE
Fix all issues found in Athena's second independent audit (Elara + Nico, cycle 156). Focus on real bugs and accessibility gaps.

**BUGS:**
1. Fix AnimateOnScroll memory leak — store timeout ID with `useRef` and clear in cleanup ✅
2. Fix `console.error` in `error.tsx` — guard behind `process.env.NODE_ENV === "development"` ✅

**ACCESSIBILITY:**
3. Wrap phone numbers in `<a href="tel:...">` on contact, privacy, and terms pages ✅
4. Add `aria-hidden="true"` to all decorative inline SVGs (37+ instances across all pages) ✅
5. Add custom `focus-visible` outline styles to navigation and footer links ✅

**CONTENT:**
6. Label fake team profiles as "Placeholder" on about page ✅

**CLEANUP:**
7. Delete unused `src/app/favicon.ico` ✅

**Verified by Apollo**: All 7 items PASS. Build and lint clean.

### M6: Final Polish — Contrast Fix & Remaining Issues ✅ COMPLETE
Fix the one remaining CRITICAL issue and several LOW-priority polish items found in the independent content audit.

**CRITICAL — Accessibility:**
1. Fix primary color contrast: `#1a8ab8` fails WCAG AA for normal text on `#fafcfc` (3.87:1, needs ≥4.5:1). Darken `--color-primary` from `#1a8ab8` to `#157a9e` in globals.css. This affects "Learn more" links, contact info links, and any `text-sm` or `text-base` text using the primary color. ✅

**LOW — UX Polish:**
2. Add demo notice to contact form success state — users currently see "Thank you for reaching out" with no indication the message wasn't actually sent. Add a subtle "(This is a demo — no message was sent.)" note to the success view. ✅
3. Clean up blank line inconsistency in about/page.tsx imports (between Breadcrumbs and AnimateOnScroll imports) ✅

**INFO — Spec Fix:**
4. Fix typo in spec.md: "Power Bi dashboard" → "Power BI dashboard" ✅

**Requirements:**
- `npm run build` succeeds with zero errors ✅
- `npm run lint` passes with zero errors ✅
- All code in `/repo/` directory ✅

### M7: Code Quality Cleanup & Remaining Polish (NEXT)
Fix all actionable issues found in Athena's third independent audit (Elara + Nico, cycle 166).

**Code Quality — Extract hardcoded colors:**
1. Extract `#4bc9e8` accent bar color to `--color-accent` CSS custom property (5 files: about, contact, privacy, services, terms)
2. Extract gradient colors `#1a5a8a` and `#0f1f38` from Home hero to CSS custom properties (`--color-gradient-start`, `--color-gradient-end`)

**UX — Navigation & Responsive:**
3. Fix global button `:hover` rule in globals.css — exclude hamburger button and BackToTop button from scale effect (they have their own hover styles)
4. Relax Home h1 `max-w-xs` to `max-w-sm` for better mobile rendering
5. Add `id` attributes to service sections on `/services` page so home page "Learn more" links can deep-link (e.g., `/services#power-bi`)

**Accessibility:**
6. Add `focus-visible` outline styles to Breadcrumbs component links
7. Add `aria-live="polite"` region to contact form for screen reader announcement of validation errors and success

**Requirements:**
- `npm run build` succeeds with zero errors
- `npm run lint` passes with zero errors
- All code in `/repo/` directory
- Do NOT attempt minimax image generation
- Do NOT add new dependencies

---

## Progress Log
- **M1**: ✅ COMPLETE — Verified by Apollo. All components, config, CSS, fonts, build passing.
- **M2**: ✅ COMPLETE — All 6 core pages + Terms created. Build passes.
- **M2.5.1 (Lint Fixes)**: ✅ COMPLETE — All `<a>` → `<Link>`, custom eslint rule enabled, lint 0 errors, build passes. Verified by Apollo.
- **M2.5.2 (Images)**: ⛔ BLOCKED — Awaiting minimax API key from human (GitHub Issue #2).
- **M3**: ✅ COMPLETE — All 18 quality/accessibility/polish items fixed. Verified by Apollo.
- **M4**: ✅ COMPLETE — All 12 visual polish items (nav underline, header shrink, breadcrumbs, accent bar, back-to-top, hero gradient, entrance animations, button scale, card lift, SVG favicon, robots.txt, sitemap.xml). Verified by Apollo.
- **M5**: ✅ COMPLETE — All 7 bug fixes & accessibility items (memory leak, console guard, tel: links, aria-hidden SVGs, focus-visible, placeholder badges, favicon.ico cleanup). Verified by Apollo.
- **M6**: ✅ COMPLETE — Primary color contrast fix (#157a9e), contact form demo disclosure, about import formatting, spec typo fix. Build + lint pass.
- **M7**: Defined — Code quality cleanup: extract hardcoded colors, fix button hover, h1 responsive, service deep-links, a11y gaps.

---

## Current Status
- **Phase**: PLANNING (Athena)
- **M7 defined**: Code quality cleanup & remaining polish (7 items)
- **Blocked**: M2.5.2 minimax image generation (awaiting API key from human)
- **Node.js**: v24.14.1 | **npm**: 11.11.0 | **Next.js**: 16.2.4
