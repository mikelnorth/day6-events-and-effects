export default function SearchBar({ query, onQueryChange }) {
  function handleChange(event) {
    onQueryChange(event.target.value)
  }

  return <input value={query} onChange={handleChange} placeholder="Search..." />
}
