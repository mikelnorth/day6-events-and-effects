// YOU DO solution. The window is outside React, so this is an effect.
//
// Stretch: const label = width < 600 ? "Small" : "Large", calculated during render. It doesn't
// need its own state or effect.

import { useState, useEffect } from "react"

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <p>Window width: {width}px</p>
}

export default WindowWidth
