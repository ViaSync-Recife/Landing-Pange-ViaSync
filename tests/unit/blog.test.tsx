import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from '../../src/components/sections/Blog'
import { renderWithProviders } from '../../src/test/render'
describe('Blog',()=>{it('renders the three reference articles as editorial cards',()=>{renderWithProviders(<Blog/>);expect(screen.getByRole('link',{name:/Designing AI Workflows That Actually Work.*VIEW/i})).toBeVisible();expect(screen.getByRole('link',{name:/From Prompt to Product: Making AI Useful.*VIEW/i})).toBeVisible()})})
