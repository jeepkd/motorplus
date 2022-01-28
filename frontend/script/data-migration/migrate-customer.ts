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
  res.rows.forEach(async (c) => {
    // res.rows.slice(0, 100).forEach(async (c) => {
    const prismaCustomer: Prisma.CustomerCreateInput = {
      customerID: c.customercode,
      title: c.prefix || null,
      firstname: c.arname || null,
      lastname: c.lname || null,
      telephone: c.phoneno || null,
      Address: {
        create: {
          address: constructAddress(c) || null,
          subdistrict: c.tambol || null,
          district: c.amphon || null,
          province: c.province || null,
          zipcode: c.postcode || null,
        },
      },
    }
    console.log(await prisma.customer.create({ data: prismaCustomer }))
  })
  await client.end()
}
main()
