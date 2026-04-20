import deliveries from '@/data/deliveries'

const categoryLabels: Record<string, string> = {
  'Fintech / Regulatory': 'Fintech',
  'Multi-Market iGaming': 'iGaming',
  'Org Scaling': 'Leadership',
}

const cardBullets: Record<string, string[]> = {
  'Fintech / Regulatory': [
    'MiCA licence delivery under emerging EU regulation',
    'KYC integration and Fan Token product launch',
    'Regulatory approval and compliant market launch on schedule',
  ],
  'Multi-Market iGaming': [
    'Simultaneous delivery across Brazil, Nigeria, and Mexico',
    'Full regulatory alignment per market',
    'Three localised launches within a single release cycle',
  ],
  'Org Scaling': [
    'Grew engineering from 3 to 15 across 3 parallel delivery teams',
    'Structured hiring, onboarding, and team enablement',
    'Maintained delivery velocity throughout rapid growth',
  ],
}

export default function Delivered() {
  return (
    <section
      id="deliveries"
      aria-label="Selected deliveries"
      className="w-full max-w-5xl mx-auto px-6 py-16 sm:py-20"
    >
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest mb-3 text-[var(--accent-hover)]">
          Selected deliveries
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Work that shipped.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {deliveries.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-5 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[rgba(124,58,237,0.3)] transition-colors"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            {/* Category chip */}
            <span
              className="self-start text-xs font-medium uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                color: 'var(--accent-hover)',
                borderColor: 'rgba(124, 58, 237, 0.3)',
                backgroundColor: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
              }}
            >
              {categoryLabels[card.title] ?? card.title}
            </span>

            {/* Title + context */}
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {card.context}
              </p>
            </div>

            {/* Outcome bullets */}
            <ul className="flex flex-col gap-2 mt-auto">
              {(cardBullets[card.title] ?? [card.focus, card.outcome]).map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-hover)]"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
