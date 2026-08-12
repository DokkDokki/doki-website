# DOKIMACHINE V2

The next version of [dokimachine.net](https://dokimachine.net): a multilingual portfolio connecting Doki's engineering, photography, and personal work with the DOKIMACHINE music project.

## Technology

- Next.js 16 with the App Router
- React 19
- Tailwind CSS 3
- Framer Motion
- Static HTML export

## Getting started

```bash
npm install
npm run dev
```

The development site is available at `http://localhost:3000`.

## Commands

```bash
npm run dev          # Start the local development server
npm run lint         # Check code quality
npm run build        # Create the standard static export
npm run build:sites  # Build and prepare the Sites deployment package
```

## Branches

- `main` — production maintenance page
- `v2` — active redesign work
- `v1` — preserved previous version

V2 should be reviewed and tested before it is merged into `main` for deployment.

## Routes

```text
/                 Automatic device-language selection
/en               English landing page
/jp               Japanese landing page
/th               Thai landing page
/en/doki          English personal portfolio
/en/doki/gear     English equipment and tools
/en/photography   English photography archive
/en/music         English music project
/en/music/discography
```

## Project structure

```text
public/
  images/
    brand/          Identity artwork and icons
    events/         Travel and performance images
    personal/       Doki portraits and illustrations
    photography/    Photography archive

src/
  app/              Routes, layouts, metadata, and global styles
  components/
    landing/        Localized landing-page interface
    media/          SoundCloud and YouTube embeds
  content/          Translations and structured copy

scripts/            Deployment preparation utilities
```

Files inside `public` are referenced without the `public` prefix. For example:

```jsx
<Image src="/images/personal/doki-hikari.jpg" alt="Doki" />
```

## Editing content

- Landing translations: `src/content/landing-translations.js`
- Landing showcase: `src/components/landing/LandingShowcase.js`
- Split hero: `src/components/landing/SplitHero.js`
- Footer and language switcher: `src/components/landing/Footer.js`
- Doki page: `src/app/doki/page.js`
- DOKIMACHINE page: `src/app/dokimachine/page.js`
- Discography: `src/app/dokimachine/discography/page.js`
- Photography: `src/app/photography/page.js`
- Gear: `src/app/gear/page.js`
