import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { usePricingPeriod } from '../../src/hooks/usePricingPeriod'
import { useReducedMotion } from '../../src/hooks/useReducedMotion'

describe('usePricingPeriod', () => {
  it('keeps the monthly period until annual is explicitly selected', () => {
    const { result } = renderHook(() => usePricingPeriod())
    expect(result.current.period).toBe('monthly')
  })

  it('defaults to full motion when matchMedia is unavailable', () => {
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)
  })
})
