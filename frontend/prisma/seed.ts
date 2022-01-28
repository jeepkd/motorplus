import * as argon2 from "argon2"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const password = Buffer.from("password")
  const user = await prisma.user.create({
    data: {
      username: "jeep",
      passwordHash: await argon2.hash(password),
      email: "nutthawut.ki@gmail.com",
      role: "ADMIN",
      Address: {
        create: {
          address: "347 หมู่ 6",
          subdistrict: "ท่าบ่อ",
          district: "ท่าบ่อ",
          province: "หนองคาย",
          zipcode: "43110",
        },
      },
    },
  })
  console.log({ user })

  const bikes = await prisma.bike.create({
    data: {
      chassisNumber: "MLHJA1403M5801819",
      engineNumber: "JA14E1601819",
      BikeColor: {
        create: { name: "ดำ", code: "BK" },
      },
      BikeModel: {
        create: {
          name: "AFS110MSFC",
          BikeBrand: { create: { name: "HONDA" } },
        },
      },
    },
  })

  const customer = await prisma.customer.create({
    data: {
      customerNumber: "2419900031361",
      title: "นาย",
      firstname: "ณัฐวุฒิ",
      lastname: "คิดดี",
      telephone: "0894194120",
      Address: {
        create: {
          address: "347 หมู่ 6",
          subdistrict: "ท่าบ่อ",
          district: "ท่าบ่อ",
          province: "หนองคาย",
          zipcode: "43110",
        },
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
