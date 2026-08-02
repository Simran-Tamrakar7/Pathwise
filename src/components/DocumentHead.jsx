import { useEffect } from 'react'

/** Client-side title + description (SPA-friendly share/tabs). */
export default function DocumentHead({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title
    const full = title ? `${title} · Pathwise` : 'Pathwise — Learn anything, step by step'
    document.title = full

    let meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') || ''
    if (description) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', full)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (description) {
      if (!ogDesc) {
        ogDesc = document.createElement('meta')
        ogDesc.setAttribute('property', 'og:description')
        document.head.appendChild(ogDesc)
      }
      ogDesc.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (meta && prevDesc) meta.setAttribute('content', prevDesc)
    }
  }, [title, description])

  return null
}
