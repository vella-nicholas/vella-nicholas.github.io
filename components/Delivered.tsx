import deliveries from '@/data/deliveries'

export default function Delivered() {
  return (
    <section id="deliveries" aria-label="Selected deliveries" className="w-full max-w-[1180px] mx-auto px-4 py-7 scroll-mt-20">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--accent)]">
          Selected deliveries
        </p>
        <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--text)]">
          Work that shipped.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {deliveries.map((card) => (
          <article
            key={card.category}
            className="p-[26px] rounded-[var(--radius)] border border-[var(--line)] flex flex-col gap-4 transition-all hover:-translate-y-px"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
          >
            <small className="inline-block text-[#d7ddf8] font-bold uppercase tracking-[0.08em] text-[0.74rem]">
              {card.category}
            </small>
            <div>
              <h3 className="m-0 mb-2.5 text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--text)]">
                {card.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-sm leading-relaxed">{card.summary}</p>
            </div>
            <ul className="m-0 p-0 list-none grid gap-2.5 mt-auto">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-[18px] text-[#e7ebff] text-sm">
                  <span
                    className="absolute left-0 top-[0.65em] w-2 h-2 rounded-full"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
