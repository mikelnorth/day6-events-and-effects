import { useState, useEffect } from "react"
import recipes from "./recipes"

function App() {
  const [query, setQuery] = useState("")

  // The browser tab title lives outside React, so syncing it is a job for an effect.
  useEffect(() => {
    const typed = query.trim()
    document.title = typed === "" ? "Recipe Finder" : `Searching: ${typed}`
  }, [query])

  function handleQueryChange(event) {
    setQuery(event.target.value)
  }

  function handleClear() {
    setQuery("")
  }

  const trimmedQuery = query.trim()
  const searchTerm = trimmedQuery.toLowerCase()

  // Calculated from state during render, so it needs no state or effect of its own.
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.category.toLowerCase().includes(searchTerm),
  )

  return (
    <main className="app">
      <h1>Recipe Finder</h1>

      <label htmlFor="recipe-search">Search by recipe name or meal</label>
      <div className="search-row">
        <input
          id="recipe-search"
          type="text"
          placeholder="Try pasta or dessert"
          value={query}
          onChange={handleQueryChange}
        />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>

      <p className="query">
        {trimmedQuery === ""
          ? "Type above to start searching."
          : `Searching for: "${trimmedQuery}"`}
      </p>
      <p className="count" role="status">
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>

      {filteredRecipes.length === 0 ? (
        <p className="no-results">
          No recipes match that search. Try a different word, or clear it to
          see them all.
        </p>
      ) : (
        <ul className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe">
              <h2>{recipe.name}</h2>
              <p>
                {recipe.category} · {recipe.minutes} min
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
