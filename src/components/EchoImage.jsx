import { assets } from '../data/demoData'

function EchoImage({ className = '' }) {
  return (
    <img
      className={className}
      src={assets.echo}
      alt="坐你对面的回响图"
    />
  )
}

export default EchoImage
