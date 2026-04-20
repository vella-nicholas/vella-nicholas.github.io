import hero from '@/data/hero'
import achievements from '@/data/achievements'

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="w-full max-w-[1180px] mx-auto px-4 pt-[78px] pb-[42px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">

        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex self-start items-center gap-2.5 px-3 py-2 rounded-full border border-[var(--line)] text-[#d8dfff] text-[0.88rem] font-bold"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {hero.eyebrow}
          </div>

          <h1 className="m-0 font-extrabold tracking-[-0.05em] leading-[0.98] text-[clamp(2.4rem,5vw,4rem)] text-[var(--text)]">
            {hero.headline}
          </h1>

          <p className="text-[1.05rem] leading-relaxed text-[var(--muted)] max-w-[52ch]">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-[14px]">
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
                className="px-[14px] py-[10px] rounded-full border border-[var(--line)] text-[#d7ddf8] text-[0.92rem]"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — 2×2 stat grid */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-[var(--radius)] blur-3xl"
            style={{ background: 'rgba(139,92,246,0.12)' }}
            aria-hidden="true"
          />
          <aside
            className="relative rounded-[var(--radius)] border border-[var(--line)] p-6"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
            aria-label="Impact metrics"
          >
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col gap-1 p-4 rounded-[20px] border border-[var(--line)]"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <strong
                    className="text-[2rem] font-bold leading-none tracking-[-0.05em]"
                    style={{ color: a.value === 'AI' ? 'var(--accent)' : 'var(--text)' }}
                  >
                    {a.value}
                  </strong>
                  <span className="text-sm font-semibold text-[var(--text)]">{a.label}</span>
                  {a.sublabel && (
                    <span className="text-xs leading-snug text-[var(--muted)]">{a.sublabel}</span>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>

      </div>
    </section>
  )
}
