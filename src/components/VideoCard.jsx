import { useState } from 'react'
import { youtubeEmbed, youtubeThumb, youtubeWatch } from '../data/learnMedia'

export default function VideoCard({ youtubeId, title, channel, why, color = '#0F766E', compact = false }) {
  const [play, setPlay] = useState(false)

  if (!youtubeId) return null

  return (
    <article className={`video-card${compact ? ' compact' : ''}`} style={{ '--vcolor': color }}>
      <div className="video-frame">
        {play ? (
          <iframe
            title={title}
            src={`${youtubeEmbed(youtubeId)}&autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlay(true)}>
            <img src={youtubeThumb(youtubeId)} alt="" loading="lazy" />
            <span className="play-btn" aria-hidden="true">
              ▶
            </span>
            <span className="sr-only">Play {title}</span>
          </button>
        )}
      </div>
      <div className="video-meta">
        <p className="video-channel">{channel}</p>
        <h3>{title}</h3>
        {why && <p className="video-why">{why}</p>}
        <a className="video-open" href={youtubeWatch(youtubeId)} target="_blank" rel="noreferrer">
          Open on YouTube →
        </a>
      </div>
    </article>
  )
}
