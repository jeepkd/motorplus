import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import { Box, Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Vehicle } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  vehicles: Vehicle[]
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "chassisNumber", headerName: "เลขตัวถัง", width: 130 },
  { field: "engineNumber", headerName: "เลขเครื่อง", width: 130 },
  {
    field: "VehicleBrand",
    headerName: "ยี่ห้อ",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.VehicleModel.VehicleBrand.name,
  },
  {
    field: "VehicleModel",
    headerName: "รุ่น",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.VehicleModel.name,
  },
  {
    field: "VehicleColor",
    headerName: "สี",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.VehicleColor.name,
  },
]

const VehiclePage: Page<Props> = ({ vehicles }) => {
  const { data: session } = useSession({ required: true })
  return (
    // <Box height="720px">
    <Paper sx={{ height: 600 }}>
      <DataGrid
        rows={vehicles}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </Paper>
    // </Box>
  )
}

VehiclePage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps = async () => {
  const vehicles = await prisma.vehicle.findMany({
    select: {
      id: true,
      chassisNumber: true,
      engineNumber: true,
      createdAt: false,
      VehicleColor: {
        select: { name: true },
      },
      VehicleModel: {
        select: {
          name: true,
          VehicleBrand: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })
  return {
    props: { vehicles },
  }
}

export default VehiclePage
