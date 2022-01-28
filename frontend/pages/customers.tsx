import { Box, Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Customer, User } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  customers: Customer[]
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "customerID", headerName: "รหัสลูกค้า", width: 130 },
  { field: "name", headerName: "ชื่อ", width: 200 },
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

const UserPage: Page<Props> = ({ customers }) => {
  return (
    <Paper sx={{ height: 650 }}>
      <DataGrid
        rows={customers}
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
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      customerID: true,
      name: true,
      Address: true,
    },
  })
  return {
    props: { customers },
  }
}

export default UserPage
