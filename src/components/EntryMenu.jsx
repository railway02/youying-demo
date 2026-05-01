function EntryMenu({ onActionClick }) {
  return (
    <div className="entry-menu" role="menu" aria-label="入画动作">
      <button type="button" role="menuitem" onClick={onActionClick}>
        坐你对面
      </button>
    </div>
  )
}

export default EntryMenu
