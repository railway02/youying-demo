import { assets } from '../data/demoData'

function EchoImage({ visible }) {
  return (
    <img
      className={`echo-image ${visible ? 'is-visible' : ''}`}
      src={assets.echo}
      alt="朋友坐在对面的回响图"
    />
  )
}

export default EchoImage
