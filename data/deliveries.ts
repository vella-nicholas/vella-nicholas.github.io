export interface DeliveryCard {
  category: string
  title: string
  summary: string
  bullets: string[]
}

const deliveries: [DeliveryCard, DeliveryCard, DeliveryCard] = [
  {
    category: 'Fintech / Regulatory',
    title: 'From compliance pressure to launch readiness',
    summary: 'Led engineering delivery for a crypto-asset platform navigating emerging EU regulation.',
    bullets: [
      'Drove MiCA licence delivery and KYC integration',
      'Aligned engineering execution with regulatory expectations',
      'Shipped a compliant product on schedule',
    ],
  },
  {
    category: 'Multi-market iGaming',
    title: 'Coordinated launches across multiple regulated markets',
    summary: 'Led simultaneous delivery for a white-label online casino platform expanding into emerging markets.',
    bullets: [
      'Delivered for Brazil, Nigeria, and Mexico',
      'Managed localisation and market-specific constraints',
      'Released all three within a single cycle',
    ],
  },
  {
    category: 'Organization Scaling',
    title: 'Built structure without slowing teams down',
    summary: 'Helped transform an early-stage engineering setup into a more scalable organisation.',
    bullets: [
      'Scaled from 3 engineers to 15',
      'Established parallel delivery teams and clearer ownership',
      'Protected velocity while the organisation matured',
    ],
  },
]

export default deliveries
