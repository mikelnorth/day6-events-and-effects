import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'

export default function Recap() {
  return (
    <LessonShell
      number="1"
      title="Day 5 recap & the big idea"
      subtitle="Up to this point, our apps respond to clicks and typing. Today we learn how React responds to events and how it synchronizes with the outside world."
      minutes="10"
    >
      <ExampleBlock
        variant="wedo"
        title="Day 5 recap"
        exercise="01-1-we-do-recap"
        description="Cold call. Run the starter and have students point at the code as they answer."
        minutes="6"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="Where should state live?">
            <p>In the closest common parent of the components that need it. If only one component uses it, keep it there.</p>
          </RevealCard>
          <RevealCard question="How do components communicate?">
            <p>Data down, events up. Parents pass props. Children call functions they were given.</p>
          </RevealCard>
          <RevealCard question="What triggers a re-render?">
            <p>A state change. When a component re-renders, its children render too.</p>
          </RevealCard>
          <RevealCard question="What is the difference between props and state?">
            <p>Props are passed in by the parent and are read-only. State belongs to the component and changes over time.</p>
          </RevealCard>
        </div>
      </ExampleBlock>

      <ConceptCallout title="React has two major phases to learn today." eyebrow="Big push for today">
        <p>That distinction is the heart of Day 6.</p>
      </ConceptCallout>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-indigo-200 bg-white px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-indigo-700 font-semibold">Phase 1</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-1">Render UI</h2>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">React calculates what the UI should look like. <strong>Events</strong> happen because the user does something, and they usually change state, which renders again.</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-white px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Phase 2</p>
          <h2 className="text-xl font-semibold text-slate-900 mt-1">Synchronize with something outside React</h2>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed"><strong>Effects</strong> happen because React needs to sync with an outside system: the browser tab, a timer, the window.</p>
        </div>
      </div>

      <DocsLink title="Synchronizing with Effects: What are Effects and how are they different from events?" href="https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events">
        The same distinction, in the docs' words. We follow this page for most of today.
      </DocsLink>
    </LessonShell>
  )
}
