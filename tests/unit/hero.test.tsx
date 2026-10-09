import { screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from '../../src/components/sections/Hero'
import { renderWithProviders } from '../../src/test/render'

describe('Hero', () => {
  afterEach(() => vi.restoreAllMocks())

  it('renders the two hero CTAs and dynamic AI phrase', () => {
    renderWithProviders(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeVisible()
    expect(screen.getByRole('link', { name: /watch demo/i })).toBeVisible()
    expect(screen.getByText(/AI Product/i)).toBeVisible()
    expect(screen.getByLabelText(/Aeye home/i)).toBeVisible()
    expect(screen.getByText(/ADD-ON.*INTELLIGENCE LAYER/i)).toBeVisible()
  })

  it('does not initialize a canvas context when resize observers are unavailable', () => {
    const original = window.ResizeObserver
    Object.defineProperty(window, 'ResizeObserver', { configurable: true, value: undefined })
    const context = vi.spyOn(HTMLCanvasElement.prototype, 'getContext')

    renderWithProviders(<Hero />)

    expect(context).not.toHaveBeenCalled()
    Object.defineProperty(window, 'ResizeObserver', { configurable: true, value: original })
  })
})
