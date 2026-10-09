import { useState } from 'react'

export function useSingleSelection<T>(initial: T) {
  const [selected, select] = useState<T>(initial)
  return { selected, select }
}
