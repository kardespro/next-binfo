import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
       <title>Next-Binfo - Lookup Next.js Websites</title>
        <link rel="icon" href="/external/logox.png" />
      </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
