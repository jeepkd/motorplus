import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import * as argon2 from "argon2"

import prisma from "../../../lib/prisma"

const hours = (h: number) => h * 60 * 60

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
  session: {
    maxAge: hours(12), //
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
  callbacks: {
    jwt({ token, user }) {
      if (user?.username) {
        token.username = user.username
      }
      return token
    },
    session({ session, token, user }) {
      session.user.username = token.username
      console.log({ session, token, user })
      return session
    },
  },
})
