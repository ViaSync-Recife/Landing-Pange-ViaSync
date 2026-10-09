import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../../src/app/App'
import { renderWithProviders } from '../../src/test/render'

describe('App', () => {
  it('renders the Aeye main landmark', () => {
    renderWithProviders(<App />)

    expect(screen.getByRole('main', { name: 'Aeye homepage' })).toBeInTheDocument()
  })
})
