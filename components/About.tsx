import about from '@/data/about'

export default function About() {
  return (
    <section id="about" aria-label="About" className="w-full max-w-[1180px] mx-auto px-4 py-7 scroll-mt-20">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--accent)]">
          About
        </p>
        <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--text)]">
          How I work.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-[var(--muted)]">{about.paragraph}</p>
          <ul className="m-0 p-0 list-none grid gap-3">
            {about.bullets.map((bullet) => (
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
        </div>

        <div className="flex flex-col gap-4">
          {about.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 p-5 rounded-[var(--radius)] border border-[var(--line)]"
              style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
            >
              <strong className="block text-sm text-[var(--text)]">{card.title}</strong>
              <span className="text-sm leading-relaxed text-[var(--muted)]">{card.body}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
