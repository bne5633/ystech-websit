# Yaosheng Technology (Hong Kong) Co., Ltd. - Official Website

A pure static product website (HTML / CSS / JS). No backend required. Ready to deploy on any static hosting platform.

## File Structure

```
ystech-websit/
├── index.html          # Home page (single-page scroll: Banner + About Us + Products + Gallery + Brands + Contact Us)
├── css/
│   └── styles.css      # Styles (deep blue + white theme, business-tech style, responsive)
├── js/
│   └── main.js         # Interactions (mobile nav toggle, smooth anchor scrolling)
└── README.md           # This file
```

## Local Preview

Double-click `index.html` to open it in a browser, or run:

```
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Free Deployment Options (choose one)

### Option 1: GitHub Pages (recommended)
1. Sign up / log in to GitHub and create a new repository (e.g. `ystech-websit`)
2. Upload all files of this project to the repository (`index.html` must be at the repository root)
3. Repository `Settings` → `Pages` → `Source` select `main` branch → Save
4. Wait 1-2 minutes, then visit `https://<username>.github.io/ystech-websit/`

### Option 2: Cloudflare Pages
1. Sign up / log in to Cloudflare → `Workers & Pages` → `Create application` → `Pages`
2. Choose `Direct Upload` and drag all project files in
3. After deployment you will get a free domain `https://<project-name>.pages.dev`

### Option 3: Netlify Drop
1. Open `https://app.netlify.com/drop`
2. Drag the project folder into the page to get a free public URL

## Before Going Live

- Contact block (phone / email / address): edit the `#contact` section in `index.html` and replace the "To be added" placeholders
- Product images: replace the placeholder blocks in "Product Gallery" with real product images
- Brand logos: replace the text placeholders in the "Brands" section with authorized logo images
