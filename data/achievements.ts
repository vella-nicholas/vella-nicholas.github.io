export interface Achievement {
  value: string
  description: string
}

const achievements: Achievement[] = [
  { value: '15+', description: 'Engineers led across multiple teams and delivery streams' },
  { value: '3→15', description: 'Scaled an engineering organisation while maintaining delivery velocity' },
  { value: '3', description: 'Major regulatory frameworks navigated: MGA, ARJEL, and iGO' },
  { value: 'AI', description: 'AI-assisted delivery embedded across the engineering workflow' },
]

export default achievements
