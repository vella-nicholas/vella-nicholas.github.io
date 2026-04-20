import contact from '@/data/contact'

export default function Contact() {
  return (
    <section aria-label="Contact" className="w-full max-w-[1180px] mx-auto px-4 py-7 pb-16">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-7 rounded-[var(--radius)] border border-[var(--line)]"
        style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
      >
        <div className="flex flex-col gap-1.5">
          <h2 className="m-0 text-xl font-bold tracking-[-0.03em] text-[var(--text)]">
            Let&apos;s connect.
          </h2>
          <p className="m-0 text-sm text-[var(--muted)] max-w-[48ch]">
            {contact.message}
          </p>
        </div>

        <a
          href={contact.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-px hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
            boxShadow: '0 8px 24px rgba(139,92,246,0.35)',
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  )
}
