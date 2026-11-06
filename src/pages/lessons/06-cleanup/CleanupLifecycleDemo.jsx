import { useEffect, useState } from 'react'
import { createLog } from '../../../demos/log.js'
import LogPanel from '../../../demos/LogPanel.jsx'

function Watcher({ value, log }) {
  useEffect(() => {
    log.push(`setup: start watching ${value}`)
    return () => {
      log.push(`cleanup: stop watching ${value}`)
    }
  }, [value, log])

  return <p className="text-sm text-slate-800">Watching <strong>{value}</strong></p>
}

// A real effect that reports its real setup and cleanup calls.
export default function CleanupLifecycleDemo() {
  const [log] = useState(createLog)
  const [value, setValue] = useState('A')
  const [show, setShow] = useState(true)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm disabled:opacity-40"
            disabled={!show}
            onClick={() => setValue(value === 'A' ? 'B' : 'A')}
          >
            Change value
          </button>
          <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100" onClick={() => setShow(!show)}>
            {show ? 'Remove component' : 'Add component'}
          </button>
        </div>
        {show ? <Watcher value={value} log={log} /> : <p className="text-sm text-slate-400">Removed</p>}
        <p className="text-xs text-slate-500 leading-relaxed">
          Read the first three lines together. That's StrictMode: setup, cleanup, setup. Then predict what each button prints.
        </p>
      </div>
      <LogPanel log={log} title="What React ran" onClear={log.clear} />
    </div>
  )
}
