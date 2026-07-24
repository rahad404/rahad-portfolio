# rahad.dev — Portfolio

A single-page developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn/ui**-style components, plus dynamic project detail pages.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This project needs internet access on first build (Google Fonts + Unsplash cover images), so make sure you run it somewhere with normal network access — it builds fine on Vercel or any local machine.

## Structure

- `app/page.tsx` — the single-page layout (Navbar, Hero, About, Skills, Education, Projects, Contact, Footer)
- `app/projects/[slug]/page.tsx` — dynamic "View more" detail page per project
- `lib/projects-data.ts` — all project content (stack, description, challenge, improvement, links) in one place — edit here to update project info
- `components/` — section components
- `components/ui/` — small shadcn-style primitives (Button, Card, Badge)

## Things to plug in before you ship it

1. **Resume button** — in `components/hero.tsx`, the "Download resume" button currently has no `href`/`onClick`. Once your PDF is ready, either:
   - drop it at `public/resume.pdf` and wrap the button in an `<a href="/resume.pdf" download>`, or
   - link it to a hosted PDF (Drive/Dropbox share link).
2. **Project cover images** — `lib/projects-data.ts` currently uses generic Unsplash stock photos as placeholders for each project's `cover`. Swap these for real screenshots of MediQueue, TicketBari, Plant Pot, and DataNav AI (e.g. host them in `public/projects/` and reference `/projects/mediqueue.png`).
3. **Profile photo** — pulled live from the ibb.co link you gave me. If that link ever expires, replace the `src` in `components/hero.tsx`.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config needed, it's a standard Next.js app.
