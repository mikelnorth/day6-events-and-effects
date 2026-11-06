// I DO: render happens, the effect runs after render, and if count changes, the effect runs again.
//
// The rule: list every value from the component that the effect reads. This effect reads count.

import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    console.log("title effect ran")
    document.title = `Count: ${count}`
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
