import { useEffect, useState } from "react"
import GearTag from "./GearTag"
import EmptyShelf from "./EmptyShelf"

const COMPACT_BELOW = 640

function GearShelf({
  items,
  searchText,
  availableOnly,
  onClearSearch,
  onShowCheckedOut,
}) {
  const [width, setWidth] = useState(window.innerWidth)

  // Effect 3 syncs with the browser window's size, which React can't see on its
  // own. setWidth only runs inside the event handler, when the window changes.
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // The width comes from outside React, but the layout is just a calculation.
  const isCompact = width < COMPACT_BELOW

  return (
    <section className="shelf" aria-labelledby="shelf-heading">
      <div className="shelf-plate">
        <h2 id="shelf-heading">The Board</h2>
        <p className="shelf-width">
          Window width: {width}px, {isCompact ? "compact list" : "grid"} layout
        </p>
      </div>

      {items.length === 0 ? (
        <EmptyShelf
          searchText={searchText}
          availableOnly={availableOnly}
          onClearSearch={onClearSearch}
          onShowCheckedOut={onShowCheckedOut}
        />
      ) : (
        <ul className={isCompact ? "gear-list compact" : "gear-list grid"}>
          {items.map((item) => (
            <GearTag key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default GearShelf
