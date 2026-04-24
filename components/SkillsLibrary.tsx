import { skills } from '@/data/builtwithai'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import ExternalLink from '@/components/ExternalLink'

export default function SkillsLibrary() {
  return (
    <Section ariaLabel="Skills Library">
      <SectionHeader label="Skills Library" />
      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} as="article" padding="p-6">
            <h3 className="text-base font-bold text-[var(--accent)] mb-1">
              {skill.link ? (
                <ExternalLink href={skill.link} className="hover:underline">
                  {skill.name}
                </ExternalLink>
              ) : (
                skill.name
              )}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-3">{skill.description}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-1">
              When I use it
            </p>
            <p className="text-sm text-[var(--muted)] mb-4">{skill.whenUsed}</p>
            <ol className="flex flex-col gap-1.5 pl-0 list-none">
              {skill.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
                  <span className="shrink-0 font-bold text-[var(--accent)]">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Card>
        ))}
      </div>
    </Section>
  )
}
