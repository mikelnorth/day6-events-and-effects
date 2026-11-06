import { useEffect, useState } from 'react'
import LessonShell from '../../../components/ui/LessonShell.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'

function WindowWidthDemo() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <p className="text-2xl font-bold tabular-nums text-slate-900">Window width: {width}px</p>
}

export default function WindowWidth() {
  return (
    <LessonShell
      number="8"
      title="Exercise 5: window width tracker"
      subtitle="A component that responds to changes outside React. Same shape as the timer: setup starts something, and cleanup stops it."
      minutes="15"
    >
      <DemoSurface title="What you are building: drag the edge of your window">
        <WindowWidthDemo />
      </DemoSurface>

      <ExampleBlock
        variant="youdo"
        title="Build it"
        exercise="08-1-you-do-window-width"
        description="Build a component that tracks browser width."
        minutes="15"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Example">{`import { useState, useEffect } from "react"

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <p>Window width: {width}px</p>
}

export default WindowWidth`}</CodeBlock>
          <div className="space-y-3">
            <Checklist
              title="Goals"
              items={[
                'Listen for resize',
                'Update state',
                'Remove the listener on cleanup',
              ]}
            />
            <Note tone="amber" title="Check your cleanup">
              <p>Add <code>console.log("resize")</code> to the handler and drag the window. Two logs per event means two listeners: StrictMode's first one was never removed. Add the cleanup, then refresh.</p>
            </Note>
            <Note tone="emerald" title="Instructor: what to look for">
              <ul className="list-disc list-inside space-y-1">
                <li>Handler defined outside the effect, or a different arrow function passed to <code>removeEventListener</code>. It has to be the same function.</li>
                <li>Calling it: <code>addEventListener("resize", handleResize())</code>. The key rule, outside of React.</li>
                <li>Done early: show "Small" or "Large" from <code>width</code>, calculated during render, with no new state.</li>
              </ul>
            </Note>
          </div>
        </div>
      </ExampleBlock>

      <DocsLink title="Synchronizing with Effects: Subscribing to events" href="https://react.dev/learn/synchronizing-with-effects#subscribing-to-events">
        The docs' version of this pattern, with a scroll listener and its cleanup.
      </DocsLink>
    </LessonShell>
  )
}
