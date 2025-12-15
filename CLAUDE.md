# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a React landing page for Intrao Tech built with Vite, TypeScript, and shadcn/ui.

### Stack

- **Build**: Vite with SWC for React
- **Styling**: Tailwind CSS with CSS variables for theming
- **Components**: shadcn/ui (Radix primitives)
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion + custom Tailwind animations

### Project Structure

- `src/pages/` - Route pages (Index, Services, Cases, About, Insights, Contacts)
- `src/components/sections/` - Page sections (HeroSection, ServicesSection, etc.)
- `src/components/ui/` - shadcn/ui components
- `src/lib/utils.ts` - `cn()` utility for className merging

### Path Alias

`@` maps to `./src` (configured in vite.config.ts)

### Styling Conventions

- CSS variables defined in `src/index.css` for colors (primary = purple, HSL format)
- Custom component classes: `section-dark`, `section-light`, `btn-primary`, `btn-outline-dark`
- Custom animations: `animate-marquee`, `animate-float`, `animate-fade-in-up`
- Fonts: Poppins (primary), Helvetica (fallback)

### Adding Routes

Add new routes in `src/App.tsx` above the catch-all `*` route. Create corresponding page in `src/pages/`.
