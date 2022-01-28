import { Client } from "pg"

import { Prisma, PrismaClient } from "@prisma/client"

// declare global {
//   var prisma: PrismaClient
// }

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

export let prisma!: PrismaClient

if (!prisma) {
  prisma = new PrismaClient()
}

export const pgclient = new Client({
  user: "postgres",
  host: "localhost",
  database: "hi",
  password: "password",
  port: 5432,
})
