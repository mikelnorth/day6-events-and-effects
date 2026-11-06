// WE DO: event handlers and data.
//
//   1. Add an onChange to the input with a handleChange(event) function.
//   2. Inside it, console.log(event), then console.log(event.target.value). Type a few letters.
//   3. Add state: const [name, setName] = useState("")
//   4. Call setName(event.target.value), and show {name} in the paragraph.
//   5. Add value={name} to the input. It's now a controlled input.
//
//   Say it out loud: the browser triggers an event, React gives your function that event,
//   and you read the value from the input.

function App() {
  return (
    <div>
      <input />
      <p>Hello, </p>
    </div>
  )
}

export default App
