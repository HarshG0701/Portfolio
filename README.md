# Harsh Goyal — Portfolio

Personal portfolio for **Harsh Goyal** — MBA Logistics & Supply Chain Management (maritime elective), UPES Dehradun.

**Live:** https://harshg0701.github.io/Portfolio/

---

## What this is

One self-contained `index.html`. No build step, no package manager, no framework, no runtime
dependencies. Open the file in a browser and it works; push it to GitHub Pages and it works there too.

The only external request the page makes is to Google Fonts, and it falls back cleanly to
Georgia / system sans if that request is blocked. Every graphic on the page — the port scene,
the corridor map, the capability cube, every icon — is inline SVG or canvas. Nothing is an image file.

## Sections

| Section | Contents |
|---|---|
| Hero | Animated port scene, rotating multilingual greeting, 3D capability cube, three metrics |
| About | Philosophy, two goals, six expertise cards |
| Resume | Horizontal 2018 → 2027 timeline, tabbed experience / education / certifications, orbital skill map, languages |
| Deconstructed | Interactive India corridor map, brand stats, four analysis pieces |
| Contact | Direct links, location and phone |

## Interaction

- **Momentum scrolling** — lerp-smoothed wheel scroll, Lenis-style, hand-rolled in ~25 lines
- **Preloader + curtain reveal** — counter, five lifting panels, then a staggered letter-by-letter headline
- **Custom cursor** — dot plus a lagging ring that expands over interactive elements
- **Magnetic buttons** and pointer-tracked **3D card tilt**
- **Canvas background** — four colour orbs orbiting the cursor with inertia, a particle trail system, and a mesh grid that warps away from the pointer
- **Corridor map** — seven nodes (Mundra, JNPT, Vizhinjam, Chennai, Visakhapatnam, Haldia, NCR ICDs) plotted from real coordinates, with animated rail and sea corridors; hover, click or keyboard to change the detail panel
- **Blueprint mode** — press <kbd>G</kbd> or use the toolbar button to overlay the column grid, pixel ruler, element annotations and a live HUD
- **Timeline rail** — drag, scroll or wheel through eight career markers
- **Marquee bands** that skew with scroll velocity and pause on hover

## Accessibility & resilience

- No horizontal overflow from 360px to 1920px
- Fully readable with JavaScript disabled — nothing is hidden behind a reveal that needs JS
- `prefers-reduced-motion` turns off the preloader, cursor, tilt, marquees and canvas animation
- Visible keyboard focus throughout; the slide-out menu traps and restores focus
- Map nodes are real buttons with `aria-pressed`, reachable by keyboard
- Schema.org `Person` JSON-LD, Open Graph and Twitter card metadata

## Files

```
index.html     the entire site
404.html       styled not-found page
.nojekyll      tells GitHub Pages to serve files as-is
robots.txt     crawler directives
sitemap.xml    single-page sitemap
.gitignore
README.md
```

## Local preview

Any static server, or just open the file:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

GitHub Pages, served straight from the `main` branch root. No workflow and no build:

1. Push these files to `main`.
2. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
3. Save. The site is live at `https://harshg0701.github.io/Portfolio/` within a minute or two.

## Editing

Everything lives in `index.html`:

- **Colours** — the `:root` block at the top (`--accent`, `--blue`, `--bg`)
- **Certifications** — the `CERTS` array in the script
- **Skill nodes** — the `SK` array
- **Map nodes** — the `DATA` object; node coordinates are in the SVG
- **Timeline** — the `.tl` cards in the markup
- **Experience / education** — plain markup in the `#resume` section

---

© 2026 Harsh Goyal
