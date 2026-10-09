# Aeye recreation

React + TypeScript + Vite implementation of the inspected Aeye Webflow landing page. It includes all public page sections, responsive navigation, a cell-interpolated pointer grid, tabbed installation code, capability/testimonial controls, pricing selection and an accessible single-open FAQ.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Validate

```bash
npm test -- --run
npm run build
npm run test:e2e
```

The Playwright suite starts a local server automatically. Its visual-capture suite writes matching desktop/mobile local pages and live-reference capture files to `outputs/visual-comparison/`.

## Project notes

- `REFERENCE_ANALYSIS.md` records the live inspection, measured desktop/mobile layout, behavior, assets and known limitations.
- `public/assets/ORIGINS.md` maps the original public Webflow source art included in the recreation.
- `tests/unit/` covers interaction primitives and rendered sections; `tests/e2e/` covers responsive overflow and the pricing, installation and FAQ paths.

## Fidelity status

The implementation uses the source artwork for the hero partner bar, feature/capability/documentation diagrams, testimonial media, blog art and footer logo. Visual comparison captures were generated at 1440×900 and 390×844.

The reference's long installation/how-it-works compositions still have more vertical content than the locally recreated variants. This is recorded rather than represented as pixel-perfect equivalence; the interaction model and all documented sections are present and functional.
