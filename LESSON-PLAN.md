# Day 6 — Events, Effects, and React's Synchronization Model: Lesson Plan (3 hours)

## Learning objectives

Students should know and understand:

1. What an event is in React
2. How event handlers work
3. What an effect is
4. Why useEffect exists
5. The difference between rendering and side effects
6. When you should and should not use useEffect
7. What a dependency array does
8. What cleanup means in an effect

By the end of class students have built: interactive UI using event handlers, a **live
character counter**, a **component that responds to external changes** (timer, window width),
and a **Search Dashboard** using `useEffect` correctly.

## Teaching phrases

- "Events: the user did something. Effects: React needs to sync."
- "Pass it, don't call it."
- "If you can calculate it, you don't need an effect."
- "If setup starts it, cleanup stops it."

## Before class

- [ ] Teaching app running (`npm run dev` in this folder); react.dev open in another tab.
- [ ] To live code: click **Open in editor** and **Run starter** on any I do / We do / You do block, then edit and save. See `exercises/README.md`.
- [ ] Console open and visible on the projector. A lot of today is taught through logs.
- [ ] Practice the page 6 demo once. **After you add a cleanup, refresh the page**, or the leaked intervals keep it fast.
- [ ] This folder isn't under git yet. Commit it, or copy `exercises/`, so you can reset the starters you edit.
- [ ] `STUDENT-HANDOUT.md` shared.
- [ ] `student-projects/` on a share or zipped. Students need 01, 03, 05, 07, and 09.
- [ ] Read the three reference apps in `assignment-demos/` (see "Grading"). **Instructor only: don't hand them out before the due date.**

## Schedule

| Time | Min | Block | Mode | App page |
|---|---|---|---|---|
| 0:00 – 0:10 | 10 | Day 5 recap & the big idea | We do | 1 |
| 0:10 – 0:25 | 15 | Events, handlers & the key rule | Teach | 2 |
| 0:25 – 0:45 | 20 | Exercise 1: live input preview | You do | 3 |
| 0:45 – 1:00 | 15 | Rendering vs effects, useEffect, 3 patterns, dependency arrays | Teach | 4 |
| 1:00 – 1:15 | 15 | Exercise 2: update the document title | You do | 5 |
| 1:15 – 1:25 | 10 | Break | | |
| 1:25 – 1:45 | 20 | Cleanup, StrictMode demo & Exercise 3: timer | You do | 6 |
| 1:45 – 1:55 | 10 | When not to use effects & Exercise 4: Effect or No Effect? | We do | 7 |
| 1:55 – 2:10 | 15 | Exercise 5: window width tracker | You do | 8 |
| 2:10 – 2:15 | 5 | Mini project intro | We do | 9 |
| 2:15 – 2:55 | 40 | **Mini project work time: Search Dashboard** | You do | 9 |
| 2:55 – 3:00 | 5 | Wrap-up & Day 7 preview | Teach | 10 |

**Protect the 40 minutes of work time. Never cut it below 40.**

**If behind, cut in this order:**

1. Exercise 5 becomes a 5-minute type-along. Saves 10. The pattern is the same as the timer.
2. Skip the Exercise 1 stretch. Saves up to 7. Students need `preventDefault` in the mini project only if they use a form.
3. Skip the common events tour (page 2). Saves 4. Mention `onSubmit` and move on.
4. Finish Exercise 2 in 10. Saves 5.

Don't cut the StrictMode demo or Effect or No Effect. Students will hit the first tonight, and
the second is the day's main judgment skill. If wrap-up gets squeezed, give the homework and
stop. Students can do the exit ticket on the way out.

**If ahead:** run "Fix an event handler" (page 2) or "Fix an interval that fires twice" (page 6)
from the docs in class. Then do the Stop button together, and the two bonus questions on page 7.

**Rebuild challenge:** the course page says "before leaving". It won't fit, because the end of
class goes to the mini project. It's **homework, or a finish-early activity** (page 10).

---

## 0:00 – 0:10 Recap & the big idea (page 1)

**We do (6):** cold call the four questions, using the small app in the starter. Where should
state live? How do components communicate? What triggers a re-render? What is the difference
between props and state?

**Teach (4):** "Up to this point, our apps respond to clicks and typing. Today we learn how
React responds to events and how it synchronizes with the outside world." Two phases: render UI,
and synchronize with something outside React. Events happen because the user does something.
Effects happen because React needs to sync with an outside system. **Say this is the heart of
the day.**

## 0:10 – 0:25 Events & handlers (page 2)

- **I do (2):** first handler. `handleClick` and `alert`.
- **I do (4):** the key rule. Use the switch on the page, then run the starter with the console
  open: "handleClick ran" is already there, and nobody clicked. Then put `setCount` in it and
  get "Too many re-renders". Fix: remove the parentheses.
- **We do (5):** `event.target.value`. Log the event first. Say the three steps: the browser
  triggers an event, React gives your function that event, you read the value from the input.
- **I do (4):** common events. Slow down on submit. Press Enter with no `preventDefault` and
  watch the page reload.

## 0:25 – 0:45 Exercise 1: live input (page 3)

**You do (13):** input, preview, clear button, character count. **Stretch (7):** warning over 20
characters, and disable submit if empty. The base exercise has no submit button, so the stretch
adds a form with `onSubmit` and `event.preventDefault()`.

**Watch for:** Clear doesn't clear (missing `value={text}`); `onChange={handleChange()}`; a
`count` state next to `text`; Clear submitting the form (needs `type="button"`).
Solution: `02-live-input-solution`.

## 0:45 – 1:00 Rendering vs effects (page 4)

- **Teach (3):** rendering calculates the UI. An effect syncs with something outside React. Go
  through the list. Fetch is marked "Day 7 preview": name it and move on. **Key rule:** if you
  are just calculating UI from state, you usually do not need an effect.
- **I do (3):** log in the body and in an effect. The effect is written first and runs second.
  Mental model: `useEffect` isn't for "putting extra code somewhere."
- **We do (6):** the 3 patterns. Predict, then click, then type. **"Once" shows 2 runs. Say why
  right away:** Vite's starter uses StrictMode, so development runs setup, cleanup, setup. Not a
  bug, not in production. "We'll see why this is useful after the break."
- **I do (3):** `[]` leaves the title stuck, and `[count]` fixes it. Dependency arrays: render
  happens, effect runs after render, if count changes, effect runs again.

**Instructor note:** "two major phases" is a teaching simplification. React's docs describe
trigger, render, and commit, and Effects run after the commit. Keep the course's framing as the
main idea. If a student has read the docs, mention it in one sentence (there's a note on page 4).

## 1:00 – 1:15 Exercise 2: document title (page 5)

**You do (15):** counter + `useEffect` for the tab title. Students should be able to say: the
effect runs after render, the array watches count, React syncs state to the browser title.

**Watch for:** `document.title` in the component body; no array or `[]`. Done early: add an
input, log in the effect, and prove typing doesn't re-run it. Solution: `04-counter-title-solution`.

## 1:15 – 1:25 Break

## 1:25 – 1:45 Cleanup & Exercise 3: timer (page 6)

- **Teach (3):** cleanup runs before the effect runs again, and when the component is removed.
  Use the setup/cleanup log on the page. Read the first three lines: setup, cleanup, setup. Change
  the value, then remove the component.
- **I do (5):** StrictMode exposes a missing cleanup. Compare the two timers on the page. No
  cleanup runs at double speed, with "Intervals running: 2". Hide and show each one and watch the
  count. Then run the starter, add the cleanup, **save, and refresh**. **Say: "StrictMode didn't
  cause this bug. It found it."** This is the moment "runs once, logs twice" pays off.
- **You do (12):** Timer: seconds state, interval every second, cleanup.

**Stop button (stretch):** `[]` never hears about the button. Use `[isRunning]`, with
`if (!isRunning) return` at the top. Click Stop: cleanup clears the interval and setup returns
early. Click Start: setup starts a new interval. Show this only if you have time. It's in the
`06-3` solution with comments.

**Watch for:** stuck at 1 (`setSeconds(seconds + 1)` inside a `[]` effect, so use the updater
form); counting by 2 (no cleanup, then refresh); racing (no array and no cleanup). Solution: `06-timer-solution`.

**Live coding warning:** saving doesn't restart a `[]` effect. After you save the cleanup, the
page still counts at double speed, so refresh before you compare speeds.

## 1:45 – 1:55 When not to use effects (page 7)

- **I do (4):** type one letter into each form on the page. The bad version logs two renders, and
  the first one has the old full name. The good version logs one. The starter shows the same in
  the console. Delete the state and the effect, and add one line. **Say: "Less code, one less
  render, and never stale."**
- **We do (6): Exercise 4, Effect or No Effect?** Hands up before each click. A: effect. B: no
  effect. C: effect. D: no effect. Ask: is it outside React, or just calculating?

## 1:55 – 2:10 Exercise 5: window width (page 8)

**You do (15):** listen for resize, update state, remove the listener on cleanup. Same shape as
the timer. Check: log in the handler and drag the window. Two logs per event means two listeners.

**Watch for:** a different function passed to `removeEventListener`; calling
`handleResize()` in `addEventListener`. Solution: `08-window-width-solution`.

## 2:10 – 2:15 Mini project intro (page 9)

**We do (5):** use the demo, and watch the tab. Read the requirements and deliverables. Plan out
loud: state is `query`, `filteredItems` is calculated, and the title is the one effect with
`[query]`. **Say this:** your project may have no cleanup, and that's correct, because setting
`document.title` starts nothing that keeps running. You still answer the cleanup question in your
README, from what you saw on the timer and resize exercises.

## 2:15 – 2:55 Mini project work time (page 9)

**You do (40):** students build their app, in their own project or from
`09-search-dashboard-starter`. Circulate with the grading checklist. Ask each student to explain
their dependency array. Don't project the solution.

**Watch for:** `filteredItems` in state, set from an effect (the fullName mistake); filtering
and saving over the original list; case-sensitive matching; a cleanup added just to have one.

**Finish early:** `09-3` (find the five mistakes), then the rebuild challenge.

## 2:55 – 3:00 Wrap-up (page 10)

Summary (1), exit ticket (2), homework and Day 7 preview (2).

1. In one sentence each: what causes an event, and what causes an effect?
2. A component shows a total price from a cart array. Effect or no effect? (No effect.)
3. One thing still fuzzy.

**Homework** is on page 10. **Next:** Day 7, Data Fetching in React: async/await, fetching API
data, loading states, error handling, displaying remote data.

---

## Grading the mini project

**Assignment objectives.** Students build a small app with: input field, live query display, item
filter, effect updating document title.

**Instructor reference apps.** In `assignment-demos/`. Use them to calibrate grading. **Don't hand
them out before the due date.**

| Folder | What it shows |
|---|---|
| `assignment-demos/01-recipe-finder` | Minimum solid submission |
| `assignment-demos/02-trail-finder` | Componentized, adds a category filter |
| `assignment-demos/03-gear-library` | Stretch, adds an extra effect with cleanup |

**Checklist**

Working app:

- [ ] Controlled input (event-driven)
- [ ] Live query display
- [ ] Filters a list of items, and shows filtered results
- [ ] One effect, used correctly, updates the page title
- [ ] README answers all 5 reflection questions

Good performance signs:

- [ ] Uses events correctly
- [ ] Uses useEffect only where needed
- [ ] Explains dependency arrays correctly
- [ ] Includes cleanup where appropriate (no cleanup is correct for a title effect)
- [ ] Avoids unnecessary state/effects

Common mistakes to watch for:

- [ ] Putting calculations in useEffect
- [ ] Missing dependency arrays
- [ ] Mutating state
- [ ] Forgetting cleanup
- [ ] Calling handlers immediately instead of passing them

**Model answers for the README reflection**

1. *What is the difference between an event and an effect?* An event happens because the user did something, and a handler responds to it. An effect happens because React needs to sync with something outside React after rendering.
2. *When should you use useEffect?* To sync with something outside React: the tab title, a timer, a listener, a subscription.
3. *When should you avoid it?* When you're calculating UI from state or props, or responding to a user action. Calculate during render, or use the event handler.
4. *What does the dependency array do?* It tells React to run the effect again only when these values change. No array runs after every render, and `[]` runs only after the first.
5. *Why is cleanup important?* It stops what setup started. Without it, timers and listeners keep running after the component is gone, or pile up each time the effect runs. In development, StrictMode exposes this. A full answer can note that their title effect doesn't need one, and say why.

## Notes on the course page's content

| In the course page | What today does | Why |
|---|---|---|
| "Runs once on mount" | Taught, plus: in development it logs twice | Vite's scaffold uses StrictMode, so effects run setup, cleanup, setup on mount. Students will see it |
| No StrictMode coverage | Added an I do on page 6: a timer with no cleanup at double speed | Turns the surprise into a reason to care about cleanup |
| "Two major phases" | Kept as the main framing, with a short note | The docs say render and commit, and Effects run after the commit |
| Exercise 1 stretch: "disable submit if empty" | Stretch adds a form, a submit button, and `event.preventDefault()` | The base exercise has no submit button |
| Timer: "stop button optional" | Solution uses `[isRunning]`, with an explanation | A `[]` effect can't respond to a button |
| Bad `fullName` example | Demo shows the extra render and the stale first render | Otherwise it just looks like a style preference |
| Exercises numbered 1, 2, 3, 5 | "Effect or No Effect?" is Exercise 4 | Continuous numbering |
| Rebuild challenge "before leaving" | Homework or finish-early | The end of class goes to mini project work time |
| "Fetch data" as an effect example | Marked "Day 7 preview" | Data fetching is Day 7 |

Consider updating Canvas to match.

## Common mistakes and error decoder

| You see | Cause | Fix |
|---|---|---|
| `Too many re-renders` | `onClick={handleClick()}` sets state during render | `onClick={handleClick}` |
| Handler runs on load, not on click | Same thing, without the state change | Remove the parentheses |
| Page reloads on submit | No `preventDefault` | `event.preventDefault()` first in `onSubmit` |
| Clear button doesn't clear the input | Input isn't controlled | `value={text}` |
| Clear also submits the form | Buttons in a form submit by default | `type="button"` |
| An effect or log runs twice on load | StrictMode, in development | Expected. Make sure the cleanup mirrors the setup |
| Timer counts by 2 | No cleanup, so StrictMode's first interval never stopped | Add `clearInterval`, then refresh |
| Timer still fast after adding cleanup | Intervals from before the fix are still running | Refresh the page |
| Timer stuck at 1 | `setSeconds(seconds + 1)` in a `[]` effect | `setSeconds((prev) => prev + 1)` |
| Timer racing faster and faster | No dependency array and no cleanup | Add `[]` and the cleanup |
| Stop button does nothing | Effect has `[]` | `[isRunning]`, and return early if it's false |
| Tab title stuck | `[]` when the effect reads `count` | `[count]` |
| Page freezes, or `Maximum update depth exceeded` | An effect sets state with no array | Add the array, or calculate instead |
| Two logs per resize | Listener wasn't removed | Same function in `removeEventListener`, then refresh |
| `useEffect is not defined` | Missing import | `import { useState, useEffect } from "react"` |
| Filter loses items when you delete text | Saved the filtered list over the original | Filter from the full list, during render |
| "react" doesn't find "React" | Case-sensitive match | `toLowerCase()` on both sides |
