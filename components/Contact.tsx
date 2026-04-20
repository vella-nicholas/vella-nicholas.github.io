import contact from '@/data/contact'

export default function Contact() {
  return (
    <section aria-label="Contact" className="w-full max-w-[1180px] mx-auto px-4 py-7 pb-[70px]">
      <div
        className="p-[30px] rounded-[var(--radius)] border border-[var(--line)]"
        style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
      >
        <div className="mb-2">
          <h2 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)]">
            Let&apos;s connect
          </h2>
        </div>
        <p className="mt-0 text-[var(--muted)] max-w-prose">{contact.message}</p>
        <a
          href={contact.linkedInUrl}
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
      </div>
    </section>
  )
}
