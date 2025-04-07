import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inconsolata, Roboto } from "next/font/google";
import Head from 'next/head'

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-navbar" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inconsolata.variable} ${roboto.variable} min-h-screen flex flex-col`}>
      <Head>
        <link rel="icon" href="/images/logo350.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
