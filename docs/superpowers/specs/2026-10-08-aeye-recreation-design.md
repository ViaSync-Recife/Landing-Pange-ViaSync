# Aeye recreation — design specification

## Objective

Recreate the current public homepage at `https://aeye-saas.webflow.io` as a
standalone React, TypeScript, Vite, and Tailwind application. Desktop visual
fidelity at the reference viewport is the primary goal; mobile must retain the
observed hierarchy and interactive controls.

The live site is authoritative when its dynamic content differs from the
initial brief. In particular, the hero's blue phrase and the final CTA's blue
word are typewritten/rotating values rather than fixed copy.

## Reference evidence

### Captured viewport and measurements

- Reference viewport: 1440 x 900 CSS px (usable page width measured as 1425
  px because of the browser scrollbar).
- Main desktop container: 1197 px wide; left/right content edge: 114 px.
- Reference scroll height: approximately 15,015 px at that viewport.
- Body: Geist, Arial, sans-serif; foreground `rgb(26, 26, 26)` (`#1a1a1a`);
  white background.
- Large heading: 72 px / 79.2 px, 400 weight, -4.32 px letter spacing.
- Section heading: 56 px / 61.6 px, 400 weight, -3.36 px letter spacing.
- Dark regions use `rgb(33, 33, 33)` (`#212121`); the visual language uses
  near-black `#1a1a1a`, off-white borders, and saturated blue emphasis.
- At 390 px wide, the usable content width is 375 px and the horizontal inset
  is 24 px. Hero heading becomes 52 px / 57.2 px with -3.12 px tracking.

### Section inventory at desktop

| Section | Measured top / height | Observed composition |
| --- | ---: | --- |
| Hero | 0 / 1284 px | Fixed nav, 352 px dark grid panel, large title, rating block, CTA pair, partner-logo band and technical marquee. |
| Key value | 1284 / 888 px | Number label, heading, CTA, three illustration cards. |
| Performance | 2172 / 1032 px | Heading, metric matrix, Aeye chart selector and large chart field. |
| Core capabilities | 3204 / 1264 px | Dark tabbed capability diagram, headline and three workflow-supporting cards. |
| How it works | 4468 / 1800 px | Four-stage technical flow. |
| Installation | 6268 / 2250 px | Left code editor and right custom language selector. |
| Documentation | 8518 / 802 px | Intro panel plus two asymmetric documentation cards. |
| Testimonials | 9320 / 840 px | Dark horizontal slider/mosaic. |
| Pricing | 10160 / 1025 px | Monthly/annual toggle and three cards. |
| Changelog | 11185 / 657 px | Intro plus three timeline entries. |
| Blog | 11842 / 974 px | One large and two stacked editorial cards. |
| FAQ | 12816 / 711 px | Five single-select technical accordions. |
| CTA | 13527 / 773 px | Dark-grid surround with centered white technical panel. |
| Footer | follows CTA | Newsletter, large wordmark, link groups, contact block and legal row. |

Mobile reference measurements: hero 1606 px; key value 758 px; performance
1106 px; core capabilities 1414 px; how-it-works 694 px; installation 686 px;
documentation 1160 px; testimonial 798 px; pricing 1884 px. The mobile nav
uses the hamburger control and the fixed bar changes from the compact desktop
link bar to the full Aeye wordmark and beta tag.

### Asset inventory

The reference exposes original CDN assets for:

- Three trusted-team avatars and six partner SVG logos.
- Three feature image pairs (AVIF line art + PNG pixel treatment).
- Two performance charts, three capability diagrams, workflow icons, four
  how-it-works icon pairs, and documentation AVIFs.
- Testimonial avatars, social mark, video thumbnail, and company marks.
- Three blog WebP images and the footer SVG wordmark.

Implementation will copy permitted public source assets into a local
`public/assets/` hierarchy, retaining descriptive provenance in
`public/assets/ORIGINS.md`. Inline geometric arrows, indicators, and pixel
ornaments will be recreated as SVG/CSS because they are structural UI chrome.

## Product architecture

### Application shell

`src/App.tsx` will compose the single homepage route from small independently
testable layout, effect, UI, and section components. A single stylesheet layer
will define measured tokens and responsive rules; Tailwind will be used for
layout primitives and locally scoped utilities, not to approximate the page
with a generic component kit.

The shared shell contains the fixed header, the main page region, the repeated
technical marquee, and footer. A shared `SectionFrame` owns desktop container
width, mobile insets, section index label, heading reveal hook, CTA alignment,
and dark/light treatment. It will not impose a fixed height: each section owns
the reference-derived content geometry.

### Sections and data

- `Hero` renders the header-adjacent grid field, dynamic blue phrase, rating,
  partner row, CTAs, and marquee.
- `Features`, `Performance`, `Capabilities`, `HowItWorks`, `Installation`,
  `Documentation`, `Testimonials`, `Pricing`, `Changelog`, `Blog`, `FAQ`, and
  `FinalCTA` each own the section-specific layout rather than using a generic
  card grid.
- Repeated source content lives in typed data modules: pricing plans, FAQ
  answers, capability panes, install snippets, workflow stages, changelog
  entries, blog cards, and testimonial slides.
- Interactive components expose a normal semantic state interface: selected
  id, change callback, keyboard support where applicable, and reduced-motion
  behavior.

### Effects and accessibility

- `InteractiveGrid` uses a canvas or an absolutely positioned imperatively
  updated grid. It converts pointer coordinates into cell coordinates,
  interpolates from the previous cell to prevent gaps, and schedules fades via
  `requestAnimationFrame`, avoiding React state updates per pointer movement.
- The grid will sit behind foreground content with `pointer-events: none` on
  its visual layer; a transparent tracking layer will remain non-blocking to
  links and buttons. It disables trails under `prefers-reduced-motion`.
- GSAP/ScrollTrigger is limited to behaviors observed in the reference:
  preloader grid, text scramble/reveal, typewriter phrases, section entrances,
  chart reveal, and timeline/card transitions. Components register cleanup on
  unmount.
- Tabs use buttons and `aria-selected`; the FAQ uses single-select accordion
  semantics (`button`, `aria-expanded`, `aria-controls`) and keyboard focus.
  The pricing control supports keyboard activation. The mobile nav has an
  accessible expanded state and focusable links.

### Functional contracts

- Capability selection expands one active description/card and changes the
  diagram; only one pane is selected.
- Installation selection changes the highlighted language, description, code
  block, and vertical-process indicator.
- Monthly/annual selection updates all three visible prices: $9/$19/$49 and
  $5/$15/$45, respectively.
- FAQ allows one selected answer at a time, matching the live Webflow tab
  behavior.
- Testimonial controls advance/back through the observed slider item sequence;
  autoplay is omitted unless confirmed by inspection.
- All primary links have safe local/demo behavior; no email form submits to a
  third party in the recreation.

## Motion specification

The original includes Webflow interactions and GSAP with ScrollTrigger and
ScrambleTextPlugin. Confirmed motion hooks include: a fixed header; a preloader
made from 10 desktop columns of square cells; scrambled heading text; a
typewriter phrase; hover scramble; 0.25 s nav link transition; 0.35 s
capability-tabs transition; 0.2 s performance-tab transition; and the custom
installation selector with an animated vertical process line.

The public inspection did not provide a recording or a reliable pointer-event
trace for the requested mouse trail. The recreation will implement the stated
cell-aligned trail with restrained opacity/fade timing and label it as an
inferred behavior in the reference analysis. No unobserved particle, glow, or
parallax effects will be added.

## Responsive strategy

Desktop is built first at 1440/1280/1024 px from the reference geometry.
Below the desktop breakpoint, grids intentionally become the observed linear
or horizontally constrained compositions instead of a mechanically squeezed
three-column page. At 390/375 px: 24 px insets, 52 px hero title, hamburger
navigation, vertically stacked pricing cards, mobile-only feature slider where
the original uses one, and retained tap targets of at least 44 px.

## Test and comparison plan

1. Add Vitest + Testing Library tests before each interactive implementation:
   pricing changes all prices, FAQ selection behavior and ARIA, language tab
   content change, capability selection, grid cell interpolation, and mobile
   navigation state.
2. Add Playwright browser tests for keyboard controls, CTA/link targets,
   responsive navigation, console errors, image loading, and no horizontal
   overflow at 1440, 1280, 1024, 768, 390, and 375 px.
3. Capture full-page and section screenshots of the reference and local app at
   matching viewport sizes. Store user-facing comparison artifacts under
   `outputs/visual-comparison/`.
4. Compare the largest deviations first: container width, section height,
   heading wraps, assets, cards, borders, and final CTA. Run at least one
   correction pass after the first complete rendering.
5. Run the production build and report only verified commands/results.

## Constraints and known limitations

- Workspace is currently empty except for `work/` and `outputs/`; no existing
  Vite or Git configuration needs preservation.
- No task-attached full-page screenshot or recording was available to inspect;
  the current live desktop/mobile reference is the evidence baseline.
- The current live reference showed the custom installation selector, while
  its hidden Webflow tab markup is also present. The React recreation will
  reproduce the visible selector, not the redundant hidden authoring markup.
- The live page’s text cadence and some dynamic words can vary over time;
  their behavior, rather than one captured literal, is the implementation
  target.
