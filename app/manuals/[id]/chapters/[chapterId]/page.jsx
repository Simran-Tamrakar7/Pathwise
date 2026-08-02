import Chapter from '@/views/Chapter'
import { manuals } from '@/data/manuals'

export function generateStaticParams() {
  return manuals.flatMap((m) =>
    m.chapters.map((c) => ({
      id: m.id,
      chapterId: c.id,
    })),
  )
}

export default async function Page({ params }) {
  const { id, chapterId } = await params
  return <Chapter id={id} chapterId={chapterId} />
}
