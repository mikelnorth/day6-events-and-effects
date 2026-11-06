// YOU DO solution. The effect runs after render, the array watches count, and React syncs state
// to the browser title. The title is outside React, which is why this is an effect.

import { useState, useEffect } from "react"

function CounterTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

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
