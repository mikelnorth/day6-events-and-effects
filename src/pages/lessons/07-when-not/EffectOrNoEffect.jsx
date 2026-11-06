import { useState } from 'react'

const examples = [
  { id: 'A', text: 'Update document.title from count', effect: true, why: 'The tab title is outside React.' },
  { id: 'B', text: 'Create fullName from firstName and lastName', effect: false, why: 'Calculated from state, during render.' },
  { id: 'C', text: 'Listen for window resize', effect: true, why: 'The window is outside React, and the listener needs cleanup.' },
  { id: 'D', text: 'Count items in an array', effect: false, why: 'items.length, during render.' },
]

const bonus = [
  { id: 'E', text: 'Filter a list by a search query', effect: false, why: 'Calculated from state. You need this for the mini project.' },
  { id: 'F', text: 'Show a message when the user clicks Save', effect: false, why: 'The user did something, so it goes in the event handler.' },
]

function Question({ example }) {
  const [choice, setChoice] = useState(null)
  const answered = choice !== null
  const correct = choice === example.effect

  function buttonClass(value) {
    const selected = choice === value
    return `rounded-md border px-3 py-1.5 text-sm ${selected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white hover:bg-slate-100'}`
  }

  return (
    <li className="rounded-lg border border-slate-200 bg-white px-4 py-3 space-y-2">
      <p className="text-slate-900"><strong>{example.id}.</strong> {example.text}</p>
      <div className="flex gap-2">
        <button className={buttonClass(true)} onClick={() => setChoice(true)}>Use effect</button>
        <button className={buttonClass(false)} onClick={() => setChoice(false)}>No effect needed</button>
      </div>
      {answered && (
        <p className={`text-sm ${correct ? 'text-emerald-800' : 'text-rose-800'}`}>
          {correct ? 'Yes. ' : 'Not quite. '}{example.why}
        </p>
      )}
    </li>
  )
}

export default function EffectOrNoEffect({ showBonus = false }) {
  const list = showBonus ? bonus : examples
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {list.map((example) => (
        <Question key={example.id} example={example} />
      ))}
    </ul>
  )
}
