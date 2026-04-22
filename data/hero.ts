export interface HeroData {
  name: string
  eyebrow: string
  subheadline: string
  topicTags: string[]
  secondaryCta: string
}

const hero: HeroData = {
  name: 'Nicholas Vella',
  eyebrow: 'Engineering leadership • Delivery • Scale',
  subheadline:
    '12+ years across fintech, iGaming, and affiliate marketing — from hands-on engineering to leading teams of 15.',
  topicTags: ['Fintech', 'Regulated platforms', 'Organization scaling', 'AI-assisted delivery'],
  secondaryCta: "See what I've delivered",
}

export default hero
