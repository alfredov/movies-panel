import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '@foo-company/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      { /* @ts-ignore */ }
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
