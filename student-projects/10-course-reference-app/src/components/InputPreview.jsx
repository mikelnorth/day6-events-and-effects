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
