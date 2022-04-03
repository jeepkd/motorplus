import { Box, Paper } from "@mui/material"
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
  { field: "role", headerName: "role", width: 130 },
  { field: "email", headerName: "email", width: 200 },
  {
    field: "address",
    headerName: "ที่อยู่",
    width: 600,
    valueGetter: (params) => {
      const a = params.row.Address
      return `${a.address} ${a.subdistrict} ${a.district} ${a.province} ${a.zipcode}`
    },
  },
]

const UserPage: Page<Props> = ({ users }) => {
  return (
    <Paper sx={{ height: 650 }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[2]}
      />
    </Paper>
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
      role: true,
      email: true,
      Address: true,
    },
  })
  return {
    props: { users },
  }
}

export default UserPage
