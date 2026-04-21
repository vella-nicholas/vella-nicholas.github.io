import whatIBring from '@/data/whatibring'

export default function WhatIBring() {
  return (
    <section id="impact" aria-label="What I bring" className="w-full max-w-[1180px] mx-auto px-4 py-7 scroll-mt-20">
      <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[var(--accent)]">
        What I bring
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whatIBring.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 p-5 rounded-[var(--radius)] border border-[var(--line)] transition-all hover:-translate-y-px"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
          >
            <strong className="block text-sm text-[var(--text)]">{card.title}</strong>
            <span className="text-sm leading-relaxed text-[var(--muted)]">{card.body}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
