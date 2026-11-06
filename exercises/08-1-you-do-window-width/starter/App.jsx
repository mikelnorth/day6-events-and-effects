// YOU DO: Exercise 5, Window Width Tracker.
//
//   Goals:
//     - listen for resize
//     - update state
//     - remove the listener on cleanup
//
//   Same shape as the timer: setup starts something, and cleanup stops it.
//
//     function handleResize() { setWidth(window.innerWidth) }
//     window.addEventListener("resize", handleResize)
//     window.removeEventListener("resize", handleResize)
//
//   removeEventListener needs the SAME function, so define handleResize inside the effect.
//
//   Check it: add console.log("resize") in handleResize and drag the window. Two logs per event
//   means two listeners, which means the cleanup is missing. Fix it, then refresh the page.

import { useState } from "react"

function WindowWidth() {
  const [width] = useState(window.innerWidth)

  // TODO: useEffect

  return <p>Window width: {width}px</p>
}

export default WindowWidth
