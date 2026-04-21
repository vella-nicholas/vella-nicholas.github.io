'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 400
      setVisible((prev) => (prev === next ? prev : next))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="md:hidden fixed bottom-8 left-1/2 z-50 flex items-center justify-center w-11 h-11 rounded-full border border-[var(--line)] text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        background: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: `translateX(-50%) translateY(${visible ? '0' : '12px'})`,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
