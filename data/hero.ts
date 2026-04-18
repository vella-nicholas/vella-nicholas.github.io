export interface HeroData {
  name: string
  headline: string
  subheadline: string
  proofPoints: string[]
  linkedInUrl: string
}

const hero: HeroData = {
  name: 'Nicholas Vella',
  headline: 'Engineering Leader delivering scalable systems and high-performing teams',
  subheadline:
    '10+ years across fintech, iGaming, and cloud platforms — from hands-on engineering to leading teams of 15.',
  proofPoints: [
    'Led teams of 15+ engineers',
    'Multi-market delivery',
    'AI-assisted delivery',
  ],
  linkedInUrl: 'https://www.linkedin.com/in/vella-nicholas/',
}

export default hero
