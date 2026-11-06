// YOU DO (finish early): find the five common mistakes in this file, then fix them.
//
//   - putting calculations in useEffect
//   - missing dependency arrays
//   - mutating state
//   - forgetting cleanup
//   - calling handlers immediately instead of passing them
//
//   Clues: add an item and watch the count. Watch Seconds right after a refresh. Check the console
//   before you click Log items. After adding a cleanup, refresh the page.
//   Then look for the same five in your own Search Dashboard.

import { useState, useEffect } from "react"

export default function App() {
  const [items, setItems] = useState(["Tent", "Stove"])
  const [text, setText] = useState("")
  const [itemCount, setItemCount] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setItemCount(items.length)
  }, [items])

  useEffect(() => {
    document.title = `Items: ${items.length}`
  })

  useEffect(() => {
    setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)
  }, [])

  function handleAdd() {
    items.push(text)
    setItems(items)
    setText("")
  }

  function logItems() {
    console.log("Items:", items)
  }

  return (
    <div>
      <h1>Packing list</h1>
      <p>Seconds on this page: {seconds}</p>
      <p>Items: {itemCount}</p>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={logItems()}>Log items</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
