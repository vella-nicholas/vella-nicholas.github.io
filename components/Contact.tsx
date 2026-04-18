import contact from '@/data/contact'

export default function Contact() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 pb-24">
      <div className="border-t border-zinc-800 pt-16 flex flex-col gap-6 max-w-2xl">
        <p className="text-lg text-zinc-300 leading-relaxed">{contact.message}</p>
        <div>
          <a
            href={contact.linkedInUrl}
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
