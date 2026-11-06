# Gear Library

A checkout dashboard for a school makerspace, built for the Day 6 "Search Dashboard" mini project. You can search 15 pieces of gear, narrow the list to what's available, and clear your search from anywhere with Escape. The layout changes with the size of the window.

This is the stretch version of the assignment. The assignment asks for one effect and this app has three, because I wanted to practice effects that need cleanup too.

## How to run it

```bash
npm install
npm run dev
```

Then open http://localhost:5263. The port is set in `vite.config.js`.

`npm run build` makes a production build and `npm run lint` runs ESLint.

## How it meets the requirements

| Requirement | Where it is |
| --- | --- |
| Controlled input | The input in `SearchPanel.jsx` gets `value={query}` and `onChange`. `handleQueryChange` in `App.jsx` reads `event.target.value`. |
| Live query display | `SearchPanel.jsx` shows `Searching for: "drill"` as you type. |
| Filter a list of items | `visibleGear` in `App.jsx` is a `.filter()` over `src/data/gear.js`. It trims the text, ignores case, and checks both name and category. |
| Show filtered results | `GearShelf.jsx` maps over `visibleGear` and uses `item.id` as the key. |
| Effect updating the page title | Effect 1 in `App.jsx` sets `Searching: React` style titles and goes back to `Gear Library` when the search is empty. |

Things I added past the requirements:

- An "Available only" checkbox. `handleAvailableChange` reads `event.target.checked`.
- A result count and a "ready to check out" count. Both are calculated during render, so they aren't state and they aren't set in an effect.
- A no-results message that changes depending on whether "Available only" is on, with buttons to get you back to results.
- Escape clears the search (Effect 2).
- The layout switches between a grid of hang tags and a compact ledger list at 640px, and the current width is on screen (Effect 3).

## The three effects

| Effect | File | Outside system | Dependencies | Cleanup |
| --- | --- | --- | --- | --- |
| 1. Tab title | `App.jsx` | `document.title` | `[query]` | None. The next run overwrites the title, so there's nothing to undo while the app stays mounted. |
| 2. Escape to clear | `App.jsx` | `window` `keydown` events | `[]` | `removeEventListener("keydown", handleKeyDown)` |
| 3. Window width | `GearShelf.jsx` | `window` `resize` events and `window.innerWidth` | `[]` | `removeEventListener("resize", handleResize)` |

### What didn't get an effect

The filtered list, both counts, and `isCompact` are all plain calculations during render. `isCompact` is the one I had to think about. The width really does come from outside React, so that part needs a subscription. But once `width` is in state, `width < COMPACT_BELOW` is the same kind of calculation as `fullName = firstName + " " + lastName`.

### StrictMode and the `[]` effects

`main.jsx` keeps `<StrictMode>` on. In development, React runs each effect's setup, then its cleanup, then its setup again, to check that the cleanup really undoes the setup. So each `[]` effect here adds its listener, removes it, and adds it again. The cleanup is what leaves one listener instead of two. In a production build, setup only runs once.

## README Reflection

### 1. What is the difference between an event and an effect?

An event happens because the user did something, like typing in the search box, which runs `handleQueryChange`. An effect happens because React needs to sync with something outside itself after rendering. When the user types, the event updates `query`, React re-renders, and then Effect 1 copies the new search into `document.title`.

### 2. When should you use useEffect?

Use it when your component has to stay in sync with something React doesn't control. In this app that's the browser tab title, keyboard events on the whole window, and the window's size. I couldn't do any of those by just returning JSX, so each one got an effect with a comment naming the outside system.

### 3. When should you avoid it?

Avoid it when you're only calculating something from state or props you already have. My filtered list could have been a `filteredGear` state set by an effect, but that means an extra render and two copies of the same information that could disagree. Instead, `visibleGear`, `readyCount`, and `isCompact` are just calculated while the component renders. Also, code that responds to a user action belongs in an event handler, which is why the Clear button just calls `setQuery("")` in its `onClick`.

### 4. What does the dependency array do?

It tells React when to run the effect again. Effect 1 has `[query]`, so it only runs again when the search text changes, and checking "Available only" doesn't touch the title. Effects 2 and 3 have `[]`, so they set up once when the component mounts, which is all a listener needs. Leaving the array off would make them remove and re-add their listener after every render.

### 5. Why is cleanup important?

Cleanup undoes what the effect set up, and it runs before the effect runs again and when the component is removed. My `keydown` and `resize` listeners are attached to `window`, and `window` doesn't go away when a component does, so if `GearShelf` were removed without cleanup, its `resize` listener would keep running. In this app neither component gets removed during normal use, but StrictMode sets up, cleans up, and sets up again in development, so without cleanup I would have two `keydown` listeners and two `resize` listeners. The title effect doesn't need cleanup because the next run just replaces the old title.
