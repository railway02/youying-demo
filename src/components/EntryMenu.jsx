function EntryMenu({ onActionClick }) {
  return (
    <div className="entry-menu" role="menu" aria-label="回应这张图">
      <p>回应这张图</p>
      <button type="button" role="menuitem" onClick={onActionClick}>
        坐你对面
      </button>
    </div>
  )
}

export default EntryMenu
