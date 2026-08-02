import { Suspense } from 'react'
import Sparks from '@/views/Sparks'

export default function Page() {
  return (
    <Suspense fallback={<div className="wrap">Loading sparks…</div>}>
      <Sparks />
    </Suspense>
  )
}
