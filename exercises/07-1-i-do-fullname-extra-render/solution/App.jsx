// I DO: no state and no effect. fullName is calculated, so one keystroke is one render.
//
// Key rule: if you are just calculating UI from state, you usually do not need an effect.

import { useState, useEffect } from "react"

function App() {
  const [firstName, setFirstName] = useState("Ada")
  const [lastName, setLastName] = useState("Lovelace")

  const fullName = firstName + " " + lastName

  // Only here to count renders.
  useEffect(() => {
    console.log(`Rendered: firstName="${firstName}" fullName="${fullName}"`)
  })

  return (
    <div>
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <p>Full name: {fullName}</p>
    </div>
  )
}

export default App
