# Day 6 exercises

Every I do, We do, and You do in the lesson has a folder here. There's nothing to set up: they all
run from the teaching app's dev server.

```bash
npm run dev     # from the repo root, once
```

## How to live code one

1. On a lesson page, find the block and click **Open in editor** and **Run starter**.
2. Edit `exercises/<name>/starter/App.jsx`. Add new files beside it, such as `components/Timer.jsx`.
3. Save. The page updates on its own, keeping state where it can.
4. Use the **Solution** tab to show the finished version.

Or skip the lesson pages: `/live.html` lists all 21, and every exercise has Prev and Next links.

## Layout

```
exercises/
  styles.css                    Shared styles, so no exercise needs its own
  06-1-i-do-cleanup-strictmode/ <lesson page>-<order>-<i do | we do | you do>-<topic>
    starter/App.jsx             Instructions are in the comment at the top
    solution/App.jsx
```

The comment at the top of each file has the steps or the answers.

## Effects and live coding

Today's topic changes how the page behaves while you edit. Know these before class:

- `live.html` runs every exercise in StrictMode, like a Vite app. Effects run setup, cleanup, setup
  on mount, and a "once on mount" log prints twice.
- Saving updates the page and keeps state, but it doesn't restart a `[]` effect. New code in that
  effect won't run until you refresh.
- **Refresh the page after adding a cleanup.** Intervals and listeners that started before your fix
  can't be stopped by it. The state keeps counting fast until you refresh.
- Keep the console open. Many exercises teach through `console.log`.

## Resetting

Your edits change the starter files. This folder isn't a git repo yet. Once it's committed, this
puts them back:

```bash
git restore exercises
```

## Notes

- If "Open in editor" opens the wrong editor, start the server with `LAUNCH_EDITOR=code npm run dev`.
- Many starters contain deliberate bugs, so `npm run lint` skips `starter/` folders. Solutions are linted.
- `03-1`, `03-2`, `05-1`, `06-2`, `06-3`, `08-1`, and `09-2` match the standalone versions in
  `student-projects/`. If you change one, change the other.
- `09-2/solution` is the graded answer. Don't project it during work time.
