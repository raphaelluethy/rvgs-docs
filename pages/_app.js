import 'nextra-theme-docs/style.css'
import Prism from 'prism-react-renderer/prism'

export default function Nextra({ Component, pageProps }) {
  ;(typeof global !== 'undefined' ? global : window).Prism = Prism
  require('prismjs/components/prism-markup')
  require('prismjs/components/prism-powershell')
  return <Component {...pageProps} />
}
