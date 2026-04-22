import whatIBring from '@/data/whatibring'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'

export default function WhatIBring() {
  return (
    <Section id="impact" ariaLabel="What I bring">
      <SectionHeader label="What I bring" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whatIBring.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 p-5 rounded-[var(--radius)] border border-[var(--line)] transition-all hover:-translate-y-px"
            style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
          >
            <strong className="block text-sm text-[var(--text)]">{card.title}</strong>
            <span className="text-sm leading-relaxed text-[var(--muted)]">{card.body}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
