// YOU DO solution. Instructor only until the due date.
//
//   One piece of state: query. filteredItems is calculated during render, with no state or effect.
//   One effect: the tab title is outside React, and the effect reads query, so [query].
//   No cleanup: setting a title starts nothing that keeps running. There's nothing to stop.

import { useState, useEffect } from "react"
import { items } from "./items.js"
import SearchBar from "./components/SearchBar.jsx"
import ResultsList from "./components/ResultsList.jsx"

export default function App() {
  const [query, setQuery] = useState("")

  const search = query.trim().toLowerCase()
  const filteredItems = items.filter((item) => item.title.toLowerCase().includes(search))

  useEffect(() => {
    document.title = query ? `Searching: ${query}` : "Search Dashboard"
  }, [query])

  return (
    <div>
      <h1>Search Dashboard</h1>
      <SearchBar query={query} onQueryChange={setQuery} />
      <p>Searching for: {query}</p>
      <ResultsList items={filteredItems} />
    </div>
  )
}
