import { Client } from "pg"
import { Exception } from "sass"

import { Prisma, PrismaClient } from "@prisma/client"

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

  migrateColor(pgclient)
  migrateBrand(pgclient)

  await pgclient.end()
}

async function migrateColor(pgclient: Client) {
  const res = await pgclient.query(` SELECT * FROM tblcolorcode `)

  for (const c of res.rows) {
    const entity: Prisma.BikeColorCreateInput = {
      code: c.colorcode,
      name: c.meaning,
    }
    try {
      const color = await prisma.bikeColor.upsert({
        where: { code: c.colorcode },
        create: entity,
        update: entity,
      })
      console.log(color)
    } catch (err: any) {
      if (err?.code == "P2002") continue
      throw err
    }
  }
}

async function migrateBrand(pgclient: Client) {
  const res = await pgclient.query(` SELECT * FROM tbl `)

  for (const c of res.rows) {
    const entity: Prisma.BikeBrandCreateInput = {
      code: c.colorcode,
      name: c.meaning,
    }
    try {
      const color = await prisma.bikeColor.upsert({
        where: { code: c.colorcode },
        create: entity,
        update: entity,
      })
      console.log(color)
    } catch (err: any) {
      if (err?.code == "P2002") continue
      throw err
    }
  }
}

migrateContractsAndBikes()
