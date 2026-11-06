// WE DO: the browser triggers an event, React gives your function that event, and you read the
// value from the input.

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event);
    setName(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={(e) => console.log(e)}>click me</button>
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
