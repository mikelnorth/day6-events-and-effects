import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import CleanupLifecycleDemo from './CleanupLifecycleDemo.jsx'
import StrictModeTimerDemo from './StrictModeTimerDemo.jsx'

export default function Cleanup() {
  return (
    <LessonShell
      number="6"
      title="Cleanup & Exercise 3: timer"
      subtitle="Some effects start something that keeps running: timers, event listeners, subscriptions. Those need cleanup."
      minutes="20"
    >
      <ConceptCallout title="If setup starts it, cleanup stops it.">
        <p>Return a function from your effect. Cleanup runs:</p>
        <ul className="list-disc list-inside">
          <li>before the effect runs again</li>
          <li>when the component is removed</li>
        </ul>
      </ConceptCallout>

      <div className="grid gap-4 md:grid-cols-2">
        <CodeBlock label="Example">{`useEffect(() => {
  const id = setInterval(() => {
    console.log("Tick")
  }, 1000)

  return () => {
    clearInterval(id)
  }
}, [])`}</CodeBlock>
        <Note tone="sky" title="See it run">
          <p>Below is a real effect that reports each time React runs its setup and its cleanup. Use it to teach both rules: change the value (cleanup, then setup), and remove the component (cleanup).</p>
        </Note>
      </div>

      <CleanupLifecycleDemo />

      <ExampleBlock
        variant="ido"
        title="Demo: StrictMode exposes a missing cleanup"
        exercise="06-1-i-do-cleanup-strictmode"
        description={'This explains the "runs once, logs twice" from before the break. In development, StrictMode runs setup, cleanup, setup on mount. With no cleanup, the first interval never stops, so the timer runs at double speed.'}
        minutes="5"
      >
        <StrictModeTimerDemo />
        <Note tone="amber" title="Say this out loud">
          <p>StrictMode didn't cause this bug. It found it. In production, the leak would show up later and quietly, each time someone leaves and comes back. Click Hide timer, then Show timer on each side, and watch "Intervals running".</p>
        </Note>
        <Note tone="rose" title="Live coding: refresh after you add the cleanup">
          <p>Intervals started before your fix keep running, and saving doesn't restart a [] effect, so the page still counts at double speed after you save the fix. Refresh the page and the fix shows clearly.</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Exercise 3: timer component"
        exercise="06-2-you-do-timer"
        description="Students build a simple timer."
        minutes="12"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Reference">{`import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <h2>Seconds: {seconds}</h2>
}

export default Timer`}</CodeBlock>
          <div className="space-y-3">
            <Checklist
              title="Requirements"
              items={[
                'seconds state',
                'Interval updates every second',
                'Cleanup clears the interval',
                'Stop button (optional, see below)',
              ]}
            />
            <Note tone="emerald" title="Instructor: what to look for">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Stuck at 1:</strong> <code>setSeconds(seconds + 1)</code>. The effect only ran once, so <code>seconds</code> in it is always 0. Use the updater form.</li>
                <li><strong>Counting by 2:</strong> no cleanup. Add it, then refresh.</li>
                <li><strong>Racing:</strong> no array and no cleanup, so another interval starts after every render.</li>
              </ul>
            </Note>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Stretch: a Stop button"
        exercise="06-3-you-do-timer-stop"
        description="With [], the effect never hears about the button. It needs isRunning as a dependency, so cleanup and setup run again when it changes."
      >
        <CodeBlock label="[isRunning]">{`const [isRunning, setIsRunning] = useState(true)

useEffect(() => {
  if (!isRunning) return

  const intervalId = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }, 1000)

  return () => {
    clearInterval(intervalId)
  }
}, [isRunning])`}</CodeBlock>
        <div className="grid gap-3 md:grid-cols-2">
          <Note tone="sky" title="Click Stop">
            <p><code>isRunning</code> changed. Cleanup clears the old interval. Setup returns early, so nothing is running.</p>
          </Note>
          <Note tone="sky" title="Click Start">
            <p><code>isRunning</code> changed. There's no cleanup from the last run. Setup starts a new interval.</p>
          </Note>
        </div>
      </ExampleBlock>

      <DocsLink title="Synchronizing with Effects: Step 3, Add cleanup if needed" href="https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed">
        The docs' chat connection logs "Connecting...", "Disconnected.", "Connecting...", the same pattern as our demo.
      </DocsLink>
      <DocsLink title="Synchronizing with Effects: How to handle the Effect firing twice in development?" href="https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development">
        Read this when a student asks how to stop it. The docs' answer: don't try to prevent it, fix the cleanup.
      </DocsLink>
      <DocsLink title="StrictMode: Fixing bugs found by re-running Effects in development" href="https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development">
        The reference for this behavior, and the note that these checks are development only.
      </DocsLink>

      <DocsChallenges
        page="Synchronizing with Effects"
        href="https://react.dev/learn/synchronizing-with-effects"
        challenges={[
          { title: 'Fix an interval that fires twice', when: 'in class', note: 'Our demo, in the docs\' sandbox. Great for anyone done early with the timer.' },
          { title: 'Focus a field on mount', when: 'skip', note: 'Needs useRef, which we have not taught.' },
          { title: 'Focus a field conditionally', when: 'skip', note: 'Needs useRef, which we have not taught.' },
          { title: 'Fix fetching inside an Effect', when: 'skip', note: 'Data fetching is Day 7. Save this one for then.' },
        ]}
      />
      <DocsChallenges
        page="Lifecycle of Reactive Effects"
        href="https://react.dev/learn/lifecycle-of-reactive-effects"
        challenges={[
          { title: 'Switch synchronization on and off', when: 'homework', note: 'The same idea as our [isRunning] stretch, with a pointer listener.' },
          { title: 'Investigate a stale value bug', when: 'stretch', note: 'What happens when you silence the dependency linter.' },
          { title: 'Fix a connection switch', when: 'skip', note: 'Function props as dependencies. More than we need today.' },
          { title: 'Populate a chain of select boxes', when: 'skip', note: 'Data fetching is Day 7.' },
        ]}
      />
      <DocsChallenges
        page="Separating Events from Effects"
        href="https://react.dev/learn/separating-events-from-effects"
        challenges={[
          { title: 'Fix a variable that doesn’t update', when: 'stretch', note: 'A timer with a wrong dependency array. Just add the missing dependency.' },
          { title: 'Fix a freezing counter', when: 'skip', note: 'Needs useEffectEvent, which is out of scope.' },
          { title: 'Fix a non-adjustable delay', when: 'skip', note: 'Needs useEffectEvent, which is out of scope.' },
          { title: 'Fix a delayed notification', when: 'skip', note: 'Needs useEffectEvent, which is out of scope.' },
        ]}
      />
    </LessonShell>
  )
}
