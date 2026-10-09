import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { SectionFrame } from '../ui/SectionFrame'

const stages=[
  ['001','Input your data','Add prompts, data, or context from your workflow with minimal setup.','input'],
  ['002','Process with AI','Transform inputs into structured, meaningful outputs in real time.','process'],
  ['003','Generate results','Turn processed data into actionable outputs ready to use, refine, or share.','results'],
  ['004','Refine and repeat','Adjust inputs, and continuously improve results over time.','refine'],
] as const

export function HowItWorks(){
  const [active,setActive]=useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const workflowRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const workflow = workflowRef.current
    if (!workflow || isMobile || reducedMotion || typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

    gsap.registerPlugin(ScrollTrigger)
    const trigger = ScrollTrigger.create({
      trigger: workflow,
      start: 'top 76%',
      end: 'bottom 34%',
      onEnter: () => setActive(0),
      onEnterBack: () => setActive(0),
      onUpdate: (self) => {
        const next = Math.min(stages.length - 1, Math.floor(self.progress * stages.length))
        setActive((current) => current === next ? current : next)
      },
    })

    return () => trigger.kill()
  }, [isMobile, reducedMotion])

  useEffect(() => {
    if (!isMobile || reducedMotion) return
    const cycle = window.setInterval(() => setActive((current) => (current + 1) % stages.length), 3200)
    return () => window.clearInterval(cycle)
  }, [isMobile, reducedMotion])

  return <SectionFrame index="N. 04 / 11" label="HOW IT WORK" title="Understand the flow. See how it all connects." tone="light" action={<a className="aeye-button aeye-button--dark" href="#contact">CONTACT US</a>}><div className="workflow-grid" ref={workflowRef}><div aria-hidden="true" className="mobile-workflow-steps">{stages.map(([number], index) => <span className={index === active ? 'is-active' : ''} data-mobile-workflow-step key={number}>// {number}</span>)}</div>{stages.map(([number,title,text,asset],index)=>{
    const selected=index===active
    return <article aria-pressed={selected} className={selected?'is-active':''} data-section={`hiw-${number}`} key={number} onFocus={()=>setActive(index)} onKeyDown={(event)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();setActive(index)}}} onMouseEnter={()=>setActive(index)} role="button" tabIndex={0}><small>// {number}</small><p>{text}</p><i aria-hidden="true" className={`hiw-card-process-line ${selected ? 'is-active' : ''}`} data-hiw-card-process-line /><h3>{title}</h3><img alt={`Workflow stage icon: ${title}`} src={`/assets/workflow/${asset}-${selected?'active.png':'idle.avif'}`} /></article>
  })}</div></SectionFrame>
}
