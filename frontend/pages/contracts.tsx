import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import { Box, Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Contract } from "@prisma/client"

import Layout from "../components/layout"
import prisma from "../lib/prisma"
import { Page } from "../types/page"

interface Props {
  contracts: Contract[]
}

const columns: GridColDef[] = [
  { field: "contractNumber", headerName: "เลขสัญญา", width: 100 },
]

const ContractPage: Page<Props> = ({ contracts }) => {
  const { data: session } = useSession({ required: true })
  return (
    <Paper sx={{ height: 600 }}>
      <DataGrid
        rows={contracts}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </Paper>
    // </Box>
  )
}

ContractPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps = async () => {
  const contracts = await prisma.contract.findMany({
    select: {
      id: true,
      contractNumber: true,
      // chassisNumber: true,
      // engineNumber: true,
      // createdAt: false,
      // ContractColor: {
      //   select: { name: true },
      // },
      // ContractModel: {
      //   select: {
      //     name: true,
      //     ContractBrand: {
      //       select: {
      //         name: true,
      //       },
      //     },
      //   },
      // },
    },
  })
  return {
    props: { contracts },
  }
}

export default ContractPage
