# Portfolio (React + Vite)

Premium, colorful portfolio built from your resume content.

## Run locally

- Frontend: `npm start`
- Build: `npm run build`
- Preview build: `npm run preview`

## Customize content

- Edit your details here: `src/content/profile.js`
- Resume PDF here: `public/resume.pdf`

## Contact form

The contact form opens an email draft (`mailto:`) using the Email in `src/content/profile.js` (no backend required).

## Deploy (GitHub Pages)

Recommended: GitHub Actions.

- Repo Settings → Pages → Source: `GitHub Actions`
- Push to `main` (workflow builds and deploys `dist/`)
- Site URL: `https://vignesh804.github.io/portfolio/`
