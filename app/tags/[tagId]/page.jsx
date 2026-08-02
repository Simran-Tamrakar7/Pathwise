import Tags from '@/views/Tags'
import { skillTags } from '@/data/tags'

export function generateStaticParams() {
  return skillTags.map((t) => ({ tagId: t.id }))
}

export default async function Page({ params }) {
  const { tagId } = await params
  return <Tags tagId={tagId} />
}
