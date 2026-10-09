import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Performance } from '../../src/components/sections/Performance'
import { renderWithProviders } from '../../src/test/render'

describe('Performance', () => {
  it('renders all four performance metrics', () => {
    renderWithProviders(<Performance />)
    expect(screen.getByText('< 1.8s')).toBeVisible()
    expect(screen.getByText('99.82%')).toBeVisible()
    expect(screen.getByAltText('Chart After')).toHaveAttribute('src', '/assets/performance/chart-after.avif')
  })
})
