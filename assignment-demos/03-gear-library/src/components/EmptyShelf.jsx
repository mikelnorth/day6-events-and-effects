function EmptyShelf({
  searchText,
  availableOnly,
  onClearSearch,
  onShowCheckedOut,
}) {
  return (
    <div className="empty-shelf">
      <h3>Nothing hanging on this hook</h3>
      <p>
        {availableOnly
          ? `No available gear matches "${searchText}". It might just be checked out right now.`
          : `We don't have anything matching "${searchText}". Check the spelling or try a category like Electronics.`}
      </p>
      <div className="empty-actions">
        <button type="button" className="button" onClick={onClearSearch}>
          Clear search
        </button>
        {availableOnly && (
          <button type="button" className="button" onClick={onShowCheckedOut}>
            Include checked-out gear
          </button>
        )}
      </div>
    </div>
  )
}

export default EmptyShelf
