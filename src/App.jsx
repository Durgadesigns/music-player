import { useEffect, useState } from 'react'
import { tracks, mixes, formatTime } from './data.js'
import * as I from './icons.jsx'

function Home({ current, playing, onOpen, onToggle }) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="screen home">
      <header className="home-header">
        <div className="avatar">D</div>
        <div className="chips">
          <button className="chip active">All</button>
          <button className="chip">Music</button>
          <button className="chip">Podcasts</button>
        </div>
      </header>

      <main className="home-body">
        <h1 className="greeting">{greeting}</h1>

        <section className="recent-grid">
          {tracks.map((t) => (
            <button key={t.id} className="recent-tile" onClick={() => onOpen(t)}>
              <span className="recent-art" style={{ background: t.art }} />
              <span className="recent-title">{t.album}</span>
            </button>
          ))}
        </section>

        <section className="shelf">
          <h2 className="shelf-title">Made for you</h2>
          <div className="shelf-row">
            {mixes.map((m) => (
              <button key={m.id} className="mix-card" onClick={() => onOpen(tracks.find((t) => t.id === m.trackId))}>
                <span className="mix-art" style={{ background: m.art }}>
                  <span className="mix-label">{m.title}</span>
                </span>
                <span className="mix-subtitle">{m.subtitle}</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <div className="mini-player" onClick={() => onOpen(current)}>
        <span className="mini-art" style={{ background: current.art }} />
        <span className="mini-meta">
          <span className="mini-title">{current.title}</span>
          <span className="mini-artist">{current.artist}</span>
        </span>
        <button className="icon-btn" aria-label={playing ? 'Pause' : 'Play'} onClick={(e) => { e.stopPropagation(); onToggle() }}>
          {playing ? <I.Pause /> : <I.Play />}
        </button>
      </div>

      <nav className="tab-bar">
        <button className="tab active"><I.Home /><span>Home</span></button>
        <button className="tab"><I.Search /><span>Search</span></button>
        <button className="tab"><I.Library /><span>Your Library</span></button>
      </nav>
    </div>
  )
}

function NowPlaying({ track, playing, progress, liked, onBack, onToggle, onSkip, onLike }) {
  const pct = (progress / track.duration) * 100
  const upNext = tracks[(tracks.indexOf(track) + 1) % tracks.length]

  return (
    <div className="screen now-playing" style={{ '--art': track.art }}>
      <header className="np-header">
        <button className="icon-btn" aria-label="Close player" onClick={onBack}><I.ChevronDown /></button>
        <div className="np-context">
          <span className="np-context-label">Playing from album</span>
          <span className="np-context-name">{track.album}</span>
        </div>
        <button className="icon-btn" aria-label="More options"><I.More /></button>
      </header>

      <div className="np-art" style={{ background: track.art }} />

      <div className="np-meta">
        <div>
          <h1 className="np-title">{track.title}</h1>
          <p className="np-artist">{track.artist}</p>
        </div>
        <button className={`icon-btn like ${liked ? 'on' : ''}`} aria-label="Like" onClick={onLike}>
          <I.Heart filled={liked} />
        </button>
      </div>

      <div className="np-progress">
        <div className="track"><div className="fill" style={{ width: `${pct}%` }} /><div className="knob" style={{ left: `${pct}%` }} /></div>
        <div className="times"><span>{formatTime(progress)}</span><span>-{formatTime(track.duration - progress)}</span></div>
      </div>

      <div className="np-controls">
        <button className="icon-btn accent" aria-label="Shuffle"><I.Shuffle size={22} /></button>
        <button className="icon-btn" aria-label="Previous" onClick={() => onSkip(-1)}><I.Prev size={34} /></button>
        <button className="play-btn" aria-label={playing ? 'Pause' : 'Play'} onClick={onToggle}>
          {playing ? <I.Pause size={30} /> : <I.Play size={30} />}
        </button>
        <button className="icon-btn" aria-label="Next" onClick={() => onSkip(1)}><I.Next size={34} /></button>
        <button className="icon-btn" aria-label="Repeat"><I.Repeat size={22} /></button>
      </div>

      <div className="np-actions">
        <button className="icon-btn small" aria-label="Devices"><I.Devices size={20} /></button>
        <div className="np-actions-right">
          <button className="icon-btn small" aria-label="Share"><I.Share size={20} /></button>
          <button className="icon-btn small" aria-label="Queue"><I.Queue size={20} /></button>
        </div>
      </div>

      <div className="up-next">
        <span className="up-next-label">Up next</span>
        <div className="up-next-row">
          <span className="mini-art" style={{ background: upNext.art }} />
          <span className="mini-meta">
            <span className="mini-title">{upNext.title}</span>
            <span className="mini-artist">{upNext.artist}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState('home')
  const [current, setCurrent] = useState(tracks[0])
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(72)
  const [liked, setLiked] = useState(new Set([1]))

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setProgress((p) => (p + 1 >= current.duration ? 0 : p + 1)), 1000)
    return () => clearInterval(id)
  }, [playing, current])

  const open = (t) => {
    if (t.id !== current.id) { setCurrent(t); setProgress(0) }
    setScreen('now-playing')
  }
  const skip = (dir) => {
    const i = (tracks.indexOf(current) + dir + tracks.length) % tracks.length
    setCurrent(tracks[i]); setProgress(0)
  }
  const toggleLike = () => setLiked((s) => {
    const n = new Set(s); n.has(current.id) ? n.delete(current.id) : n.add(current.id); return n
  })

  return (
    <div className="device">
      {screen === 'home' ? (
        <Home current={current} playing={playing} onOpen={open} onToggle={() => setPlaying((p) => !p)} />
      ) : (
        <NowPlaying
          track={current}
          playing={playing}
          progress={progress}
          liked={liked.has(current.id)}
          onBack={() => setScreen('home')}
          onToggle={() => setPlaying((p) => !p)}
          onSkip={skip}
          onLike={toggleLike}
        />
      )}
    </div>
  )
}
