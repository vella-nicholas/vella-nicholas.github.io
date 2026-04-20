import hero from '@/data/hero'
import achievements from '@/data/achievements'

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left column */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            {hero.eyebrow}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight text-[var(--text-primary)]">
            {hero.headline}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href={hero.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold px-5 py-3 rounded-lg text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-hover)]"
            >
              Connect on LinkedIn
            </a>
            <a
              href="#deliveries"
              className="inline-block text-sm font-medium px-5 py-3 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:border-[rgba(124,58,237,0.4)] hover:text-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Topic tags */}
          <div className="flex flex-wrap gap-2">
            {hero.topicTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — stat panel */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-3xl bg-violet-600/10"
            aria-hidden="true"
          />
          <div
            className="relative rounded-2xl p-6 border border-[var(--border)] bg-[var(--surface)]"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col gap-1 p-4 rounded-xl border border-[var(--border)]"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                >
                  <span
                    className={`text-2xl font-bold tracking-tight leading-none ${a.value === 'AI' ? 'text-[var(--accent-hover)]' : 'text-[var(--text-primary)]'}`}
                  >
                    {a.value}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {a.label}
                  </span>
                  {a.sublabel && (
                    <span className="text-xs leading-snug text-[var(--text-muted)]">
                      {a.sublabel}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
