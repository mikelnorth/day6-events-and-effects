// YOU DO: one way to do it.
//
//   Live input:    no effect. An event updates state, and the UI is calculated from it.
//   Title updater: effect, no cleanup. It syncs state to the tab title.
//   Timer:         effect and cleanup. It starts something that keeps running.

import { useState, useEffect } from "react"

function InputPreview() {
  const [text, setText] = useState("")

  return (
    <div>
      <h2>Live Input Preview</h2>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => setText("")}>Clear</button>
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
    </div>
  )
}

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

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h1>Day 6 - Events & Effects</h1>
      <InputPreview />
      <CounterTitle />
      <Timer />
    </div>
  )
}
