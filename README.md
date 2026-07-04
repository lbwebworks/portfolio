
# Portfolio (scaffold)

This is a scaffolded Vue 3 + Vite + TypeScript portfolio site prepared for GitHub Pages.

Local Quick start

```bash
npm install
npm run dev

# open http://localhost:5173
```

Build (production)

```bash
npm run build
```

Deploy to GitHub Pages (two options)

1) Use the included GitHub Actions workflow (recommended)

- Create a GitHub repository (replace <USER> and <REPO> below):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USER>/<REPO>.git
git push -u origin main
```

The workflow `.github/workflows/gh-pages.yml` will run on push to `main` and publish the `dist/` folder to GitHub Pages automatically.

2) Or deploy from your machine (uses `gh-pages`)

Install deps and run:

```bash
npm install
npm run deploy
```

This runs `npm run build` then publishes `dist/` to the `gh-pages` branch using the `gh-pages` package.

Custom domain

- If you want a custom domain (e.g. `www.example.com`) add a `CNAME` file at the repo root containing the domain, commit and push it. The GH Pages deploy will publish it in `dist/` so GitHub Pages will use the custom domain.
- After the first successful deployment, visit your repository Settings → Pages to verify the domain and TLS settings.

Contact form

- The contact form posts to Formspree. Edit `src/components/ContactForm.vue` and set `FORM_ENDPOINT` to your Formspree form id before production.

Notes

- The project includes a small lightbox, project listing, and live-link thumbnails. Styles use a minimal CSS fallback; if you prefer Tailwind, I can restore the Tailwind toolchain.

