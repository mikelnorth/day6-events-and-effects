import { useState } from 'react'

// Every common event, reported as it fires.
export default function EventLab() {
  const [events, setEvents] = useState([])
  const [text, setText] = useState('')

  function report(name, detail = '') {
    setEvents((prev) => [{ id: (prev[0]?.id ?? 0) + 1, name, detail }, ...prev].slice(0, 8))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <button
          className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm"
          onClick={() => report('onClick')}
        >
          Click me
        </button>
        <div
          className="rounded-lg border-2 border-dashed border-slate-300 px-4 py-5 text-center text-sm text-slate-600 hover:border-indigo-500"
          onMouseEnter={() => report('onMouseEnter')}
          onMouseLeave={() => report('onMouseLeave')}
        >
          Hover over me
        </div>
        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            report('onSubmit', 'preventDefault stopped the page reload')
          }}
        >
          <input
            className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm"
            value={text}
            placeholder="Type, then press Enter"
            onChange={(event) => {
              setText(event.target.value)
              report('onChange', `event.target.value = "${event.target.value}"`)
            }}
          />
          <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100">Submit</button>
        </form>
      </div>
      <ol className="rounded-md bg-slate-900 text-slate-100 p-4 text-xs font-mono leading-relaxed min-h-40">
        {events.length === 0 && <li className="text-slate-500">Events show up here.</li>}
        {events.map((event) => (
          <li key={event.id}>
            <span className="text-amber-300">{event.name}</span> {event.detail}
          </li>
        ))}
      </ol>
    </div>
  )
}
