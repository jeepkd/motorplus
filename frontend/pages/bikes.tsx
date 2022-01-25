import { GetServerSideProps, NextPage } from "next"
import { useEffect, useState } from "react"
import useSWR from "swr"

import { Box, List } from "@mui/material"

import Layout from "../components/layout"
import { Page } from "../types/page"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Props {}

interface Bike {
  id: number
  engineNumber: string
}

const initialBikes: Bike[] = [
  { id: 1, engineNumber: "test" },
  { id: 2, engineNumber: "test" },
  { id: 3, engineNumber: "test" },
  { id: 4, engineNumber: "test" },
  { id: 5, engineNumber: "test" },
]

const BikePage = () => {
  // const { data, error } = useSWR("/bikes")
  const [bikes, setBikes] = useState<Bike[]>([])
  useEffect(() => {
    setBikes(initialBikes)
  }, [])

  return (
    <ul>
      {bikes.map((bike) => (
        <li key={bike.id}>
          {bike.id} {bike.engineNumber}
        </li>
      ))}
    </ul>
    // <div></div>
  )
}

BikePage.getLayout = (page: Page) => {
  return <Layout>{page}</Layout>
}
export default BikePage
