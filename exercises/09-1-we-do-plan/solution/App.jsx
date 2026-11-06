// WE DO: one good plan.

const plan = {
  state: `query. That's all. The list of items never changes, so it isn't state.`,
  calculated: `filteredItems, from items and query. The result count, from filteredItems.`,
  event: `onChange on the input calls setQuery(event.target.value).`,
  effect: `The browser tab title is outside React. It reads query, so the array is [query].`,
  cleanup: `No. Setting a title starts nothing that keeps running, so there's nothing to stop.
Timers and listeners need cleanup. You'll still answer the cleanup question in your README.`,
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
