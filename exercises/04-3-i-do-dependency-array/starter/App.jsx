// I DO: the dependency array says "run this effect again only when these values change."
//
//   1. Click Increase and watch the browser tab title. It says "Count: 0" forever. Why?
//      The array is empty, so the effect never runs again.
//   2. Change [] to [count]. Click again. The title follows the count.
//   3. Add a line to the effect: console.log("title effect ran"). Now type in the input.
//      It doesn't print. Typing changes `text`, and `text` isn't in the array.

import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  )
}

export default App
