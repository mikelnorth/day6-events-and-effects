function SearchBar({ query, searchTerm, onQueryChange }) {
  return (
    <div>
      <label htmlFor="trail-search" className="block text-sm font-semibold text-stone-700">
        Search trails
      </label>
      <input
        id="trail-search"
        type="text"
        value={query}
        onChange={onQueryChange}
        placeholder="Try &quot;ridge&quot; or &quot;Cedar Basin&quot;"
        autoComplete="off"
        className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 placeholder:text-stone-500 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/30 focus:outline-none"
      />
      <p className="mt-2 text-sm text-stone-600">
        {searchTerm ? `Searching for: "${searchTerm}"` : "Type to search by name or region."}
      </p>
    </div>
  )
}

export default SearchBar
