import { STATES, compareItems, getStateIndex } from '../data/demoData'

function ComparePanel({ state }) {
  const stateIndex = getStateIndex(state)
  const echoDoneIndex = getStateIndex(STATES.ECHO_DONE)
  const isEchoReady = stateIndex >= echoDoneIndex

  const isItemActive = (id) => {
    return isEchoReady && Boolean(id)
  }

  return (
    <section
      className={`compare-panel ${isEchoReady ? 'is-highlighted' : ''}`}
      aria-label="原图动作回响图对比区"
    >
      <div className="compare-note">不是贴纸，是空间回应</div>
      {compareItems.map((item) => {
        const active = isItemActive(item.id)

        return (
          <article
            key={item.id}
            className={`compare-item ${active ? 'is-active' : ''} compare-${item.id}`}
          >
            <p className="compare-label">{item.label}</p>
            {item.image ? (
              <div className="compare-image-frame">
                <img src={item.image} alt={item.title} />
              </div>
            ) : (
              <div className="compare-action-frame">
                <span>林同学</span>
                <strong>坐你对面</strong>
              </div>
            )}
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        )
      })}
    </section>
  )
}

export default ComparePanel
