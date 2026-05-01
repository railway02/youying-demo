import { getStateIndex, judgeSteps } from '../data/demoData'

function JudgePanel({ state }) {
  const activeIndex = Math.max(getStateIndex(state), 0)
  const activeStep = judgeSteps[Math.min(activeIndex, judgeSteps.length - 1)]

  return (
    <section className="judge-panel" aria-label="评委解释区">
      <div className="judge-current">
        <p className="section-label">评委解释区</p>
        <h2>{activeStep.title}</h2>
        <p>{activeStep.body}</p>
        <div className="judge-tags" aria-label="产品关键词">
          <span>QQ 群聊</span>
          <span>空位点击</span>
          <span>回响图</span>
        </div>
      </div>

      <ol className="judge-steps">
        {judgeSteps.map((step, index) => {
          const isActive = index === activeIndex
          const isComplete = index < activeIndex

          return (
            <li
              key={step.id}
              className={[
                'judge-step',
                isActive ? 'is-active' : '',
                isComplete ? 'is-complete' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="step-dot" aria-hidden="true" />
              <div>
                <strong>{step.label}</strong>
                <p>{step.title}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default JudgePanel
