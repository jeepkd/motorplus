import * as argon2 from 'argon2'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'nutthawut.ki@gmail.com' },
    update: {},
    create: {
      email: 'nutthawut.ki@gmail.com',
      username: 'jeep',
      passwordHash: await argon2.hash('password'),
    },
  })
  console.log({ user })
  // argon2.
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
