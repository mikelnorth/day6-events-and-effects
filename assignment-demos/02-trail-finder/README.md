# Trail Finder

My Day 6 Search Dashboard. It searches 15 made-up hiking trails by name or region, filters them by difficulty, and keeps the browser tab title in sync with the search.

## How to run it

```bash
npm install
npm run dev
```

Then open http://localhost:5262. The port is set in `vite.config.js`.

Other commands: `npm run build` and `npm run lint`.

## How it meets the requirements

| Requirement | Where it happens |
| --- | --- |
| Controlled input | `SearchBar` gets `value={query}` and `onChange={onQueryChange}`. `handleQueryChange` in `App` calls `setQuery(event.target.value)`. |
| Live query display | `SearchBar` shows `Searching for: "ridge"` while you type, and a hint when the box is empty. |
| Filter a list of items | `App` runs `trails.filter(...)`. The search ignores case and extra spaces, and matches the name or the region. It combines with the All / Easy / Moderate / Hard buttons in `DifficultyFilter`, which use `onClick`. |
| Show filtered results | `TrailList` maps over the filtered array and renders a `TrailCard` for each trail, using `trail.id` as the key. |
| Stats | `StatsBar` shows the matching trail count and total miles. |
| No-results state | `NoResults` shows a friendly message and a button that clears the search and the filter. |
| One effect used correctly | `useEffect` in `App` sets `document.title` to `Searching: <query>`, or `Trail Finder` when the search is empty. Its dependency array is `[query]`. |
| Accessibility | The input has a real `<label>`, and each filter button has `aria-pressed`. |

### The part I want to point out

`filteredTrails`, `trailCount`, and `totalMiles` are plain variables calculated during render. They are not state, and no effect sets them. They can always be worked out from `query` and `difficulty`, so storing them would only give me a second copy that could get out of sync.

The only state in the app is `query` and `difficulty`.

## Component tree

```text
App (owns query and difficulty, derives everything else)
├── SearchBar
├── DifficultyFilter
├── StatsBar
└── TrailList
    └── TrailCard (one per trail)
    or NoResults (when nothing matches)
```

Data goes down as props and events come up through handlers. For example, `DifficultyFilter` does not change anything itself. It calls `onSelect("Hard")`, and `App` updates the state.

## README Reflection

### 1. What is the difference between an event and an effect?

An event happens because the user did something, like typing in the search box or clicking the Hard button. An effect happens because React needs to sync with something outside React after it renders. In my app, typing fires `onChange`, which updates `query`. After React renders that new value, the effect copies it to `document.title`.

### 2. When should you use useEffect?

You should use it when you need to sync with something outside of React, like the browser tab title, a timer, or a window event listener. I used it for `document.title` because the tab title isn't part of my JSX, so React can't update it by rendering. The title also needs to change whenever `query` changes, no matter how it changed. The effect covers both typing and the reset button without any extra code in my handlers.

### 3. When should you avoid it?

You should avoid it when you are just calculating something from props or state. I could have kept `filteredTrails` in state and updated it in an effect, but `trails.filter(...)` during render gets the same result with less code. It's the same idea as the `fullName` example from class. An effect there would also cause an extra render and show out-of-date values for a moment.

### 4. What does the dependency array do?

It tells React to run the effect again only when one of the listed values has changed since the last render. My effect uses `[query]`, so it runs after the first render and then whenever the search text changes. Clicking a difficulty button re-renders `App`, but the effect doesn't run again because `query` is still the same. If I left the array off, it would run after every render, and with an empty array the title would never update after the first render.

### 5. Why is cleanup important?

Cleanup stops or removes whatever an effect started, so it doesn't keep running when it's no longer needed. My title effect doesn't have a cleanup function because it only sets a value, so there's nothing to stop or unsubscribe from. The Timer and Window Width exercises did need it. Without `clearInterval`, the interval keeps ticking after the component is removed, and without `removeEventListener`, the old resize listener stays attached and more can pile up each time the component mounts again.
