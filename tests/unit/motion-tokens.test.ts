import { describe, expect, it } from 'vitest'
import { motionTokens } from '../../src/animations/config/motionTokens'

describe('motion tokens', () => {
  it('provides named reduced, entrance, and interaction timings', () => {
    expect(motionTokens.hero.duration).toBeGreaterThan(0)
    expect(motionTokens.content.stagger).toBeGreaterThan(0)
    expect(motionTokens.interaction.duration).toBeGreaterThan(0)
  })
})
