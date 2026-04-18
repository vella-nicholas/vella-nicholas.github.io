import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import Delivered from '@/components/Delivered'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-center">
        <Hero />
      </header>
      <main className="w-full flex flex-col items-center">
        <Achievements />
        <Delivered />
        <About />
      </main>
      <footer className="w-full flex flex-col items-center">
        <Contact />
      </footer>
    </>
  )
}
