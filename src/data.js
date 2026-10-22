// Mock catalog. Artwork is drawn with CSS gradients, so there are no image files.
export const tracks = [
  { id: 1, title: 'Neon Tide', artist: 'Luna Vale', album: 'Late Night Drive', duration: 214, art: 'linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%)' },
  { id: 2, title: 'Paper Planes', artist: 'The Quiet Hours', album: 'Soft Focus', duration: 187, art: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 3, title: 'Golden Hour', artist: 'Mira Sol', album: 'Sunday Mornings', duration: 242, art: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { id: 4, title: 'Static Hearts', artist: 'Arcade Bloom', album: 'Pixel Love', duration: 198, art: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  { id: 5, title: 'Undercurrent', artist: 'Kai Rivers', album: 'Deep Water', duration: 226, art: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' },
  { id: 6, title: 'Firefly', artist: 'Juniper', album: 'Field Notes', duration: 173, art: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
]

export const mixes = [
  { id: 'm1', title: 'Daily Mix 1', subtitle: 'Luna Vale, Mira Sol and more', art: 'linear-gradient(160deg, #833ab4 0%, #fd1d1d 60%, #fcb045 100%)', trackId: 1 },
  { id: 'm2', title: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music', art: 'linear-gradient(160deg, #11998e 0%, #38ef7d 100%)', trackId: 2 },
  { id: 'm3', title: 'Focus Flow', subtitle: 'Instrumental beats to stay in the zone', art: 'linear-gradient(160deg, #1c1c3c 0%, #4b6cb7 100%)', trackId: 5 },
  { id: 'm4', title: 'Release Radar', subtitle: 'New from artists you follow', art: 'linear-gradient(160deg, #ee0979 0%, #ff6a00 100%)', trackId: 4 },
]

export const formatTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
