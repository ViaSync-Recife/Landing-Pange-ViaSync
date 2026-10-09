import { useCallback, useRef } from 'react'
import { initializeHeroMotion } from '../../animations/sections/hero.motion'
import { useSectionMotion } from '../../hooks/useSectionMotion'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { InteractiveGrid } from '../effects/InteractiveGrid'

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const initialize = useCallback(initializeHeroMotion, [])
  useSectionMotion(root, initialize)
  return <section className="hero" id="top" ref={root}><div className="hero-grid"><InteractiveGrid cellSize={48} /><Container className="hero-grid-content"><a aria-label="Aeye home" className="hero-brand" href="#top" data-hero-motion><span>✦</span>Aeye<sup>®</sup><em>v1.0-BETA</em></a><span className="scroll-note" data-hero-motion>SCROLL FOR MORE&nbsp; ↓</span></Container></div><Container><div className="hero-copy"><h1 data-hero-motion>A Next-Gen Powerful<br /><span>[ AI Product ]</span><br />for Smarter Workflows.</h1><div className="hero-side" data-hero-motion><div className="avatar-stack">{[1, 2, 3].map((number) => <img alt="Aeye customer" key={number} src={`/assets/avatars/trusted-${number}.avif`} />)}</div><p>Trusted by <b>10K+</b> Teams <strong>★ 4.9</strong> /5</p><p>Automate complex tasks, streamline your workflows, and deliver better results faster — with AI handling the heavy lifting behind the scenes.</p><div className="hero-actions"><Button href="#pricing">GET STARTED</Button><a href="#demo">▷ WATCH DEMO</a></div></div></div><div className="partner-row" data-hero-motion>{[1, 2, 3, 4, 5, 6].map((number) => <span key={number}><img alt="Partner logo" src={`/assets/partners/partner-${number}.svg`} /></span>)}</div><div className="tech-marquee" data-hero-motion><span>&gt;&nbsp; ADD-ON → intelligence LAYER FOR&nbsp; ❏❐&nbsp; your STACK&nbsp; &lt;</span></div></Container></section>
}
