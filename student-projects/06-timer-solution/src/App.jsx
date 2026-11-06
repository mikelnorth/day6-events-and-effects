// YOU DO: stretch solution. The effect's job is "keep an interval running while isRunning is true."
//
//   Click Stop:  isRunning changed, so cleanup clears the old interval. Setup runs and returns
//                early, so nothing is running.
//   Click Start: isRunning changed. There's no cleanup from the last run. Setup starts an interval.
//
// The click only changes state. The effect keeps the interval in sync with that state.

import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

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
