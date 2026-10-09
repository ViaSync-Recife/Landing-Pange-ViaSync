import { describe, expect, it } from 'vitest'
import { interpolateCells } from '../../src/lib/gridTrail'

describe('interpolateCells', () => {
  it('fills every horizontal cell between two pointer positions', () => {
    expect(interpolateCells({ column: 1, row: 2 }, { column: 4, row: 2 })).toEqual([
      { column: 1, row: 2 },
      { column: 2, row: 2 },
      { column: 3, row: 2 },
      { column: 4, row: 2 },
    ])
  })
})
