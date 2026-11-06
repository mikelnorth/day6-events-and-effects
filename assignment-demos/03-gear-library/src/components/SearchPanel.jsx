function SearchPanel({
  query,
  searchText,
  availableOnly,
  resultCount,
  readyCount,
  totalCount,
  onQueryChange,
  onAvailableChange,
  onClear,
}) {
  return (
    <section className="search-panel" aria-label="Search the gear library">
      <div className="search-row">
        <div className="search-field">
          <label htmlFor="gear-search">Search gear</label>
          <input
            id="gear-search"
            type="text"
            autoComplete="off"
            placeholder="Try drill, solder, or textiles"
            value={query}
            onChange={onQueryChange}
          />
        </div>
        <button type="button" className="button" onClick={onClear}>
          Clear
        </button>
      </div>

      <label className="available-toggle">
        <input
          type="checkbox"
          checked={availableOnly}
          onChange={onAvailableChange}
        />
        Available only
      </label>

      <p className="live-query">
        {searchText
          ? `Searching for: "${searchText}"`
          : "Showing the whole library"}
      </p>

      <p className="result-count" role="status">
        {resultCount} of {totalCount} items shown, {readyCount} ready to check
        out
      </p>

      <p className="key-hint">
        Press <kbd>Esc</kbd> anywhere to clear your search.
      </p>
    </section>
  )
}

export default SearchPanel
