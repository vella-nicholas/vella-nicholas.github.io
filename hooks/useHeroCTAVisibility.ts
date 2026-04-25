'use client'

import { useEffect, useState } from 'react'
import { HERO_CTA_ID, NAV_HEIGHT_PX } from '@/lib/layout'

export function useHeroCTAVisibility() {
  const [heroCTAVisible, setHeroCTAVisible] = useState(true)

  useEffect(() => {
    const el = document.getElementById(HERO_CTA_ID)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroCTAVisible(entry.isIntersecting),
      { rootMargin: `-${NAV_HEIGHT_PX}px 0px 0px 0px`, threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return heroCTAVisible
}
