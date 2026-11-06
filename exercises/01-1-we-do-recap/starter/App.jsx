// WE DO: Day 5 recap. Read this app together and answer out loud, pointing at the code.
//
//   1. Where should state live? Why is `likes` in App and not in LikeButton?
//   2. How do components communicate? Trace one click from LikeButton to LikeTotal.
//   3. What triggers a re-render? Add console.log("App rendered") above the return. Click. Then type.
//   4. What is the difference between props and state? Name one of each in this file.

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

  return (
    <div>
      <h1>Day 5 recap</h1>
      <LikeButton onLike={handleLike} />
      <LikeTotal likes={likes} />
    </div>
  )
}
