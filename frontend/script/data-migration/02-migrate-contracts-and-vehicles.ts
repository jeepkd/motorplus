import { count } from "console"

import { Client } from "pg"
import { Exception } from "sass"

import { Prisma, PrismaClient } from "@prisma/client"

import { pgclient, prisma } from "./helpers"

export async function migrateContractsAndVehicles() {
  await pgclient.connect()

  await migrateColor(pgclient)
  await migrateBrand(pgclient)
  await migrateModel(pgclient)
  await migrateVehicle(pgclient)
  await migrateContract(pgclient)

  await pgclient.end()
}

async function migrateColor(pgclient: Client) {
  const res = await pgclient.query(` SELECT * FROM tblcolorcode `)

  for (const c of res.rows) {
    const entity: Prisma.VehicleColorCreateInput = {
      code: c.colorcode,
      name: c.meaning,
    }
    try {
      const color = await prisma.vehicleColor.upsert({
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
  const res = await pgclient.query(
    `select distinct(brandname) from tbldtlstock`
  )

  for (const c of res.rows) {
    const entity: Prisma.VehicleBrandCreateInput = {
      name: c.brandname,
    }
    try {
      const dbEntity = await prisma.vehicleBrand.upsert({
        where: { name: c.brandname },
        create: entity,
        update: entity,
      })
      console.log(dbEntity)
    } catch (err: any) {
      // if (err?.code == "P2002") continue
      throw err
    }
  }
}

async function migrateModel(pgclient: Client) {
  const res = await pgclient.query(
    `select distinct(model),brandname from tbldtlstock ; `
  )

  for (const c of res.rows) {
    const entity: Prisma.VehicleModelCreateInput = {
      name: c.model,
      VehicleBrand: {
        connect: {
          name: c.brandname,
        },
      },
    }
    try {
      const dbEntity = await prisma.vehicleModel.upsert({
        where: { name: c.model },
        create: entity,
        update: entity,
      })
      console.log(dbEntity)
    } catch (err: any) {
      // if (err?.code == "P2002") continue
      throw err
    }
  }
}

async function migrateVehicle(pgclient: Client) {
  const res = await pgclient.query(
    `SELECT chassisno,tblcolorcode.meaning AS c_meaning,*FROM tbldtlstock JOIN tblstocktype ON tbldtlstock.stocktype=tblstocktype.stocktype JOIN tblcolorcode ON tbldtlstock.colorcode=tblcolorcode.colorcode WHERE tbldtlstock.stocktype in('HP','CS','CC')`
  )

  for (const c of res.rows) {
    const entity: Prisma.VehicleCreateInput = {
      chassisNumber: c.chassisno,
      engineNumber: c.enginno,
      VehicleColor: {
        connect: {
          name: c.c_meaning,
        },
      },
      VehicleModel: {
        connect: {
          name: c.model,
        },
      },
    }
    try {
      const dbEntity = await prisma.vehicle.upsert({
        where: { chassisNumber: c.chassisno },
        create: entity,
        update: entity,
      })
      console.log(dbEntity)
    } catch (err: any) {
      // if (err?.code == "P2002") continue
      throw err
    }
  }
}
async function migrateContract(pgclient: Client) {
  var cnt = 0
  const res = await pgclient.query(
    `SELECT*FROM tblhpcontract WHERE contractno<>'' AND customercode in(SELECT customercode FROM tblcustomer)and chassisno in(select chassisno from tbldtlstock); `
  )

  for (const c of res.rows) {
    const entity: Prisma.ContractCreateInput = {
      contractNumber: c.contractno,
      Customer: {
        connect: {
          customerNumber: c.customercode,
        },
      },
      Vehicle: {
        connect: {
          chassisNumber: c.chassisno,
        },
      },
    }
    console.log(entity)
    try {
      const dbEntity = await prisma.contract.upsert({
        where: { contractNumber: c.contractno },
        create: entity,
        update: entity,
      })
      console.log(dbEntity)
    } catch (err: any) {
      // if (err?.code == "P2002") continue
      if (err?.code == "P2025") {
        cnt += 1
        continue
      }

      throw err
    }
  }
  console.log(cnt)
}

migrateContractsAndVehicles()
