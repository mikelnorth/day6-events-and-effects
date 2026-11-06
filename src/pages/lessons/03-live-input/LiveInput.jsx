import { useState } from 'react'
import LessonShell from '../../../components/ui/LessonShell.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'

function InputPreviewDemo() {
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(text)
    setText('')
  }

  return (
    <div className="space-y-2 text-sm text-slate-800">
      <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
        <input
          className="rounded-md border border-slate-300 px-3 py-1.5"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="button" className="rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-100" onClick={() => setText('')}>Clear</button>
        <button type="submit" disabled={text.trim() === ''} className="rounded-md bg-slate-900 text-white px-3 py-1.5 disabled:opacity-40">Submit</button>
      </form>
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
      {text.length > 20 && <p className="font-semibold text-rose-700">That's over 20 characters.</p>}
      {submitted && <p>Submitted: {submitted}</p>}
    </div>
  )
}

export default function LiveInput() {
  return (
    <LessonShell
      number="3"
      title="Exercise 1: live input preview"
      subtitle="No effects yet. An event changes state, and the UI is calculated from that state."
      minutes="20"
    >
      <DemoSurface title="What you are building (this one includes the stretch)">
        <InputPreviewDemo />
      </DemoSurface>

      <ExampleBlock
        variant="youdo"
        title="Build it"
        exercise="03-1-you-do-live-input"
        description="Students create a text input, live preview text, and a clear button."
        minutes="13"
      >
        <Checklist
          title="Requirements"
          items={[
            'Typing updates state',
            'The clear button resets the input',
            'Show the character count',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for">
          <ul className="list-disc list-inside space-y-1">
            <li>Clear changes state but the input keeps its text: the input is missing <code>value={'{text}'}</code>.</li>
            <li><code>onChange={'{handleChange()}'}</code>: the key rule again.</li>
            <li>A <code>count</code> state next to <code>text</code>. Ask: "Can you calculate it?" It's <code>text.length</code>.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Stretch yourself"
        exercise="03-2-you-do-live-input-stretch"
        description="Show a warning if over 20 characters, and disable submit if empty. There's no submit button in the base exercise, so this adds a form."
        minutes="7"
      >
        <CodeBlock label="The form this stretch needs">{`function handleSubmit(event) {
  event.preventDefault()      // Otherwise the page reloads
  setSubmitted(text)
  setText("")
}

<form onSubmit={handleSubmit}>
  <input value={text} onChange={handleChange} />
  <button type="button" onClick={clearText}>Clear</button>
  <button type="submit" disabled={text.trim() === ""}>Submit</button>
</form>

{text.length > 20 && <p>That's over 20 characters.</p>}`}</CodeBlock>
        <Note tone="amber" title="Why type=&quot;button&quot; on Clear?">
          <p>Inside a form, a button submits by default. Without it, Clear would also submit.</p>
        </Note>
      </ExampleBlock>

      <DocsLink title="Responding to Events: Preventing default behavior" href="https://react.dev/learn/responding-to-events#preventing-default-behavior">
        A form with the same preventDefault fix, and a sandbox to try it in.
      </DocsLink>
    </LessonShell>
  )
}
