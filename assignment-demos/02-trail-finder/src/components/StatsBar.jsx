function StatsBar({ trailCount, totalMiles }) {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <dt className="text-sm text-stone-600">
          {trailCount === 1 ? "Matching trail" : "Matching trails"}
        </dt>
        <dd className="mt-1 text-2xl font-bold text-emerald-900">{trailCount}</dd>
      </div>
      <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <dt className="text-sm text-stone-600">Total miles</dt>
        <dd className="mt-1 text-2xl font-bold text-emerald-900">{totalMiles.toFixed(1)}</dd>
      </div>
    </dl>
  )
}

export default StatsBar
