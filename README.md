---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 46ff36b6d0847234dfdf55f5d6e0b0cc_f12cd25ac73f11f197b3525400248c00
    ReservedCode1: UnrocZZGYyIMnQeqznSUkHzjnazf+j6NMiqP3TU267FryO/VUgNuvsmAuLFNOZ0a1XPZe0WcwpTNvdRCEfWNG5oBOCBYmYYYvVePSVL31HnYGd9tUbMbaKrwa38XHOCPBb9QBd8YniYxqs6+o6CgaskgDp8Yet9jG83BI2UTjB4WckUwmWvaSanN5nE=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 46ff36b6d0847234dfdf55f5d6e0b0cc_f12cd25ac73f11f197b3525400248c00
    ReservedCode2: UnrocZZGYyIMnQeqznSUkHzjnazf+j6NMiqP3TU267FryO/VUgNuvsmAuLFNOZ0a1XPZe0WcwpTNvdRCEfWNG5oBOCBYmYYYvVePSVL31HnYGd9tUbMbaKrwa38XHOCPBb9QBd8YniYxqs6+o6CgaskgDp8Yet9jG83BI2UTjB4WckUwmWvaSanN5nE=
---

# Yaosheng Technology (Hong Kong) Co., Ltd. - Official Website

A pure static product website (HTML / CSS / JS). No backend required. Ready to deploy on any static hosting platform.

## File Structure

```
ystech-websit/
├── index.html          # Home page (single-page scroll: Banner + About + Advantages + Products + Gallery + Applications + Brands + Contact)
├── css/
│   └── styles.css      # Styles (deep blue + white theme, business-tech style, responsive)
├── js/
│   └── main.js         # Interactions (mobile nav toggle, smooth anchor scrolling)
├── assets/
│   └── images/         # Brand logos extracted from the company profile (dalicap/renesas/st/spsemi) + raw PPT images
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

- Contact block: real info already filled in the `#contact` section (phone +86 755-33259928, fax +86 755-33259926, email sales@ystech-hk.com / bne563@gmail.com / David@ystech-hk.com, HK head office + Shenzhen sales office addresses, website www.ystech-hk.com, contact person Mr. Li Bin)
- Product images: the "Product Gallery" still uses gradient placeholders - replace them with real product photos when available
- Brand logos: Dalicap / Renesas / ST / SPSEMI logos extracted from the company profile are used in the "Brands" section; the remaining brands (TI / NXP / Murata / TDK) keep text placeholders - replace with official logo images if provided
*（内容由AI生成，仅供参考）*
