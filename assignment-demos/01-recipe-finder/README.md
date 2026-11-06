# Recipe Finder

My Day 6 "Search Dashboard" mini project. It searches 12 recipes stored in a local array, shows the results as you type, and keeps the browser tab title in sync with the search.

## How to run it

```bash
npm install
npm run dev
```

Then open http://localhost:5261.

`npm run build` makes a production build and `npm run lint` runs ESLint.

## How it meets the requirements

All of the app's logic is in `src/App.jsx`. The recipes are in `src/recipes.js`.

| Requirement | Where it is |
| --- | --- |
| Controlled input | The input has `value={query}` and `onChange={handleQueryChange}`. The handler calls `setQuery(event.target.value)`. |
| Live query display | The `query` paragraph shows `Searching for: "pasta"` while you type. |
| Filter a list of items | `filteredRecipes` is calculated during render with `.filter()`. It trims the query and lowercases both sides, so `  PASTA ` still finds the pasta recipes. It checks the recipe name and the category. |
| Show filtered results | The results are a list keyed by `recipe.id`, with a `Showing 2 of 12 recipes` count. If nothing matches, a friendly message appears instead. |
| Clear button | `onClick={handleClear}` sets `query` back to `""`. That is an event, because the user did it. |
| One effect, used correctly | `useEffect` with `[query]` sets `document.title` to `Searching: React`, or back to `Recipe Finder` when the search is empty. |

The only state is `query`. Everything else on the screen is worked out from it.

## README Reflection

### 1. What is the difference between an event and an effect?

An event happens because the user did something, like typing in my search box, which runs `handleQueryChange`, or clicking Clear, which runs `handleClear`. An effect happens because React needs to sync with something outside of React after it renders. In my app the effect keeps `document.title` matching the search, and I don't call it myself: React runs it after a render where `query` changed.

### 2. When should you use useEffect?

Use it when you need to sync with something outside of React, like the browser tab title, a timer, a window event listener, or localStorage. My app uses it once because `document.title` isn't part of the JSX that React renders, so React needs to be told to update it after rendering. A good test is asking "what outside thing am I syncing with?" If there's no answer, it probably shouldn't be an effect.

### 3. When should you avoid it?

Avoid it when you are just calculating something from state or props. I could have kept `filteredRecipes` in its own state and updated it in an effect, but that would add an extra render and one more piece of state that could get out of sync with `query`. Instead it is a regular variable calculated during render, the same way the lesson made `fullName` a regular variable. Anything caused by a user action belongs in an event handler instead, so clearing the search goes in `handleClear`.

### 4. What does the dependency array do?

It tells React to run the effect again only when one of the listed values has changed since the last render. My effect has `[query]`, so the title updates when the search text changes. If I left the array off, the effect would run after every render, and with an empty `[]` it would run only once and the title would never update as I typed.

### 5. Why is cleanup important?

Cleanup stops or undoes whatever an effect started, and it runs before the effect runs again and when the component is removed. My title effect has no cleanup because there is nothing to stop or unsubscribe from. It just sets a value and is finished. In the timer exercise, though, leaving out `clearInterval` would leave the interval ticking after the component was gone, and in the window width exercise, leaving out `removeEventListener` would leave an old listener behind every time the component was added again.
