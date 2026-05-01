import { STATES } from '../data/demoData'
import ChatImage from './ChatImage'

function PhoneMock({ state, onImageClick, onActionClick }) {
  const hasImage = state !== STATES.IDLE
  const showDemoHint = state === STATES.AFFORDANCE_DETECTED
  const showReplyMenu = state === STATES.FRIEND_CLICKED
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

        <div
          className={`chat-window ${isDone ? 'has-echo' : ''}`}
          aria-live="polite"
        >
          <div className="time-divider">今天 12:18</div>

          {hasImage ? (
            <>
              <div className="message-cluster inbound">
                <div className="friend-avatar xu-avatar">许</div>
                <div className="message-content">
                  <div className="sender-name">小许</div>
                  <div className="message-row inbound">
                    <div className="text-bubble">开饭。</div>
                  </div>
                  <div className="message-row inbound image-row">
                    <ChatImage
                      state={state}
                      variant={isDone ? 'input' : 'interactive'}
                      onImageClick={onImageClick}
                      onActionClick={onActionClick}
                      showMenu={showReplyMenu}
                    />
                  </div>
                  {showDemoHint ? (
                    <div className="demo-hint">点击图片回应</div>
                  ) : null}
                </div>
              </div>

              {isGenerating ? (
                <div className="chat-system is-generating">
                  正在把你的回应生成到画面里……
                </div>
              ) : null}

              {isDone ? (
                <div className="message-cluster outbound echo-cluster">
                  <div className="message-content">
                    <div className="sender-name">我</div>
                    <div className="message-row outbound">
                      <div className="text-bubble self-bubble">坐你对面。</div>
                    </div>
                    <div className="message-row outbound image-row">
                      <ChatImage state={state} variant="echo" />
                    </div>
                    <div className="chat-system is-done">
                      有应生成：回应已回到群聊
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="quiet-chat">群聊里还没有新图片</div>
          )}
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
