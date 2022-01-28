import { Prisma } from "@prisma/client"

import { pgclient, prisma } from "./helpers"

const query = `
  select * from tblcustomer;
`

const constructAddress = (c: any) => {
  const addressList: Array<String> = []
  if (c.homeno) addressList.push(`${c.homeno}`)
  if (c.moo) addressList.push(`หมู่ ${c.moo}`)
  if (c.soi) addressList.push(`ซ.${c.soi}`)
  if (c.tanann) addressList.push(`ถ.${c.tanann}`)
  return addressList.join(" ")
}

export async function migrateCustomer() {
  await pgclient.connect()
  const res = await pgclient.query(query)
  for (const c of res.rows) {
    const prismaCustomer: Prisma.CustomerCreateInput = {
      customerNumber: c.customercode,
      title: c.prefix,
      firstname: c.arname,
      lastname: c.lname,
      telephone: c.phoneno,
      Address: {
        create: {
          address: constructAddress(c),
          subdistrict: c.tambol,
          district: c.amphon,
          province: c.province,
          zipcode: c.postcode,
        },
      },
    }
    console.log(await prisma.customer.create({ data: prismaCustomer }))
  }
  await pgclient.end()
}
migrateCustomer()
