import about from '@/data/about'

const timelineItems = [
  {
    title: 'Leadership style',
    body: 'Clear ownership, short feedback loops, and a calm bias toward action.',
  },
  {
    title: 'Best-fit environments',
    body: 'Scale-up teams, regulated products, and businesses that need dependable execution.',
  },
  {
    title: 'Current edge',
    body: 'Applying AI-assisted workflows where they improve speed, quality, and delivery confidence.',
  },
]

export default function About() {
  return (
    <section id="about" aria-label="About" className="w-full max-w-[1180px] mx-auto px-4 py-7">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[18px]">

        {/* Quote / paragraph card */}
        <div
          className="p-[30px] rounded-[var(--radius)] border border-[var(--line)]"
          style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
        >
          <div className="mb-3">
            <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)]">
              About
            </h2>
          </div>
          <p className="mt-0 text-[var(--muted)] leading-relaxed">{about.paragraph}</p>
          <ul className="m-0 p-0 list-none grid gap-2.5">
            {about.bullets.map((bullet) => (
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
        </div>

        {/* Timeline cards */}
        <div className="grid gap-[14px] content-start">
          {timelineItems.map((item) => (
            <div
              key={item.title}
              className="px-5 py-[18px] rounded-[var(--radius)] border border-[var(--line)]"
              style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
            >
              <strong className="block mb-1.5 text-[var(--text)]">{item.title}</strong>
              <span className="text-[var(--muted)] text-[0.95rem]">{item.body}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
