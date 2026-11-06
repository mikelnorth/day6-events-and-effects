// I DO: StrictMode exposes a missing cleanup.
//
//   1. Watch Seconds next to a real clock. It counts about 2 per second. Check the console:
//      two "setup" lines and two Ticks each second. StrictMode ran setup, cleanup, setup in
//      development, there's no cleanup, so the first interval never stopped.
//   2. Click Hide timer. The ticks keep going. The component is gone and the interval isn't.
//   3. Add the cleanup. Save the id, and return a function from the effect:
//
//        const id = setInterval(...)
//        return () => {
//          console.log("cleanup: stopping the interval")
//          clearInterval(id)
//        }
//
//   4. Save, then REFRESH THE PAGE. Intervals that started before your fix can't be stopped by it.
//      Saving alone doesn't restart this effect, so it stays at double speed until you do.
//   5. Now it's 1 per second, and Hide timer stops the ticks. The bug was always there. In
//      production, it would show up every time someone hid the timer.

import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log("setup: starting an interval")

    setInterval(() => {
      console.log("Tick")
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)
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
