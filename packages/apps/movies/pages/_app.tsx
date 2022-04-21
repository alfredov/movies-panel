import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Provider as ProviderUI } from '@foo-company/provider'

import { setupRedux } from '../core-app'

const { store } = setupRedux()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProviderUI>
        { /* @ts-ignore */ }
        <Component {...pageProps} />
      </ProviderUI>
    </Provider>
  )
}

export default MyApp
