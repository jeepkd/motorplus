import { Prisma } from "@prisma/client"

import { pgclient, prisma } from "./helpers"

const query = `
SELECT
	*
FROM
	tblhpcontract
	JOIN tbldtlstock ON tblhpcontract.chassisno = tbldtlstock.chassisno
	JOIN tblcolorcode ON tbldtlstock.colorcode = tblcolorcode.colorcode
	JOIN tblcustomer ON tblhpcontract.customercode = tblcustomer.customercode
WHERE
	enginno <> ''
	AND contractno <> ''
	AND tblhpcontract.customercode <> ''
`

export async function migrateContractsAndBikes() {
  await pgclient.connect()
  const res = await pgclient.query(query)
  for (const c of res.rows) {
    const prismaContract: Prisma.ContractCreateInput = {
      contractNumber: c.contractno,
      Customer: {
        connect: {
          customerNumber: c.customercode,
        },
      },
      Bike: {
        connectOrCreate: {
          where: { chassisNumber: c.chassisno },
          create: {
            chassisNumber: c.chassisno,
            engineNumber: c.enginno,
            BikeColor: {
              connectOrCreate: {
                where: { name: c.meaning },
                create: { name: c.meaning },
              },
            },
            BikeModel: {
              connectOrCreate: {
                where: { name: c.model },
                create: {
                  name: c.model,
                  BikeBrand: {
                    connectOrCreate: {
                      where: { name: c.brandname },
                      create: { name: c.brandname },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
    console.log(prismaContract)
    const contract = await prisma.contract.upsert(
      {
        where: { contractNumber: c.contractno },
        update: prismaContract,
        create: prismaContract,
      }
      // { create: prismaContract }
    )
    console.log(contract)
  }
  await pgclient.end()
}
migrateContractsAndBikes()
