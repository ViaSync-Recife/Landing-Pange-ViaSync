# Aeye reference analysis

Source inspected on 2026-10-08: `https://aeye-saas.webflow.io` at desktop (1440 px) and mobile (390 px) widths. The live page was the primary source; no attached video or locally attached full-page screenshot was available to inspect.

## Section inventory

| Order | Section | Desktop reference position / height |
| --- | --- | --- |
| 1 | Fixed navigation and hero | 0 / 1284 px |
| 2 | Key features | 1284 / 888 px |
| 3 | Performance metrics and bar chart | 2172 / 1032 px |
| 4 | Core capabilities, dark | 3204 / 1264 px |
| 5 | How it works | 4468 / 1800 px |
| 6 | Installation / code samples | 6268 / 2250 px |
| 7 | Documentation cards | 8518 / 802 px |
| 8 | Testimonials, dark | 9320 / 840 px |
| 9 | Pricing | 10160 / 1025 px |
| 10 | Changelog | 11185 / 657 px |
| 11 | Blog | 11842 / 974 px |
| 12 | FAQ | 12816 / 711 px |
| 13 | Final technical CTA and footer | 13527 / 1488 px |

The page measured about 15,015 px high in the inspected desktop browser. It uses substantial quiet space, thin technical rules, sparse uppercase metadata and deliberately asymmetrical illustration/card layouts.

## Typography inventory

| Role | Observed desktop value | Mobile adaptation |
| --- | --- | --- |
| UI/body | Geist (with Arial fallback), 14–16 px | same family, 14–16 px |
| Hero H1 | 72 px / 79.2 px, 400, -4.32 px tracking | 52 px / 57.2 px |
| Section H2 | 56 px / 61.6 px, 400, -3.36 px tracking | approximately 42–48 px |
| Technical label | 10–11 px, uppercase, spaced lettering | retained, wrapped where needed |
| Code | compact monospace, 13–14 px | horizontally contained/stacked |

The live heading uses a mutable blue inline phrase (for example, the hero’s AI-product word), rather than a separate display family. Body copy has a restrained gray-black contrast; dark-section typography is off-white rather than pure white.

## Color palette

| Token | Measured / observed use |
| --- | --- |
| Base background | `#ffffff` |
| Primary foreground | approximately `#1a1a1a` |
| Dark surface | `#212121` |
| Accent blue | saturated Webflow-brand-like blue, used for key words, selections and bars |
| Light rules | approximately `#e8e8e8` |
| Dark rules | low-contrast gray on `#212121` |

## Layout and grid measurements

- Desktop viewport was 1440 px; the scrollable document width was 1425 px because of the browser scrollbar.
- Primary content container was 1197 px wide at x=114, roughly 8% side margins.
- Desktop navigation is fixed at the top and measures 40 px high.
- Mobile usable document width was 375 px in the inspected 390 px browser; content insets were 24 px.
- Rules are consistently 1 px. White sections favor open, full-width bounded grids; dark sections use a subtle square technical grid.
- Pricing is three columns on desktop. Feature and blog areas become vertically ordered on narrow viewports rather than preserving compressed columns.

## Asset inventory and origin

The public Webflow CDN supplies the observed source imagery: small trusted-team avatars, six monochrome partner logos, three paired feature diagrams, chart visuals, three core-capability visuals, four how-it-works diagram pairs, two documentation images, testimonial avatar/social/video art, three blog thumbnails and a footer SVG logo. Source URLs and local asset mapping are tracked in `public/assets/ORIGINS.md`.

## Interaction inventory

- **Navigation:** fixed desktop link bar; hamburger menu at mobile widths.
- **Hero:** primary CTA and secondary demo action; grouped avatars and partner marks.
- **Interactive grid:** dark square-cell grid responds to pointer movement with blue, cell-aligned trails. The foreground remains clickable.
- **Capabilities:** one expanded capability at a time; active content changes with a short eased transition.
- **Installation:** JavaScript, CLI and Python selection changes the visible code sample and selected state.
- **Testimonials:** previous/next controls cycle the highlighted testimonial.
- **Pricing:** monthly/annual selection changes visible prices (observed: $9/$19/$49 monthly and $5/$15/$45 annually).
- **FAQ:** one selected response at a time, keyboard-accessible tab/button semantics in the recreation.
- **Cards/buttons:** subtle background, arrow-offset and border/color emphasis on hover.

## Animation inventory

- The live Webflow bundle exposes preloader, text-scramble/typewriter and scroll-motion hooks.
- Hero and final CTA have a blue typewriter/scramble-style inline word.
- Content is revealed progressively during scroll rather than all at once. Charts/diagrams appear with staged entrance timing.
- The local implementation limits motion for `prefers-reduced-motion`, cleans up pointer animation work, and avoids layout-changing animation.

## Responsive behavior

- At desktop, visual rhythm depends on long horizontal rules and multi-column diagrams.
- At 390 px, the navigation replaces links with a hamburger, headings reduce substantially, containers hold 24 px side padding, and multi-column content stacks.
- The interactive grid resizes with its host; code, pricing, FAQ and controls remain tap targets rather than shrinking below usable size.

## Unverified details and justified deviations

- No recording was available, so the exact pointer-trail fade curve and duration cannot be measured frame-by-frame; the recreation uses cell interpolation plus independent, short fades.
- The available browser inspection confirmed the presence of scroll/text motion but did not expose every original Webflow timing curve. Local motion is intentionally conservative where an exact curve was unavailable.
- Some decorative source art is recreated with CSS/SVG geometry until the corresponding original CDN file is included locally. This preserves functionality but is the main remaining visual-fidelity risk.
- The deeper raw measurement notes are retained in `docs/superpowers/specs/2026-10-08-aeye-recreation-design.md` as the implementation specification.
