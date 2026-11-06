import { useEffect, useState, useSyncExternalStore } from 'react'
import { createIntervalTracker } from '../../../demos/intervals.js'

function LeakyTimer({ tracker }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    tracker.start(() => setSeconds((prev) => prev + 1), 1000)
  }, [tracker])

  return <p className="text-4xl font-bold tabular-nums text-rose-700">{seconds}</p>
}

function CleanTimer({ tracker }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = tracker.start(() => setSeconds((prev) => prev + 1), 1000)
    return () => tracker.stop(id)
  }, [tracker])

  return <p className="text-4xl font-bold tabular-nums text-emerald-700">{seconds}</p>
}

function Panel({ title, tracker, code, children }) {
  const [show, setShow] = useState(true)
  const running = useSyncExternalStore(tracker.subscribe, tracker.getSnapshot)

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 space-y-2">
      <p className="font-semibold text-slate-900">{title}</p>
      <div className="min-h-10">
        {show ? children : <p className="text-sm text-slate-400 py-2">Component removed</p>}
      </div>
      <p className="text-sm text-slate-700">Intervals running: <strong className="tabular-nums">{running}</strong></p>
      <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100" onClick={() => setShow(!show)}>
        {show ? 'Hide timer' : 'Show timer'}
      </button>
      <pre className="rounded-md bg-slate-900 text-slate-100 text-xs p-3 overflow-x-auto"><code>{code}</code></pre>
    </div>
  )
}

export default function StrictModeTimerDemo() {
  const [leaky] = useState(createIntervalTracker)
  const [clean] = useState(createIntervalTracker)
  const [run, setRun] = useState(0)

  // Stops the leaked intervals when you leave this page. See demos/intervals.js.
  useEffect(() => {
    leaky.keepAlive()
    clean.keepAlive()
    return () => {
      leaky.stopSoon()
      clean.stopSoon()
    }
  }, [leaky, clean])

  function restart() {
    leaky.stopAll()
    clean.stopAll()
    setRun(run + 1)
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-4 md:grid-cols-2" key={run}>
        <Panel
          title="No cleanup"
          tracker={leaky}
          code={`useEffect(() => {
  setInterval(tick, 1000)
}, [])`}
        >
          <LeakyTimer tracker={leaky} />
        </Panel>
        <Panel
          title="With cleanup"
          tracker={clean}
          code={`useEffect(() => {
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}, [])`}
        >
          <CleanTimer tracker={clean} />
        </Panel>
      </div>
      <button className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm" onClick={restart}>Restart both</button>
    </div>
  )
}
