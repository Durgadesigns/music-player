// Mock catalog. `cover` is the album artwork in public/covers; `tint` colors the Now Playing backdrop.
export const tracks = [
  { id: 1, title: 'Neon Tide', artist: 'Luna Vale', album: 'Late Night Drive', duration: 214, cover: '/covers/late-night-drive.jpg', tint: 'linear-gradient(180deg, #4a1d6b 0%, #c2416a 100%)' },
  { id: 2, title: 'Paper Planes', artist: 'The Quiet Hours', album: 'Soft Focus', duration: 187, cover: '/covers/soft-focus.jpg', tint: 'linear-gradient(180deg, #3d8fd9 0%, #5fc6e8 100%)' },
  { id: 3, title: 'Golden Hour', artist: 'Mira Sol', album: 'Sunday Mornings', duration: 242, cover: '/covers/sunday-mornings.jpg', tint: 'linear-gradient(180deg, #e8735a 0%, #f2a65a 100%)' },
  { id: 4, title: 'Static Hearts', artist: 'Arcade Bloom', album: 'Pixel Love', duration: 198, cover: '/covers/pixel-love.jpg', tint: 'linear-gradient(180deg, #8a6cc4 0%, #d98ec4 100%)' },
  { id: 5, title: 'Undercurrent', artist: 'Kai Rivers', album: 'Deep Water', duration: 226, cover: '/covers/deep-water.jpg', tint: 'linear-gradient(180deg, #1d4552 0%, #2c5364 100%)' },
  { id: 6, title: 'Firefly', artist: 'Juniper', album: 'Field Notes', duration: 173, cover: '/covers/field-notes.jpg', tint: 'linear-gradient(180deg, #4f7a33 0%, #6f9a45 100%)' },
]

export const mixes = [
  { id: 'm1', title: 'Daily Mix 1', subtitle: 'Luna Vale, Mira Sol and more', cover: '/covers/daily-mix-1.jpg', trackId: 1 },
  { id: 'm2', title: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music', cover: '/covers/discover-weekly.jpg', trackId: 2 },
  { id: 'm3', title: 'Focus Flow', subtitle: 'Instrumental beats to stay in the zone', cover: '/covers/focus-flow.jpg', trackId: 5 },
  { id: 'm4', title: 'Release Radar', subtitle: 'New from artists you follow', cover: '/covers/release-radar.jpg', trackId: 4 },
]

export const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
