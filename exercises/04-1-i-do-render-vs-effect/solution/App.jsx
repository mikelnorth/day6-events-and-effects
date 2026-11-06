// I DO: React renders first, updates the page, and then runs the effect.
//
// In development, StrictMode runs the render twice and adds one extra effect cycle on load, so
// some lines appear twice. It's explained on page 6.

import { useState, useEffect } from "react"

function App() {
  const [name] = useState("Ada")
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("2. Effect, after render")
  })

  console.log("1. Rendering")

  return (
    <div>
      <h1>{name}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App
