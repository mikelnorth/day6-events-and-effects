import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'

const review = [
  'Events in React',
  'Event handlers',
  'useEffect',
  'Dependency arrays',
  'Cleanup',
  'When not to use effects',
  "React's synchronization model",
]

const homework = [
  { title: 'Finish the Search Dashboard and its README reflection', href: null },
  { title: 'Rebuild challenge, from memory (above)', href: null },
  { title: 'Responding to Events: "Wire up the events"', href: 'https://react.dev/learn/responding-to-events#challenges' },
  { title: 'You Might Not Need an Effect: "Transform data without Effects"', href: 'https://react.dev/learn/you-might-not-need-an-effect#challenges' },
  { title: 'You Might Not Need an Effect: "Submit a form without Effects"', href: 'https://react.dev/learn/you-might-not-need-an-effect#challenges' },
  { title: 'Lifecycle of Reactive Effects: "Fix reconnecting on every keystroke"', href: 'https://react.dev/learn/lifecycle-of-reactive-effects#challenges' },
  { title: 'Lifecycle of Reactive Effects: "Switch synchronization on and off"', href: 'https://react.dev/learn/lifecycle-of-reactive-effects#challenges' },
]

const docsToday = [
  ['Responding to Events', 'https://react.dev/learn/responding-to-events'],
  ['Synchronizing with Effects', 'https://react.dev/learn/synchronizing-with-effects'],
  ['You Might Not Need an Effect', 'https://react.dev/learn/you-might-not-need-an-effect'],
  ['Lifecycle of Reactive Effects', 'https://react.dev/learn/lifecycle-of-reactive-effects'],
  ['Separating Events from Effects', 'https://react.dev/learn/separating-events-from-effects'],
  ['Render and Commit', 'https://react.dev/learn/render-and-commit'],
  ['useEffect reference', 'https://react.dev/reference/react/useEffect'],
  ['StrictMode reference', 'https://react.dev/reference/react/StrictMode'],
]

export default function WrapUp() {
  return (
    <LessonShell
      number="10"
      title="Wrap-up"
      subtitle="Events happen because the user does something. Effects happen because React needs to sync with an outside system."
      minutes="5"
    >
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Today you learned</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {review.map((r) => (
            <li key={r} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800">{r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Exit ticket (2 minutes)</h2>
        <Note tone="slate">
          <ol className="list-decimal list-inside space-y-1">
            <li>In one sentence each: what causes an event, and what causes an effect?</li>
            <li>A component shows a total price from a cart array. Effect or no effect? Why?</li>
            <li>One thing that is still fuzzy.</li>
          </ol>
        </Note>
        <p className="text-xs text-slate-500">Answer to 2: no effect. Calculate it during render.</p>
      </section>

      <ExampleBlock
        variant="youdo"
        title="Rebuild challenge"
        exercise="10-1-you-do-rebuild"
        description="Homework, or for anyone who finishes the mini project early. There isn't time for it at the end of class, because that time goes to the mini project. Close your code, the docs, and AI first."
      >
        <Checklist
          title="Rebuild from memory"
          items={[
            'A live input component',
            'A document title updater',
            'A timer or resize tracker',
          ]}
        />
        <p className="text-sm text-slate-600">This ensures the knowledge sticks.</p>
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Homework</h2>
        <ul className="space-y-2">
          {homework.map((h) => (
            <li key={h.title}>
              {h.href ? (
                <a href={h.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-800 hover:border-cyan-400">
                  {h.title}
                </a>
              ) : (
                <p className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800">{h.title}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <ConceptCallout title="What's next: Data Fetching in React" eyebrow="Day 7 preview">
        <p>You will learn async/await, fetching API data, loading states, error handling, and displaying remote data. An effect that fetches is still an effect: it syncs with something outside React.</p>
      </ConceptCallout>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">react.dev map for today</h2>
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-5 py-4">
          <ul className="grid gap-1.5 sm:grid-cols-2 text-sm">
            {docsToday.map(([title, href]) => (
              <li key={href}><a href={href} target="_blank" rel="noreferrer" className="text-slate-800 hover:text-cyan-800 hover:underline">{title}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </LessonShell>
  )
}
