// WE DO: Exercise 4, Effect or No Effect? Vote on each one, and type your answer below.
//
//   Ask: is React syncing with something OUTSIDE React? Or just calculating UI from state?

const examples = [
  { id: "A", text: "Update document.title from count", answer: "TODO: effect or no effect?" },
  { id: "B", text: "Create fullName from firstName and lastName", answer: "TODO: effect or no effect?" },
  { id: "C", text: "Listen for window resize", answer: "TODO: effect or no effect?" },
  { id: "D", text: "Count items in an array", answer: "TODO: effect or no effect?" },
]

export default function App() {
  return (
    <div>
      <h1>Effect or No Effect?</h1>
      <ul>
        {examples.map((example) => (
          <li key={example.id}>
            <span>{example.id}. {example.text}</span>
            <span className="tag">{example.answer}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
