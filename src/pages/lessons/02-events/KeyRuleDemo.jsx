import { useState } from 'react'

// Shows what onClick actually receives. The real crash is in the 02-2 exercise.
export default function KeyRuleDemo() {
  const [mode, setMode] = useState('correct')
  const [clicks, setClicks] = useState(0)

  function handleClick() {
    setClicks(clicks + 1)
  }

  const isCorrect = mode === 'correct'
  const tabClass = (active) =>
    `rounded-md border px-3 py-1.5 text-sm font-mono ${active ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white hover:bg-slate-100'}`

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button className={tabClass(isCorrect)} onClick={() => setMode('correct')}>onClick={'{handleClick}'}</button>
        <button className={tabClass(!isCorrect)} onClick={() => setMode('incorrect')}>onClick={'{handleClick()}'}</button>
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
        <button
          className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm"
          onClick={isCorrect ? handleClick : undefined}
        >
          Click
        </button>
        <span className="text-sm text-slate-700">Handled clicks: <strong className="tabular-nums">{clicks}</strong></span>
      </div>
      <p className={`text-sm ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
        {isCorrect
          ? 'onClick receives the function. React calls it when the click happens.'
          : 'handleClick() runs immediately during render. onClick receives what it returned, undefined, so clicking does nothing.'}
      </p>
    </div>
  )
}
