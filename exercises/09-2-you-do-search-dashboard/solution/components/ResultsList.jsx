export default function ResultsList({ items }) {
  return (
    <div>
      <p>{items.length} results</p>
      {items.length === 0 && <p className="muted">Nothing matches that search.</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span className="tag">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
