// WE DO: the 3 main useEffect patterns. Predict before you click.
//
//   Pattern 1 is here. Add the other two:
//
//     useEffect(() => {
//       console.log("Runs once on mount")
//     }, [])
//
//     useEffect(() => {
//       console.log("Runs when count changes")
//     }, [count])
//
//   Clear the console, then click Increase. Which lines print? Clear it, then type. Which now?
//
//   "Runs once on mount" prints TWICE when the page loads. That's expected in development.
//   StrictMode runs setup, cleanup, setup. It's only in development, and page 6 shows why.

import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    console.log("Runs after every render")
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  )
}

export default App
