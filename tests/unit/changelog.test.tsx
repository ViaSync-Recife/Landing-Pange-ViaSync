import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Changelog } from '../../src/components/sections/Changelog'
import { renderWithProviders } from '../../src/test/render'
describe('Changelog',()=>{it('renders all three dated changelog entries in the split timeline',()=>{renderWithProviders(<Changelog/>);expect(screen.getByText('NOV 24, 2025')).toBeVisible();expect(screen.getByText('DEC 07, 2024')).toBeVisible();expect(screen.getByRole('link',{name:'VIEW ALL CHANGES'})).toBeVisible()})})
