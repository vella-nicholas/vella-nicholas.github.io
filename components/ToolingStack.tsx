import { toolingStack } from '@/data/builtwithai'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import ExternalLink from '@/components/ExternalLink'

export default function ToolingStack() {
  return (
    <Section ariaLabel="Tooling Stack" className="pb-16">
      <SectionHeader label="Tooling Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {toolingStack.map((tool) => (
          <Card key={tool.name} as="article" padding="p-6">
            <h3 className="text-sm font-bold text-[var(--text)] mb-2">
              {tool.link ? (
                <ExternalLink href={tool.link} className="hover:text-[var(--accent)] transition-colors">
                  {tool.name}
                </ExternalLink>
              ) : (
                tool.name
              )}
            </h3>
            <p className="text-sm text-[var(--muted)]">{tool.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
