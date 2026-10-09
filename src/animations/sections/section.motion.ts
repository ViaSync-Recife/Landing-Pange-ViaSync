import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motionTokens } from '../config/motionTokens'

export function initializeSectionMotion(root: HTMLElement) {
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  const heading = root.querySelector<HTMLElement>('[data-section-heading]')
  const content = root.querySelector<HTMLElement>('[data-section-content]')
  const context = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 78%', once: true },
    })
    if (heading) timeline.from(heading, { autoAlpha: 0, y: 32, duration: motionTokens.content.duration, ease: motionTokens.content.ease, clearProps: 'transform,opacity,visibility' })
    if (content) timeline.from(content, { autoAlpha: 0, y: 20, duration: motionTokens.content.duration, ease: motionTokens.content.ease, clearProps: 'transform,opacity,visibility' }, '-=.28')
  }, root)
  return () => context.revert()
}
