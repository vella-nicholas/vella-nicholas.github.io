import deliveries from '@/data/deliveries'

const categoryLabels: Record<string, string> = {
  'Fintech / Regulatory': 'Fintech / Regulatory',
  'Multi-Market iGaming': 'Multi-market iGaming',
  'Org Scaling': 'Org Scaling',
}

const cardData: Record<string, { title: string; summary: string; bullets: string[] }> = {
  'Fintech / Regulatory': {
    title: 'From compliance pressure to launch readiness',
    summary: 'Led engineering delivery for a crypto-asset platform navigating emerging EU regulation.',
    bullets: [
      'Drove MiCA licence delivery and KYC integration',
      'Aligned engineering execution with regulatory expectations',
      'Shipped a compliant product on schedule',
    ],
  },
  'Multi-Market iGaming': {
    title: 'Coordinated launches across multiple regulated markets',
    summary: 'Led simultaneous delivery for a white-label sports betting platform expanding into emerging markets.',
    bullets: [
      'Delivered for Brazil, Nigeria, and Mexico',
      'Managed localisation and market-specific constraints',
      'Released all three within a single cycle',
    ],
  },
  'Org Scaling': {
    title: 'Built structure without slowing teams down',
    summary: 'Helped transform an early-stage engineering setup into a more scalable organisation.',
    bullets: [
      'Scaled from 3 engineers to 15',
      'Established parallel delivery teams and clearer ownership',
      'Protected velocity while the organisation matured',
    ],
  },
}

export default function Delivered() {
  return (
    <section id="deliveries" aria-label="Selected deliveries" className="w-full max-w-[1180px] mx-auto px-4 py-7">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-[22px]">
        <div>
          <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)]">
            Selected deliveries
          </h2>
        </div>
        <p className="m-0 text-[var(--muted)] md:max-w-[52ch] text-[0.95rem]">
          A few examples of the environments, challenges, and outcomes I&apos;ve led across product, compliance, and team scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {deliveries.map((delivery) => {
          const data = cardData[delivery.title]
          if (!data) return null
          return (
            <article
              key={delivery.title}
              className="p-[26px] rounded-[var(--radius)] border border-[var(--line)] flex flex-col gap-4 transition-all hover:-translate-y-px"
              style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
            >
              <small className="inline-block text-[#d7ddf8] font-bold uppercase tracking-[0.08em] text-[0.74rem]">
                {categoryLabels[delivery.title] ?? delivery.title}
              </small>
              <div>
                <h3 className="m-0 mb-2.5 text-[1.28rem] tracking-[-0.03em] text-[var(--text)]">
                  {data.title}
                </h3>
                <p className="m-0 text-[var(--muted)] text-[0.95rem]">{data.summary}</p>
              </div>
              <ul className="m-0 p-0 list-none grid gap-2.5 mt-auto">
                {data.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-[18px] text-[#e7ebff] text-[0.95rem]">
                    <span
                      className="absolute left-0 top-[0.68em] w-2 h-2 rounded-full"
                      style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
