import { AppProps } from 'next/app'
import Head from 'next/head'
import 'sanitize.css'
import '../styles/scss/style.scss'
import Layout from '../components/Layout';


const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </>
)

export default App