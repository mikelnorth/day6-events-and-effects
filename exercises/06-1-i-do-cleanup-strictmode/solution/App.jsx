// I DO: cleanup stops what setup started.
//
// Cleanup runs before the effect runs again, and when the component is removed. In development,
// the load order is setup, cleanup, setup, so exactly one interval is left running.
//
// Refresh after saving this over the starter. Intervals from before the fix keep running otherwise.

import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log("setup: starting an interval")

    const id = setInterval(() => {
      console.log("Tick")
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      console.log("cleanup: stopping the interval")
      clearInterval(id)
    }
  }, [])

  return <h2>Seconds: {seconds}</h2>
}

export default function App() {
  const [showTimer, setShowTimer] = useState(true)

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide timer" : "Show timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  )
}
