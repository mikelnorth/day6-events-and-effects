// I DO: rendering calculates the UI. An effect runs after render, to sync with something outside.
//
//   1. Open the console. Click Increase. You see "1. Rendering".
//   2. Add this under the useState line, with the import at the top:
//
//        useEffect(() => {
//          console.log("2. Effect, after render")
//        })
//
//   3. Click again. The effect logs AFTER the render, even though it's written above the return.
//
//   Notice the extra logs when the page loads? That's StrictMode. It's coming on page 6.

import { useState } from "react"

function App() {
  const [name] = useState("Ada")
  const [count, setCount] = useState(0)

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
