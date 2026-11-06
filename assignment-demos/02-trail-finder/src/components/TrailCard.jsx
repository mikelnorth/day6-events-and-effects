const BADGE_COLORS = {
  Easy: "bg-emerald-100 text-emerald-900",
  Moderate: "bg-amber-100 text-amber-900",
  Hard: "bg-rose-100 text-rose-900",
}

function TrailCard({ trail }) {
  return (
    <li className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="font-semibold text-stone-900">{trail.name}</h2>
      <p className="mt-1 text-sm text-stone-600">{trail.region}</p>
      <div className="mt-4 flex items-center justify-between gap-2 pt-1 text-sm">
        <span className={`rounded-full px-2.5 py-0.5 font-medium ${BADGE_COLORS[trail.difficulty]}`}>
          {trail.difficulty}
        </span>
        <span className="font-medium text-stone-700">{trail.miles.toFixed(1)} miles</span>
      </div>
    </li>
  )
}

export default TrailCard
