import { act, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HowItWorks } from '../../src/components/sections/HowItWorks'
import { renderWithProviders } from '../../src/test/render'

describe('HowItWorks', () => {
  afterEach(() => vi.useRealTimers())

  it('shows all four numbered workflow stages', () => {
    const { container } = renderWithProviders(<HowItWorks />)
    expect(screen.getAllByText('// 004')).toHaveLength(2)
    expect(screen.getAllByAltText(/workflow stage icon/i)).toHaveLength(4)
    expect(container.querySelectorAll('[data-section^="hiw-"]')).toHaveLength(4)
    expect(container.querySelector('.hiw-card-process-line.is-active')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-mobile-workflow-step]')).toHaveLength(4)
  })

  it('advances the single mobile card automatically', () => {
    vi.useFakeTimers()
    const matchMedia = vi.fn((query: string) => ({
      matches: query.includes('max-width'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: matchMedia })
    const { container } = renderWithProviders(<HowItWorks />)

    act(() => vi.advanceTimersByTime(3200))
    expect(container.querySelector('[data-section="hiw-002"]')).toHaveAttribute('aria-pressed', 'true')
  })
})
