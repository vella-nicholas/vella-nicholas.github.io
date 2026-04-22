import contact from '@/data/contact'
import LinkedInButton from '@/components/LinkedInButton'

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

        <LinkedInButton className="shrink-0" />
      </div>
    </section>
  )
}
