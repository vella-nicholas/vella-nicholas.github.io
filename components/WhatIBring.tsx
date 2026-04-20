const cards = [
  {
    title: 'Technical leadership',
    body: 'Close enough to architecture and code to unblock teams quickly.',
  },
  {
    title: 'Operational discipline',
    body: 'Delivery systems built around ownership, focus, and fast feedback.',
  },
  {
    title: 'Regulated execution',
    body: 'Comfortable shipping where compliance and timing both matter.',
  },
  {
    title: 'People growth',
    body: 'Hiring, mentoring, and shaping engineers into reliable leaders.',
  },
]

export default function WhatIBring() {
  return (
    <section id="impact" aria-label="What I bring" className="w-full max-w-[1180px] mx-auto px-4 py-7">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-[22px]">
        <div>
          <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)]">
            What I bring
          </h2>
        </div>
        <p className="m-0 text-[var(--muted)] md:max-w-[52ch] text-[0.95rem]">
          Strong execution, technical credibility, and organisational clarity — the combination that turns engineering from a function into a delivery advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="p-5 rounded-[var(--radius)] border border-[var(--line)] transition-all hover:-translate-y-px"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
          >
            <strong className="block mb-2 text-[1rem] text-[var(--text)]">{card.title}</strong>
            <span className="text-[var(--muted)] text-[0.95rem]">{card.body}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
