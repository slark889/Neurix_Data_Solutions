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

### M2.5: Polish & AI-Generated Visual Assets (NEXT)
- Fix all lint errors (4 `<a>` → `<Link>` replacements in contact, privacy, services, terms)
- Generate hero/background images using minimax API
- Generate service/icon images using minimax API
- Integrate all visual assets into site pages
- Ensure `npm run build` succeeds and `npm run lint` passes with zero errors

### M3: Testing & Final Polish
- Cross-browser testing
- Mobile responsiveness verification
- Performance optimization
- Final bug fixes

---

## Progress Log
- **M1**: ✅ COMPLETE — Verified by Apollo. All components, config, CSS, fonts, build passing.
- **M2**: ✅ COMPLETE — All 6 core pages + Terms created. Build passes. 4 minor lint issues remain.
- **M2.5**: Next milestone — fix lint errors + generate/integrate minimax images
- **M3**: Not started

---

## Current Status
- **Phase**: PLANNING (Athena)
- **Cycle**: 133
- **Node.js**: v24.14.1 | **npm**: 11.11.0 | **Next.js**: 16.2.4
- **Research**: Complete — dsadata.com.au fully analyzed
- **Ready for**: M2.5 handoff to Ares
