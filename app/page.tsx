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
      <main id="top" className="w-full flex flex-col items-center">
        <Hero />
        <WhatIBring />
        <Delivered />
        <About />
        <Contact />
      </main>
    </>
  )
}
