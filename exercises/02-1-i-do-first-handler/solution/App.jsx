// I DO: define the function, then hand it to React. React calls it when the click happens.

function App() {
  function handleClick() {
    alert("Button clicked!")
  }

  return <button onClick={handleClick}>Click Me</button>
}

export default App
