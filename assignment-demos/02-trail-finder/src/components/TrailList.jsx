import TrailCard from "./TrailCard"

function TrailList({ trails }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trails.map((trail) => (
        <TrailCard key={trail.id} trail={trail} />
      ))}
    </ul>
  )
}

export default TrailList
