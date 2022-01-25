import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { Prisma } from "@prisma/client"
import * as argon2 from "argon2"

import prisma from "../../../lib/prisma"

interface LoginInput {
  username: string
  password: string
}

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { username, password } = <LoginInput>credentials
        const query: Prisma.UserWhereUniqueInput = { username }

        const user = await prisma.user.findUnique({
          where: { username },
        })
        if (!user) return null

        const isVerified = await argon2.verify(user.passwordHash, password)
        if (!isVerified) return null

        return user
      },
    }),
  ],
})
