import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import Delivered from '@/components/Delivered'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <Achievements />
      <Delivered />
    </main>
  )
}
