import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicholas Vella — Engineering Leader',
  description:
    'Engineering Leader delivering scalable systems and high-performing teams across fintech, iGaming, and cloud platforms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
