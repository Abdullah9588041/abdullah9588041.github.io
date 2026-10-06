# Portfolio Website — Abdullah Ajmal

Static personal portfolio site. Plain HTML/CSS/JS, no build step, no framework,
no JavaScript dependencies. Works as-is on GitHub Pages.

## Files

- `index.html` — all content (single page: Home, About, Education, Skills, Projects, Research, Contact)
- `styles.css` — dark technical theme
- `script.js` — mobile nav toggle, smooth-scroll active-section highlighting (vanilla JS)

Fonts load from Google Fonts (Inter + JetBrains Mono) with system-font fallbacks,
so the site renders fine offline too.

## Publishing to GitHub Pages

The site is designed for the `abdullah.github.io` repository (user/organization
Pages site — serves from the repo root on the default branch).

```bash
cd portfolio-website
git init
git add index.html styles.css script.js
git commit -m "feat: professional portfolio website"
git branch -M main
git remote add origin https://github.com/Abdullah9588041/abdullah.github.io.git
git push -u origin main
```

The `abdullah.github.io` repo currently contains only a README; pushing these
files replaces that. The site goes live at https://abdullah9588041.github.io
within a minute or two of the push.

> Note: publishing requires the repo owner's credentials (personal access token
> or the GitHub web UI upload). Nothing here is pushed automatically.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Content honesty

All project metrics on the Projects section were taken from the actual
`results/metrics.json` files and README results tables of the ten project
repositories in `../` (see each project's README for the full record). No
numbers were invented. Sections with no real content (e.g., Certifications)
were omitted deliberately.
