# Aeye motion audit

Reference: `https://aeye-saas.webflow.io`  
Inspection date: 2026-10-08  
Desktop baseline: 1440×900

## Verified structural motion signals

| Element | Trigger | Observed implementation signal | Confidence |
| --- | --- | --- | --- |
| Technical preloader | initial load | Visible blue/black grid preloader state before settled page | High |
| Hero/section headings | initial load and section entry | Heading DOM is split into nested word/character containers, indicating staged text reveal/scramble capability | High for structure; timing unverified |
| Hero pixel grid | pointer movement | Dark square grid is interactive in source presentation; blue cell trail is visible in the published experience | High |
| Performance comparison | tab selection | Webflow tab group exposes `With Aeye` / `Without Aeye` panes | High |
| Capabilities | tab selection | Three Webflow tabs, one selected pane at a time | High |
| Installation | selection | JavaScript, CLI and Python anchor/tab-style controls | High |
| Testimonials | control click | Webflow slider with previous/next controls and 1 of 8 state | High |
| Pricing | tab selection | Monthly/Annually Webflow tab group | High |
| FAQ | tab selection | One selected Webflow tab at a time | High |
| CTA rails | continuous or staged | Repeated technical content rows before/after CTA are present | Medium; loop timing unverified |

## Required capture matrix

| Sequence | Reference state | Local comparison | Status |
| --- | --- | --- | --- |
| Initial load | preloader through settled hero | pending motion implementation | Pending |
| Hero pointer paths | slow horizontal, vertical, diagonal, reversal | pending grid timing comparison | Pending |
| Section entry | slow down, fast down, reverse up | pending | Pending |
| Capabilities/install/pricing/FAQ | click and rapid repeat | existing controls work; transition comparison pending | Partial |
| Testimonials | previous, next, wraparound | existing selection works; slider transition pending | Partial |
| Mobile | 390×844 initial + interactions | pending | Pending |
| Reduced motion | final-state rendering | pending | Pending |

## Unverified values

- Exact preloader duration and exit easing.
- Per-word/character delays, reveal clipping geometry and whether every heading uses the same timeline.
- Whether metric labels count numerically.
- Bar-chart stagger, scale origin and replay policy.
- Whether capability integration logos and CTA rails are continuously animated.
- Whether the workflow section is scroll-linked, pinned or only uses entrance effects.
- Exact hover offsets/easings for buttons, docs cards and blog cards.

No unverified value will be presented as a source-exact behavior. The implementation plan uses conservative fallbacks and records any remaining approximation after comparison.

## Local implementation status

- Hero: scoped GSAP entry sequence for scroll marker, heading, trust group, partner row and technical rail. Duration is 0.72 s with `power3.out`; initial invisibility was deliberately avoided so CTA links remain accessible throughout the transition.
- Performance: deterministic 12-bar baseline-scale entrance, 0.52 s each, with 55 ms stagger and bottom transform origin. This is an approximation pending frame-by-frame source timing capture.
- Shared hovers: buttons, documentation cards and blog cards use a 0.24 s transform/color transition. Reduced motion disables these transitions and bar animation.
