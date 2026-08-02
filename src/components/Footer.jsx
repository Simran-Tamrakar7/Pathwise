'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer footer-v2">
      <div className="footer-inner">
        <Link href="/" className="brand">
          Pathwise
        </Link>
        <p>
          Show up today —{' '}
          <Link href="/today">Today</Link>
          {' · '}
          <Link href="/manuals">manuals</Link>
          {' · '}
          <Link href="/tags">tags</Link>
          {' · '}
          <Link href="/sparks">Sparks</Link>
          {' · '}
          <Link href="/break">Break</Link>
          {' · '}
          <Link href="/cookbook">Cookbook</Link>
          {' · '}
          <Link href="/kits">Kits</Link>
          {' · '}
          <Link href="/insights">Insights</Link>.
        </p>
      </div>
    </footer>
  )
}
