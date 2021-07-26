import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from '../store'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  // useStore : <Provider>コンポーネントに渡されたのと同じReduxストアへの参照を返します。
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
