// WE DO answers:
//
//   1. In the closest common parent of the components that need it. LikeButton changes it and
//      LikeTotal shows it, so App owns it.
//   2. Data down, events up. App passes `likes` down as a prop. LikeButton calls the `onLike`
//      function it was given, and App updates its state.
//   3. A state change. When App re-renders, its children render again too.
//   4. Props are passed in by the parent and are read-only. State belongs to the component and
//      changes over time. Here `likes` is state in App and a prop in LikeTotal.

import { useState } from "react"

function LikeButton({ onLike }) {
  return <button onClick={onLike}>Like</button>
}

function LikeTotal({ likes }) {
  return <p>Total likes: {likes}</p>
}

export default function App() {
  const [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  console.log("App rendered")

  return (
    <div>
      <h1>Day 5 recap</h1>
      <LikeButton onLike={handleLike} />
      <LikeTotal likes={likes} />
    </div>
  )
}
