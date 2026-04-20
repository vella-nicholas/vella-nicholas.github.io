import contact from '@/data/contact'

export default function Contact() {
  return (
    <section
      aria-label="Contact"
      className="w-full border-t border-[var(--border)]"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 flex flex-col items-center text-center gap-6">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent-hover)]">
          Get in touch
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Let&apos;s connect.
        </h2>

        <p className="text-base sm:text-lg leading-relaxed max-w-lg text-[var(--text-muted)]">
          {contact.message}
        </p>

        <a
          href={contact.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm font-semibold px-6 py-3 rounded-lg text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-hover)]"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  )
}
