---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 46ff36b6d0847234dfdf55f5d6e0b0cc_cf40ff70c84e11f18b7f525400393706
    ReservedCode1: DIG25A15aIYgELYF7dV5KqIGaiIbQrN6xQWl8CX4AoVTvno7bJ1tbpM5kP5OuqTY3A7/E04nMefRFPGQv3LGtxeMrJMHVeFADJdn5Nw0pF5Ow5mxEMNnI75dwNnIKrw/cUdDveGwJ7IyQFSkYC3DLu5qyckfNtE/IG+yYdII+/WdqLlBnAIX2NzVqfA=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 46ff36b6d0847234dfdf55f5d6e0b0cc_cf40ff70c84e11f18b7f525400393706
    ReservedCode2: DIG25A15aIYgELYF7dV5KqIGaiIbQrN6xQWl8CX4AoVTvno7bJ1tbpM5kP5OuqTY3A7/E04nMefRFPGQv3LGtxeMrJMHVeFADJdn5Nw0pF5Ow5mxEMNnI75dwNnIKrw/cUdDveGwJ7IyQFSkYC3DLu5qyckfNtE/IG+yYdII+/WdqLlBnAIX2NzVqfA=
---

# Yaosheng Technology (Hong Kong) — Official Website (Local Build)

**Site:** www.ystech-hk.com (local working copy, English-first with built-in Chinese switch)

## Overview
Single-page marketing website for Yaosheng Technology (Hong Kong) Co., Limited,
an authorized distributor of RF & microwave components, semiconductors, connectors,
sensors, relays and passive components.

- **Founded:** August 2010 | **Capital:** RMB 5,000,000 | **Team:** 13
- **Chairman:** Mr. Li Bin
- **Offices:** Hong Kong (HQ) + Shenzhen (operation)
- **Contact:** +86-755-33259928 | +86-755-33259926 (fax) | sales@ystech-hk.com
- **Authorized brands:** Dalicap, Renesas, ST, TI, NXP, SPSEMI, Murata, TDK

## Project Structure
```
ystech-websit/
├── index.html            # Main page (SEO meta, JSON-LD, i18n, all sections)
├── css/
│   ├── styles.css        # Readable stylesheet
│   └── styles.min.css    # Minified stylesheet (used by index.html)
├── js/
│   ├── main.js           # Readable script
│   └── main.min.js       # Minified script (used by index.html)
├── assets/images/        # Original PPT-extracted images + brand logos (source, untouched)
│   └── opt/              # Optimized WebP images used on the page
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Crawler rules + sitemap pointer
├── _headers              # Cache & security headers for static hosting
└── README.md
```

## Features (Oct 2026 optimization)
1. **Visual design** — navy/cyan/gold gradient theme, hero image background,
   hover lift cards, gradient brand wall, responsive grid layouts.
2. **Content** — company profile, competitive advantages, service process (4 steps),
   product lines with imagery, application gallery, applications, partners,
   contact + online inquiry.
3. **Functions** — product search filter, EN/中文 language switch (persisted),
   online inquiry form (mailto draft), floating live-chat widget, image lightbox.
4. **SEO** — meta description/keywords, Open Graph, Twitter Card, canonical,
   JSON-LD (Organization + WebSite), sitemap.xml, robots.txt.
5. **Performance** — images compressed to WebP (assets/images/opt), lazy loading,
   minified CSS/JS, cache-control headers, single-file deployable.

## Deployment
Upload all files preserving folder structure (index.html, css/, js/, assets/, sitemap.xml,
robots.txt, _headers) to any static host (Cloudflare Pages / Netlify / nginx).
*（内容由AI生成，仅供参考）*
