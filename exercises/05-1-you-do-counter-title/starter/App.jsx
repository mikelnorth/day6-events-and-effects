// YOU DO: Exercise 2, Update the Document Title.
//
//   Use useEffect to keep the browser tab title in sync with count: "Count: 3"
//
//     1. Import useEffect.
//     2. Set document.title inside the effect.
//     3. Add the dependency array. What does this effect read?
//
//   Done early? Add a text input. Log inside the effect and prove typing doesn't re-run it.

import { useState } from "react"

function CounterTitle() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter Title</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterTitle
