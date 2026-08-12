# DOKIMACHINE repository instructions

## Framework

- This project uses Next.js 16 and React 19.
- Before changing framework APIs, routing, metadata, or file conventions, read the relevant documentation in `node_modules/next/dist/docs/`.
- Preserve the static-export configuration in `next.config.mjs` unless a task explicitly requires server-side behavior.

## Branches

- `main` is the production branch and currently serves the maintenance page.
- `v2` is the active redesign branch. Make redesign changes here.
- `v1` preserves the previous site.
- Do not merge into or push to `main` unless the user explicitly approves deployment.

## Project organization

- Keep routes and metadata in `src/app`.
- Keep landing-page components in `src/components/landing`.
- Keep reusable media embeds in `src/components/media`.
- Keep translations and structured copy in `src/content`.
- Store browser-accessible assets under the appropriate `public/images` category.
- Reference public assets from the URL root, for example `/images/brand/example.png`.
- Do not add generated build folders, caches, or deployment archives to Git.

## Quality

- Preserve English, Japanese, and Thai landing routes when editing localized content.
- Keep the design responsive and keyboard accessible.
- Run `npm run lint` and `npm run build` after meaningful code changes.
- Treat existing photographs and artwork as user-owned assets; do not replace or delete them without a clear reason.
