import '../styles/default.css'
import '../styles/fonts.css'
import '../styles/bodyinfo.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
