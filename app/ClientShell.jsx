'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { initAnalytics, track } from '@/lib/analytics'

export default function ClientShell({ children }) {
  useEffect(() => {
    initAnalytics()
    track('app_open')
  }, [])

  return (
    <>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
