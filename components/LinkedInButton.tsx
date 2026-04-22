import { linkedInUrl } from '@/data/social'

interface Props {
  variant?: 'primary' | 'nav' | 'sticky'
  className?: string
  onClick?: () => void
}

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block flex-shrink-0">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function LinkedInButton({ variant = 'primary', className = '', onClick }: Props) {
  if (variant === 'sticky') {
    return (
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-1 items-center justify-center gap-2 pt-[14px] pb-[10px] font-bold text-sm leading-none text-white transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
        style={{ background: 'linear-gradient(135deg, var(--accent), #6d28d9)' }}
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </a>
    )
  }

  if (variant === 'nav') {
    return (
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center px-[18px] py-[10px] rounded-full font-bold text-sm leading-none border border-[var(--line)] text-[var(--text)] transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
        style={{ background: 'rgba(255,255,255,0.04)' }}
        onClick={onClick}
      >
        Connect
      </a>
    )
  }

  return (
    <a
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-[18px] py-[14px] rounded-full font-bold text-sm leading-none text-white transition-all hover:-translate-y-px hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
        boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
      }}
      onClick={onClick}
    >
      Connect on LinkedIn
    </a>
  )
}
