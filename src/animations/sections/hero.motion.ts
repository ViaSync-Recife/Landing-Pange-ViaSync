import { gsap } from 'gsap'
import { motionTokens } from '../config/motionTokens'

export function initializeHeroMotion(root: HTMLElement) {
  const items = root.querySelectorAll<HTMLElement>('[data-hero-motion]')
  const context = gsap.context(() => {
    gsap.from(items, {
      duration: motionTokens.hero.duration,
      ease: motionTokens.hero.ease,
      stagger: 0.1,
      autoAlpha: 0,
      y: 28,
      clearProps: 'transform,opacity,visibility',
    })
  }, root)
  return () => context.revert()
}
