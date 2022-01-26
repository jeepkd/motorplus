import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Bike } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  bikes: Bike[]
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "chassisNumber", headerName: "เลขตัวถัง", width: 130 },
  { field: "engineNumber", headerName: "เลขเครื่อง", width: 130 },
  {
    field: "BikeBrand",
    headerName: "ยี่ห้อ",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.BikeModel.BikeBrand.name,
  },
  {
    field: "BikeModel",
    headerName: "รุ่น",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.BikeModel.name,
  },
  {
    field: "BikeColor",
    headerName: "สี",
    type: "number",
    width: 130,
    valueGetter: (params) => params.row.BikeColor.name,
  },
]

const BikePage: Page<Props> = ({ bikes }) => {
  const { data: session } = useSession({ required: true })
  return (
    <Box height="720px">
      <DataGrid
        rows={bikes}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </Box>
  )
}

BikePage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps = async () => {
  const bikes = await prisma.bike.findMany({
    select: {
      id: true,
      chassisNumber: true,
      engineNumber: true,
      createdAt: false,
      BikeColor: {
        select: { name: true },
      },
      BikeModel: {
        select: {
          name: true,
          BikeBrand: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })
  return {
    props: { bikes },
  }
}

export default BikePage
