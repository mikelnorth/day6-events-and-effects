// Minute offsets from the start of class. Total: 180 minutes.
export const schedule = [
  { start: 0,   end: 10,  title: 'Day 5 recap & the big idea',                     to: '/recap',       kind: 'wedo' },
  { start: 10,  end: 25,  title: 'Events, handlers & the key rule',                to: '/events',      kind: 'talk' },
  { start: 25,  end: 45,  title: 'Exercise 1: live input preview',                 to: '/live-input',  kind: 'youdo' },
  { start: 45,  end: 60,  title: 'Rendering vs effects, useEffect, dependencies',  to: '/effects',     kind: 'talk' },
  { start: 60,  end: 75,  title: 'Exercise 2: update the document title',          to: '/title',       kind: 'youdo' },
  { start: 75,  end: 85,  title: 'Break',                                          to: null,           kind: 'break' },
  { start: 85,  end: 105, title: 'Cleanup, StrictMode & Exercise 3: timer',        to: '/cleanup',     kind: 'youdo' },
  { start: 105, end: 115, title: 'When not to use effects & Exercise 4',           to: '/when-not',    kind: 'wedo' },
  { start: 115, end: 130, title: 'Exercise 5: window width tracker',               to: '/window-width', kind: 'youdo' },
  { start: 130, end: 135, title: 'Mini project intro',                             to: '/search-dashboard', kind: 'wedo' },
  { start: 135, end: 175, title: 'Mini project work time: Search Dashboard',       to: '/search-dashboard', kind: 'youdo' },
  { start: 175, end: 180, title: 'Wrap-up & Day 7 preview',                        to: '/wrap-up',     kind: 'talk' },
]

export function fmt(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}:${String(m).padStart(2, '0')}`
}

export function blockAt(elapsedMinutes) {
  return schedule.find((b) => elapsedMinutes >= b.start && elapsedMinutes < b.end) ?? null
}

export function blockAfter(block) {
  if (!block) return null
  const i = schedule.indexOf(block)
  return schedule[i + 1] ?? null
}
