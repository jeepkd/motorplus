import { Box, Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Customer, User } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  customers: Customer[]
}

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
      title: true,
      firstname: true,
      lastname: true,
      telephone: true,
      Address: true,
    },
  })
  return {
    props: { customers },
  }
}

export default UserPage

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "customerID", headerName: "รหัสลูกค้า", width: 130 },
  { field: "title", headerName: "นำหน้า", width: 60 },
  { field: "firstname", headerName: "ชื่อ", width: 150 },
  { field: "lastname", headerName: "สกุล", width: 150 },
  { field: "telephone", headerName: "โทร", width: 150 },
  {
    field: "address",
    headerName: "ที่อยู่",
    width: 150,
    valueGetter: (p) => p.row.Address.address,
  },
  {
    field: "subdistrict",
    headerName: "ตำบล",
    width: 150,
    valueGetter: (p) => p.row.Address.subdistrict,
  },
  {
    field: "district",
    headerName: "อำเภอ",
    width: 150,
    valueGetter: (p) => p.row.Address.district,
  },
  {
    field: "province",
    headerName: "จังหวัด",
    width: 150,
    valueGetter: (p) => p.row.Address.province,
  },
  {
    field: "zipcode",
    headerName: "รหัส ปณ",
    width: 150,
    valueGetter: (p) => p.row.Address.zipcode,
  },
]
