// I DO: the key rule. Pass a function to the event. Don't call it.
//
//   Open the console and run this BEFORE clicking anything.
//     - "handleClick ran" is already there. Nobody clicked.
//     - Click the button. Nothing happens, because onClick received undefined.
//
//   Break it worse: replace the console.log with setCount(count + 1) and save.
//     You get "Too many re-renders". Calling it during render sets state, which renders again.
//
//   Fix: remove the parentheses. onClick={handleClick}
//   Need an argument? Wrap it: onClick={() => handleClick("Ada")}

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    console.log("handleClick ran")
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick()}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
