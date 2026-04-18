export interface Achievement {
  label: string
  sublabel?: string
}

const achievements: Achievement[] = [
  { label: '15+ Engineers Led', sublabel: 'Across 3 delivery teams' },
  { label: '3→15 Team Scaling', sublabel: 'Built from the ground up' },
  { label: 'Multi-Market Delivery', sublabel: 'Brazil, Nigeria, Mexico' },
  { label: 'AI-Assisted Delivery', sublabel: 'Embedded in engineering workflow' },
  { label: 'Regulatory Compliance', sublabel: 'MiCA, KYC, Fan Token' },
  { label: '10+ Years Experience', sublabel: 'Fintech, iGaming, cloud' },
]

export default achievements
