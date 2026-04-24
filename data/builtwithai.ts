export interface Skill {
  name: string
  description: string
  whenUsed: string
  steps: string[]
  link?: string
}

export interface ToolingEntry {
  name: string
  description: string
  link?: string
}

export const skills: Skill[] = [
  {
    name: '/grill-me',
    description:
      'Relentlessly interviews you about a plan or design until every decision branch is resolved.',
    whenUsed:
      'Before writing any code — used to stress-test a feature idea, architecture approach, or design choice before committing to it.',
    steps: [
      'Describe the plan or decision you want challenged.',
      'Claude asks probing questions one by one until no ambiguity remains.',
      'Walk away with a clear, defensible specification.',
    ],
    link: 'https://github.com/mattpocock/skills',
  },
  {
    name: '/to-prd',
    description:
      'Turns the current conversation context into a structured PRD and submits it as a GitHub issue.',
    whenUsed:
      'After a /grill-me session, once the design is settled and needs to be formalised as a written spec.',
    steps: [
      'Run /to-prd after a design or grill-me session.',
      'Claude drafts a Product Requirements Document from the conversation.',
      'The PRD is submitted as a GitHub issue for tracking.',
    ],
    link: 'https://github.com/mattpocock/skills',
  },
  {
    name: '/to-issues',
    description:
      'Breaks a plan, spec, or PRD into independently-grabbable GitHub issues using vertical slices.',
    whenUsed:
      'After a PRD exists, to decompose it into shippable units of work with clear acceptance criteria and dependency ordering.',
    steps: [
      'Point Claude at a PRD or written spec.',
      'Claude identifies independent vertical slices.',
      'Each slice becomes a GitHub issue with acceptance criteria and blockers noted.',
    ],
    link: 'https://github.com/mattpocock/skills',
  },
  {
    name: '/improve-codebase-architecture',
    description:
      'Explores a codebase to find opportunities for architectural improvement, focusing on reuse, coupling, and clarity.',
    whenUsed:
      'When a section of the codebase has grown organically and needs structural review before adding more features.',
    steps: [
      'Run /improve-codebase-architecture against the target area.',
      'Claude surveys the code and identifies duplication, tight coupling, and dead abstractions.',
      'Findings are presented as prioritised RFCs, each with a proposed design.',
    ],
    link: 'https://github.com/mattpocock/skills',
  },
  {
    name: '/simplify',
    description:
      'Reviews recently changed code for reuse, quality, and efficiency, then fixes any issues found.',
    whenUsed:
      'After implementing a feature, to catch over-engineering, duplicated logic, or readability problems before committing.',
    steps: [
      'Make your changes, then run /simplify.',
      'Claude reviews the diff for unnecessary complexity and duplication.',
      'Suggested refactors are applied directly to the working files.',
    ],
    link: 'https://code.claude.com/docs/en/commands',
  },
  {
    name: '/git-commit-smart',
    description:
      'Generates a conventional commit message from staged changes using AI-powered analysis.',
    whenUsed:
      'At commit time, to produce accurate, consistent commit messages without writing them manually.',
    steps: [
      'Stage your changes with git add.',
      'Run /git-commit-smart.',
      'Claude reads the staged diff and writes a conventional commit message; you confirm before it commits.',
    ],
    link: 'https://github.com/jeremylongshore/claude-code-plugins-plus-skills/tree/main/plugins/devops/git-commit-smart',
  },
]

export const toolingStack: ToolingEntry[] = [
  {
    name: 'Claude Code',
    description:
      "Anthropic's agentic CLI. Runs skills, manages context, and executes multi-step engineering tasks inside your terminal.",
    link: 'https://claude.ai/code',
  },
  {
    name: 'GitHub',
    description:
      'All issues, PRs, and code review happen here. The structured issue workflow keeps work visible and reviewable.',
    link: 'https://github.com',
  },
  {
    name: 'GitHub Pages',
    description:
      'Hosts this site directly from the repository. Zero infrastructure to manage — push to main and it deploys.',
    link: 'https://pages.github.com',
  },
  {
    name: 'Next.js + Tailwind',
    description:
      'App Router for routing and layout; Tailwind for styling. Both have broad enough community support that Claude Code reasons about them reliably.',
    link: 'https://nextjs.org',
  },
]
