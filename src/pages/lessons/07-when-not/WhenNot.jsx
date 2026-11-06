import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import FullNameDemo from './FullNameDemo.jsx'
import EffectOrNoEffect from './EffectOrNoEffect.jsx'

export default function WhenNot() {
  return (
    <LessonShell
      number="7"
      title="When NOT to use useEffect"
      subtitle="One of the most important parts of the day. Students often overuse effects."
      minutes="10"
    >
      <ConceptCallout title="If you can calculate it, you don't need an effect." eyebrow="Key rule">
        <p>Same rule as Day 4's "Don't store what you can calculate", and now you can see what it costs.</p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="The extra render"
        exercise="07-1-i-do-fullname-extra-render"
        description="Type one letter into each box. The bad version renders twice per keystroke, and its first render shows the old full name. The good version renders once and is never stale."
        minutes="4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Bad">{`const [fullName, setFullName] = useState("")

useEffect(() => {
  setFullName(firstName + " " + lastName)
}, [firstName, lastName])`}</CodeBlock>
          <CodeBlock label="Better">{`const fullName = firstName + " " + lastName`}</CodeBlock>
        </div>
        <FullNameDemo />
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Exercise 4: Effect or No Effect?"
        exercise="07-2-we-do-effect-or-no-effect"
        description="This exercise is extremely valuable. Hands up for each one before you click. Ask: is React syncing with something outside, or just calculating UI?"
        minutes="6"
      >
        <EffectOrNoEffect />
        <Note tone="amber" title="If you have a minute: two more">
          <div className="mt-2">
            <EffectOrNoEffect showBonus />
          </div>
        </Note>
      </ExampleBlock>

      <DocsLink title="You Might Not Need an Effect: Updating state based on props or state" href="https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state">
        This same firstName and lastName example is the docs' first one. Read through it together if you can.
      </DocsLink>

      <DocsChallenges
        page="You Might Not Need an Effect"
        href="https://react.dev/learn/you-might-not-need-an-effect"
        challenges={[
          { title: 'Transform data without Effects', when: 'homework', note: 'A filtered todo list with too much state. Do this one first: it\'s the same thinking as the mini project.' },
          { title: 'Submit a form without Effects', when: 'homework', note: 'Sending belongs in the submit event, not in an effect.' },
          { title: 'Reset state without Effects', when: 'stretch', note: 'Reset a form using a key instead of an effect.' },
          { title: 'Cache a calculation without Effects', when: 'skip', note: 'Uses useMemo, which is out of scope today.' },
        ]}
      />
    </LessonShell>
  )
}
