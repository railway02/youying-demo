import { STATES, assets } from '../data/demoData'
import AffordanceGlow from './AffordanceGlow'
import EchoImage from './EchoImage'
import EntryMenu from './EntryMenu'

function ChatImage({
  state,
  onGlowClick,
  onActionClick,
  variant = 'interactive',
}) {
  const isEchoMessage = variant === 'echo'
  const showGlow = variant === 'interactive' && state === STATES.AFFORDANCE_DETECTED
  const showMenu = variant === 'interactive' && state === STATES.FRIEND_CLICKED
  const showEcho = variant === 'interactive' && state === STATES.ECHO_DONE

  return (
    <div className={`chat-image-wrap chat-image-${variant}`}>
      <img
        className="chat-image"
        src={isEchoMessage ? assets.echo : assets.input}
        alt={isEchoMessage ? '朋友坐在对面的回响图' : '用户发送的生活照片'}
      />
      {isEchoMessage ? null : <EchoImage visible={showEcho} />}
      {showGlow ? <AffordanceGlow onClick={onGlowClick} /> : null}
      {showMenu ? <EntryMenu onActionClick={onActionClick} /> : null}
    </div>
  )
}

export default ChatImage
