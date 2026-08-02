import { Suspense } from 'react'
import Cookbook from '@/views/Cookbook'

export default function Page() {
  return (
    <Suspense fallback={<div className="wrap">Loading cookbook…</div>}>
      <Cookbook />
    </Suspense>
  )
}
