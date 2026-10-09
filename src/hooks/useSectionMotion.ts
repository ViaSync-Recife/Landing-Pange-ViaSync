import { useEffect } from 'react'
import type { RefObject } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useSectionMotion<T extends HTMLElement>(ref: RefObject<T | null>, initialize: (root: T) => (() => void) | void) {
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    const root = ref.current
    if (!root || reducedMotion || typeof window.matchMedia !== 'function') return
    return initialize(root)
  }, [initialize, reducedMotion, ref])
}
