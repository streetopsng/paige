# Paige by StreetOps — Website

A modern, production-ready Next.js 14 landing page for Paige, the team engagement intelligence platform by StreetOps.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-navy` | `#0A1628` | Dark backgrounds |
| `brand-blue` | `#0057FF` | Primary CTA, accents |
| `brand-teal` | `#00C2CB` | Secondary accents |
| `brand-orange` | `#FF5C35` | Alerts, problems |
| `brand-purple` | `#7B2FBE` | Team lead sections |
| `brand-green` | `#00A878` | Success, features |

## Key Sections

1. **Navbar** — Fixed, transparent → frosted on scroll. Light/dark toggle. Mobile menu.
2. **Hero** — Full-screen with animated stat cards and audience CTAs.
3. **Problem** — 4 persona struggles + global statistics grid.
4. **Solution** — Core benefits + 4 audience-specific benefit sections (Companies, HR, Leads, Members).
5. **How It Works** — 10-step alternating timeline.
6. **Features** — 16-feature bento grid.
7. **Market Stats** — Financial impact numbers + productivity banner.
8. **Testimonials** — 6 StreetOps client testimonials.
9. **Signup CTA** — Email capture with beta perks.
10. **FAQ** — 3 groups (Team Leads, HR Leads, Companies) with accordions.
11. **Team Lead CTA** — Final conversion section.
12. **About** — StreetOps backstory + company stats.
13. **Footer** — 4-column with newsletter subscription.
14. **WhatsApp Widget** — Fixed bottom-right chat launcher.

## Customization

- Update phone number in `components/WhatsAppWidget.tsx`
- Replace placeholder testimonials with real ones in `components/sections/TestimonialsSection.tsx`
- Update footer links in `components/Footer.tsx`
- Brand colors in `tailwind.config.ts`

## Deployment

Deploy to Vercel with zero config:
```bash
npm i -g vercel
vercel
```

Or deploy to any platform that supports Node.js.
