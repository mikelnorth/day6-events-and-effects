// YOU DO: Exercise 3 stretch, a Stop button. The button is wired up but the timer ignores it. Why?
//
//   The effect's array is [], so it never hears that isRunning changed.
//
//     1. Change the array to [isRunning].
//     2. At the top of the effect, stop if it shouldn't run: if (!isRunning) return
//
//   Then walk through it. What runs when you click Stop? And when you click Start?

import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

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
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default Timer
