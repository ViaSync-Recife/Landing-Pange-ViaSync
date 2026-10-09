import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Installation } from '../../src/components/sections/Installation'
import { renderWithProviders } from '../../src/test/render'

describe('Installation', () => {
  it('replaces JavaScript code with the CLI snippet', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(<Installation />)
    expect(container.querySelector('[data-installation-layout]')).toBeInTheDocument()
    expect(screen.getByText(/Add AI capabilities to your Python workflows/i)).toBeVisible()
    await user.click(screen.getByRole('button', { name: 'CLI' }))
    expect(screen.getByText(/npm install -g @aeye\/cli/)).toBeVisible()
  })
})
