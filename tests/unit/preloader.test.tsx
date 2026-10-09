import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Preloader } from '../../src/components/effects/Preloader'
import { renderWithProviders } from '../../src/test/render'

describe('Preloader', () => {
  it('is decorative and does not expose an inaccessible loading dialog', () => {
    renderWithProviders(<Preloader />)
    expect(screen.getByTestId('technical-preloader')).toHaveAttribute('aria-hidden', 'true')
  })
})
