import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import "../styles/globals.css"

import { NextPage } from "next"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}): any {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
