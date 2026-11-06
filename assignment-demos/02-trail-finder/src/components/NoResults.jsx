function NoResults({ searchTerm, difficulty, onReset }) {
  return (
    <div className="rounded-xl border border-dashed border-stone-300 bg-white px-6 py-10 text-center">
      <h2 className="text-lg font-semibold text-stone-900">No trails found</h2>
      <p className="mt-1 text-stone-600">
        Nothing matches "{searchTerm}"
        {difficulty !== "All" && ` in the ${difficulty} trails`}. Try another word or start over.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 cursor-pointer rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        Reset search and filter
      </button>
    </div>
  )
}

export default NoResults
