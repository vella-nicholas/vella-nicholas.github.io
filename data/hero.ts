export interface HeroData {
  name: string
  eyebrow: string
  headline: string
  subheadline: string
  topicTags: string[]
  linkedInUrl: string
  secondaryCta: string
}

const hero: HeroData = {
  name: 'Nicholas Vella',
  eyebrow: 'Engineering leadership • Delivery • Scale',
  headline: 'Building teams that ship with confidence.',
  subheadline:
    '10+ years across fintech, iGaming, and cloud platforms — from hands-on engineering to leading teams of 15.',
  topicTags: ['Fintech', 'Regulated platforms', 'Org scaling', 'AI-assisted delivery'],
  linkedInUrl: 'https://www.linkedin.com/in/vella-nicholas/',
  secondaryCta: "See what I've delivered",
}

export default hero
