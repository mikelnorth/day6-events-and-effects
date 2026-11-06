import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import PatternExplorer from './PatternExplorer.jsx'

const effectExamples = [
  ['Change the browser tab title', null],
  ['Start a timer', null],
  ['Subscribe to an event', null],
  ['Fetch data', 'Day 7 preview'],
  ['Talk to localStorage', null],
]

export default function Effects() {
  return (
    <LessonShell
      number="4"
      title="Rendering vs effects"
      subtitle="This is the critical concept."
      minutes="15"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-indigo-200 bg-white px-5 py-4 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Rendering</h2>
          <p className="text-sm text-slate-700 leading-relaxed">When React calculates what the UI should look like.</p>
          <CodeBlock>{`return <h1>{name}</h1>`}</CodeBlock>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-white px-5 py-4 space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Effect</h2>
          <p className="text-sm text-slate-700 leading-relaxed">When React needs to do something after render, to sync with something outside React.</p>
          <ul className="text-sm text-slate-700 list-disc list-inside">
            {effectExamples.map(([text, tag]) => (
              <li key={text}>
                {text}
                {tag && <span className="ml-2 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold px-2 py-0.5">{tag}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ConceptCallout title="If you are just calculating UI from state, you usually do not need an effect." eyebrow="Key rule">
        <p><code>useEffect</code> is not for "putting extra code somewhere." It is for synchronizing React with something external.</p>
      </ConceptCallout>

      <Note tone="slate" title="Instructor note: render and commit">
        <p>"Two major phases" is the course's simplification, and it's a good one for today. If a student has read the docs: react.dev describes trigger, render, and commit, and an Effect runs after the commit. Our "synchronize" phase is what happens after that. See <a className="underline" href="https://react.dev/learn/render-and-commit" target="_blank" rel="noreferrer">Render and Commit</a>. Say it once if asked, and move on.</p>
      </Note>

      <ExampleBlock
        variant="ido"
        title="useEffect lets you run code after React renders"
        exercise="04-1-i-do-render-vs-effect"
        description="Log in the component body and in an effect. The effect is written first and runs second."
        minutes="3"
      >
        <CodeBlock>{`import { useEffect } from "react"

useEffect(() => {
  console.log("Rendered")
})`}</CodeBlock>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="The 3 main useEffect patterns"
        exercise="04-2-we-do-three-patterns"
        description="These are real effects counting their real runs. Predict which numbers change before you click, then again before you type."
        minutes="6"
      >
        <PatternExplorer />
        <div className="grid gap-4 md:grid-cols-3">
          <CodeBlock label="1. Every render">{`useEffect(() => {
  console.log("Runs after every render")
})`}</CodeBlock>
          <CodeBlock label="2. Once after first render">{`useEffect(() => {
  console.log("Runs once on mount")
}, [])`}</CodeBlock>
          <CodeBlock label="3. When dependencies change">{`useEffect(() => {
  console.log("Runs when count changes")
}, [count])`}</CodeBlock>
        </div>
        <Note tone="amber" title="Say this before someone asks: why does &quot;once&quot; say 2?">
          <p>Vite's starter wraps your app in <code>{'<StrictMode>'}</code>. In development, React runs setup, cleanup, setup on mount, to expose missing cleanup. Your code isn't broken, and it doesn't happen in production. We'll see why this is useful after the break.</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Dependency arrays"
        exercise="04-3-i-do-dependency-array"
        description={'The array tells React: "Run this effect again only when these values change." The starter has the wrong array, so the title gets stuck.'}
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock>{`useEffect(() => {
  document.title = \`Count: \${count}\`
}, [count])`}</CodeBlock>
          <Note tone="sky" title="This means">
            <ol className="list-decimal list-inside space-y-1">
              <li>render happens</li>
              <li>effect runs after render</li>
              <li>if count changes, effect runs again</li>
            </ol>
          </Note>
        </div>
      </ExampleBlock>

      <DocsLink title="Synchronizing with Effects: How to write an Effect" href="https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect">
        The docs teach the same three steps we're using: declare an Effect, specify its dependencies, and add cleanup if needed. Read Steps 1 and 2 now. Step 3 is after the break.
      </DocsLink>
      <DocsLink title="Separating Events from Effects: Choosing between event handlers and Effects" href="https://react.dev/learn/separating-events-from-effects#choosing-between-event-handlers-and-effects">
        A chat room example. Sending a message is an event. Staying connected to the room is an Effect.
      </DocsLink>
      <DocsLink title="useEffect reference" href="https://react.dev/reference/react/useEffect">
        The exact rules, including "If you omit this argument, your Effect will re-run after every commit of the component."
      </DocsLink>
    </LessonShell>
  )
}
