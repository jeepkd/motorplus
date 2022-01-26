import { exec } from 'child_process'

import * as argon2 from 'argon2'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const command =
    'docker-compose exec -T db psql -U postgres motorplus_development < ./backup/seed_db.sql'
  exec(command, (error, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    if (error !== null) {
      throw Error(`exec error: ${error}`)
    }
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
