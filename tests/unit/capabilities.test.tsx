import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Capabilities } from '../../src/components/sections/Capabilities'
import { renderWithProviders } from '../../src/test/render'

describe('Capabilities', () => {
  it('changes the active capability diagram after selecting Intelligent Processing', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(<Capabilities />)
    expect(container.querySelector('[data-capability-support]')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-capability-logo]')).toHaveLength(8)
    await user.click(screen.getByRole('tab', { name: /Intelligent Processing/i }))
    expect(screen.getByRole('tabpanel', { name: /Intelligent Processing/i })).toBeVisible()
  })
})
