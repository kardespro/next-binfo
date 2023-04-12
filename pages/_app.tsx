import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
       <title>Next-Binfo - Lookup Next.js Websites</title>
        <link rel="icon" href="/external/logox.png" />
      </Head>
    <Component {...pageProps} />
    <Analytics />
    </>
  )
}

export default MyApp
