import '../styles/global.scss'
import {CounterProvider} from '../context/counterContext'
function MyApp({ Component, pageProps }) {
  return <>

  <CounterProvider>
  <Component {...pageProps} />
  </CounterProvider>
  </>

}

export default MyApp
