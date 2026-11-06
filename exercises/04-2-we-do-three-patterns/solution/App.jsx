// WE DO: the answers.
//
//   Click Increase: "after every render" and "when count changes".
//   Type:           "after every render" only.
//   Page load:      all three, twice each, because of StrictMode in development.

import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // 1. No array. Runs after every render. Usually not what you want.
  useEffect(() => {
    console.log("Runs after every render")
  })

  // 2. Empty array. Runs after the first render. Used for setup.
  useEffect(() => {
    console.log("Runs once on mount")
  }, [])

  // 3. Dependencies. Runs when count changes. The most common pattern.
  useEffect(() => {
    console.log("Runs when count changes")
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  )
}

export default App
