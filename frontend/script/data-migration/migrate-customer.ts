import { Client } from "pg"

import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "hi",
  password: "password",
  port: 5432,
})

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

async function main() {
  await client.connect()
  const res = await client.query(query)
  // res.rows.forEach(async (c) => {
  for (const c of res.rows) {
    const prismaCustomer: Prisma.CustomerCreateInput = {
      customerID: c.customercode,
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
  await client.end()
}
main()
