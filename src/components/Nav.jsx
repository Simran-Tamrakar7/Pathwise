'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/today', label: 'Today' },
  { href: '/manuals', label: 'Manuals' },
  { href: '/tags', label: 'Tags' },
  { href: '/sparks', label: 'Sparks' },
  { href: '/break', label: 'Break' },
  { href: '/cookbook', label: 'Cook' },
  { href: '/kits', label: 'Kits' },
]

export default function Nav() {
  const pathname = usePathname() || '/'

  function active(href) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="nav nav-v2">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Pathwise home">
          <svg className="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#0B3D2E" />
            <path
              d="M8 22V10l8 4.5L24 10v12l-8 4.5L8 22z"
              stroke="#F2EFE6"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M16 14.5V26.5" stroke="#7CDBB0" strokeWidth="1.6" />
          </svg>
          Pathwise
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? 'active' : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/today" className="nav-cta">
            Check in
          </Link>
        </nav>
      </div>
    </header>
  )
}
