import { useCallback, useRef } from 'react'
import { initializeSectionMotion } from '../../animations/sections/section.motion'
import { useSectionMotion } from '../../hooks/useSectionMotion'
import { Container } from '../layout/Container'

const changes = [
  ['Introducing new API feature', 'NOV 24, 2025', 'Expanded API capabilities with more flexible input handling and structured output formats. Improved response time and reliability across endpoints.', '<>'],
  ['Workflow Improvements', 'MAR 18, 2025', 'Introduced conditional branching in workflow definitions steps can now route to different actions based on output values or metadata flags.', '✓'],
  ['Output Optimization', 'DEC 07, 2024', 'Refined output structure for clearer, more usable results. Better formatting and consistency across repeated runs.', '✓'],
] as const

export function Changelog() {
  const root = useRef<HTMLElement>(null)
  const initialize = useCallback(initializeSectionMotion, [])
  useSectionMotion(root, initialize)

  return <section className="section-frame section-frame--light changelog-section" ref={root}>
    <Container>
      <div className="section-frame__topline"><p className="technical-label">[N. 09 / 11] &gt; CHANGELOGS</p></div>
      <div className="changelog-layout" data-section-content>
        <aside className="changelog-intro">
          <h2 className="section-heading" data-section-heading><span>/</span> We ship fast.<br /> Always improve. <span>/</span></h2>
          <a className="aeye-button aeye-button--dark" href="#changes">VIEW ALL CHANGES</a>
          <p>Continuous updates to improve performance, and refine how AI works across your workflows.</p>
        </aside>
        <div className="changelog-timeline">{changes.map(([title, date, description, marker]) => <article key={title}>
          <time>{date}</time><i aria-hidden="true">{marker}</i><div><h3>{title}</h3><p>{description}</p></div>
        </article>)}</div>
      </div>
    </Container>
  </section>
}
