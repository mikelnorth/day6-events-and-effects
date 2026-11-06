import { useState } from 'react'
import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import KeyRuleDemo from './KeyRuleDemo.jsx'
import EventLab from './EventLab.jsx'

function HelloDemo() {
  const [name, setName] = useState('')

  return (
    <div className="space-y-2">
      <input
        className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <p className="text-slate-900">Hello, {name}</p>
    </div>
  )
}

export default function Events() {
  return (
    <LessonShell
      number="2"
      title="Events & handlers"
      subtitle="You've used these for days. Today we name what's going on, so you can tell them apart from effects."
      minutes="15"
    >
      <ConceptCallout title="An event is something the user does that your app responds to.">
        <p>Clicking a button, typing in an input, submitting a form, hovering over something.</p>
        <p>Common React events: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>, <code>onMouseEnter</code>, <code>onMouseLeave</code>.</p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="Your first event handler"
        exercise="02-1-i-do-first-handler"
        description="Define a function, then hand it to React."
        minutes="2"
      >
        <CodeBlock>{`function App() {
  function handleClick() {
    alert("Button clicked!")
  }

  return <button onClick={handleClick}>Click Me</button>
}`}</CodeBlock>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Key rule: pass a function to the event"
        exercise="02-2-i-do-key-rule"
        description="Switch between the two, and click each time. Then run the starter, where you can break it for real."
        minutes="4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Correct">{`<button onClick={handleClick}>Click</button>`}</CodeBlock>
          <CodeBlock label="Incorrect">{`<button onClick={handleClick()}>Click</button>`}</CodeBlock>
        </div>
        <KeyRuleDemo />
        <Note tone="rose" title="Because handleClick() runs immediately during render">
          <p>If it sets state, that renders again, which calls it again. That's the "Too many re-renders" error. Need an argument? Wrap it: <code>{'onClick={() => handleClick("Ada")}'}</code></p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Event handlers and data"
        exercise="02-3-we-do-event-data"
        description="Build it together. Log the event first so students can see it's a real object."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock>{`import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  )
}`}</CodeBlock>
          <div className="space-y-3">
            <HelloDemo />
            <Note tone="amber" title="What is event.target.value?">
              <p>When the user types:</p>
              <ul className="list-disc list-inside mt-1">
                <li>the browser triggers an event</li>
                <li>React gives your function that event</li>
                <li>you read the value from the input</li>
              </ul>
            </Note>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Common React events"
        exercise="02-4-i-do-common-events"
        description="Fire each one. Submit is the one to slow down on: forms reload the page by default, so onSubmit starts with event.preventDefault(). Students need that for the Exercise 1 stretch."
        minutes="4"
      >
        <EventLab />
      </ExampleBlock>

      <DocsLink title="Responding to Events" href="https://react.dev/learn/responding-to-events#adding-event-handlers">
        Follow "Adding event handlers", then "Preventing default behavior". The docs call out this same mistake: "Functions passed to event handlers must be passed, not called."
      </DocsLink>

      <DocsChallenges
        page="Responding to Events"
        href="https://react.dev/learn/responding-to-events"
        challenges={[
          { title: 'Fix an event handler', when: 'in class', note: "It's the key rule, in a real sandbox. Do it in pairs if you have 3 spare minutes." },
          { title: 'Wire up the events', when: 'homework', note: 'Pass a handler in as a prop. It also needs stopPropagation, which we did not cover, so read "Stopping propagation" first.' },
        ]}
      />
    </LessonShell>
  )
}
