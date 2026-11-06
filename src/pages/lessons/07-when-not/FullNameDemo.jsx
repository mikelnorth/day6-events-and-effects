import { useEffect, useState } from 'react'
import { createLog } from '../../../demos/log.js'
import LogPanel from '../../../demos/LogPanel.jsx'

const inputClass = 'w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm'

function BadForm() {
  const [log] = useState(createLog)
  const [firstName, setFirstName] = useState('Ada')
  const [fullName, setFullName] = useState('')
  const [hasTyped, setHasTyped] = useState(false)
  const lastName = 'Lovelace'

  // Logs each render React commits, from the first keystroke on. It's first, so it reports before
  // the next effect sets state.
  useEffect(() => {
    if (hasTyped) log.push(`Render: firstName="${firstName}" fullName="${fullName}"`)
  })

  // The anti-pattern being taught. The linter is right, and that's the lesson.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFullName(firstName + ' ' + lastName)
  }, [firstName, lastName])

  return (
    <div className="space-y-2">
      <p className="font-semibold text-rose-800">Bad: state + effect</p>
      <input
        className={inputClass}
        value={firstName}
        onChange={(event) => {
          log.clear()
          setHasTyped(true)
          setFirstName(event.target.value)
        }}
      />
      <p className="text-sm text-slate-800">Full name: {fullName}</p>
      <LogPanel log={log} title="Renders for your last keystroke" empty="Type one letter." />
    </div>
  )
}

function GoodForm() {
  const [log] = useState(createLog)
  const [firstName, setFirstName] = useState('Ada')
  const [hasTyped, setHasTyped] = useState(false)
  const lastName = 'Lovelace'
  const fullName = firstName + ' ' + lastName

  useEffect(() => {
    if (hasTyped) log.push(`Render: firstName="${firstName}" fullName="${fullName}"`)
  })

  return (
    <div className="space-y-2">
      <p className="font-semibold text-emerald-800">Good: calculate it</p>
      <input
        className={inputClass}
        value={firstName}
        onChange={(event) => {
          log.clear()
          setHasTyped(true)
          setFirstName(event.target.value)
        }}
      />
      <p className="text-sm text-slate-800">Full name: {fullName}</p>
      <LogPanel log={log} title="Renders for your last keystroke" empty="Type one letter." />
    </div>
  )
}

export default function FullNameDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <BadForm />
      <GoodForm />
    </div>
  )
}
