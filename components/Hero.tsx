import hero from '@/data/hero'
import achievements from '@/data/achievements'

export default function Hero() {
  return (
    <section aria-label="Introduction" className="w-full max-w-[1180px] mx-auto px-4 pt-[78px] pb-[42px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-7 items-stretch">

        {/* Hero copy card */}
        <div
          className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--line)] p-[42px]"
          style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
        >
          {/* Bottom-right glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 'auto -30px -30px auto',
              width: 180,
              height: 180,
              background: 'radial-gradient(circle, rgba(139,92,246,0.28), transparent 65%)',
            }}
            aria-hidden="true"
          />

          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2.5 px-3 py-2 rounded-full border border-[rgba(255,255,255,0.08)] text-[#d8dfff] text-[0.88rem] font-bold mb-[18px]"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {hero.eyebrow}
          </div>

          <h1
            className="mt-0 mb-0 font-extrabold tracking-[-0.05em] leading-[0.98] text-[clamp(2.4rem,5vw,4.6rem)]"
            style={{ maxWidth: '11ch' }}
          >
            {hero.headline}
          </h1>

          <p className="text-[1.08rem] text-[var(--muted)] mt-5 mb-[26px]" style={{ maxWidth: '58ch' }}>
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-[14px] mb-7">
            <a
              href={hero.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-[18px] py-[14px] rounded-full font-bold text-sm text-white transition-all hover:-translate-y-px hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
                boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
              }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="#deliveries"
              className="inline-flex items-center justify-center gap-2.5 px-[18px] py-[14px] rounded-full font-bold text-sm text-[var(--text)] border border-[var(--line)] transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Topic tags */}
          <div className="flex flex-wrap gap-2.5">
            {hero.topicTags.map((tag) => (
              <span
                key={tag}
                className="px-[14px] py-[10px] rounded-full border border-[rgba(255,255,255,0.08)] text-[#d7ddf8] text-[0.92rem]"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats panel card */}
        <aside
          className="rounded-[var(--radius)] border border-[var(--line)] p-6 grid gap-[14px] content-start"
          style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
          aria-label="Impact metrics"
        >
          <p className="m-0 text-[0.95rem] text-[var(--muted)] font-semibold mb-1.5">Selected impact</p>
          {achievements.map((a) => (
            <div
              key={a.value}
              className="px-[18px] py-[18px] rounded-[20px] border border-[rgba(255,255,255,0.08)]"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <strong className="block text-[2rem] leading-none mb-2 tracking-[-0.05em] text-[var(--text)]">
                {a.value}
              </strong>
              <span className="text-[var(--muted)] text-[0.95rem]">{a.description}</span>
            </div>
          ))}
        </aside>

      </div>
    </section>
  )
}
