import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Preloader() {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (reducedMotion) { setVisible(false); return }
    const timer = window.setTimeout(() => setVisible(false), 720)
    return () => window.clearTimeout(timer)
  }, [reducedMotion])
  if (!visible) return null
  return <div aria-hidden="true" className="technical-preloader" data-testid="technical-preloader"><i /><i /><i /><i /><i /><i /></div>
}
