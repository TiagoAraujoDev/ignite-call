import type { AppProps } from 'next/app'
import { Roboto_Flex as Roboto } from "next/font/google";

import { globalStyles } from '@/styles/globals'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', "500", '700'], display: 'swap' });

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
