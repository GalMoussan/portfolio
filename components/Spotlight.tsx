'use client'

import { useRef, useCallback } from 'react'

export default function Spotlight({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (overlayRef.current) {
      overlayRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    }
  }, [])

  return (
    <div
      className="group/spotlight relative"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      />
      {children}
    </div>
  )
}
