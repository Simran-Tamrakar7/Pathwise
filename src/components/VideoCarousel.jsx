import { useRef } from 'react'
import VideoCard from './VideoCard'

/** Horizontal scroll-snap carousel for the Watch desk. */
export default function VideoCarousel({ videos }) {
  const trackRef = useRef(null)

  function scrollByCard(dir) {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.video-carousel-slide')
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.85
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  if (!videos?.length) return null

  return (
    <div className="video-carousel">
      <div className="video-carousel-controls">
        <button type="button" className="btn btn-ghost" onClick={() => scrollByCard(-1)} aria-label="Previous videos">
          ←
        </button>
        <span className="video-carousel-count">{videos.length} videos</span>
        <button type="button" className="btn btn-ghost" onClick={() => scrollByCard(1)} aria-label="Next videos">
          →
        </button>
      </div>
      <div className="video-carousel-track" ref={trackRef} tabIndex={0} aria-label="Watch desk videos">
        {videos.map((v) => (
          <div key={v.id || v.youtubeId} className="video-carousel-slide">
            <VideoCard {...v} />
          </div>
        ))}
      </div>
    </div>
  )
}
