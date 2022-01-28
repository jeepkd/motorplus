import * as argon2 from "argon2"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(username: string) {
  const password = Buffer.from("password")
  const user = await prisma.user.create({
    data: {
      username: username,
      passwordHash: await argon2.hash(password),
      email: `${username}@gmail.com`,
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
}
async function main() {
  Array.from({ length: 100 }, (x, i) => i).forEach((k) => {
    createUser(k.toString())
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
