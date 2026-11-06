// YOU DO: all five fixed.
//
//   1. Calculation in an effect: itemCount is now items.length.
//   2. Missing dependency array: the title effect now has [items.length].
//   3. Mutating state: push is now a new array, [...items, text].
//   4. Forgetting cleanup: the interval is now cleared.
//   5. Calling immediately: logItems() is now logItems.

import { useState, useEffect } from "react"

export default function App() {
  const [items, setItems] = useState(["Tent", "Stove"])
  const [text, setText] = useState("")
  const [seconds, setSeconds] = useState(0)

  const itemCount = items.length

  useEffect(() => {
    document.title = `Items: ${itemCount}`
  }, [itemCount])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function handleAdd() {
    setItems([...items, text])
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
      <button onClick={logItems}>Log items</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
