import { useState } from 'react'
import type { BillingPeriod } from '../data/pricing'

export function usePricingPeriod() {
  const [period, setPeriod] = useState<BillingPeriod>('monthly')
  return { period, setPeriod }
}
