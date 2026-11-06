// One entry per I do / We do / You do block in the lesson.
// Each id is a folder: exercises/<id>/starter/App.jsx and exercises/<id>/solution/App.jsx
const pages = {
  1: { title: 'Recap & the Big Idea', route: '/recap' },
  2: { title: 'Events & Handlers', route: '/events' },
  3: { title: 'Exercise 1: Live Input', route: '/live-input' },
  4: { title: 'Rendering vs Effects', route: '/effects' },
  5: { title: 'Exercise 2: Document Title', route: '/title' },
  6: { title: 'Cleanup & Exercise 3: Timer', route: '/cleanup' },
  7: { title: 'When Not to Use Effects', route: '/when-not' },
  8: { title: 'Exercise 5: Window Width', route: '/window-width' },
  9: { title: 'Mini Project: Search Dashboard', route: '/search-dashboard' },
  10: { title: 'Wrap-up', route: '/wrap-up' },
}

const list = [
  [1, 'we do', '01-1-we-do-recap', 'Day 5 recap'],
  [2, 'i do', '02-1-i-do-first-handler', 'Your first event handler'],
  [2, 'i do', '02-2-i-do-key-rule', 'Pass a function, do not call it'],
  [2, 'we do', '02-3-we-do-event-data', 'Event handlers and data'],
  [2, 'i do', '02-4-i-do-common-events', 'Common React events'],
  [3, 'you do', '03-1-you-do-live-input', 'Exercise 1: live input preview'],
  [3, 'you do', '03-2-you-do-live-input-stretch', 'Exercise 1 stretch: warning and submit'],
  [4, 'i do', '04-1-i-do-render-vs-effect', 'Effects run after render'],
  [4, 'we do', '04-2-we-do-three-patterns', 'The 3 useEffect patterns'],
  [4, 'i do', '04-3-i-do-dependency-array', 'The dependency array'],
  [5, 'you do', '05-1-you-do-counter-title', 'Exercise 2: update the document title'],
  [6, 'i do', '06-1-i-do-cleanup-strictmode', 'StrictMode exposes a missing cleanup'],
  [6, 'you do', '06-2-you-do-timer', 'Exercise 3: timer component'],
  [6, 'you do', '06-3-you-do-timer-stop', 'Exercise 3 stretch: Stop button'],
  [7, 'i do', '07-1-i-do-fullname-extra-render', 'The extra render'],
  [7, 'we do', '07-2-we-do-effect-or-no-effect', 'Exercise 4: Effect or No Effect?'],
  [8, 'you do', '08-1-you-do-window-width', 'Exercise 5: window width tracker'],
  [9, 'we do', '09-1-we-do-plan', 'Plan the Search Dashboard'],
  [9, 'you do', '09-2-you-do-search-dashboard', 'Mini project: Search Dashboard'],
  [9, 'you do', '09-3-you-do-find-the-mistakes', 'Finish early: find the five mistakes'],
  [10, 'you do', '10-1-you-do-rebuild', 'Rebuild challenge'],
]

export const exercises = list.map(([page, kind, id, title]) => ({
  page,
  pageTitle: pages[page].title,
  route: pages[page].route,
  kind,
  id,
  title,
}))

export function findExercise(id) {
  return exercises.find((exercise) => exercise.id === id)
}

export function exerciseFile(id, version) {
  return `exercises/${id}/${version}/App.jsx`
}

export function exerciseUrl(id, version) {
  return `/live.html?ex=${id}&v=${version}`
}

// Vite's dev server opens files in your editor through this endpoint.
export function openInEditor(id, version) {
  return fetch(`/__open-in-editor?file=${encodeURIComponent(exerciseFile(id, version))}`)
}
