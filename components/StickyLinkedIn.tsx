'use client'

import { useHeroCTAVisibility } from '@/hooks/useHeroCTAVisibility'
import LinkedInButton from '@/components/LinkedInButton'

export default function StickyLinkedIn() {
  const heroCTAVisible = useHeroCTAVisibility()
  const visible = !heroCTAVisible

  return (
    <div
      className="md:hidden fixed top-16 left-0 right-0 z-[60] flex border-b border-[var(--line)] transition-all duration-300"
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'rgba(11,16,32,0.85)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: `translateY(${visible ? '0' : '-8px'})`,
        }}
        aria-hidden={!visible}
      >
        <LinkedInButton variant="sticky" />
    </div>
  )
}
