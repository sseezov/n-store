import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { env } from 'process';
import { User } from 'next-auth';

export const authConfig = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.password) return null;

        if (credentials?.password === env.ADMIN_PASSWORD) {
          return { id: '1', name: 'Natalia' };
        }

        return null
      }
    })
  ],

  pages: {
    signIn: '/signin'
  }
}