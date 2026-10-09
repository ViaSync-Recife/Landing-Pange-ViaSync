import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SegmentedTabs } from '../../src/components/ui/SegmentedTabs'
import { renderWithProviders } from '../../src/test/render'

describe('SegmentedTabs', () => {
  it('changes a segmented tab with ArrowRight', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    renderWithProviders(
      <SegmentedTabs
        ariaLabel="Billing"
        items={[{ id: 'monthly', label: 'Monthly' }, { id: 'annual', label: 'Annually' }]}
        onChange={onChange}
        value="monthly"
      />,
    )

    await user.click(screen.getByRole('tab', { name: 'Monthly' }))
    await user.keyboard('{ArrowRight}')

    expect(onChange).toHaveBeenCalledWith('annual')
  })
})
