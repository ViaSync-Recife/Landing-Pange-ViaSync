import { metrics } from '../../data/content'
import { SectionFrame } from '../ui/SectionFrame'

export function Performance() { return <SectionFrame index="N. 02 / 11" label="PERFORMANCE" title="Real-time intelligence. Zero unnecessary work." tone="light" action={<a className="aeye-button aeye-button--dark" href="#pricing">GET STARTED</a>}><div className="performance-layout"><div className="metric-grid">{metrics.map((metric) => <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div><div className="chart"><p>■ With Aeye</p><img alt="Chart After" className="performance-chart-image" src="/assets/performance/chart-after.avif" /></div></div></SectionFrame> }
