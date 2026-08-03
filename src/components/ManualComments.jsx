'use client'

import { useEffect, useState } from 'react'
import { addComment, getComments } from '../lib/community'

/** Local-only comments per manual — not a hosted forum. */
export default function ManualComments({ manualId }) {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    setItems(getComments(manualId))
  }, [manualId])

  function submit(e) {
    e.preventDefault()
    if (!body.trim()) return
    addComment(manualId, { name, body })
    setItems(getComments(manualId))
    setBody('')
  }

  return (
    <section className="manual-comments">
      <h2>Discussion</h2>
      <p className="related-lede">
        Light notes for this path — saved in <em>your</em> browser only (not a public forum yet).
      </p>
      <form className="comment-form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />
        <textarea
          required
          rows={3}
          placeholder="Question, tip, or “I built…” note"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          aria-label="Comment"
        />
        <button type="submit" className="btn btn-primary">
          Post locally
        </button>
      </form>
      <ul className="comment-list">
        {items.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            <time dateTime={c.at}>{new Date(c.at).toLocaleString()}</time>
            <p>{c.body}</p>
          </li>
        ))}
        {items.length === 0 && <li className="comment-empty">No notes yet — leave the first.</li>}
      </ul>
    </section>
  )
}
