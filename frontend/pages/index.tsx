import type { NextPage } from "next"
import Link from "next/link"

import { Box } from "@mui/material"

import Layout from "../components/layout"
import { Page } from "../types/page"

const Home: Page = () => {
  return (
    <>
      <h1>Index</h1>
      <Link href="/bikes">Bikes</Link>
      <br />
      <Link href="/auth/login">Log in</Link>
    </>
  )
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
