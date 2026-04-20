'use client'

import { useState } from 'react'
import hero from '@/data/hero'

const links = [
  { href: '#impact', label: 'Impact' },
  { href: '#deliveries', label: 'Deliveries' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(8, 11, 20, 0.85)',
      }}
      aria-label="Site navigation"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)]">
          Nicholas Vella
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {label}
            </a>
          ))}
          <a
            href={hero.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
      {open && (
        <div
          className="md:hidden border-t border-[var(--border)]"
          style={{ backgroundColor: 'rgba(8, 11, 20, 0.97)' }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm py-3 border-b border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={hero.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium px-4 py-3 rounded-lg text-center text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors"
              onClick={() => setOpen(false)}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
