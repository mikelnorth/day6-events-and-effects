// YOU DO: Day 6 Mini Project, Search Dashboard. The static page is done. Nothing responds yet.
//
//   1. Controlled input: add query state, then value and onChange on the input.
//   2. Live query display: show the query in the "Searching for" line.
//   3. Item filter: calculate filteredItems from items and query, during render.
//      Don't put it in state, and don't use an effect. Match upper and lower case.
//   4. Show filtered results: map over filteredItems, and show how many matched.
//   5. Effect: use useEffect to update the page title. "Searching: React"
//      What does the effect read? That goes in the dependency array.
//
//   Check: type "react", then watch the list, the count, and the browser tab.
//   Then use your own items. Split into components if you have time.
//   Don't forget the README reflection. Questions are in the handout.

import { items } from "./items.js"

export default function App() {
  return (
    <div>
      <h1>Search Dashboard</h1>
      <input placeholder="Search..." />
      <p>Searching for: </p>
      <p>{items.length} results</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span className="tag">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
