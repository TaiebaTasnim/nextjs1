import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/images/logo350.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
