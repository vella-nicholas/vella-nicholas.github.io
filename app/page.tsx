import Nav from '@/components/Nav'
import BackToTop from '@/components/BackToTop'
import StickyLinkedIn from '@/components/StickyLinkedIn'
import Hero from '@/components/Hero'
import WhatIBring from '@/components/WhatIBring'
import Delivered from '@/components/Delivered'
import About from '@/components/About'
import Contact from '@/components/Contact'
import BuiltWithAIFooter from '@/components/BuiltWithAIFooter'

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
        <BuiltWithAIFooter />
      </main>
      <BackToTop />
      <StickyLinkedIn />
    </>
  )
}
