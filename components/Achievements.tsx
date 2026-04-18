import achievements from '@/data/achievements'

export default function Achievements() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-6 flex flex-col gap-1"
          >
            <span className="text-lg font-semibold text-zinc-100">{item.label}</span>
            {item.sublabel && (
              <span className="text-sm text-zinc-400">{item.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
