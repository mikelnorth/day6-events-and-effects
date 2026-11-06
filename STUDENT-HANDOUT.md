# React Day 6 — Events & Effects Cheat Sheet

**Events happen because the user does something. Effects happen because React needs to sync with
an outside system.** That distinction is the heart of today.

React has two major phases to learn:

1. Render UI
2. Synchronize with something outside React

## Events

An event is something the user does that your app responds to.

Common React events: `onClick`, `onChange`, `onSubmit`, `onMouseEnter`, `onMouseLeave`

```jsx
function App() {
  function handleClick() {
    alert("Button clicked!")
  }

  return <button onClick={handleClick}>Click Me</button>
}
```

### Key rule: pass a function to the event

```jsx
<button onClick={handleClick}>Click</button>     // ✅ Correct
<button onClick={handleClick()}>Click</button>   // ❌ Runs immediately during render
<button onClick={() => handleClick("Ada")}>Click</button>   // ✅ Need an argument? Wrap it
```

### Event handlers and data

```jsx
import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  )
}
```

When the user types: the browser triggers an event, React gives your function that event, and you
read the value from the input.

### Forms

Forms reload the page by default. Stop that first.

```jsx
function handleSubmit(event) {
  event.preventDefault()
  // ...
}

<form onSubmit={handleSubmit}>
  <button type="button" onClick={clearText}>Clear</button>
  <button type="submit" disabled={text.trim() === ""}>Submit</button>
</form>
```

## Rendering vs effects

**Rendering** is when React calculates what the UI should look like.

**An effect** is when React needs to do something after render to sync with something outside React:
change the browser tab title, start a timer, subscribe to an event, talk to localStorage, and (Day 7)
fetch data.

**Key rule:** if you are just calculating UI from state, you usually do not need an effect.

`useEffect` is not for "putting extra code somewhere." It is for synchronizing React with something
external.

## The 3 main useEffect patterns

```jsx
import { useEffect } from "react"

// 1. Runs after every render. Usually not what you want.
useEffect(() => {
  console.log("Runs after every render")
})

// 2. Runs once after first render. Used for setup.
useEffect(() => {
  console.log("Runs once on mount")
}, [])

// 3. Runs when dependencies change. Most common pattern.
useEffect(() => {
  console.log("Runs when count changes")
}, [count])
```

## Dependency arrays

"Run this effect again only when these values change." List what the effect reads.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])
```

Render happens, the effect runs after render, and if count changes, the effect runs again.

## Cleanup

Some effects start something that keeps running: timers, event listeners, subscriptions.
**If setup starts it, cleanup stops it.**

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }, 1000)

  return () => {
    clearInterval(intervalId)
  }
}, [])
```

Cleanup runs before the effect runs again, and when the component is removed.

```jsx
useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth)
  }

  window.addEventListener("resize", handleResize)

  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [])
```

## Why does my effect run twice?

Vite's starter wraps your app in `<StrictMode>` (see `main.jsx`). In **development only**, React runs
setup, cleanup, setup when a component mounts. That's why "Runs once on mount" logs twice. Your code
isn't broken.

It's there to expose missing cleanup. A timer with no cleanup counts by 2, because the first
interval never stopped. Don't remove StrictMode. Add the cleanup, then **refresh the page**, since
intervals that started before your fix keep running.

## When NOT to use useEffect

```jsx
// Bad: an extra render, and the first render has the old value
const [fullName, setFullName] = useState("")

useEffect(() => {
  setFullName(firstName + " " + lastName)
}, [firstName, lastName])

// Better
const fullName = firstName + " " + lastName
```

## Effect or No Effect?

| Example | Answer |
|---|---|
| Update document.title from count | Use effect |
| Create fullName from firstName and lastName | No effect needed |
| Listen for window resize | Use effect |
| Count items in an array | No effect needed |

## Common mistakes

- Putting calculations in useEffect
- Missing dependency arrays
- Mutating state
- Forgetting cleanup
- Calling handlers immediately instead of passing them

## Quick fixes

| You see | Fix |
|---|---|
| `Too many re-renders` | `onClick={handleClick}`, with no parentheses |
| Timer counts by 2 | Add cleanup, then refresh the page |
| Timer stuck at 1 | `setSeconds((prev) => prev + 1)` |
| Timer racing | Add `[]` and a cleanup |
| Stop button does nothing | `[isRunning]`, and `if (!isRunning) return` at the top of the effect |
| Tab title stuck | Put what the effect reads in the array |
| Page reloads on submit | `event.preventDefault()` |

---

# Day 6: Mini Project - Search Dashboard app

## Assignment Objectives

Students build a small app with:

- input field
- live query display
- item filter
- effect updating document title

## Requirements

Features

- controlled input
- filter a list of items
- show filtered results
- use useEffect to update page title

Example title behavior: Searching: React

## Deliverables

Students must submit:

**Working App.** Includes:

- event-driven input
- one effect used correctly
- filtered UI

**README Reflection**

1. What is the difference between an event and an effect?
2. When should you use useEffect?
3. When should you avoid it?
4. What does the dependency array do?
5. Why is cleanup important?

**About question 5:** your project may have no cleanup at all, and that's correct. Setting
`document.title` starts nothing that keeps running. Don't add a cleanup just to have one. Answer the
question from what you saw on the timer and resize exercises.

## How you'll be graded

- Uses events correctly
- Uses useEffect only where needed
- Explains dependency arrays correctly
- Includes cleanup where appropriate
- Avoids unnecessary state/effects

## Rebuild challenge

Homework, or if you finish the project early. Close your code, the docs, and AI. Rebuild from memory:

- a live input component
- a document title updater
- a timer or resize tracker

This ensures the knowledge sticks.

## Homework

- Finish the Search Dashboard and its README reflection
- Rebuild challenge
- [Responding to Events](https://react.dev/learn/responding-to-events#challenges): Wire up the events
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#challenges): Transform data without Effects
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect#challenges): Submit a form without Effects
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects#challenges): Fix reconnecting on every keystroke
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects#challenges): Switch synchronization on and off
- Read: [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) and [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

**Next class:** Data Fetching in React: async/await, fetching API data, loading states, error
handling, and displaying remote data.
