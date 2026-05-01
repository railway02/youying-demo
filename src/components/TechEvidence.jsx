import { assets, technicalEvidence } from '../data/demoData'

function TechEvidence() {
  return (
    <details className="tech-evidence">
      <summary>
        <span>技术证据</span>
        <small>看见有应如何把空位变成回应</small>
      </summary>

      <div className="tech-evidence-body">
        <section className="evidence-card evidence-json">
          <h2>多模态感知 JSON</h2>
          <pre>{JSON.stringify(technicalEvidence.perception, null, 2)}</pre>
        </section>

        <section className="evidence-card evidence-mask">
          <h2>空间遮罩</h2>
          <div className="mask-preview">
            <img src={assets.mask} alt={technicalEvidence.maskLabel} />
          </div>
          <p>{technicalEvidence.maskLabel}</p>
        </section>

        <section className="evidence-card evidence-prompt">
          <h2>Prompt 摘要</h2>
          <p>{technicalEvidence.promptSummary}</p>
        </section>
      </div>
    </details>
  )
}

export default TechEvidence
