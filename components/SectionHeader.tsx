interface SectionHeaderProps {
  label: string
  heading?: string
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--accent)]">
        {label}
      </p>
      {heading && (
        <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--text)]">
          {heading}
        </h2>
      )}
    </div>
  )
}
