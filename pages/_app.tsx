import '../styles/default.css'
import type { AppProps } from 'next/app'

// eslint-disable-next-line require-jsdoc
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
