// I DO: onClick, onChange, onSubmit, onMouseEnter, onMouseLeave.
// event.preventDefault() stops the browser's default for a form, which is reloading the page.

import { useState } from "react"

function App() {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState("")
  const [submitted, setSubmitted] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(text)
  }

  return (
    <div>
      <div
        className={isHovering ? "hover-box active" : "hover-box"}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering ? "Hovering" : "Hover over me"}
      </div>

      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button>Submit</button>
      </form>
      <p>Last submitted: {submitted}</p>
    </div>
  )
}

export default App
