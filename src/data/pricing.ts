export type BillingPeriod = 'monthly' | 'annual'

export type PricingPlan = {
  id: 'starter' | 'pro' | 'max'
  name: string
  description: string
  prices: Record<BillingPeriod, string>
  features: string[]
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  { id: 'starter', name: 'Starter', description: 'For individuals exploring AI workflows', prices: { monthly: '$9.00', annual: '$5.00' }, features: ['Basic AI processing', 'Limited monthly usage', 'Standard response speed', 'Community support'] },
  { id: 'pro', name: 'Pro', description: 'For builders and small teams', prices: { monthly: '$19.00', annual: '$15.00' }, features: ['Higher usage limits', 'Faster processing', 'Priority API access', 'Workflow customization', 'Email support'], popular: true },
  { id: 'max', name: 'Max', description: 'For teams running production workflows', prices: { monthly: '$49.00', annual: '$45.00' }, features: ['Unlimited usage', 'Dedicated performance', 'Advanced workflow control', 'Team & collaboration features', 'Priority support'] },
]
