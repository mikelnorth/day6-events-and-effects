// WE DO: the answers, and the code each one turns into.
//
//   A: useEffect(() => { document.title = `Count: ${count}` }, [count])
//   B: const fullName = firstName + " " + lastName
//   C: useEffect(() => {
//        window.addEventListener("resize", handleResize)
//        return () => window.removeEventListener("resize", handleResize)
//      }, [])
//   D: const itemCount = items.length

const examples = [
  { id: "A", text: "Update document.title from count", answer: "Use effect", why: "The tab title is outside React." },
  { id: "B", text: "Create fullName from firstName and lastName", answer: "No effect needed", why: "It's calculated from state." },
  { id: "C", text: "Listen for window resize", answer: "Use effect", why: "The window is outside React, and the listener needs cleanup." },
  { id: "D", text: "Count items in an array", answer: "No effect needed", why: "It's calculated from state." },
]

export default function App() {
  return (
    <div>
      <h1>Effect or No Effect?</h1>
      <ul>
        {examples.map((example) => (
          <li key={example.id}>
            <span>
              {example.id}. {example.text}
              <br />
              <span className="muted">{example.why}</span>
            </span>
            <span className="tag">{example.answer}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
