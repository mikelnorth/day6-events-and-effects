// WE DO: plan the Search Dashboard before anyone builds it. Answers show on the page as you save.

const plan = {
  state: `TODO: what is the minimal state?`,
  calculated: `TODO: what can be calculated during render?`,
  event: `TODO: which event changes the state?`,
  effect: `TODO: what is outside React? What goes in the dependency array?`,
  cleanup: `TODO: does this effect need cleanup? Why or why not?`,
}

export default function App() {
  return (
    <div>
      <h1>Search Dashboard plan</h1>
      <h3>1. State</h3>
      <pre>{plan.state}</pre>
      <h3>2. Calculated</h3>
      <pre>{plan.calculated}</pre>
      <h3>3. Event</h3>
      <pre>{plan.event}</pre>
      <h3>4. Effect</h3>
      <pre>{plan.effect}</pre>
      <h3>5. Cleanup</h3>
      <pre>{plan.cleanup}</pre>
    </div>
  )
}
