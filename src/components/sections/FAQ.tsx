import { useState } from 'react'
import { faqs } from '../../data/faqs'
import { SectionFrame } from '../ui/SectionFrame'
export function FAQ(){const [active,setActive]=useState<string|null>(null);return <SectionFrame index="N. 11 / 11" label="FAQS" title="Have question? We’ve got answers." tone="light"><div className="faq-list">{faqs.map((faq,index)=>{const open=active===faq.id;return <div key={faq.id}><button aria-controls={`answer-${faq.id}`} aria-expanded={open} onClick={()=>setActive(open?null:faq.id)} type="button"><small>//{String(index+1).padStart(3,'0')}</small><span>{faq.question}</span><b aria-hidden="true">{open?'−':'+'}</b></button>{open?<p id={`answer-${faq.id}`}>{faq.answer}</p>:null}</div>})}</div></SectionFrame>}
