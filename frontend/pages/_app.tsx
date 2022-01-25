import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import "../styles/globals.css"

import { NextPage } from "next"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
import { ReactNode } from "react"

import { Page } from "../types/page"

type Props = AppProps & {
  Component: Page
}

export function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: Props): any {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}
export default MyApp
