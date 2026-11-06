import { useEffect, useState } from 'react'

const items = [
  { id: 1, title: 'React docs: Responding to Events', category: 'Docs' },
  { id: 2, title: 'React docs: Synchronizing with Effects', category: 'Docs' },
  { id: 3, title: 'React docs: You Might Not Need an Effect', category: 'Docs' },
  { id: 4, title: 'MDN: setInterval', category: 'Reference' },
  { id: 5, title: 'MDN: Window resize event', category: 'Reference' },
  { id: 6, title: 'MDN: Document title', category: 'Reference' },
  { id: 7, title: 'Practice: Live input preview', category: 'Exercise' },
  { id: 8, title: 'Practice: React timer component', category: 'Exercise' },
  { id: 9, title: 'Practice: Window width tracker', category: 'Exercise' },
]

export default function SearchDemo() {
  const [query, setQuery] = useState('')

  const search = query.trim().toLowerCase()
  const filteredItems = items.filter((item) => item.title.toLowerCase().includes(search))

  // Teaching app only: puts this app's title back when you leave the page.
  useEffect(() => {
    const original = document.title
    return () => {
      document.title = original
    }
  }, [])

  useEffect(() => {
    document.title = query ? `Searching: ${query}` : 'Search Dashboard'
  }, [query])

  return (
    <div className="space-y-3 text-sm text-slate-800">
      <input
        className="w-full max-w-sm rounded-md border border-slate-300 px-3 py-1.5"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try: react"
      />
      <p>Searching for: <strong>{query}</strong></p>
      <p className="text-slate-500">{filteredItems.length} results</p>
      <ul className="divide-y divide-slate-100">
        {filteredItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 py-1.5">
            <span>{item.title}</span>
            <span className="rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-semibold px-2 py-0.5">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
