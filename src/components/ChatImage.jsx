import { STATES, assets } from '../data/demoData'
import EchoImage from './EchoImage'
import EntryMenu from './EntryMenu'

function ChatImage({
  state,
  onImageClick,
  onActionClick,
  variant = 'interactive',
  showMenu = false,
}) {
  const isEchoMessage = variant === 'echo'
  const canRespond =
    variant === 'interactive' && state === STATES.AFFORDANCE_DETECTED

  return (
    <div className={`chat-image-wrap chat-image-${variant}`}>
      {canRespond ? (
        <button
          type="button"
          className="image-response-button"
          onClick={onImageClick}
          aria-label="点击图片回应"
        >
          <img className="chat-image" src={assets.input} alt="小许发来的生活照片" />
        </button>
      ) : isEchoMessage ? (
        <EchoImage className="chat-image" />
      ) : (
        <img className="chat-image" src={assets.input} alt="小许发来的生活照片" />
      )}
      {showMenu ? <EntryMenu onActionClick={onActionClick} /> : null}
    </div>
  )
}

export default ChatImage
