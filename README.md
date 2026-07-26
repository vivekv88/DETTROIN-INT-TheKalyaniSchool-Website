# The Kalyani School — Website Redesign

Submission for the **Dettroin Full Stack Developer Internship Program** — Round 1: Website Redesign Challenge.

- **Full Name:** _<your name>_
- **Intern ID:** _<your intern id>_
- **Email Address:** _<your email>_
- **GitHub Username:** _<your github username>_
- **Selected Website:** https://www.thekalyanischool.com/
- **Live Demo Link:** _<add your Vercel deployment link>_

## Technologies Used

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Vercel (deployment)

## Key Improvements Made

- Rebuilt the site with a clean **component architecture** (Navbar, Footer, Card, Button, SectionHeading, ArcDivider, MapEmbed) — no duplicated markup across pages.
- Added a proper, accessible, responsive **navbar** with a mobile menu (the original site's navigation was cluttered and inconsistent).
- Introduced a clear **design system**: navy/gold/sage palette, Fraunces + Inter type pairing, and a recurring arc-wave motif tying back to the school's "Happy Place" identity.
- Structured content into dedicated **Home, About, Services, and Contact** pages instead of one long, disorganized page.
- Centralised all site content (nav links, awards, services, activities) in `data/site.ts` — a single source of truth so components stay DRY and content is easy to update.
- Added a working **contact form** and an embedded Google Map on the Contact page.
- Fully responsive across desktop, tablet, and mobile; visible keyboard focus states; respects `prefers-reduced-motion`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                 # Routes (App Router)
  layout.tsx         # Root layout — Navbar + Footer wrap every page
  page.tsx           # Home
  about/page.tsx
  services/page.tsx
  contact/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  ContactForm.tsx
  ui/                # Reusable primitives (Button, Card, Container, SectionHeading, ArcDivider, MapEmbed)
  home/              # Home-page-only sections (Hero, Awards, QuickHighlights, Activities, Newsletter)
data/
  site.ts            # Single source of truth for nav links, awards, services, activities, contact info
```

## Deployment

Deployed on Vercel: connect this repository at [vercel.com/new](https://vercel.com/new) and it will build with zero configuration.
