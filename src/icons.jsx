const Icon = ({ children, size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    {children}
  </svg>
)

export const Play = (p) => <Icon {...p}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></Icon>
export const Pause = (p) => <Icon {...p}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></Icon>
export const Next = (p) => <Icon {...p}><path d="M5 6.2v11.6a.8.8 0 0 0 1.2.7l9-5.8a.8.8 0 0 0 0-1.4l-9-5.8a.8.8 0 0 0-1.2.7Z" /><rect x="17" y="5" width="2.2" height="14" rx="1" /></Icon>
export const Prev = (p) => <Icon {...p}><g transform="matrix(-1 0 0 1 24 0)"><path d="M5 6.2v11.6a.8.8 0 0 0 1.2.7l9-5.8a.8.8 0 0 0 0-1.4l-9-5.8a.8.8 0 0 0-1.2.7Z" /><rect x="17" y="5" width="2.2" height="14" rx="1" /></g></Icon>
export const Shuffle = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h4v4M4 20 20 4M20 16v4h-4M15 15l5 5M4 4l5 5" /></Icon>
export const Repeat = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4" /><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4" /><path d="M21 13v2a3 3 0 0 1-3 3H3" /></Icon>
export const Heart = ({ filled, ...p }) => <Icon {...p} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.5 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.5 0 5.6 3.5 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2Z" strokeLinejoin="round" /></Icon>
export const ChevronDown = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></Icon>
export const More = (p) => <Icon {...p}><circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" /></Icon>
export const Home = (p) => <Icon {...p}><path d="M12 3.2 3 10v10a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V10l-9-6.8Z" /></Icon>
export const Search = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>
export const Library = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 4v16M9 4v16M14 4l6 16" /></Icon>
export const Devices = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><rect x="3" y="4" width="13" height="16" rx="2" /><rect x="15" y="9" width="6" height="11" rx="1.5" /></Icon>
export const Share = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" /></Icon>
export const Queue = (p) => <Icon {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h10M4 18h10M18 14v6l4-3-4-3Z" /></Icon>
