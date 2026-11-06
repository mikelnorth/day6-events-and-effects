import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Recap from './pages/lessons/01-recap/Recap.jsx'
import Events from './pages/lessons/02-events/Events.jsx'
import LiveInput from './pages/lessons/03-live-input/LiveInput.jsx'
import Effects from './pages/lessons/04-effects/Effects.jsx'
import DocumentTitle from './pages/lessons/05-document-title/DocumentTitle.jsx'
import Cleanup from './pages/lessons/06-cleanup/Cleanup.jsx'
import WhenNot from './pages/lessons/07-when-not/WhenNot.jsx'
import WindowWidth from './pages/lessons/08-window-width/WindowWidth.jsx'
import SearchDashboard from './pages/lessons/09-search-dashboard/SearchDashboard.jsx'
import WrapUp from './pages/lessons/10-wrap-up/WrapUp.jsx'
import ClassTimer from './components/ClassTimer.jsx'

const lessons = [
  { to: '/', label: 'Home / Plan', end: true },
  { to: '/recap', label: '1. Recap & the Big Idea' },
  { to: '/events', label: '2. Events & Handlers' },
  { to: '/live-input', label: '3. Exercise 1: Live Input' },
  { to: '/effects', label: '4. Rendering vs Effects' },
  { to: '/title', label: '5. Exercise 2: Document Title' },
  { to: '/cleanup', label: '6. Cleanup & Exercise 3: Timer' },
  { to: '/when-not', label: '7. When Not & Exercise 4' },
  { to: '/window-width', label: '8. Exercise 5: Window Width' },
  { to: '/search-dashboard', label: '9. Mini Project' },
  { to: '/wrap-up', label: '10. Wrap-up' },
]

function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur px-5 py-6 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">Day 6</p>
        <h1 className="text-lg font-semibold text-slate-900 leading-tight">Events, Effects &amp; Synchronization</h1>
      </div>
      <nav className="flex flex-col gap-1">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.to}
            to={lesson.to}
            end={lesson.end}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-sm transition ${
                isActive ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {lesson.label}
          </NavLink>
        ))}
      </nav>
      <a
        href="/live.html"
        target="_blank"
        rel="noreferrer"
        className="mt-3 block rounded-md border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-100"
      >
        Live code: all starters & solutions
      </a>
      <div className="mt-6">
        <ClassTimer />
      </div>
      <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
        Teaching phrases: <span className="font-semibold text-slate-900">"Events: the user did something. Effects: React needs to sync."</span>{' '}
        "Pass it, don't call it." "If you can calculate it, you don't need an effect." "If setup starts it, cleanup stops it."
      </div>
    </aside>
  )
}

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recap" element={<Recap />} />
            <Route path="/events" element={<Events />} />
            <Route path="/live-input" element={<LiveInput />} />
            <Route path="/effects" element={<Effects />} />
            <Route path="/title" element={<DocumentTitle />} />
            <Route path="/cleanup" element={<Cleanup />} />
            <Route path="/when-not" element={<WhenNot />} />
            <Route path="/window-width" element={<WindowWidth />} />
            <Route path="/search-dashboard" element={<SearchDashboard />} />
            <Route path="/wrap-up" element={<WrapUp />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
