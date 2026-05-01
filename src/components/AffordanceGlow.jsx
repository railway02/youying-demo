import { assets } from '../data/demoData'

function AffordanceGlow({ onClick }) {
  return (
    <div className="affordance-glow" aria-hidden={false}>
      <div
        className="affordance-mask"
        style={{ '--mask-image': `url(${assets.mask})` }}
      />
      <button
        type="button"
        className="affordance-hit"
        onClick={onClick}
        aria-label="入画"
      >
        <span>入画</span>
      </button>
    </div>
  )
}

export default AffordanceGlow
