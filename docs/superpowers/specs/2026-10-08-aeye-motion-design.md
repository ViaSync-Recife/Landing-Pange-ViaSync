# Aeye motion-fidelity design

## Goal and boundary

Add a motion system to the existing React recreation of `aeye-saas.webflow.io`. The existing visual layout, assets, typography, data and working controls remain the source of truth. This work changes behavior only where motion is observable in the reference; it does not rebuild sections or introduce decorative motion unrelated to the reference.

## Evidence and confidence

The live reference was inspected in a browser at desktop size. Its accessibility tree confirms a technical preloader, a fixed navigation, character/word-separated heading DOM, an interactive hero grid, Webflow tab groups for Performance/Capabilities/Pricing/FAQ, a Webflow slider for testimonials, and the repeated technical marquee rows around the final CTA. The page's published DOM alone does not expose every GSAP/Webflow timing curve. Effects without an observable timing measurement stay marked as approximations in `docs/AEYE_MOTION_AUDIT.md`.

## Motion architecture

`src/animations/` will isolate motion from component rendering:

- `config/motionTokens.ts`: named easings, durations, offsets and viewport trigger points.
- `effects/reveal.ts`: scoped word/line reveal helpers that only animate elements supplied by ref.
- `effects/hover.ts`: lightweight CSS/GSAP button, card and arrow transitions.
- `effects/marquee.ts`: seamless, paused-when-reduced-motion technical/logo looping support.
- `sections/*.motion.ts`: one initializer per complex section; each returns a GSAP context cleanup.
- `hooks/useSectionMotion.ts`: central reduced-motion and client-only lifecycle guard.

GSAP and ScrollTrigger are registered only in the browser. Effects use section refs, not global selectors. ScrollTriggers are refreshed after source images load and reverted during unmount. No animation is driven by React state on a frame-by-frame basis.

## Behavior plan

### Global and hero

- Preserve the pointer-cell canvas engine. Tune only its verified colors, size, fade and interpolation after scripted pointer-path capture.
- Recreate the loaded-state heading as a masked stagger of the pre-split word elements. The blue mutable term uses a type/scramble replacement only if timing inspection confirms it.
- Stagger the nav, trust group, actions and partner marks in the observed order. The preloader becomes a one-time overlay that never traps interaction and is skipped for reduced motion.
- Use scoped CSS transitions for buttons and nav links; do not add header hiding or section-aware navigation until verified.

### Scroll sections

- Features and documentation/blog cards: entrance sequence only if source inspection confirms a one-time reveal; card hover remains a small visual transition.
- Performance: chart bars use transform scale from their baseline and a deterministic stagger only after entry. Metrics remain static unless the reference demonstrates numeric counting.
- Capabilities: retain one-active tab semantics. Animate panel exit/entry through opacity/translation, not a remount flash. Add marquee only if the observed logo rail is moving.
- How it works: animate active card/connector transitions if confirmed. No pin/scrub is added without evidence of a pinned or scroll-linked source sequence.
- Installation, pricing and FAQ: use short content crossfades/height transitions, with accessible semantic state updated immediately. Rapid repeated selection cancels/replaces the previous tween.
- Testimonials: navigate one direction per control, slide/fade the active content at the verified distance and maintain wraparound. No autoplay unless verified.
- Changelog, final CTA and footer: entry/hovers only where observed; the technical CTA rows may use a seamless loop only after inspection.

## Accessibility and performance

- `prefers-reduced-motion` disables preloader, scroll entrance motion, loops and canvas trail animation while preserving final states and controls.
- Focus styles and keyboard behavior stay visible and immediate.
- Only transform and opacity are animated on large content. Canvas RAF is stopped on unmount and disabled for reduced motion; offscreen loops are paused with IntersectionObserver.
- Every GSAP context and ScrollTrigger is reverted/killed on unmount.

## Validation

- Capture reproducible reference and local sequences at 1440×900 and 390×844: initial load, slow/fast/reverse scroll, pointer-grid paths, hover, pricing, language selection, FAQ and testimonial navigation.
- Add Playwright coverage for reduced-motion final states, repeated tabs/FAQ selection, no console errors and no overflow.
- Compare matched frames at 0/25/50/75/100% for the most prominent sequences. Document timing/value uncertainty rather than claiming an exact match.

## Delivery sequence

1. Complete and store the evidence audit.
2. Add motion primitives and reduced-motion lifecycle protections.
3. Implement hero/grid and performance first, then complex controls, then lower-page hover/reveals.
4. Record, compare, tune, and run build/unit/E2E checks.
