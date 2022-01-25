import type { NextPage } from "next"
import Link from "next/link"

import Layout from "../components/layout"
import { Page } from "../types/page"

const Home: Page = () => {
  return (
    <>
      <h1>Index</h1>
      <ul>
        <li>
          <Link href="/bikes">bikes</Link>
        </li>
        <li>
          <Link href="/users">users</Link>
        </li>
      </ul>
    </>
  )
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
