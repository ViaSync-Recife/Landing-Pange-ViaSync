import { useState } from 'react'
import { Container } from '../layout/Container'

const layers = [
  { signal: 'DATA SIGNALS', title: 'Context Awareness', number: '001', text: 'Understand inputs, context, and user intent — turning raw data into meaningful signals.', nodes: ['TEXT', 'METADATA', 'ENTITIES', 'SENTIMENT'] },
  { signal: 'ACTIONABLE LOGIC', title: 'Intelligent Processing', number: '002', text: 'Apply AI to analyze, reason, and adapt dynamically across different workflows and use cases.', nodes: ['INPUT', 'REASON', 'PRIORITIZE', 'DECIDE'] },
  { signal: 'STRUCTURE DELIVERY', title: 'Actionable Output', number: '003', text: 'Generate structured, reliable outputs that can be used, refined, and integrated into real workflows.', nodes: ['PDF', 'DOCS', 'CSV', 'JSON'] },
] as const

export function Capabilities() {
  const [active, setActive] = useState(0)
  const current = layers[active]
  return <section className="capabilities section-frame section-frame--dark"><Container><div className="section-frame__topline"><p className="technical-label">[N. 03 / 11 ] &gt; CORE CAPABILITIES</p></div><div className="capability-layout"><div role="tablist">{layers.map((layer,index) => <button aria-selected={index===active} className={index===active?'capability-tab is-active':'capability-tab'} key={layer.title} onClick={() => setActive(index)} role="tab" type="button"><small>{layer.signal}</small><b>{layer.title}</b><span>// {layer.number}</span>{index===active?<em>{layer.text}</em>:null}</button>)}</div><div aria-label={current.title} className="capability-diagram" role="tabpanel"><img alt="" src={`/assets/capabilities/${['context', 'processing', 'output'][active]}.avif`} /></div></div><div className="capability-lower"><h2 className="section-heading"><span>/</span> Three core layers.<br /> One seamless system. <span>/</span></h2></div><div className="capability-support" data-capability-support><article><b>Works with your workflow</b><p>Connect seamlessly with your existing tools, systems, and data sources.</p><div className="capability-logos">{Array.from({ length: 8 }, (_, index) => <span data-capability-logo key={index}>◈ Logoipsum</span>)}</div></article><article><b>Minimal by default</b><p>Focus only on what matters, no unnecessary complexity.</p><i aria-hidden="true" className="capability-support__mark capability-support__mark--single" /></article><article><b>Built to scale</b><p>Handle growing workflows, data, and outputs over time.</p><i aria-hidden="true" className="capability-support__mark capability-support__mark--double" /></article></div></Container></section>
}
