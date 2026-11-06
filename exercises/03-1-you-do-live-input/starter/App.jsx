// YOU DO: Exercise 1, Live Input Preview.
//
//   Build:
//     - a text input
//     - live preview text
//     - a clear button
//
//   Requirements:
//     - typing updates state
//     - the clear button resets the input
//     - show the character count
//
//   Stuck? Clearing only works if the input has value={text}.

function InputPreview() {
  return (
    <div>
      <h2>Live Input Preview</h2>
      {/* TODO: input and Clear button */}
      <p>You typed: </p>
      <p>Character count: </p>
    </div>
  )
}

export default InputPreview
