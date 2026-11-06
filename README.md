# Day 6 — Events, Effects, and React's Synchronization Model

An interactive teaching app for the **Day 6** lesson (3-hour class). Same format as Day 4:
Vite + React 19 + Tailwind v4, vanilla JavaScript, **I do / We do / You do** blocks, and a class
timer in the sidebar.

## What's in this folder

| Path | What it is |
|---|---|
| `src/` | The teaching app (run it on the projector) |
| `LESSON-PLAN.md` | Minute-by-minute instructor script, and grading |
| `STUDENT-HANDOUT.md` | Cheat sheet and assignment, to share with students |
| `exercises/` | A starter and solution for every I do, We do, and You do. No setup: they run from this app's dev server |
| `live.html`, `src/live/` | The page that runs the exercises |
| `student-projects/` | Standalone Vite copies of the main exercises and the mini project starter |
| `assignment-demos/` | **Instructor only:** three finished mini project reference apps. Don't hand them out before the due date |

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Live coding

With `npm run dev` running, every I do / We do / You do block has **Open in editor**, **Run starter**,
and **Run solution**. Edit the starter and save, and the page updates. `/live.html` lists them all.
Details are in `exercises/README.md`, including why you should **refresh after adding a cleanup**.

## Pages

| Page | Concept | Live demos / activities |
|---|---|---|
| Home | Plan, objectives, schedule, mistakes, scope | |
| 1. Recap | Day 5 questions; the two phases | Reveal cards |
| 2. Events | Events, handlers, the key rule, `event.target.value` | Correct/incorrect switch; event log for all common events |
| 3. Exercise 1 | Live input preview | Finished example; stretch with a real form |
| 4. Rendering vs Effects | What `useEffect` is for; 3 patterns; dependency arrays | Real effects counting their real runs |
| 5. Exercise 2 | Syncing state to the tab title | Live counter that changes this tab's title |
| 6. Cleanup | Cleanup; StrictMode; Exercise 3 | Setup/cleanup log; timers with and without cleanup, with a live count of running intervals |
| 7. When Not | Calculated values; Exercise 4 | Renders per keystroke, bad vs good; Effect or No Effect vote |
| 8. Exercise 5 | Listening to the window, and cleanup | Live width tracker |
| 9. Mini Project | Search Dashboard | Finished example; assignment; grading checklist; finish-early mistakes exercise |
| 10. Wrap-up | Summary, exit ticket, rebuild challenge, homework, Day 7 preview | |

## The mini project reference apps

Three finished submissions, for calibrating your grading. Don't hand them out before the due date.

| Folder | What it shows |
|---|---|
| `assignment-demos/01-recipe-finder` | Minimum solid submission |
| `assignment-demos/02-trail-finder` | Componentized, adds a category filter |
| `assignment-demos/03-gear-library` | Stretch, adds an extra effect with cleanup |

They're separate projects. This app's lint, Tailwind scan, and file watcher all skip them.

## react.dev alignment

| Docs page | How it's used |
|---|---|
| Synchronizing with Effects | Backbone: events vs Effects; the three steps; firing twice in development; "Fix an interval that fires twice" |
| Responding to Events | Handlers; passed, not called; `preventDefault`; challenges |
| You Might Not Need an Effect | The `fullName` example; challenges |
| Lifecycle of Reactive Effects | Dependency array and on/off challenges |
| Separating Events from Effects | Choosing between handlers and Effects; "Fix a variable that doesn't update" |
| useEffect reference | Exact rules for dependencies |
| StrictMode reference | The setup, cleanup, setup cycle; development only |
| Render and Commit | Instructor note on the "two phases" framing |

Challenges that need `useRef`, `useMemo`, `useEffectEvent`, or data fetching are tagged **skip**.

## Scope

In: events, handlers, `event.target.value`, `useEffect`, dependency arrays, cleanup, StrictMode's
development behavior, and when not to use an effect. Out: data fetching (Day 7), custom hooks
(Day 8), `useRef`, `useReducer`, and context. React Router is used only by the teaching app.

Day 4's AI touchpoints aren't repeated here, because they aren't in the Day 6 course page and the
time goes to mini project work.
