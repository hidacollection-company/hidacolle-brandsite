// import { AppProps } from 'next/app'
// import Head from 'next/head'
// import 'sanitize.css'
// import '../styles/scss/style.scss'
// import Layout from '../components/Layout'


// const App = ({ Component, pageProps }: AppProps) => (

//     <>
//       <Head>
//         <title />
//       </Head>
//       <Layout>
//           <Component {...pageProps} />
//       </Layout>
//     </>

// )

// export default App


import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import 'sanitize.css'
import '../styles/scss/style.scss'
import Layout from '../components/Layout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  
  return (
    <>
      <Head>
        <title />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App