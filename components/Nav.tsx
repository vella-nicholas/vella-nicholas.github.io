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
      className="sticky top-0 z-20 border-b border-[var(--line)]"
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
          <a
            href={hero.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-[18px] py-[10px] rounded-full font-bold text-sm border border-[var(--line)] text-[var(--text)] transition-all hover:-translate-y-px hover:brightness-110"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            Connect
          </a>
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
      {open && (
        <div className="md:hidden border-t border-[var(--line)]" style={{ background: 'rgba(11,16,32,0.97)' }}>
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm py-3 border-b border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={hero.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-bold px-4 py-3 rounded-full text-center text-white transition-all hover:-translate-y-px hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
                boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
              }}
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
