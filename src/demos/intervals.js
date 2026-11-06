// Counts live setInterval calls so the page can show a leak. The demo's "no cleanup" timer really
// does leak. stopSoon() cleans up when the page is left. It's deferred so that StrictMode's
// synchronous setup, cleanup, setup on the page doesn't kill the leak we want to show.
export function createIntervalTracker() {
  const ids = new Set()
  const listeners = new Set()
  let pendingStop = null

  function notify() {
    listeners.forEach((listener) => listener())
  }

  const tracker = {
    start(callback, delay) {
      const id = setInterval(callback, delay)
      ids.add(id)
      notify()
      return id
    },
    stop(id) {
      clearInterval(id)
      ids.delete(id)
      notify()
    },
    stopAll() {
      ids.forEach((id) => clearInterval(id))
      ids.clear()
      notify()
    },
    keepAlive() {
      clearTimeout(pendingStop)
    },
    stopSoon() {
      pendingStop = setTimeout(tracker.stopAll, 0)
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    getSnapshot() {
      return ids.size
    },
  }

  return tracker
}
