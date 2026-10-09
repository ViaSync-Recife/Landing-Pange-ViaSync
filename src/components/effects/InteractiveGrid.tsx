import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { interpolateCells, type GridCell } from '../../lib/gridTrail'

type InteractiveGridProps = { cellSize?: number; fadeMs?: number; className?: string }

export function InteractiveGrid({ cellSize = 36, fadeMs = 850, className = '' }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (!('ResizeObserver' in window) || typeof window.ResizeObserver !== 'function') return
    const context = canvas.getContext('2d')
    if (!context) return
    const host = canvas.parentElement
    if (!host) return

    const active = new Map<string, { cell: GridCell; time: number }>()
    let previous: GridCell | null = null
    let frame = 0
    const resize = () => {
      const bounds = host.getBoundingClientRect()
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.ceil(bounds.width * ratio)
      canvas.height = Math.ceil(bounds.height * ratio)
      canvas.style.width = `${bounds.width}px`
      canvas.style.height = `${bounds.height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    const draw = () => {
      const bounds = host.getBoundingClientRect()
      context.clearRect(0, 0, bounds.width, bounds.height)
      context.strokeStyle = 'rgba(255,255,255,.1)'
      context.lineWidth = 1
      for (let x = 0; x <= bounds.width; x += cellSize) { context.beginPath(); context.moveTo(x, 0); context.lineTo(x, bounds.height); context.stroke() }
      for (let y = 0; y <= bounds.height; y += cellSize) { context.beginPath(); context.moveTo(0, y); context.lineTo(bounds.width, y); context.stroke() }
      const now = performance.now()
      active.forEach((entry, key) => {
        const opacity = 1 - (now - entry.time) / fadeMs
        if (opacity <= 0) { active.delete(key); return }
        context.fillStyle = `rgba(0,87,255,${opacity})`
        context.fillRect(entry.cell.column * cellSize + 1, entry.cell.row * cellSize + 1, cellSize - 2, cellSize - 2)
      })
      frame = requestAnimationFrame(draw)
    }
    const handlePointer = (event: PointerEvent) => {
      if (reducedMotion) return
      const bounds = host.getBoundingClientRect()
      const current = { column: Math.floor((event.clientX - bounds.left) / cellSize), row: Math.floor((event.clientY - bounds.top) / cellSize) }
      interpolateCells(previous ?? current, current).forEach((cell) => active.set(`${cell.column}:${cell.row}`, { cell, time: performance.now() }))
      previous = current
    }
    resize(); draw()
    const observer = new ResizeObserver(resize)
    observer.observe(host)
    host.addEventListener('pointermove', handlePointer)
    host.addEventListener('pointerleave', () => { previous = null })
    return () => { observer.disconnect(); host.removeEventListener('pointermove', handlePointer); cancelAnimationFrame(frame) }
  }, [cellSize, fadeMs, reducedMotion])

  return <canvas aria-hidden="true" className={`interactive-grid ${className}`.trim()} ref={canvasRef} />
}
