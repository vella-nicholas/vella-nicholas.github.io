interface SectionProps {
  children: React.ReactNode
  id?: string
  ariaLabel?: string
  className?: string
}

export default function Section({ children, id, ariaLabel, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full max-w-[1180px] mx-auto px-4 py-7 ${className}`.trim()}
    >
      {children}
    </section>
  )
}
