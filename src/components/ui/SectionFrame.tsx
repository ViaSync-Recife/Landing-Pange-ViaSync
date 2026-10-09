import { useCallback, useRef } from 'react'
import type { PropsWithChildren, ReactNode } from 'react'
import { initializeSectionMotion } from '../../animations/sections/section.motion'
import { useSectionMotion } from '../../hooks/useSectionMotion'
import { Container } from '../layout/Container'

type SectionTone = 'light' | 'dark'

type SectionFrameProps = PropsWithChildren<{
  index: string
  label: string
  title: string
  tone: SectionTone
  action?: ReactNode
  className?: string
}>

export function SectionFrame({ index, label, title, tone, action, className = '', children }: SectionFrameProps) {
  const root = useRef<HTMLElement>(null)
  const initialize = useCallback(initializeSectionMotion, [])
  useSectionMotion(root, initialize)
  return (
    <section className={`section-frame section-frame--${tone} ${className}`.trim()} ref={root}>
      <Container>
        <div className="section-frame__topline">
          <p className="technical-label">[{index} ] &gt; {label}</p>
          {action}
        </div>
        <h2 className="section-heading" data-section-heading><span>/</span> {title} <span>/</span></h2>
        <div data-section-content>{children}</div>
      </Container>
    </section>
  )
}
