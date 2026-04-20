import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIBring from '@/components/WhatIBring'
import Delivered from '@/components/Delivered'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <header className="w-full flex flex-col items-center">
        <Hero />
      </header>
      <main className="w-full flex flex-col items-center">
        <WhatIBring />
        <Delivered />
        <About />
      </main>
      <footer className="w-full">
        <Contact />
      </footer>
    </>
  )
}
