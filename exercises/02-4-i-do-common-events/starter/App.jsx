// I DO: the common React events. Same idea every time: pass a function.
//
//   1. onMouseEnter and onMouseLeave on the box: setIsHovering(true) and setIsHovering(false)
//   2. onSubmit on the form: type something and press Enter first.
//      The page reloads! That's the browser's default for a form.
//   3. Fix it with event.preventDefault() at the top of handleSubmit, then setSubmitted(text).

import { useState } from "react"

function App() {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState("")
  const [submitted, setSubmitted] = useState("")

  return (
    <div>
      <div className={isHovering ? "hover-box active" : "hover-box"}>
        {isHovering ? "Hovering" : "Hover over me"}
      </div>

      <form>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button>Submit</button>
      </form>
      <p>Last submitted: {submitted}</p>
    </div>
  )
}

export default App
