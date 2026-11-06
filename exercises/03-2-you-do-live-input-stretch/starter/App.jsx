// YOU DO: Exercise 1 stretch. This is the finished base exercise.
//
//   1. Show a warning if the text is over 20 characters.
//   2. Add a submit button that's disabled when the input is empty. That takes a form:
//        - wrap the input and buttons in <form onSubmit={handleSubmit}>
//        - call event.preventDefault() first in handleSubmit, or the page reloads
//        - show the submitted text, then clear the input
//        - use disabled={text.trim() === ""} on the submit button
//        - give Clear type="button". Any other button in a form submits it.

import { useState } from "react"

function InputPreview() {
  const [text, setText] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  function clearText() {
    setText("")
  }

  return (
    <div>
      <h2>Live Input Preview</h2>
      <input value={text} onChange={handleChange} />
      <button onClick={clearText}>Clear</button>
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
    </div>
  )
}

export default InputPreview
