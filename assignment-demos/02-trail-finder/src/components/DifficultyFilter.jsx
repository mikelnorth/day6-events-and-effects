const DIFFICULTIES = ["All", "Easy", "Moderate", "Hard"]

function DifficultyFilter({ selected, onSelect }) {
  return (
    <div role="group" aria-label="Filter by difficulty" className="flex flex-wrap gap-2">
      {DIFFICULTIES.map((option) => {
        const isSelected = option === selected

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(option)}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
              isSelected
                ? "border-emerald-800 bg-emerald-800 text-white"
                : "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default DifficultyFilter
