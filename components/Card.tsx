import React from 'react'

interface CardProps {
  children: React.ReactNode
  as?: 'div' | 'aside' | 'article'
  padding?: 'p-5' | 'p-6' | 'p-7' | 'p-[26px]' | 'responsive'
  hover?: boolean
  className?: string
  [key: string]: unknown
}

const paddingMap: Record<NonNullable<CardProps['padding']>, string> = {
  'p-5': 'p-5',
  'p-6': 'p-6',
  'p-7': 'p-7',
  'p-[26px]': 'p-[26px]',
  responsive: 'p-6 sm:p-8 lg:p-[42px]',
}

export default function Card({
  children,
  as: Tag = 'div',
  padding = 'p-5',
  hover = false,
  className,
  ...props
}: CardProps) {
  const paddingClass = paddingMap[padding]
  const hoverClass = hover ? 'transition-all hover:-translate-y-px' : ''

  return (
    <Tag
      className={[
        paddingClass,
        'rounded-[var(--radius)] border border-[var(--line)]',
        hoverClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ background: 'var(--card)', boxShadow: 'var(--shadow)' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
