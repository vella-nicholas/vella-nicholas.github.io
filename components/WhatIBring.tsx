import whatIBring from '@/data/whatibring'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function WhatIBring() {
  return (
    <Section id="impact" ariaLabel="What I bring">
      <SectionHeader label="What I bring" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whatIBring.map((card) => (
          <Card key={card.title} hover className="flex flex-col gap-3">
            <strong className="block text-sm text-[var(--text)]">{card.title}</strong>
            <span className="text-sm leading-relaxed text-[var(--muted)]">{card.body}</span>
          </Card>
        ))}
      </div>
    </Section>
  )
}
