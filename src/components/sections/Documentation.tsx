import { useCallback, useRef } from 'react'
import { initializeSectionMotion } from '../../animations/sections/section.motion'
import { useSectionMotion } from '../../hooks/useSectionMotion'
import { Container } from '../layout/Container'

const guides = [
  { title: 'Core Concepts', tags: ['SETUP', 'QUICK START', 'BASICS'], index: '001', image: 'core' },
  { title: 'Advanced Guide', tags: ['USAGE', 'WORKFLOW', 'ADVANCED'], index: '002', image: 'advanced' },
] as const

export function Documentation() {
  const root = useRef<HTMLElement>(null)
  const initialize = useCallback(initializeSectionMotion, [])
  useSectionMotion(root, initialize)

  return (
    <section className="section-frame section-frame--light documentation-section" ref={root}>
      <Container>
        <div className="section-frame__topline">
          <p className="technical-label">[N. 06 /11] &gt; DOCUMENT</p>
        </div>
        <div className="documentation-layout" data-documentation-layout>
          <div className="documentation-intro">
            <h2 className="section-heading" data-section-heading><span>/</span> Everything documented.<br />Clear and practical. <span>/</span></h2>
            <div className="documentation-intro__footer">
              <a className="aeye-button aeye-button--dark" href="#pricing">GET STARTED</a>
              <p>Everything you need to get started.<br />Explore features, and integrate smoothly, without unnecessary complexity.</p>
            </div>
          </div>
          {guides.map((guide) => (
            <a className="documentation-card" href="#docs" key={guide.title}>
              <div className="documentation-card__header">
                <h3>{guide.title}</h3>
                <p>{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</p>
                <small>// {guide.index}</small>
              </div>
              <div className="documentation-card__preview" data-doc-preview>
                <img alt={`${guide.title} documentation preview`} src={`/assets/docs/${guide.image}.avif`} />
              </div>
              <footer><i>↗</i><b>VIEW</b></footer>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
