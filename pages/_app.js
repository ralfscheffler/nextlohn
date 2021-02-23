import Layout from '../comps/Layout'
import '../styles/globals.css'
import styles from '../styles/w3.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
