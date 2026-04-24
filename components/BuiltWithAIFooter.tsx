import Link from 'next/link'

export default function BuiltWithAIFooter() {
  return (
    <footer className="w-full max-w-[1180px] mx-auto px-4 pb-10 flex justify-center">
      <Link
        href="/built-with-ai"
        className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
      >
        This site was built using AI: here is how I did it
      </Link>
    </footer>
  )
}
