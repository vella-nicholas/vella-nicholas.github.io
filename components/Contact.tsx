import contact from '@/data/contact'
import LinkedInButton from '@/components/LinkedInButton'
import Section from '@/components/Section'
import Card from '@/components/Card'

export default function Contact() {
  return (
    <Section ariaLabel="Contact" className="pb-16">
      <Card padding="p-7" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="m-0 text-xl font-bold tracking-[-0.03em] text-[var(--text)]">
            Let&apos;s connect.
          </h2>
          <p className="m-0 text-sm text-[var(--muted)] max-w-[48ch]">
            {contact.message}
          </p>
        </div>

        <LinkedInButton className="shrink-0" />
      </Card>
    </Section>
  )
}
