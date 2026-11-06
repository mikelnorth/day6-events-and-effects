import { Link } from 'react-router-dom'
import ConceptCallout from '../components/ui/ConceptCallout.jsx'
import DocsLink from '../components/ui/DocsLink.jsx'
import { schedule, fmt } from '../data/schedule.js'

const objectives = [
  'What an event is in React',
  'How event handlers work',
  'What an effect is',
  'Why useEffect exists',
  'The difference between rendering and side effects',
  'When you should and should not use useEffect',
  'What a dependency array does',
  'What cleanup means in an effect',
]

const builds = [
  'Interactive UI using event handlers',
  'A live character counter / search UI',
  'A component that responds to external changes',
  'A small app using useEffect correctly',
]

const lessonCards = [
  { to: '/recap', title: '1. Recap & the Big Idea', tag: 'Warm up', desc: 'Four Day 5 questions, then the two phases: render UI, and synchronize with something outside React.' },
  { to: '/events', title: '2. Events & Handlers', tag: 'Concept', desc: 'What an event is, the key rule, event.target.value, and the common events.' },
  { to: '/live-input', title: '3. Exercise 1: Live Input', tag: 'Hands on', desc: 'Input, preview, clear, character count. Stretch: warning and a real form.' },
  { to: '/effects', title: '4. Rendering vs Effects', tag: 'Critical concept', desc: 'What useEffect is for, the 3 patterns counting their real runs, and dependency arrays.' },
  { to: '/title', title: '5. Exercise 2: Document Title', tag: 'Hands on', desc: 'Your first real effect: sync count to the browser tab.' },
  { to: '/cleanup', title: '6. Cleanup & Exercise 3: Timer', tag: 'Hands on', desc: 'Setup and cleanup, why StrictMode runs effects twice, and a timer. Stretch: [isRunning].' },
  { to: '/when-not', title: '7. When Not & Exercise 4', tag: 'Judgment', desc: 'See the extra render from a calculated value in an effect, then vote: Effect or No Effect?' },
  { to: '/window-width', title: '8. Exercise 5: Window Width', tag: 'Hands on', desc: 'Listen for resize, update state, and remove the listener on cleanup.' },
  { to: '/search-dashboard', title: '9. Mini Project: Search Dashboard', tag: 'Build', desc: 'A 5-minute plan and at least 40 minutes of work time, with the grading checklist.' },
  { to: '/wrap-up', title: '10. Wrap-up', tag: 'Consolidate', desc: 'Summary, exit ticket, rebuild challenge (homework), and the Day 7 preview.' },
]

const kindStyles = {
  talk: 'bg-indigo-100 text-indigo-700',
  wedo: 'bg-amber-100 text-amber-800',
  youdo: 'bg-emerald-100 text-emerald-800',
  break: 'bg-slate-100 text-slate-600',
}
const kindLabel = { talk: 'Teach', wedo: 'We do', youdo: 'You do', break: 'Break' }

const mistakes = [
  'Putting calculations in useEffect',
  'Missing dependency arrays',
  'Mutating state',
  'Forgetting cleanup',
  'Calling handlers immediately instead of passing them',
]

const goodSigns = [
  'Uses events correctly',
  'Uses useEffect only where needed',
  'Explains dependency arrays correctly',
  'Includes cleanup where appropriate',
  'Avoids unnecessary state/effects',
]

export default function Home() {
  return (
    <article className="space-y-10">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">Instructor guide · 3 hours</p>
        <h1 className="text-4xl font-bold text-slate-900 mt-1">Day 6 &mdash; Events, Effects &amp; React's Synchronization Model</h1>
        <p className="text-slate-600 mt-3 text-base leading-relaxed max-w-3xl">
          Up to this point, our apps respond to clicks and typing. Today we learn how React responds to events and how it synchronizes with the outside world.
        </p>
      </header>

      <ConceptCallout title="Render UI. Synchronize with something outside React." eyebrow="Big push for today">
        <p>Events happen because the user does something. Effects happen because React needs to sync with an outside system. That distinction is the heart of Day 6.</p>
      </ConceptCallout>

      <DocsLink title="Synchronizing with Effects" href="https://react.dev/learn/synchronizing-with-effects">
        Today's backbone, supported by Responding to Events and You Might Not Need an Effect. "Two phases" is the course's framing. The docs say render and commit, with Effects running after the commit. There's a short note on page 4.
      </DocsLink>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">3-hour schedule</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">Min</th>
                <th className="px-4 py-3 font-semibold">Block</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {schedule.map((b) => (
                <tr key={b.start} className={b.kind === 'break' ? 'bg-slate-50/60' : ''}>
                  <td className="px-4 py-2.5 font-mono text-slate-700 whitespace-nowrap">{fmt(b.start)} – {fmt(b.end)}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{b.end - b.start}</td>
                  <td className="px-4 py-2.5 text-slate-800">
                    {b.to ? <Link to={b.to} className="hover:text-indigo-700 hover:underline">{b.title}</Link> : b.title}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${kindStyles[b.kind]}`}>{kindLabel[b.kind]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          The mini project work time is the block to protect. Never cut it below 40 minutes. If you are behind, cut Exercise 5 to a type-along first. The full list is in LESSON-PLAN.md.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Learning objectives</h2>
          <p className="text-sm text-slate-600 mb-2">By the end of today, students should know and understand:</p>
          <ul className="space-y-2">
            {objectives.map((o, i) => (
              <li key={o} className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 leading-relaxed">
                <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Build</h2>
          <ul className="space-y-2">
            {builds.map((b) => (
              <li key={b} className="rounded-lg border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            Every activity has a starter and solution in <code className="px-1 bg-slate-100 rounded">exercises/</code>. Standalone copies of the main exercises are in <code className="px-1 bg-slate-100 rounded">student-projects/</code>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Lesson flow</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonCards.map((l) => (
            <Link key={l.to} to={l.to} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-indigo-400 hover:shadow transition">
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-semibold">{l.tag}</p>
              <p className="text-lg font-semibold text-slate-900 mt-0.5 group-hover:text-indigo-700">{l.title}</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Common mistakes to watch for</h2>
          <ul className="space-y-2">
            {mistakes.map((m) => (
              <li key={m} className="rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-sm text-rose-900">{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Good performance signs</h2>
          <ul className="space-y-2">
            {goodSigns.map((m) => (
              <li key={m} className="rounded-md border border-emerald-200 bg-emerald-50/60 px-3 py-2 text-sm text-emerald-900">{m}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-900">Scope guardrails for today</h2>
        <ul className="mt-2 text-sm text-slate-700 leading-relaxed list-disc list-inside space-y-1">
          <li><strong>In:</strong> events, handlers, <code>event.target.value</code>, <code>useEffect</code>, dependency arrays, cleanup, StrictMode's development behavior, and when not to use an effect.</li>
          <li><strong>Day 7:</strong> data fetching. Fetch is listed as an effect example, marked "Day 7 preview". Name it and move on.</li>
          <li><strong>Day 8:</strong> custom hooks. If a student wants to reuse the resize logic, tell them that's coming.</li>
          <li><strong>Not today:</strong> <code>useRef</code>, <code>useReducer</code>, context, <code>useMemo</code>, and <code>useEffectEvent</code>. Docs challenges that need them are tagged skip.</li>
        </ul>
      </section>
    </article>
  )
}
