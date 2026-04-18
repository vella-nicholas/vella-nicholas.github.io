import about from '@/data/about'

export default function About() {
  return (
    <section aria-label="About" className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-6">About</h2>
      <div className="max-w-3xl flex flex-col gap-6">
        <p className="text-zinc-300 leading-relaxed">{about.paragraph}</p>
        <ul className="flex flex-col gap-3">
          {about.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-zinc-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
