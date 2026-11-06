import { useEffect, useState } from "react"
import DifficultyFilter from "./components/DifficultyFilter"
import NoResults from "./components/NoResults"
import SearchBar from "./components/SearchBar"
import StatsBar from "./components/StatsBar"
import TrailList from "./components/TrailList"
import trails from "./data/trails"

function App() {
  const [query, setQuery] = useState("")
  const [difficulty, setDifficulty] = useState("All")

  // The search term, filtered list, and stats can all be calculated from query
  // and difficulty, so they are derived during render. Keeping them in state or
  // setting them in an effect would add an extra render and a chance to get out of sync.
  const searchTerm = query.trim()
  const lowerSearchTerm = searchTerm.toLowerCase()

  const filteredTrails = trails.filter((trail) => {
    const matchesText =
      trail.name.toLowerCase().includes(lowerSearchTerm) ||
      trail.region.toLowerCase().includes(lowerSearchTerm)
    const matchesDifficulty = difficulty === "All" || trail.difficulty === difficulty

    return matchesText && matchesDifficulty
  })

  const trailCount = filteredTrails.length
  const totalMiles = filteredTrails.reduce((sum, trail) => sum + trail.miles, 0)

  // The browser tab title lives outside React, so this one needs an effect.
  useEffect(() => {
    const trimmedQuery = query.trim()
    document.title = trimmedQuery ? `Searching: ${trimmedQuery}` : "Trail Finder"
  }, [query])

  function handleQueryChange(event) {
    setQuery(event.target.value)
  }

  function handleReset() {
    setQuery("")
    setDifficulty("All")
  }

  return (
    <div className="min-h-screen">
      <header className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight">Trail Finder</h1>
          <p className="mt-1 text-emerald-100">
            Search {trails.length} hikes by name or region, then narrow them down by difficulty.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6">
        <section
          aria-label="Search and filter"
          className="space-y-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <SearchBar query={query} searchTerm={searchTerm} onQueryChange={handleQueryChange} />
          <DifficultyFilter selected={difficulty} onSelect={setDifficulty} />
        </section>

        <StatsBar trailCount={trailCount} totalMiles={totalMiles} />

        {trailCount > 0 ? (
          <TrailList trails={filteredTrails} />
        ) : (
          <NoResults searchTerm={searchTerm} difficulty={difficulty} onReset={handleReset} />
        )}
      </main>
    </div>
  )
}

export default App
