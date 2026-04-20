export interface DeliveryCard {
  title: string
  context: string
  role: string
  focus: string
  outcome: string
}

const deliveries: DeliveryCard[] = [
  {
    title: 'Fintech / Regulatory',
    context: 'Crypto-asset platform operating under emerging EU regulation',
    role: 'Engineering Lead',
    focus: 'MiCA licence delivery, KYC integration, and Fan Token product launch',
    outcome:
      'Achieved regulatory approval and shipped a compliant product to market on schedule.',
  },
  {
    title: 'Multi-Market iGaming',
    context: 'White-label online casino platform expanding across emerging markets',
    role: 'Engineering Lead',
    focus: 'Simultaneous delivery across Brazil, Nigeria, and Mexico',
    outcome:
      'Launched 3 localised markets within a single release cycle with full regulatory alignment.',
  },
  {
    title: 'Organization Scaling',
    context: 'Early-stage product team growing into a structured engineering organisation',
    role: 'Head of Engineering',
    focus: 'Hiring, structuring, and enabling 3 parallel delivery teams',
    outcome:
      'Grew the engineering organisation from 3 to 15, maintaining delivery velocity throughout.',
  },
]

export default deliveries
