import hero from '@/data/hero'
import achievements from '@/data/achievements'
import { HERO_CTA_ID } from '@/hooks/useHeroCTAVisibility'
import LinkedInButton from '@/components/LinkedInButton'
import Card from '@/components/Card'

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="w-full max-w-[1180px] mx-auto px-4 pt-[36px] pb-[42px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-7 items-center">

        <Card padding="responsive" className="relative overflow-hidden flex flex-col gap-5">
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

          <div
            className="inline-flex self-start items-center gap-2.5 px-3 py-2 rounded-full border border-[var(--line)] text-[#d8dfff] text-[0.88rem] font-bold"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {hero.eyebrow}
          </div>

          <h1 className="m-0 font-extrabold tracking-[-0.05em] leading-[0.98] text-[2.2rem] sm:text-[2.8rem] lg:text-[clamp(3.2rem,5.5vw,5rem)] text-[var(--text)]">
            Building<br className="hidden sm:block" />
            {' '}teams that<br className="hidden sm:block" />
            {' '}ship with<br className="hidden sm:block" />
            {' '}confidence.
          </h1>

          <p className="text-[1.05rem] leading-relaxed text-[var(--muted)] max-w-[52ch]">
            {hero.subheadline}
          </p>

          {/* CTAs — sentinel id used by StickyLinkedIn to detect when this leaves viewport */}
          <div id={HERO_CTA_ID} className="flex flex-col sm:flex-row gap-3">
            <LinkedInButton />
            <a
              href="#deliveries"
              className="inline-flex items-center justify-center gap-2.5 px-[18px] py-[14px] rounded-full font-bold text-sm leading-none text-[var(--text)] border border-[var(--line)] transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-2">
            {hero.topicTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center sm:justify-start px-3 py-1.5 rounded-full border border-[var(--line)] text-[#d7ddf8] text-[0.75rem] font-medium whitespace-nowrap"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-[var(--radius)] blur-3xl"
            style={{ background: 'rgba(139,92,246,0.12)' }}
            aria-hidden="true"
          />
          <Card as="aside" padding="p-6" className="relative" aria-label="Impact metrics">
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col gap-1.5 p-5 rounded-[20px] border border-[var(--line)]"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <strong
                    className="text-[1.75rem] font-bold leading-none tracking-[-0.05em]"
                    style={{ color: a.highlight ? 'var(--accent)' : 'var(--text)' }}
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
          </Card>
        </div>

      </div>
    </section>
  )
}
