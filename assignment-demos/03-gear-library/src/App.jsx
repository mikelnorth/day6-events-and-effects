import { useEffect, useState } from "react"
import gear from "./data/gear"
import SearchPanel from "./components/SearchPanel"
import GearShelf from "./components/GearShelf"

function App() {
  const [query, setQuery] = useState("")
  const [availableOnly, setAvailableOnly] = useState(false)

  // Effect 1 syncs with the browser tab title, which lives outside React.
  // No cleanup: the next run just overwrites the title, and App never unmounts.
  useEffect(() => {
    const searchText = query.trim()
    document.title = searchText ? `Searching: ${searchText}` : "Gear Library"
  }, [query])

  // Effect 2 syncs with the window's keyboard events. React has no onKeyDown for
  // "anywhere on the page", so we subscribe to the window ourselves.
  // setQuery("") doesn't read any state, so [] can't leave us with a stale value.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setQuery("")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function handleQueryChange(event) {
    setQuery(event.target.value)
  }

  function handleAvailableChange(event) {
    setAvailableOnly(event.target.checked)
  }

  function clearSearch() {
    setQuery("")
  }

  function showCheckedOut() {
    setAvailableOnly(false)
  }

  // Everything below is calculated from state during render. None of it needs
  // its own state or an effect, because it can't get out of sync this way.
  const searchText = query.trim()
  const lowerSearchText = searchText.toLowerCase()

  const visibleGear = gear.filter((item) => {
    const matchesText =
      item.name.toLowerCase().includes(lowerSearchText) ||
      item.category.toLowerCase().includes(lowerSearchText)
    const matchesAvailability = !availableOnly || item.available

    return matchesText && matchesAvailability
  })

  const readyCount = visibleGear.filter((item) => item.available).length

  return (
    <div className="page">
      <header className="masthead">
        <p className="masthead-kicker">School Makerspace</p>
        <h1>Gear Library</h1>
      </header>

      <main>
        <SearchPanel
          query={query}
          searchText={searchText}
          availableOnly={availableOnly}
          resultCount={visibleGear.length}
          readyCount={readyCount}
          totalCount={gear.length}
          onQueryChange={handleQueryChange}
          onAvailableChange={handleAvailableChange}
          onClear={clearSearch}
        />

        <GearShelf
          items={visibleGear}
          searchText={searchText}
          availableOnly={availableOnly}
          onClearSearch={clearSearch}
          onShowCheckedOut={showCheckedOut}
        />
      </main>
    </div>
  )
}

export default App
