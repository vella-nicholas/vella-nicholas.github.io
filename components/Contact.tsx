import contact from '@/data/contact'

export default function Contact() {
  return (
    <section
      aria-label="Contact"
      className="w-full border-t border-[var(--line)] pb-[70px]"
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      <div className="max-w-[1180px] mx-auto px-4 py-20 sm:py-28 flex flex-col items-center text-center gap-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
          Get in touch
        </p>

        <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--text)]">
          Let&apos;s connect.
        </h2>

        <p className="text-base sm:text-lg leading-relaxed max-w-lg text-[var(--muted)]">
          {contact.message}
        </p>

        <a
          href={contact.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 mt-2 px-[18px] py-[14px] rounded-full font-bold text-sm text-white transition-all hover:-translate-y-px hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
            boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  )
}
