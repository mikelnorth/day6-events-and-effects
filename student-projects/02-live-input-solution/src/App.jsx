// YOU DO: stretch solution. isEmpty and isTooLong are calculated during render, not stored.

import { useState } from "react"

function InputPreview() {
  const [text, setText] = useState("")
  const [submitted, setSubmitted] = useState("")

  const isEmpty = text.trim() === ""
  const isTooLong = text.length > 20

  function handleChange(event) {
    setText(event.target.value)
  }

  function clearText() {
    setText("")
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(text)
    setText("")
  }

  return (
    <div>
      <h2>Live Input Preview</h2>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="button" onClick={clearText}>Clear</button>
        <button type="submit" disabled={isEmpty}>Submit</button>
      </form>
      <p>You typed: {text}</p>
      <p>Character count: {text.length}</p>
      {isTooLong && <p className="warning">That's over 20 characters.</p>}
      {submitted && <p>Submitted: {submitted}</p>}
    </div>
  )
}

export default InputPreview
