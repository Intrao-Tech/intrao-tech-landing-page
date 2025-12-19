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
- Custom component classes: `section-dark`, `section-light`, `btn-circle-hover`
- Buttons: Use shadcn `Button` component with variants (`default`, `outline-dark`, `outline-light`)
- Custom animations: `animate-marquee`, `animate-float`, `animate-fade-in-up`
- Fonts: Poppins (primary), Helvetica (fallback)

### Color System

All colors use CSS variables in HSL format with Tailwind mappings.

**Theme colors** (standard shadcn):

- `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`

**Dark sections** (dark backgrounds):

- `bg-dark`, `text-dark-foreground`, `text-dark-muted`

**Light sections** (light cards/areas on dark pages):

- `bg-light`, `text-light-foreground`, `text-light-muted-foreground`, `border-light-border`

**Primary** (brand purple):

- `bg-primary`, `text-primary-foreground`, `hover:bg-primary-hover`

**Important**: Never use hardcoded Tailwind grays (`gray-100`, `gray-500`, `gray-900`, etc.) or `bg-white`. Always use the theme color classes above.

### Adding Routes

Add new routes in `src/App.tsx` above the catch-all `*` route. Create corresponding page in `src/pages/`.
