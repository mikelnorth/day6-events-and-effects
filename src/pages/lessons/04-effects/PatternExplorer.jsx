import { useEffect, useState, useSyncExternalStore } from 'react'
import { createLog } from '../../../demos/log.js'

function RunCount({ log }) {
  const runs = useSyncExternalStore(log.subscribe, log.getSnapshot)
  return <span className="text-2xl font-bold tabular-nums text-slate-900">{runs.length}</span>
}

// Real effects with each kind of array, counting their real runs. In development, each one starts
// at 2 because StrictMode runs an extra setup and cleanup, which is worth pointing out.
export default function PatternExplorer() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [everyRender] = useState(createLog)
  const [onMount] = useState(createLog)
  const [onCount] = useState(createLog)

  useEffect(() => {
    everyRender.push('run')
  })

  useEffect(() => {
    onMount.push('run')
  }, [onMount])

  useEffect(() => {
    onCount.push(`run ${count}`)
  }, [onCount, count])

  const cards = [
    { title: 'No array', code: 'useEffect(fn)', log: everyRender, note: 'Runs after every render. Usually not what you want.' },
    { title: 'Empty array', code: 'useEffect(fn, [])', log: onMount, note: 'Runs once after first render. Used for setup.' },
    { title: 'Dependencies', code: 'useEffect(fn, [count])', log: onCount, note: 'Runs when count changes. Most common pattern.' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm" onClick={() => setCount(count + 1)}>
          Increase count ({count})
        </button>
        <input
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type here"
        />
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <div className="flex items-baseline justify-between">
              <p className="font-semibold text-slate-900">{card.title}</p>
              <RunCount log={card.log} />
            </div>
            <code className="text-xs text-slate-600">{card.code}</code>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">{card.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
