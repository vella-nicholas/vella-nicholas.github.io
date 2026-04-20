import about from '@/data/about'

const rightCards = [
  {
    title: 'Leadership style',
    body: 'Involved, not distant. Close to the work, but focused on creating the conditions for others to thrive.',
  },
  {
    title: 'Best-fit environments',
    body: 'Scaling teams, regulated industries, high-ownership cultures, and orgs that value craft alongside speed.',
  },
  {
    title: 'Current edge',
    body: 'AI-assisted delivery — integrating AI tooling into engineering workflows to raise team output without raising headcount.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="w-full max-w-5xl mx-auto px-6 py-16 sm:py-20"
    >
      <div className="mb-10">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-hover)' }}
        >
          About
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          How I work.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left — paragraph + principles */}
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {about.paragraph}
          </p>
          <ul className="flex flex-col gap-3">
            {about.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: 'var(--accent-hover)' }}
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — 3 cards */}
        <div className="flex flex-col gap-4">
          {rightCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 p-5 rounded-xl border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
