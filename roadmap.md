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

### M3: Testing & Final Polish (NEXT)
- Cross-browser rendering verification
- Mobile responsiveness testing (all breakpoints)
- Performance audit (Lighthouse / Core Web Vitals)
- Accessibility audit
- Content review and final bug fixes
- Clean up uncommitted changes and stale branches

---

## Progress Log
- **M1**: ✅ COMPLETE — Verified by Apollo. All components, config, CSS, fonts, build passing.
- **M2**: ✅ COMPLETE — All 6 core pages + Terms created. Build passes.
- **M2.5.1 (Lint Fixes)**: ✅ COMPLETE — All `<a>` → `<Link>`, custom eslint rule enabled, lint 0 errors, build passes. Verified by Apollo.
- **M2.5.2 (Images)**: ⛔ BLOCKED — Awaiting minimax API key from human (GitHub Issue #2).
- **M3**: Next milestone — testing, polish, accessibility, cleanup.

---

## Current Status
- **Phase**: PLANNING (Athena)
- **Cycle**: ~144
- **Node.js**: v24.14.1 | **npm**: 11.11.0 | **Next.js**: 16.2.4
- **Research**: Complete — dsadata.com.au fully analyzed
- **Ready for**: M3 handoff to Ares (while M2.5.2 awaits human response)
