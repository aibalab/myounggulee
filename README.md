# DAISY Lab Homepage

Homepage for **DAISY Lab (Data & AI Systems for Business Analytics)** at Konkuk University School of Business.

Live site: https://aibalab.github.io/myounggulee/

## Stack

- React 18 + Vite
- Tailwind CSS (dark theme, indigo accent)
- React Router (SPA with GitHub Pages fallbacks)

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/ (+ GitHub Pages route fallbacks)
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch.

## Editing content

Most text lives in `src/data/labInfo.js` (lab name, hero copy, professor profile, research areas, experience, teaching). Publications are in `src/pages/Research.jsx`, projects in `src/pages/Projects.jsx`.
