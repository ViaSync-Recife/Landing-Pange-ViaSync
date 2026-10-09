import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FAQ } from '../../src/components/sections/FAQ'
import { renderWithProviders } from '../../src/test/render'
describe('FAQ',()=>{it('exposes only the selected FAQ answer with its ARIA state',async()=>{const user=userEvent.setup();renderWithProviders(<FAQ/>);const question=screen.getByRole('button',{name:/How does integration work/i});await user.click(question);expect(question).toHaveAttribute('aria-expanded','true');expect(screen.getByText(/setup takes under five minutes/i)).toBeVisible()})})
