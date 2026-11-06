import { useEffect, useState } from 'react'
import LessonShell from '../../../components/ui/LessonShell.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'

function CounterTitleDemo() {
  const [count, setCount] = useState(0)

  // Teaching app only: puts this app's title back when you leave the page.
  useEffect(() => {
    const original = document.title
    return () => {
      document.title = original
    }
  }, [])

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div className="space-y-2">
      <p className="text-3xl font-bold tabular-nums text-slate-900">{count}</p>
      <div className="flex gap-2">
        <button className="rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="text-xs text-slate-500">Watch this browser tab's title.</p>
    </div>
  )
}

export default function DocumentTitle() {
  return (
    <LessonShell
      number="5"
      title="Exercise 2: update the document title"
      subtitle="Your first real effect. The tab title isn't part of your JSX, so rendering can't change it."
      minutes="15"
    >
      <DemoSurface title="What you are building">
        <CounterTitleDemo />
      </DemoSurface>

      <ExampleBlock
        variant="youdo"
        title="Build it"
        exercise="05-1-you-do-counter-title"
        description="Create a counter app, and use useEffect to update the browser tab title."
        minutes="15"
      >
        <CodeBlock label="Example">{`import { useState, useEffect } from "react"

function CounterTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = \`Count: \${count}\`
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}`}</CodeBlock>
        <Checklist
          title="You've got it when you can say"
          items={[
            'The effect runs after render',
            'The dependency array watches count',
            'React syncs state to the browser title',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for">
          <ul className="list-disc list-inside space-y-1">
            <li><code>document.title = ...</code> in the component body. It works here, but rendering should only calculate UI. Ask where code that touches the outside belongs.</li>
            <li>No array, or <code>[]</code>. Have them explain what each does, not only fix it.</li>
            <li>Done early: add a text input, log inside the effect, and prove typing doesn't re-run it.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <DocsLink title="Synchronizing with Effects: Step 2, Specify the Effect dependencies" href="https://react.dev/learn/synchronizing-with-effects#step-2-specify-the-effect-dependencies">
        The docs show the same idea with a video player. Note that you don't choose your dependencies freely: the linter checks them against what the effect reads.
      </DocsLink>

      <DocsChallenges
        page="Lifecycle of Reactive Effects"
        href="https://react.dev/learn/lifecycle-of-reactive-effects"
        challenges={[
          { title: 'Fix reconnecting on every keystroke', when: 'homework', note: 'The missing dependency array, in a chat room. Exactly today\'s concept.' },
        ]}
      />
    </LessonShell>
  )
}
