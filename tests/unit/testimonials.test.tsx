import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from '../../src/components/sections/Testimonials'
import { renderWithProviders } from '../../src/test/render'

describe('Testimonials', () => {
  it('renders the editorial testimonial mosaic', () => {
    const { container } = renderWithProviders(<Testimonials />)

    expect(container.querySelector('[data-testimonial-mosaic]')).toBeInTheDocument()
    expect(container.querySelector('[data-testimonial-card="jaron"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testimonial-card="taylor"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testimonial-card="video"]')).toBeInTheDocument()
  })

  it('advances to the next testimonial', async () => {
    const user = userEvent.setup()
    const view = renderWithProviders(<Testimonials />)
    const testimonials = within(view.container)
    await user.click(testimonials.getByRole('button', { name: /next testimonial/i }))
    expect(testimonials.getByText(/Taylor Reed/i)).toBeVisible()
  })
})
