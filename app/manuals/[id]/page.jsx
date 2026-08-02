import Manual from '@/views/Manual'
import { manuals } from '@/data/manuals'

export function generateStaticParams() {
  return manuals.map((m) => ({ id: m.id }))
}

export default async function Page({ params }) {
  const { id } = await params
  return <Manual id={id} />
}
