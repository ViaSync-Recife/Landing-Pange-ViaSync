import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Documentation } from '../../src/components/sections/Documentation'
import { renderWithProviders } from '../../src/test/render'

describe('Documentation', () => {
  it('renders Core Concepts and Advanced Guide cards', () => {
    const { container } = renderWithProviders(<Documentation />)
    expect(screen.getByText('Advanced Guide')).toBeVisible()
    expect(container.querySelector('[data-documentation-layout]')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-doc-preview]')).toHaveLength(2)
  })
})
