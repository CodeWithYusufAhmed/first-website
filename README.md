# mdyusufahmed.com

Personal portfolio of **MD. Yusuf Ahmed** — built with Angular 18 + Tailwind CSS,
designed to feel warm, expressive, and a little playful. Dark-first with a light
mode toggle.

> *"A kid with a million dreams and a centillion ideas to endeavor."*

---

## Stack

- **Angular 18** (standalone components, signals, new `@if` / `@for` control flow)
- **Tailwind CSS 3** with custom token system + dark mode via the `class` strategy
- **CSS-driven motion** — `IntersectionObserver`-based reveal directive plus
  Tailwind keyframes (no Framer Motion dep — Framer is React-only; Angular's
  primitives are plenty here)
- **Inline SVG icons** to keep the bundle tiny
- Targeted at **Vercel** for deploy

---

## Local development

```bash
# Install deps (Node 18+ recommended)
npm install

# Start the dev server (auto-opens http://localhost:4200)
npm run dev

# Production build
npm run build
```

The build output lands in `dist/portfolio/browser/`.

---

## Swapping in your photos

Drop your four hero photos into `public/images/` with these exact filenames:

| Filename       | What it is                                              | Suggested aspect |
| -------------- | ------------------------------------------------------- | ---------------- |
| `boat.jpg`     | Portrait on a boat with blue sky (hero image)           | ~4:5 portrait    |
| `jaago.jpg`    | Volunteering at JAAGO Foundation                        | ~3:2             |
| `guitar.jpg`   | Playing guitar at night                                 | ~3:2             |
| `cycling.jpg`  | On the bike, BDCyclists era                             | ~3:2             |

Also recommended:

- `public/images/og-cover.jpg` — **1200×630** social share card
- `public/apple-touch-icon.png` — **180×180** iOS home-screen icon

Compress to roughly **<300 KB each** before committing — [Squoosh.app](https://squoosh.app)
or `cwebp` are quick options. Anything in `public/` is served from the site root,
so `public/images/boat.jpg` resolves at `/images/boat.jpg`.

To change the photos referenced in the gallery itself, edit the `photos` array in
`src/app/components/gallery/gallery.component.ts`. Same idea for the hero image
in `src/app/components/hero/hero.component.ts`.

---

## Customizing the content

All content lives inside `src/app/components/<section>/<section>.component.ts`.
The template, data, and styles are colocated — no hopping around.

| File                                  | What's in it                              |
| ------------------------------------- | ----------------------------------------- |
| `hero.component.ts`                   | Name, quote, scroll cue                   |
| `about.component.ts`                  | Bio paragraphs, stat cards                |
| `education.component.ts`              | Timeline data (`items` array)             |
| `experience.component.ts`             | JAAGO progression + other roles           |
| `hobbies.component.ts`                | Music / Gaming / Storytelling + YouTube   |
| `gallery.component.ts`                | Photos + lightbox behavior                |
| `contact.component.ts`                | Socials, email                            |
| `nav/nav.component.ts`                | Nav links + theme toggle                  |
| `footer/footer.component.ts`          | Footer                                    |

Global tokens (colors, fonts, animations) live in `tailwind.config.js` and
`src/styles.css`.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Sign in to [vercel.com](https://vercel.com) → **Add New** → **Project** → import
   the repo.
3. Vercel will read `vercel.json` and set:
   - Build command: `npm run build`
   - Output directory: `dist/portfolio/browser`
4. Hit **Deploy**. First deploy lands at `<project>.vercel.app`.

### Pointing `mdyusufahmed.com` at it

1. In the Vercel project → **Settings** → **Domains** → add `mdyusufahmed.com`
   *and* `www.mdyusufahmed.com`.
2. Vercel will show you DNS records to add at your registrar (Namecheap,
   GoDaddy, etc.). Typically:

   | Type    | Name     | Value                                    |
   | ------- | -------- | ---------------------------------------- |
   | `A`     | `@`      | `76.76.21.21` (Vercel's anycast IP)      |
   | `CNAME` | `www`    | `cname.vercel-dns.com.`                  |

3. After DNS propagates (usually minutes, sometimes hours), Vercel issues an
   SSL certificate automatically. The `www` and apex versions both work.

If your registrar lets you set nameservers, you can alternatively point them at
Vercel's (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) and let Vercel manage DNS
end-to-end.

---

## Lighthouse targets

The project is tuned for **90+** across Performance, Accessibility, Best
Practices, and SEO out of the box:

- All images use `loading="lazy"` (except the hero, which is `eager` +
  `fetchpriority="high"`)
- Fonts are loaded with `preconnect` + `display=swap`
- `prefers-reduced-motion` is honored — all entrance animations disable when set
- Color contrast hits AA in both light and dark modes
- SEO meta, Open Graph, JSON-LD person schema, sitemap, and `robots.txt` are all
  in place

After your real images are in, run:

```bash
npm run build
npx serve dist/portfolio/browser
# then run Lighthouse in Chrome DevTools against http://localhost:3000
```

If you score below 90 on Performance, the most likely culprit is image size —
re-compress and re-test.

---

## Editing the SEO basics

The `<title>`, meta description, Open Graph image, and JSON-LD person schema all
live in `src/index.html`. Update them there if you change your name, role, or
swap in a different OG cover.

---

## License

Code is yours, photography is yours. Use freely.
