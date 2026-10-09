import { pricingPlans } from '../../data/pricing'
import { usePricingPeriod } from '../../hooks/usePricingPeriod'
import { SegmentedTabs } from '../ui/SegmentedTabs'
import { SectionFrame } from '../ui/SectionFrame'

function featureIntro(planId: string) {
  if (planId === 'pro') return 'Includes everything in Starter, plus:'
  if (planId === 'max') return 'Includes everything in Starter & Pro, plus:'
  return 'Includes:'
}

function Price({ value }: { value: string }) {
  const [dollars, cents] = value.split('.')
  return <b className="motion-price"><span>{dollars}</span><em>.{cents}</em><i>/month</i></b>
}

export function Pricing() {
  const { period, setPeriod } = usePricingPeriod()

  return <SectionFrame index="N. 08 / 11" label="PRICING" title="Simple pricing. Pay for what you use." tone="light" action={<SegmentedTabs ariaLabel="Billing" items={[{ id: 'monthly', label: 'Monthly' }, { id: 'annual', label: 'Annually', badge: 'SAVE 20%' }]} onChange={setPeriod} value={period} />}>
    <div className="pricing-grid">
      {pricingPlans.map((plan) => <article className={plan.popular ? 'price-card is-popular' : 'price-card'} data-plan={plan.id} key={plan.id}>
        <div className="price-card__topline" />
        {plan.popular ? <small className="price-card__popular">MOST POPULAR</small> : null}
        <div className="price-card__title">
          {plan.popular ? <span aria-hidden="true" className="price-card__mark" /> : null}
          <h3>{plan.name}</h3>
        </div>
        <p>{plan.description}</p>
        <Price value={plan.prices[period]} />
        <a className="aeye-button aeye-button--dark" href="#contact">GET STARTED</a>
        <div className="price-card__features">
          <strong>{featureIntro(plan.id)}</strong>
          <ul>{plan.features.map(feature => <li key={feature}>✓ <span>{feature}</span></li>)}</ul>
        </div>
      </article>)}
    </div>
  </SectionFrame>
}
