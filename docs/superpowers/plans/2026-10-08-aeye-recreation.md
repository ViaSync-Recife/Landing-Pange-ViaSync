# Aeye Recreation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a locally runnable, visually faithful React recreation of the current Aeye homepage, including its observed interactions and responsive layouts.

**Architecture:** A single Vite React route composes section-specific components inside shared layout primitives. Typed content modules drive repeated content and isolated state hooks drive interactive controls; canvas/imperative effects avoid per-pointer React rendering. Tailwind provides low-level utility support while CSS modules/global tokens encode measured geometry and section-specific art direction.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, GSAP + ScrollTrigger, Vitest, Testing Library, Playwright.

**Spec:** `docs/superpowers/specs/2026-10-08-aeye-recreation-design.md`

## Global Constraints

- Use React, TypeScript, Vite, Tailwind CSS, GSAP, and ScrollTrigger; do not use Webflow at runtime.
- Reproduce the live reference as primary truth: Geist, 1197 px desktop container, 114 px desktop content edges, 24 px mobile inset, and the observed dynamic blue words.
- Keep page content and assets local under `public/assets/`; record public source provenance in `public/assets/ORIGINS.md`.
- Preserve the original asymmetric section structures; do not substitute generic card grids or placeholder visual assets.
- Respect `prefers-reduced-motion`; ensure keyboard/ARIA support for interactive controls and avoid horizontal overflow at every required viewport.
- Write a failing behavior test before every production behavior change; observe the expected failure before implementation.
- Store user-facing screenshot comparisons only under `outputs/visual-comparison/`.
- The workspace has no Git repository. Do not create commits unless a repository is later explicitly initialized.

## Review Focus

1. Fast pointer movement across more than one grid cell must activate every interpolated cell rather than leaving a broken trail (Task 3).
2. Reduced-motion users must retain page content and controls while pixel trails, typewriters, and scroll animation are disabled (Tasks 3 and 10).
3. Every annual price must change together; no card may retain a monthly price after switching billing period (Task 7).
4. Accordion keyboard activation must keep exactly one answer exposed with correct `aria-expanded` and focus semantics (Task 9).
5. At 375 px, fixed navigation and broad desktop grids must not introduce document-level horizontal overflow (Task 10).

---

## File structure

```text
public/assets/
  branding/ icons/ illustrations/ testimonials/ blog/ diagrams/ fonts/
  ORIGINS.md
src/
  app/App.tsx
  components/
    effects/{InteractiveGrid,RevealText,AnimatedChart}.tsx
    layout/{Container,Header,Footer}.tsx
    sections/{Hero,Features,Performance,Capabilities,HowItWorks,Installation,
      Documentation,Testimonials,Pricing,Changelog,Blog,FAQ,FinalCTA}.tsx
    ui/{Button,SectionFrame,TechnicalLabel,CodeEditor,SegmentedTabs}.tsx
  data/{content,install,pricing,faqs}.ts
  hooks/{useReducedMotion,useSingleSelection,usePricingPeriod}.ts
  lib/{gridTrail,scrollAnimations}.ts
  styles/{tokens.css,global.css,sections.css}.css
  test/{setup.ts,render.tsx}
tests/
  unit/*.test.ts(x)
  e2e/home.spec.ts
```

### Task 1: Bootstrap the runnable application and asset registry

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `index.html`
- Create: `src/main.tsx`, `src/app/App.tsx`, `src/styles/tokens.css`, `src/styles/global.css`
- Create: `src/test/setup.ts`, `src/test/render.tsx`, `vitest.config.ts`, `playwright.config.ts`
- Create: `public/assets/ORIGINS.md`, `README.md`
- Test: `tests/unit/app-shell.test.tsx`

**Interfaces:**
- Produces `App(): JSX.Element`, `renderWithProviders(ui: ReactElement): RenderResult`, and scripts `dev`, `build`, `test`, `test:e2e`.
- Produces the root CSS custom properties `--page-ink`, `--page-dark`, `--page-blue`, `--page-border`, `--container-width`, and `--page-gutter` for later sections.

- [ ] **Step 1: Write the failing app-shell test**

```tsx
it('renders the Aeye main landmark', () => {
  renderWithProviders(<App />)
  expect(screen.getByRole('main', { name: 'Aeye homepage' })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run tests/unit/app-shell.test.tsx`

Expected: FAIL because `App` or the test runtime is not yet configured.

- [ ] **Step 3: Configure Vite, Tailwind, Vitest, Playwright, and `App(): JSX.Element`**

Use React 18+ and TypeScript strict mode. Define the measured desktop/mobile token values from the spec in `tokens.css`; `App` initially returns the named main landmark and imports global styles. Add a README with the required `npm install`, `npm run dev`, `npm run build`, test, and screenshot commands. Populate `ORIGINS.md` with source URL, filename, asset category, and license/permission-status columns before downloading assets.

- [ ] **Step 4: Run the unit test and production build**

Run: `npm test -- --run tests/unit/app-shell.test.tsx && npm run build`

Expected: PASS; Vite emits a production bundle without TypeScript errors.

### Task 2: Define content contracts and layout/UI primitives

**Files:**
- Create: `src/data/content.ts`, `src/data/pricing.ts`, `src/data/install.ts`, `src/data/faqs.ts`
- Create: `src/components/layout/Container.tsx`
- Create: `src/components/ui/{Button,SectionFrame,TechnicalLabel,SegmentedTabs,CodeEditor}.tsx`
- Test: `tests/unit/section-frame.test.tsx`, `tests/unit/segmented-tabs.test.tsx`

**Interfaces:**
- Consumes root tokens from Task 1.
- Produces `Container({ children, className? })`, `SectionFrame({ index, label, title, tone, children })`, `SegmentedTabs<T extends string>({ items, value, onChange, ariaLabel })`, and typed `PricingPlan`, `InstallSnippet`, `FaqItem` records.

- [ ] **Step 1: Write failing primitive tests**

```tsx
it('uses the measured container and section label copy', () => {
  renderWithProviders(<SectionFrame index="N. 01 / 11" label="KEY VALUE" title="Less manual work. More intelligent execution." tone="light" />)
  expect(screen.getByText('[N. 01 / 11 ] > KEY VALUE')).toBeVisible()
})

it('changes a segmented tab with ArrowRight', async () => {
  const onChange = vi.fn()
  renderWithProviders(<SegmentedTabs ariaLabel="Billing" value="monthly" onChange={onChange} items={[{ id: 'monthly', label: 'Monthly' }, { id: 'annual', label: 'Annually' }]} />)
  await userEvent.keyboard('{ArrowRight}')
  expect(onChange).toHaveBeenCalledWith('annual')
})
```

- [ ] **Step 2: Run primitive tests to verify expected failures**

Run: `npm test -- --run tests/unit/section-frame.test.tsx tests/unit/segmented-tabs.test.tsx`

Expected: FAIL because the primitives and typed data modules do not exist.

- [ ] **Step 3: Implement the shared contracts and primitives**

Make `SectionFrame` preserve literal section-number labels and the slash-wrapped heading structure. Make `SegmentedTabs` a roving-focus button/tab control. Put the exact visible reference copy, prices, dates, code snippets, and CTA labels in typed data modules; render code through `CodeEditor` without an editing affordance.

- [ ] **Step 4: Run primitive tests**

Run: `npm test -- --run tests/unit/section-frame.test.tsx tests/unit/segmented-tabs.test.tsx`

Expected: PASS.

### Task 3: Implement shared selection logic and the pixel-trail engine

**Files:**
- Create: `src/hooks/{useReducedMotion,useSingleSelection,usePricingPeriod}.ts`
- Create: `src/lib/gridTrail.ts`
- Create: `src/components/effects/InteractiveGrid.tsx`
- Test: `tests/unit/grid-trail.test.ts`, `tests/unit/selection-hooks.test.tsx`

**Interfaces:**
- Consumes `GridPoint`, `GridCell`, and `interpolateCells(from, to): GridCell[]` from `gridTrail.ts`.
- Produces `useSingleSelection<T>(initial: T): { selected: T; select(value: T): void }`, `usePricingPeriod(): { period: 'monthly' | 'annual'; setPeriod(period): void }`, and `InteractiveGrid({ cellSize, fadeMs, className? })`.

- [ ] **Step 1: Write failing state and trail tests**

```ts
it('fills every horizontal cell between two pointer positions', () => {
  expect(interpolateCells({ column: 1, row: 2 }, { column: 4, row: 2 }))
    .toEqual([{ column: 1, row: 2 }, { column: 2, row: 2 }, { column: 3, row: 2 }, { column: 4, row: 2 }]))
})

it('keeps the monthly period until annual is explicitly selected', () => {
  const { result } = renderHook(() => usePricingPeriod())
  expect(result.current.period).toBe('monthly')
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/grid-trail.test.ts tests/unit/selection-hooks.test.tsx`

Expected: FAIL because the utility and hooks do not exist.

- [ ] **Step 3: Implement the imperative grid and selection hooks**

Use a line interpolation algorithm that returns start and end cells exactly once for vertical, horizontal, and diagonal changes. `InteractiveGrid` must map client coordinates to cell coordinates, animate opacity in `requestAnimationFrame`, resize with its container, and skip pointer activation when reduced motion is active. No pointer movement may update React state.

- [ ] **Step 4: Run tests**

Run: `npm test -- --run tests/unit/grid-trail.test.ts tests/unit/selection-hooks.test.tsx`

Expected: PASS.

### Task 4: Build the fixed navigation, hero, and feature/performance opening

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/sections/{Hero,Features,Performance}.tsx`
- Create: `src/components/effects/{RevealText,AnimatedChart}.tsx`
- Create: `src/lib/scrollAnimations.ts`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/hero.test.tsx`, `tests/unit/performance.test.tsx`

**Interfaces:**
- Consumes `Container`, `Button`, `SectionFrame`, `InteractiveGrid`, and `RevealText`.
- Produces `Header()`, `Hero()`, `Features()`, and `Performance()` for app composition.

- [ ] **Step 1: Write failing opening-section tests**

```tsx
it('renders the two hero CTAs and dynamic AI phrase', () => {
  renderWithProviders(<Hero />)
  expect(screen.getByRole('link', { name: /get started/i })).toBeVisible()
  expect(screen.getByText(/AI/i)).toBeVisible()
})

it('renders all four performance metrics', () => {
  renderWithProviders(<Performance />)
  expect(screen.getByText('< 1.8s')).toBeVisible()
  expect(screen.getByText('99.82%')).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/hero.test.tsx tests/unit/performance.test.tsx`

Expected: FAIL because the opening sections do not exist.

- [ ] **Step 3: Implement the opening sections and their measured artwork**

Implement the 40 px fixed desktop nav, responsive hamburger state, 352 px dark hero grid, 72 px desktop/52 px mobile title, avatar/rating row, partner rail, feature cards, metrics matrix, and deterministic chart bars. Use source feature/partner assets rather than substitutes. `AnimatedChart` must use a fixed bar-value array and only animate once when it enters view.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/hero.test.tsx tests/unit/performance.test.tsx`

Expected: PASS.

### Task 5: Build capabilities and the four-stage workflow

**Files:**
- Create: `src/components/sections/{Capabilities,HowItWorks}.tsx`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/capabilities.test.tsx`, `tests/unit/how-it-works.test.tsx`

**Interfaces:**
- Consumes `useSingleSelection`, `SectionFrame`, capability content records, and source diagrams.
- Produces `Capabilities()` and `HowItWorks()`.

- [ ] **Step 1: Write failing capability/workflow tests**

```tsx
it('changes the active capability diagram after selecting Intelligent Processing', async () => {
  renderWithProviders(<Capabilities />)
  await userEvent.click(screen.getByRole('tab', { name: /Intelligent Processing/i }))
  expect(screen.getByRole('tabpanel', { name: /Intelligent Processing/i })).toBeVisible()
})

it('shows all four numbered workflow stages', () => {
  renderWithProviders(<HowItWorks />)
  expect(screen.getByText('// 004')).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/capabilities.test.tsx tests/unit/how-it-works.test.tsx`

Expected: FAIL because the sections do not exist.

- [ ] **Step 3: Implement dark capability tabs and technical workflow cards**

Make the active capability expand from its compact label/number to the observed description and swap the corresponding diagram. Use the dark #212121 composition, grid/micro-border treatment, integration rail, and one-active-pane semantics. Build the four workflow stages with active first-stage accent, original copy, icon pairs, dividers, and responsive stacked behavior.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/capabilities.test.tsx tests/unit/how-it-works.test.tsx`

Expected: PASS.

### Task 6: Build installation and documentation

**Files:**
- Create: `src/components/sections/{Installation,Documentation}.tsx`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/installation.test.tsx`, `tests/unit/documentation.test.tsx`

**Interfaces:**
- Consumes `InstallSnippet[]`, `useSingleSelection`, `CodeEditor`, documentation content, and source images.
- Produces `Installation()` and `Documentation()`.

- [ ] **Step 1: Write failing installation/documentation tests**

```tsx
it('replaces JavaScript code with the CLI snippet', async () => {
  renderWithProviders(<Installation />)
  await userEvent.click(screen.getByRole('button', { name: 'CLI' }))
  expect(screen.getByText('npm install -g @aeye/cli')).toBeVisible()
})

it('renders Core Concepts and Advanced Guide cards', () => {
  renderWithProviders(<Documentation />)
  expect(screen.getByText('Advanced Guide')).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/installation.test.tsx tests/unit/documentation.test.tsx`

Expected: FAIL because the sections do not exist.

- [ ] **Step 3: Implement the editor/selector and asymmetric document cards**

Use the observed left code panel/right selector desktop orientation and its mobile ordering. Switch syntax-highlighted static code, explanatory copy, active language, and process-line position together. Build the two documentation cards with measured divider hierarchy, source art, category labels, and arrow-view affordance.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/installation.test.tsx tests/unit/documentation.test.tsx`

Expected: PASS.

### Task 7: Build testimonials and pricing

**Files:**
- Create: `src/components/sections/{Testimonials,Pricing}.tsx`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/testimonials.test.tsx`, `tests/unit/pricing.test.tsx`

**Interfaces:**
- Consumes `usePricingPeriod`, `SegmentedTabs`, typed pricing plans, testimonial data and local media.
- Produces `Testimonials()` and `Pricing()`.

- [ ] **Step 1: Write failing testimonial/pricing tests**

```tsx
it('sets all annual plan prices after choosing Annually', async () => {
  renderWithProviders(<Pricing />)
  await userEvent.click(screen.getByRole('tab', { name: /Annually/i }))
  expect(screen.getByText('$5.00')).toBeVisible()
  expect(screen.getByText('$15.00')).toBeVisible()
  expect(screen.getByText('$45.00')).toBeVisible()
})

it('advances to the next testimonial', async () => {
  renderWithProviders(<Testimonials />)
  await userEvent.click(screen.getByRole('button', { name: /next testimonial/i }))
  expect(screen.getByText(/Taylor Reed/i)).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/testimonials.test.tsx tests/unit/pricing.test.tsx`

Expected: FAIL because both sections do not exist.

- [ ] **Step 3: Implement the dark testimonial rail and pricing switcher**

Preserve mixed testimonial widths, video tile, social card treatments, visible previous/next controls, and source portrait crop. Build Starter/Pro/Max cards with exact monthly/annual price data; only Pro carries the blue edge, popular mark, and accent icon set. Do not randomize carousel contents or pricing values.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/testimonials.test.tsx tests/unit/pricing.test.tsx`

Expected: PASS.

### Task 8: Build changelog and asymmetric blog sections

**Files:**
- Create: `src/components/sections/{Changelog,Blog}.tsx`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/changelog.test.tsx`, `tests/unit/blog.test.tsx`

**Interfaces:**
- Consumes typed changelog/blog records from `content.ts`, `SectionFrame`, buttons, and local images.
- Produces `Changelog()` and `Blog()`.

- [ ] **Step 1: Write failing changelog/blog tests**

```tsx
it('renders all three dated changelog entries', () => {
  renderWithProviders(<Changelog />)
  expect(screen.getByText('NOV 24, 2025')).toBeVisible()
  expect(screen.getByText('DEC 07, 2024')).toBeVisible()
})

it('renders the three reference articles', () => {
  renderWithProviders(<Blog />)
  expect(screen.getByText('From Prompt to Product: Making AI Useful')).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/changelog.test.tsx tests/unit/blog.test.tsx`

Expected: FAIL because both sections do not exist.

- [ ] **Step 3: Implement the timeline and editorial split grid**

Position dates, thin line, index icons, entry text, and CTA in the measured changelog composition. Create the one-large/two-stacked blog layout with reference titles, categories, dates, source image aspect ratios, view links, and non-layout-shifting hover treatment.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/changelog.test.tsx tests/unit/blog.test.tsx`

Expected: PASS.

### Task 9: Build FAQ, final CTA, and footer

**Files:**
- Create: `src/components/sections/{FAQ,FinalCTA}.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/App.tsx`, `src/styles/sections.css`
- Test: `tests/unit/faq.test.tsx`, `tests/unit/footer.test.tsx`

**Interfaces:**
- Consumes `useSingleSelection`, typed FAQs, `InteractiveGrid`, `SectionFrame`, and footer asset data.
- Produces `FAQ()`, `FinalCTA()`, and `Footer()`.

- [ ] **Step 1: Write failing FAQ/footer tests**

```tsx
it('exposes only the selected FAQ answer with its ARIA state', async () => {
  renderWithProviders(<FAQ />)
  const question = screen.getByRole('button', { name: /How does integration work/i })
  await userEvent.click(question)
  expect(question).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByText(/setup takes under five minutes/i)).toBeVisible()
})

it('renders the newsletter field and footer navigation', () => {
  renderWithProviders(<Footer />)
  expect(screen.getByLabelText(/email/i)).toBeVisible()
  expect(screen.getByText('FOLLOW US')).toBeVisible()
})
```

- [ ] **Step 2: Run tests to verify expected failures**

Run: `npm test -- --run tests/unit/faq.test.tsx tests/unit/footer.test.tsx`

Expected: FAIL because the elements do not exist.

- [ ] **Step 3: Implement the closing conversion flow**

Use five single-select FAQ rows with number labels and changing plus/minus SVGs. Build the dark grid-surrounded CTA with its white technical panel and rotating blue word. Build the full footer hierarchy: newsletter (non-submitting), wordmark, pages, social, contact and legal blocks; the footer must be visually complete but have no third-party form submission.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- --run tests/unit/faq.test.tsx tests/unit/footer.test.tsx`

Expected: PASS.

### Task 10: Integrate the page, motion lifecycle, responsive CSS, and visual QA

**Files:**
- Modify: `src/app/App.tsx`, `src/styles/{global,sections}.css`, `src/lib/scrollAnimations.ts`
- Create: `tests/e2e/home.spec.ts`, `scripts/capture-reference.mjs`, `scripts/capture-local.mjs`
- Create: `REFERENCE_ANALYSIS.md`
- Create: `outputs/visual-comparison/.gitkeep`
- Modify: `README.md`

**Interfaces:**
- Consumes every section component and `setupScrollAnimations(root: HTMLElement): Cleanup`.
- Produces the complete `/` page and repeatable screenshot capture scripts.

- [ ] **Step 1: Write failing end-to-end checks**

```ts
test('has no horizontal overflow at the mobile reference width', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 844 })
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
})

test('changes billing, FAQ, and install language without console errors', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('tab', { name: /Annually/i }).click()
  await expect(page.getByText('$45.00')).toBeVisible()
})
```

- [ ] **Step 2: Run E2E checks to verify expected failures**

Run: `npm run test:e2e -- tests/e2e/home.spec.ts`

Expected: FAIL until all sections are composed and the dev/test server is configured.

- [ ] **Step 3: Compose, polish, and verify every viewport**

Compose sections in the live reference order. Register GSAP timelines in `useLayoutEffect` and clean them with `gsap.context(...).revert()`. Apply responsive values at 1440, 1280, 1024, 768, 390, and 375 px; preserve measured container, insets, title wrapping, card proportions, and image crops. Implement screenshots for matching reference/local pages and save only local comparison images under `outputs/visual-comparison/`. Create `REFERENCE_ANALYSIS.md` from the pre-implementation inventory, listing the pointer-trail and recording-dependent limitations explicitly.

- [ ] **Step 4: Run full quality gates**

Run: `npm test -- --run && npm run build && npm run test:e2e`

Expected: all unit tests, production build, and Playwright tests pass; the test output contains no unhandled console errors.

- [ ] **Step 5: Perform the visual correction loop**

Run: `node scripts/capture-reference.mjs && node scripts/capture-local.mjs`

Expected: matching viewport screenshots exist for hero, each major section, footer, and full page. Compare them manually or with a deterministic image-diff; correct at least the largest identified mismatch before final verification.

## Self-review results

- Spec coverage: Tasks 1–10 cover every deliverable: setup/assets, all 13 visual regions, interaction state, motion, responsive layouts, analysis document, README, screenshot evidence, tests, and build.
- Interfaces: selection and pricing hooks are created before every consuming section; `SectionFrame` and `Container` precede all sections; `InteractiveGrid` is created before hero/CTA use.
- Review focus ownership: pointer interpolation and reduced motion are Task 3; annual prices Task 7; FAQ ARIA Task 9; mobile overflow Task 10.
- Scope: the page is one coherent public route with shared design contracts; splitting it into separate projects would create integration risk and diminish visual comparison quality.
- Git: the workspace remains unversioned, so intentionally no commit steps are listed.
