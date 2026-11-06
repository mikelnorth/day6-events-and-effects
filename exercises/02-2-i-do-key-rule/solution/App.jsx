// I DO: handleClick is passed, not called, so it only runs on a click.
// The arrow function is a new function that calls handleGreet with an argument when clicked.

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function handleGreet(name) {
    console.log(`Hello, ${name}`)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleGreet("Ada")}>Greet</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
