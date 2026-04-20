const cards = [
  {
    title: 'Technical Leadership',
    body: 'Hands-on enough to unblock teams, shape architecture, and review work without becoming a bottleneck.',
  },
  {
    title: 'Operational Discipline',
    body: 'Clear ownership, short feedback loops, and delivery cadences that teams can actually sustain.',
  },
  {
    title: 'Regulated Execution',
    body: 'Proven track record in fintech and iGaming environments where compliance and velocity must coexist.',
  },
  {
    title: 'People Growth',
    body: 'Hiring well, mentoring deliberately, and growing engineers into leads who own their outcomes.',
  },
]

export default function WhatIBring() {
  return (
    <section
      id="impact"
      aria-label="What I bring"
      className="w-full max-w-5xl mx-auto px-6 py-16 sm:py-20"
    >
      <p className="text-xs font-medium uppercase tracking-widest mb-6 text-[var(--accent-hover)]">
        What I bring
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[rgba(124,58,237,0.3)] transition-colors"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
