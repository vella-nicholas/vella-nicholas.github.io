import hero from '@/data/hero'

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-100">
          {hero.name}
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-zinc-100 max-w-3xl leading-snug">
          {hero.headline}
        </p>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {hero.subheadline}
        </p>

        <ul className="flex flex-wrap gap-3 mt-2">
          {hero.proofPoints.map((point) => (
            <li
              key={point}
              className="text-sm text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-1.5"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <a
            href={hero.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
