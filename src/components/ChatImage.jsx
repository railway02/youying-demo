import { STATES, assets } from '../data/demoData'
import AffordanceGlow from './AffordanceGlow'
import EchoImage from './EchoImage'
import EntryMenu from './EntryMenu'

function ChatImage({ state, onGlowClick, onActionClick }) {
  const showGlow = state === STATES.AFFORDANCE_DETECTED
  const showMenu = state === STATES.FRIEND_CLICKED
  const showEcho = state === STATES.ECHO_DONE

  return (
    <div className="chat-image-wrap">
      <img
        className="chat-image"
        src={assets.input}
        alt="用户发送的食堂桌面照片"
      />
      <EchoImage visible={showEcho} />
      {showGlow ? <AffordanceGlow onClick={onGlowClick} /> : null}
      {showMenu ? <EntryMenu onActionClick={onActionClick} /> : null}
    </div>
  )
}

export default ChatImage
