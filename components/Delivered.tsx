import deliveries from '@/data/deliveries'

export default function Delivered() {
  return (
    <section aria-label="What I've Delivered" className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-8">What I&apos;ve Delivered</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {deliveries.map((card) => (
          <div
            key={card.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-7 flex flex-col gap-4"
          >
            <h3 className="text-base font-semibold text-indigo-400">{card.title}</h3>
            <dl className="flex flex-col gap-2 text-sm">
              <div>
                <dt className="text-zinc-400 text-xs uppercase tracking-wide mb-0.5">Context</dt>
                <dd className="text-zinc-300">{card.context}</dd>
              </div>
              <div>
                <dt className="text-zinc-400 text-xs uppercase tracking-wide mb-0.5">Role</dt>
                <dd className="text-zinc-300">{card.role}</dd>
              </div>
              <div>
                <dt className="text-zinc-400 text-xs uppercase tracking-wide mb-0.5">Focus</dt>
                <dd className="text-zinc-300">{card.focus}</dd>
              </div>
              <div>
                <dt className="text-zinc-400 text-xs uppercase tracking-wide mb-0.5">Outcome</dt>
                <dd className="text-zinc-100 font-medium">{card.outcome}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}
