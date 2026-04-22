import deliveries from '@/data/deliveries'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function Delivered() {
  return (
    <Section id="deliveries" ariaLabel="Selected deliveries">
      <SectionHeader label="Selected deliveries" heading="Work that shipped." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {deliveries.map((card) => (
          <Card as="article" key={card.category} padding="p-[26px]" hover className="flex flex-col gap-4">
            <small className="inline-block text-[#d7ddf8] font-bold uppercase tracking-[0.08em] text-[0.74rem]">
              {card.category}
            </small>
            <div>
              <h3 className="m-0 mb-2.5 text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--text)]">
                {card.title}
              </h3>
              <p className="m-0 text-[var(--muted)] text-sm leading-relaxed">{card.summary}</p>
            </div>
            <ul className="m-0 p-0 list-none grid gap-2.5 mt-auto">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-[18px] text-[#e7ebff] text-sm">
                  <span
                    className="absolute left-0 top-[0.65em] w-2 h-2 rounded-full"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
