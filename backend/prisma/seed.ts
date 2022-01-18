import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'nutthawut.ki@gmail.com' },
    update: {},
    create: {
      email: 'nutthawut.ki@gmail.com',
      username: 'jeep',
      password_hash: 'password',
    },
  })

  console.log({ user })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
