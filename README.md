# Georgios Gkenios — Personal Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deployment](https://github.com/gkenios/portfolio/actions/workflows/deployment.yml/badge.svg)](https://github.com/gkenios/portfolio/actions/workflows/deployment.yml)

_A personal portfolio website built with React, TypeScript, and Vite. Showcases skills, work experience, education, and hobbies with smooth animations and a clean, responsive design. Built for both desktop and mobile._

---

**Webpage:** [gkenios.com](https://gkenios.com)

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Language   | TypeScript 6               |
| Framework  | React 19                   |
| Build tool | Vite 8                     |
| Styling    | Tailwind CSS v4            |
| Animations | Framer Motion              |
| Icons      | Lucide React               |
| Linting    | ESLint + typescript-eslint |
| Formatting | Prettier                   |

## Features

| Feature                   | Description                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Sections                  | Intro, Skills, Experience, Education, Hobbies, Footer                                                                 |
| Dark / light theme        | Persisted in `localStorage`, with system preference as the initial fallback                                           |
| Scroll progress bar       | Fixed indicator at the top of the page                                                                                |
| Sticky navigation         | Hamburger dropdown on mobile, inline links on desktop                                                                 |
| Framer Motion animations  | Fade-up on scroll for every section and staggered children                                                            |
| Nested experience entries | Support for roles with sub-projects under the same company, ideal for consultancy or freelance work                   |
| Hobby carousel cards      | Image-based or terminal-style cards rotating in 3D space, with auto-play and manual controls                          |
| SEO                       | `<meta>` tags and JSON-LD `Person` schema injected at build time via a custom Vite plugin, driven by `src/data/me.ts` |
| Sitemap & robots.txt      | Included in `public/`                                                                                                 |

## Project Structure

```
src/
├── App.tsx              # Root layout, section composition, nav items
├── types.ts             # Shared TypeScript types
├── globals.css          # Tailwind base + CSS custom properties (theme tokens)
├── components/          # UI components, one folder per section
│   ├── Header/          # Sticky header with theme toggle and nav
│   ├── Intro/           # Hero section with pipeline graphic
│   ├── Skills/          # Skill tiles grouped by category
│   ├── Experience/      # Timeline cards with nested project support
│   ├── Education/       # Education timeline
│   ├── Hobbies/         # Hobby carousel cards (image or terminal variant)
│   ├── ContactIcons/    # Dynamic SVG contact icons
│   ├── ScrollProgress   # Top scroll indicator
│   ├── Section          # Reusable section wrapper with fade-in
│   └── Footer           # Footer with contact links
├── data/                # All content — edit here to update the site
│   ├── me.ts            # Name, role, bio, contact links, CV URL
│   ├── sections.ts      # Section titles and descriptions
│   ├── skills.ts        # Skill categories and icon paths
│   ├── experience.ts    # Work history
│   ├── education.ts     # Academic background
│   └── hobbies.ts       # Hobbies (image or terminal variant)
└── lib/
    ├── animations.ts    # Shared Framer Motion variants
    ├── format.ts        # Date / time period formatting helpers
    └── useTheme.ts      # Light/dark theme hook
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Customising Content

All site content lives in `src/data/`. No component code needs to change for typical updates:

- **Personal info, bio, CV link** → `src/data/me.ts`
- **Section titles & descriptions** → `src/data/sections.ts`
- **Skills** → `src/data/skills.ts`
- **Work experience** → `src/data/experience.ts`
- **Education** → `src/data/education.ts`
- **Hobbies** → `src/data/hobbies.ts`

Skill icons are served from `public/icons/` as SVGs.

## Attributions

- The Introduction section, excluding the pipeline graph, along with the transparent header bar is inspired by [Achyut Katiyar](https://github.com/Achyut21/achyut-portfolio)
