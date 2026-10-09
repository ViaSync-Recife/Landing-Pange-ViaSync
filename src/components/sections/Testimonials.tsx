import { useState } from 'react'
import { SectionFrame } from '../ui/SectionFrame'

const quotes = [
  { name: 'Jaron Smith', handle: '@jaronsmith8802', date: '12:08 AM — DEC 12, 2026', quote: 'We reduced hours of manual work into a few automated steps. The workflow feels seamless — and the results are consistently reliable.' },
  { name: 'Taylor Reed', handle: '@taylor_reed4214', date: '9:03 PM — JUL 08, 2026', quote: 'We replaced three internal scripts with one automated workflow. Setup took minutes. Maintenance takes none!!!' },
  { name: 'Emily Carter', handle: '@emily_carter', date: '4:20 PM — JUN 17, 2026', quote: 'It’s not just another AI tool — it is a system that fits naturally into our product process.' },
] as const

function TweetCard({ card, quote, index }: { card: string, quote: typeof quotes[number], index: number }) {
  return <article className="testimonial-tweet" data-testimonial-card={card}>
    <header>
      <img alt="" src="/assets/testimonials/avatar.avif" />
      <div><b>{quote.name}</b><small>{quote.handle}</small></div>
      <span aria-hidden="true">𝕏</span>
    </header>
    <p className="motion-swap" key={index}>{quote.quote}</p>
    <time>{quote.date}</time>
    <footer><span>↗</span><b>VIEW</b></footer>
  </article>
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = quotes[index]
  const next = quotes[(index + 1) % quotes.length]

  return <SectionFrame index="N. 07 / 11" label="TESTIMONIAL" title="Less talk, more shipping. See what they are saying." tone="dark" className="testimonials-section">
    <div className="testimonial-controls">
      <button aria-label="Previous testimonial" onClick={() => setIndex((index + quotes.length - 1) % quotes.length)} type="button">‹</button>
      <button aria-label="Next testimonial" onClick={() => setIndex((index + 1) % quotes.length)} type="button">›</button>
    </div>
    <div className="testimonial-mosaic-viewport">
      <div className="testimonial-mosaic" data-testimonial-mosaic>
        <TweetCard card="jaron" index={index} quote={active} />
        <article className="testimonial-video" data-testimonial-card="video">
          <img alt="Team member video thumbnail" src="/assets/testimonials/video.avif" />
          <span className="testimonial-video__handle">@DAVID_COREW</span>
          <b>▶</b><small>1:30 min</small>
        </article>
        <TweetCard card="taylor" index={index + 1} quote={next} />
        <article className="testimonial-note" data-testimonial-card="product">
          <b>OUTSIDE</b>
          <p>“It’s not just a feature. It became part of our product and everything moves faster.”</p>
          <small>Frontend Engineer</small>
        </article>
      </div>
    </div>
  </SectionFrame>
}
