export interface AboutCard {
  title: string
  body: string
}

export interface AboutData {
  paragraph: string
  bullets: string[]
  cards: AboutCard[]
}

const about: AboutData = {
  paragraph:
    "I lead through involvement — reviewing PRs, shaping architecture, and staying close enough to the work to unblock teams without becoming a bottleneck. My focus is on building organisations that deliver consistently: clear ownership, short feedback loops, and engineers who grow into the problems they're solving. I've operated across regulated industries where the cost of getting it wrong is high, which means I take delivery discipline seriously.",
  bullets: [
    'Hands-on enough to unblock — never too far from the code',
    'Delivery over ceremony — process should serve the team, not the other way around',
    'People-first — I invest in hiring well, mentoring deliberately, and growing engineers into leaders',
  ],
  cards: [
    {
      title: 'Leadership style',
      body: 'Clear ownership, short feedback loops, and a calm bias toward action.',
    },
    {
      title: 'Best-fit environments',
      body: 'Scale-up teams, regulated products, and businesses that need dependable execution.',
    },
    {
      title: 'Current edge',
      body: 'Applying AI-assisted workflows where they improve speed, quality, and delivery confidence.',
    },
  ],
}

export default about
