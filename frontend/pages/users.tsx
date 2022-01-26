import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { User } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  users: User[]
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "username", headerName: "username", width: 130 },
  { field: "email", headerName: "email", width: 250 },
]

const UserPage: Page<Props> = ({ users }) => {
  return (
    <Box height="720px">
      <DataGrid
        rows={users}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </Box>
  )
}

UserPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  })
  return {
    props: { users },
  }
}

export default UserPage
