import { STATES } from '../data/demoData'
import ChatImage from './ChatImage'

function PhoneMock({ state, onGlowClick, onActionClick }) {
  const hasImage = state !== STATES.IDLE
  const isGenerating = state === STATES.GENERATING
  const isDone = state === STATES.ECHO_DONE

  return (
    <section className="phone-area" aria-label="QQ 群聊手机模拟器">
      <div className="phone-shell">
        <div className="phone-status">
          <span>12:18</span>
          <span>QQ</span>
        </div>
        <div className="phone-header">
          <span className="back-mark">‹</span>
          <div>
            <h2>24级生活群</h2>
            <p>31人在线</p>
          </div>
        </div>

        <div className="chat-window" aria-live="polite">
          <div className="time-divider">今天 12:18</div>

          {hasImage ? (
            <>
              <div className="message-row outbound">
                <div className="text-bubble">开饭。</div>
              </div>
              <div className="message-row outbound image-row">
                <ChatImage
                  state={state}
                  onGlowClick={onGlowClick}
                  onActionClick={onActionClick}
                />
              </div>
            </>
          ) : (
            <div className="quiet-chat">群聊里还没有新图片</div>
          )}

          {isGenerating ? (
            <div className="chat-system is-generating">
              正在把朋友的回应长进画面……
            </div>
          ) : null}

          {isDone ? (
            <div className="chat-system is-done">
              林同学入画：坐你对面
            </div>
          ) : null}
        </div>

        <div className="chat-input">
          <span>图片</span>
          <div className="input-line" />
          <span>发送</span>
        </div>
      </div>
    </section>
  )
}

export default PhoneMock
