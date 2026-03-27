# Tri Peaks Electric Service — Website

Production-ready lead-optimized homepage for Tri Peaks Electric Service Inc.

**Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Framer Motion · Resend

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create `.env.local` (already exists as a placeholder):

```env
RESEND_API_KEY=re_your_api_key_here
```

### Getting your Resend API key

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain: `tpeservice.net`
3. Create an API key under **API Keys**
4. Paste it into `.env.local`

Until the API key is configured, the contact form will return an error — the rest of the site works fine.

---

## Deployment (Vercel)

```bash
vercel deploy
```

Add `RESEND_API_KEY` in the Vercel dashboard under **Settings → Environment Variables**.

---

## Project Structure

```
app/
  layout.tsx          — metadata, fonts, globals
  page.tsx            — homepage assembly + JSON-LD schema
  globals.css         — Tailwind v4 theme (brand colors)
  api/
    contact/
      route.ts        — POST handler → sends email via Resend

components/
  Nav.tsx             — sticky nav + mobile bottom call bar
  Hero.tsx            — full-width hero + trust bar
  Services.tsx        — 7 service cards with Yeti images
  Offers.tsx          — 4 discount offer cards → PDF links
  Specials.tsx        — 6 pricing special cards → PDF links
  Gallery.tsx         — photo grid with lightbox
  WhyUs.tsx           — trust points + pull quote
  ContactForm.tsx     — react-hook-form + zod + API submit
  ServiceArea.tsx     — location pills + mountain SVG
  CTABanner.tsx       — bottom CTA section
  Footer.tsx          — logo, contact, links, copyright

public/
  assets/             — images (Yeti art, logos, job photos)
  offers/             — discount offer PDFs
  specials/           — pricing special PDFs
```

---

## Business Info

- **Owner:** David Martinez
- **Phone:** (720) 436-5746
- **Email:** David@TPEService.net
- **Location:** Bailey, CO
- **Service area:** Conifer, Evergreen, Indian Hills, Pine, Morrison, Fairplay, Jefferson County, Park County, West Metro Denver, 285 Corridor
