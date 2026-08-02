'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getManual } from '../data/manuals'
import { getRecent } from '../lib/recent'
import { getContinueChapter, countDone } from '../lib/progress'
import { getBookmarks } from '../lib/bookmarks'

export default function JumpBackRow() {
  const [recent, setRecent] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setRecent(
      getRecent()
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
        .filter(Boolean),
    )
    setBookmarks([...getBookmarks()].map((id) => getManual(id)).filter(Boolean))
  }, [])

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
                  <Link key={`${manual.id}-${chapter?.id}`} href={href} className="jump-chip">
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
            <div className="section-head" style={{ marginTop: recent.length ? '2rem' : undefined }}>
              <h2>Bookmarked</h2>
              <p>Pinned paths.</p>
            </div>
            <div className="jump-row">
              {bookmarks.slice(0, 6).map((manual) => (
                <Link key={manual.id} href={`/manuals/${manual.id}`} className="jump-chip">
                  <img src={manual.coverUrl} alt="" />
                  <span>
                    <strong>{manual.title}</strong>
                    <small>{manual.tagline}</small>
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
