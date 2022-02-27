import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CognitoProvider from 'next-auth/providers/cognito';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../prisma/prisma'
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
    // ...add more providers here
  ],
  events: {
    createUser: async (message) => {
      const userId = message.user.id;
      console.log("USER ID:")
      console.log(userId);
      const profile = await prisma.vscProfile.create({
        data: {
          userId
        }
      })
      
    }
  }
});
