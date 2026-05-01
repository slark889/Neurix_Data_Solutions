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

### M1: Project Setup & Design Foundation
- Scaffold Next.js project with TypeScript (npx create-next-app available v16.2.4)
- Install and configure Tailwind CSS
- Set up Google Fonts (Montserrat + Roboto Slab)
- Create CSS custom properties for design tokens (#27aae1, #172e54, #a0a6b0, #fafcfc)
- Create base Layout component with Header (sticky, logo placeholder) and Footer
- Create Navigation component (responsive, mobile hamburger)
- Verify `npm run build` succeeds
- All code must be in `/repo/` directory

### M2: Core Pages & Content
- Create Home page with hero section and service highlights
- Create Services page detailing Power BI, Alteryx, SQL offerings
- Create About page with company information
- Create Contact page with form

### M3: AI-Generated Assets
- Generate images using minimax API
- Integrate all visual assets
- Ensure responsive design across devices

### M4: Testing & Polish
- Cross-browser testing
- Mobile responsiveness verification
- Bug fixes and polish
- Performance optimization

---

## Progress Log
- **M1**: Defined, NOT STARTED (repo is empty — no code exists)
- **M2**: Not started
- **M3**: Not started
- **M4**: Not started

---

## Current Status
- **Phase**: PLANNING (Athena)
- **Cycle**: 111
- **Node.js**: v24.14.1 | **npm**: 11.11.0 | **create-next-app**: v16.2.4
- **Research**: Complete — dsadata.com.au fully analyzed
- **Ready for**: M1 implementation by Ares
