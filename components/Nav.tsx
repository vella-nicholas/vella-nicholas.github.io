'use client'

import { useState } from 'react'
import LinkedInButton from '@/components/LinkedInButton'
import { useHeroCTAVisibility } from '@/hooks/useHeroCTAVisibility'

const links = [
  { href: '#impact', label: 'Impact' },
  { href: '#deliveries', label: 'Deliveries' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const stickyBarVisible = !useHeroCTAVisibility()

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--line)]"
      style={{
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(11,16,32,0.72)',
      }}
      aria-label="Site navigation"
    >
      <div className="w-full max-w-[1180px] mx-auto px-4 flex items-center justify-between py-4">
        <a href="#top" className="font-extrabold tracking-[-0.03em] text-[1.05rem] text-[var(--text)]">
          Nicholas Vella
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[0.95rem] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {label}
            </a>
          ))}
          <LinkedInButton variant="nav" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 border-t border-[var(--line)]" style={{ background: 'rgba(11,16,32,0.97)' }}>
          <div className={`flex flex-col px-4 pb-1 transition-opacity ${open ? 'opacity-100 duration-200 delay-100' : 'opacity-0 duration-150 delay-0'} ${stickyBarVisible ? 'pt-10' : 'pt-1'}`}>
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center text-sm py-3 border-b border-[var(--line)] last:border-b-0 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
