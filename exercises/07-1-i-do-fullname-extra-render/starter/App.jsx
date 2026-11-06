// I DO: when NOT to use useEffect. This works, so what's wrong with it?
//
//   1. Open the console and clear it. Type ONE letter in First name.
//   2. Two renders for one keystroke. Look at the first: fullName is still the OLD value.
//      React rendered with stale data, ran the effect, then rendered all over again.
//   3. Fix it. Delete the fullName state and its effect, and calculate it during render:
//
//        const fullName = firstName + " " + lastName
//
//   4. Type one letter again. One render, and it's never stale. Less code too.
//
//   The first effect is only here to count renders. It's the "runs after every render" pattern.

import { useState, useEffect } from "react"

function App() {
  const [firstName, setFirstName] = useState("Ada")
  const [lastName, setLastName] = useState("Lovelace")
  const [fullName, setFullName] = useState("")

  useEffect(() => {
    console.log(`Rendered: firstName="${firstName}" fullName="${fullName}"`)
  })

  useEffect(() => {
    setFullName(firstName + " " + lastName)
  }, [firstName, lastName])

  return (
    <div>
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <p>Full name: {fullName}</p>
    </div>
  )
}

export default App
