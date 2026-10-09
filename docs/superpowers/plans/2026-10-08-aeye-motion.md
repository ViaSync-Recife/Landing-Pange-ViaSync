# Aeye motion-fidelity implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reproduce the verified Aeye motion system in the existing React application without changing its visual structure.

**Architecture:** Create scoped GSAP lifecycle helpers and section motion modules that operate on refs/data attributes. CSS owns small hovers and accordion sizing; GSAP owns coordinated entrance, chart and content transitions; the existing canvas retains per-frame pointer work.

**Tech Stack:** React 19, TypeScript, GSAP + ScrollTrigger, CSS transitions, requestAnimationFrame, Playwright, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-08-aeye-motion-design.md`

## Global Constraints

- Preserve existing layout, visual tokens, assets and functional semantics.
- Implement only verified behavior; document every conservative approximation in `docs/AEYE_MOTION_AUDIT.md`.
- Honor `prefers-reduced-motion`; clean up RAF, GSAP contexts and ScrollTriggers.
- Never use React state for per-frame updates or global selectors that can target another section.
- No Git repository exists in this workspace; record verification in the project work ledger instead of commit steps.

## Review Focus

- Reduced motion: every animated section renders its final visible state immediately.
- Repeat clicks: pricing, install, FAQ and testimonial actions cancel stale transitions.
- Reverse scroll: entry states do not leave content hidden when a trigger is revisited.
- Resize: ScrollTrigger refresh and pointer grid preserve correct positions after viewport changes.
- Mobile: no focus trap, overflow, or duplicated timeline after responsive rendering.

---

### Task 1: Motion lifecycle and tokens

**Files:**
- Create: `src/animations/config/motionTokens.ts`, `src/hooks/useSectionMotion.ts`
- Modify: `src/main.tsx`, `tests/unit/selection-hooks.test.tsx`

**Interfaces:** Produces `useSectionMotion(ref, initialize)` which supplies a scoped GSAP context or a no-motion final state.

- [ ] Write a failing reduced-motion lifecycle test.
- [ ] Implement named durations/eases and client-only GSAP/ScrollTrigger registration with cleanup.
- [ ] Verify the focused unit test and `npm test -- --run` pass.

### Task 2: Hero/grid and shared microinteractions

**Files:**
- Create: `src/animations/sections/hero.motion.ts`, `src/animations/effects/hover.ts`
- Modify: `src/components/sections/Hero.tsx`, `src/components/layout/Header.tsx`, `src/components/ui/Button.tsx`, `src/styles/global.css`, `tests/unit/hero.test.tsx`

**Interfaces:** `initializeHeroMotion(root: HTMLElement): gsap.Context` uses only data-motion descendants.

- [ ] Add a failing test for final visible hero state under reduced motion.
- [ ] Add the one-time hero reveal/preloader sequence and verified button/link hover transitions without changing DOM content order.
- [ ] Tune the existing grid only through named constants after deterministic pointer-path browser comparison.
- [ ] Verify desktop/mobile initial load and pointer paths with Playwright.

### Task 3: Section reveals, chart and tab transitions

**Files:**
- Create: `src/animations/sections/content.motion.ts`, `src/animations/sections/performance.motion.ts`
- Modify: `Features.tsx`, `Performance.tsx`, `Capabilities.tsx`, `Documentation.tsx`, `Blog.tsx`, `src/styles/global.css`
- Test: `tests/e2e/motion.spec.ts`

**Interfaces:** `initializeContentMotion(root)` and `initializePerformanceMotion(root)` return cleanup contexts; tabs invoke a cancellable panel transition.

- [ ] Write failing browser assertions for bars' settled scale, rapid capability switching and reverse-scroll visible state.
- [ ] Implement scoped one-time ScrollTrigger reveals and deterministic baseline bar stagger.
- [ ] Add capability panel transition; add a marquee only if subsequent reference capture verifies it moves.
- [ ] Verify no console errors at 1440×900 and 390×844.

### Task 4: Interactive controls and lower-page motion

**Files:**
- Create: `src/animations/sections/controls.motion.ts`, `src/animations/sections/footer.motion.ts`
- Modify: `HowItWorks.tsx`, `Installation.tsx`, `Testimonials.tsx`, `Pricing.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`, `src/styles/global.css`
- Test: `tests/e2e/motion.spec.ts`, relevant `tests/unit/*.test.tsx`

**Interfaces:** `transitionSelection(previous: HTMLElement | null, next: HTMLElement): Promise<void>` cancels/replaces prior tween.

- [ ] Write failing tests for repeated language/pricing/FAQ/testimonial interactions and reduced-motion answers.
- [ ] Implement crossfade/height transitions and slider movement without autoplay; use CSS for small card/footer hovers.
- [ ] Add only observed CTA/technical-rail motion, otherwise retain a documented static state.
- [ ] Run affected unit and browser tests.

### Task 5: Motion comparison, audit completion and release validation

**Files:**
- Modify: `docs/AEYE_MOTION_AUDIT.md`, `tests/e2e/visual-capture.spec.ts`, `README.md`
- Create: `outputs/motion-comparison/` generated captures/recordings

- [ ] Capture matching reference/local load, scroll, reverse scroll, pointer and control sequences at 1440×900 and 390×844.
- [ ] Update every audit row with timing, confidence, verification method and remaining approximation.
- [ ] Run `npm test -- --run`, `npm run build`, and `npm run test:e2e`; record exact results.
