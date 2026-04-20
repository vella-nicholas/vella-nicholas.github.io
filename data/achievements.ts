export interface Achievement {
  value: string
  label: string
  sublabel?: string
}

const achievements: Achievement[] = [
  { value: '15+', label: 'Engineers Led', sublabel: 'Across 3 delivery teams' },
  { value: '3→15', label: 'Team Scaled', sublabel: 'Built from the ground up' },
  { value: '3', label: 'Major Regulatory Frameworks', sublabel: 'MGA, ARJEL, iGO' },
  { value: 'AI', label: 'Assisted Delivery', sublabel: 'Embedded in engineering workflow' },
]

export default achievements
