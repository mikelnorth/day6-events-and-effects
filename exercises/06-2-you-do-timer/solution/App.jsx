// YOU DO solution.
//
// Why the updater form? The effect only runs on mount, so a `seconds` read inside it stays 0
// forever. setSeconds(seconds + 1) would set 1 over and over. prevSeconds is always current.

import { useState, useEffect } from "react"

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

  return <h2>Seconds: {seconds}</h2>
}

export default Timer
