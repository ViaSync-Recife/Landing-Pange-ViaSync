import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../../src/components/layout/Footer'
import { renderWithProviders } from '../../src/test/render'
describe('Footer',()=>{it('renders the newsletter field and footer navigation',()=>{renderWithProviders(<Footer/>);expect(screen.getByLabelText(/email/i)).toBeVisible();expect(screen.getByText('FOLLOW US')).toBeVisible()})})
