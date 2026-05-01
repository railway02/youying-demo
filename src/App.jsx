import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import ComparePanel from './components/ComparePanel'
import JudgePanel from './components/JudgePanel'
import PhoneMock from './components/PhoneMock'
import TechEvidence from './components/TechEvidence'
import { STATES } from './data/demoData'

function App() {
  const [demoState, setDemoState] = useState(STATES.IDLE)

  useEffect(() => {
    if (demoState === STATES.IMAGE_SENT) {
      const timer = window.setTimeout(() => {
        setDemoState(STATES.AFFORDANCE_DETECTED)
      }, 650)

      return () => window.clearTimeout(timer)
    }

    if (demoState === STATES.GENERATING) {
      const timer = window.setTimeout(() => {
        setDemoState(STATES.ECHO_DONE)
      }, 1500)

      return () => window.clearTimeout(timer)
    }
  }, [demoState])

  const startDemo = () => {
    setDemoState(STATES.IMAGE_SENT)
  }

  const handleImageClick = () => {
    if (demoState === STATES.AFFORDANCE_DETECTED) {
      setDemoState(STATES.FRIEND_CLICKED)
    }
  }

  const handleActionClick = () => {
    if (demoState === STATES.FRIEND_CLICKED) {
      setDemoState(STATES.GENERATING)
    }
  }

  return (
    <main className="app-shell">
      <header className="hero-header">
        <div>
          <p className="product-kicker">腾讯 PCG 校园 AI 产品创意大赛 Demo</p>
          <h1>有应</h1>
          <p className="slogan">发一张图，让朋友入画。</p>
        </div>
        <button
          type="button"
          className="start-button"
          onClick={startDemo}
          disabled={demoState === STATES.GENERATING}
        >
          <Play size={18} strokeWidth={2.4} aria-hidden="true" />
          开始 Demo
        </button>
      </header>

      <section className="demo-stage" aria-label="有应 QQ 群聊 Demo">
        <JudgePanel state={demoState} />
        <PhoneMock
          state={demoState}
          onImageClick={handleImageClick}
          onActionClick={handleActionClick}
        />
      </section>

      <ComparePanel state={demoState} />
      <TechEvidence />
    </main>
  )
}

export default App
