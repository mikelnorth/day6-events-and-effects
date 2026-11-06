// YOU DO: Exercise 3, Timer Component.
//
//   Requirements:
//     - seconds state
//     - an interval that updates every second
//     - cleanup that clears the interval
//
//   Stuck at 1? Use the updater form: setSeconds((prevSeconds) => prevSeconds + 1)
//   Counting by 2? You're missing the cleanup. Add it, then refresh the page.
//
//   Check: it counts 1 per second, even right after a refresh.

import { useState } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  // TODO: useEffect with setInterval and a cleanup function

  return <h2>Seconds: {seconds}</h2>
}

export default Timer
