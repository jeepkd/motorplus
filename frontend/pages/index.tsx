import type { NextPage } from "next"
import Link from "next/link"

import { Paper } from "@mui/material"

import Layout from "../components/layout"
import { Page } from "../types/page"

const Home: Page = () => {
  return (
    <>
      <Paper sx={{ padding: 5 }}>
        <h1>Index</h1>
        <ul>
          <li>
            <Link href="/bikes">bikes</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
          <li>
            <Link href="/testpage">testpage</Link>
          </li>
        </ul>
      </Paper>
    </>
  )
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
