import type { Metadata } from 'next'
import Section from '@/components/Section'
import SkillsLibrary from '@/components/SkillsLibrary'
import ToolingStack from '@/components/ToolingStack'

export const metadata: Metadata = {
  title: 'Built with AI — Nicholas Vella',
  description:
    "This site was designed, planned, and built using Claude Code. Here's the workflow that produced it.",
}

export default function BuiltWithAIPage() {
  return (
    <main className="w-full flex flex-col items-center">
      <Section ariaLabel="Built with AI" className="pt-16 pb-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--accent)]">
          Built with AI
        </p>
        <h1 className="m-0 font-bold tracking-[-0.04em] text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--text)] mb-4">
          Built with AI
        </h1>
        <p className="text-base text-[var(--muted)] max-w-[60ch]">
          This site was designed, planned, and built using Claude Code. Here&apos;s the workflow that
          produced it.
        </p>
      </Section>
      <SkillsLibrary />
      <ToolingStack />
    </main>
  )
}
