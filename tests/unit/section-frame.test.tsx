import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionFrame } from '../../src/components/ui/SectionFrame'
import { renderWithProviders } from '../../src/test/render'

describe('SectionFrame', () => {
  it('uses the measured container and section label copy', () => {
    renderWithProviders(
      <SectionFrame index="N. 01 / 11" label="KEY VALUE" title="Less manual work. More intelligent execution." tone="light" />,
    )

    expect(screen.getByText('[N. 01 / 11 ] > KEY VALUE')).toBeVisible()
  })
})
