import { List } from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {}


const bikes: NextPage<Props> = () => {
  const { data, error } = useSWR("/bikes")

  return (
    // List()

  )
}

export default bikes

function Profile() {
  const { data, error } = useSWR("/api/user", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
