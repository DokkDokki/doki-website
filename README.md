# DOKIMACHINE V2

The redesign workspace for [dokimachine.net](https://dokimachine.net), built with Next.js 16, React 19, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Use `npm run build` for the standard static export and `npm run build:sites` for the Sites deployment package.

## Project structure

```text
public/
  images/
    brand/        Logos, avatars, and identity artwork
    events/       Travel and live-performance images
    personal/     Doki portraits and illustrations
    photography/ Photography archive

src/
  app/            Routes, metadata, and global styles
  components/
    landing/      Localized landing-page experience
    media/        SoundCloud and YouTube embeds
  content/        Localized copy and structured content

scripts/          Deployment preparation
```

## Content editing

- Landing translations: `src/content/landing-translations.js`
- Extended landing sections: `src/components/landing/LandingShowcase.js`
- Doki page: `src/app/doki/page.js`
- DOKIMACHINE page: `src/app/dokimachine/page.js`
- Discography: `src/app/dokimachine/discography/page.js`
- Photography: `src/app/photography/page.js`
- Gear: `src/app/gear/page.js`

The production maintenance page lives on `main`. V2 redesign work belongs on the `v2` branch; the previous site is preserved on `v1`.
