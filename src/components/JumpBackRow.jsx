import { Link } from 'react-router-dom'
import { getManual } from '../data/manuals'
import { getRecent } from '../lib/recent'
import { getContinueChapter, countDone } from '../lib/progress'
import { getBookmarks } from '../lib/bookmarks'

export default function JumpBackRow() {
  const recent = getRecent()
    .map((r) => {
      const manual = getManual(r.manualId)
      if (!manual) return null
      const chapter = r.chapterId
        ? manual.chapters.find((c) => c.id === r.chapterId)
        : getContinueChapter(manual)
      const href = chapter
        ? `/manuals/${manual.id}/chapters/${chapter.id}`
        : `/manuals/${manual.id}`
      return { manual, chapter, href, at: r.at }
    })
    .filter(Boolean)

  const bookmarks = [...getBookmarks()]
    .map((id) => getManual(id))
    .filter(Boolean)

  if (!recent.length && !bookmarks.length) return null

  return (
    <section className="section jump-section">
      <div className="wrap">
        {recent.length > 0 && (
          <>
            <div className="section-head">
              <h2>Jump back in</h2>
              <p>Pick up where you left the trail.</p>
            </div>
            <div className="jump-row">
              {recent.slice(0, 6).map(({ manual, chapter, href }) => {
                const prog = countDone(manual.id, manual.chapters.length)
                return (
                  <Link key={`${manual.id}-${chapter?.id}`} to={href} className="jump-chip">
                    <img src={manual.coverUrl} alt="" />
                    <span>
                      <strong>{manual.title}</strong>
                      <small>
                        {chapter?.title || 'Open path'}
                        {prog.done > 0 ? ` · ${prog.pct}%` : ''}
                      </small>
                    </span>
                  </Link>
                )
              })}
            </div>
          </>
        )}

        {bookmarks.length > 0 && (
          <>
            <div className="section-head" style={{ marginTop: recent.length ? '2rem' : 0 }}>
              <h2>Bookmarked</h2>
              <p>Saved on purpose — separate from in-progress.</p>
            </div>
            <div className="jump-row">
              {bookmarks.map((m) => (
                <Link key={m.id} to={`/manuals/${m.id}`} className="jump-chip bookmark-chip">
                  <img src={m.coverUrl} alt="" />
                  <span>
                    <strong>{m.title}</strong>
                    <small>Bookmarked</small>
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
