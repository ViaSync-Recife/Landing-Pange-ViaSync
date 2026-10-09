import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from '../../src/components/sections/Pricing'
import { renderWithProviders } from '../../src/test/render'

describe('Pricing', () => {
  it('marks the elevated Pro plan for the featured card treatment', () => {
    const { container } = renderWithProviders(<Pricing />)

    const proPlan = container.querySelector<HTMLElement>('[data-plan="pro"]')

    expect(proPlan).toHaveClass('price-card', 'is-popular')
    expect(proPlan?.querySelector('.price-card__popular')).toHaveTextContent('MOST POPULAR')
  })

  it('sets all annual plan prices after choosing Annually', async () => {
    const user = userEvent.setup()
    const view = renderWithProviders(<Pricing />)
    const pricing = within(view.container)
    await user.click(pricing.getByRole('tab', { name: /Annually/i }))
    for (const price of ['$5.00', '$15.00', '$45.00']) {
      expect(pricing.getByText((_, element) => element?.classList.contains('motion-price') && element.textContent?.startsWith(price) === true)).toBeVisible()
    }
  })
})
