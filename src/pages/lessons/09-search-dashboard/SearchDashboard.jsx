import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import Note from '../../../components/ui/Note.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import SearchDemo from './SearchDemo.jsx'

function PlainList({ items }) {
  return (
    <ul className="list-disc list-inside text-sm text-slate-700 space-y-0.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function SearchDashboard() {
  return (
    <LessonShell
      number="9"
      title="Day 6 Mini Project: Search Dashboard"
      subtitle="Everything today in one small app. A 5-minute intro, then at least 40 minutes of work time."
      minutes="45"
    >
      <ConceptCallout title="Events update the query. Rendering filters the list. One effect syncs the title." eyebrow="The whole day in one app">
        <p>This app has one of each on purpose. If you find yourself adding a second piece of state or a second effect, stop and ask whether you can calculate it.</p>
      </ConceptCallout>

      <DemoSurface title="What you are building: watch the browser tab as you type">
        <SearchDemo />
      </DemoSurface>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Assignment Objectives</h2>
          <p className="text-sm text-slate-700">Students build a small app with:</p>
          <PlainList items={['input field', 'live query display', 'item filter', 'effect updating document title']} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Requirements</h2>
          <p className="text-sm text-slate-700">Features</p>
          <PlainList items={['controlled input', 'filter a list of items', 'show filtered results', 'use useEffect to update page title']} />
          <p className="text-sm text-slate-700">Example title behavior: <code>Searching: React</code></p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Deliverables</h2>
          <p className="text-sm text-slate-700">Students must submit:</p>
          <p className="text-sm font-semibold text-slate-800">Working App. Includes:</p>
          <PlainList items={['event-driven input', 'one effect used correctly', 'filtered UI']} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">README Reflection</h2>
          <ol className="list-decimal list-inside text-sm text-slate-700 space-y-0.5">
            <li>What is the difference between an event and an effect?</li>
            <li>When should you use useEffect?</li>
            <li>When should you avoid it?</li>
            <li>What does the dependency array do?</li>
            <li>Why is cleanup important?</li>
          </ol>
        </div>
      </div>

      <Note tone="amber" title="About question 5">
        <p>Your project may have no cleanup at all, and that's correct. Setting <code>document.title</code> starts nothing that keeps running. Don't add a cleanup just to have one. Answer question 5 from what you saw on the timer and resize exercises.</p>
      </Note>

      <ExampleBlock
        variant="wedo"
        title="Mini project intro: plan it in 5 minutes"
        exercise="09-1-we-do-plan"
        description="Use the demo above, then answer out loud before anyone opens an editor."
        minutes="5"
      >
        <div className="grid gap-3 md:grid-cols-3">
          <RevealCard question="What is the state?" label="Reveal">
            <p>Only <code>query</code>. The items don't change, so they aren't state.</p>
          </RevealCard>
          <RevealCard question="What is calculated?" label="Reveal">
            <p><code>filteredItems</code> and its count. No state and no effect.</p>
          </RevealCard>
          <RevealCard question="What needs an effect?" label="Reveal">
            <p>The tab title, since it's outside React. It reads <code>query</code>, so the array is <code>[query]</code>.</p>
          </RevealCard>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Work time: build it"
        exercise="09-2-you-do-search-dashboard"
        description="Protect this time. Students work on their own project, or from the starter (student-projects/09-search-dashboard-starter). Circulate with the checklist below."
        minutes="40"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="1. Event: controlled input">{`const [query, setQuery] = useState("")

<input
  value={query}
  onChange={(event) => setQuery(event.target.value)}
/>`}</CodeBlock>
          <CodeBlock label="2. Render: calculate the filter">{`const filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(query.toLowerCase())
)`}</CodeBlock>
          <CodeBlock label="3. Effect: sync the title">{`useEffect(() => {
  document.title = \`Searching: \${query}\`
}, [query])`}</CodeBlock>
          <Note tone="emerald" title="Instructor: what to look for">
            <ul className="list-disc list-inside space-y-1">
              <li><code>filteredItems</code> in state, set from an effect. This is the fullName mistake. Have them type one letter and count renders.</li>
              <li>Filtering the list and saving the result over the original, so deleted text doesn't bring items back. Filter from the full list every time.</li>
              <li>Case-sensitive matching: "react" misses "React".</li>
              <li>Don't project "Run solution" during work time. It's the graded answer.</li>
            </ul>
          </Note>
        </div>
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Grading checklist</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Checklist
            title="Working app"
            items={[
              'Controlled input (event-driven)',
              'Live query display',
              'Filters a list of items, and shows filtered results',
              'One effect, used correctly, updates the page title',
              'README answers all 5 reflection questions',
            ]}
          />
          <Checklist
            title="Good performance signs"
            items={[
              'Uses events correctly',
              'Uses useEffect only where needed',
              'Explains dependency arrays correctly',
              'Includes cleanup where appropriate (none is correct for a title effect)',
              'Avoids unnecessary state/effects',
            ]}
          />
          <Checklist
            title="Common mistakes to watch for"
            items={[
              'Putting calculations in useEffect',
              'Missing dependency arrays',
              'Mutating state',
              'Forgetting cleanup',
              'Calling handlers immediately instead of passing them',
            ]}
          />
          <Note tone="slate" title="Instructor only: reference apps">
            <p>Three finished submissions are in <code>assignment-demos/</code>. Don't hand them out before the due date.</p>
            <ul className="list-disc list-inside mt-1 space-y-0.5">
              <li><code>01-recipe-finder</code>: minimum solid submission</li>
              <li><code>02-trail-finder</code>: componentized, adds a category filter</li>
              <li><code>03-gear-library</code>: stretch, adds an extra effect with cleanup</li>
            </ul>
          </Note>
        </div>
      </section>

      <ExampleBlock
        variant="youdo"
        title="Finish early: find the five mistakes"
        exercise="09-3-you-do-find-the-mistakes"
        description="A working app that has all five common mistakes. Find them, fix them, then look for the same ones in your own project. Or start the rebuild challenge on page 10."
      />
    </LessonShell>
  )
}
