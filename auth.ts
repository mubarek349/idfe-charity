import NextAuth, { NextAuthConfig } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import {prisma} from "./lib/db";
import { loginSchema } from "./lib/zodSchema";


// EXTEND NEXT-AUTH USER
declare module "next-auth" {
  interface User {
    id?: string;
    // role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    // role: Role;
  }
}

// ✅ FIXED CUSTOM ERROR CLASS
export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
    // signOut: "/signout",
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      if (auth) {
        if (nextUrl.pathname.startsWith("/login")) {
          return Response.redirect(
            new URL("/admin", nextUrl)
          );
        } else return true;
      } else if (nextUrl.pathname.startsWith("/admin")) {
        return false;
      } else return true;
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      return { ...session, user: { ...session.user, ...token } };
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          console.log("Authorizing user:", credentials);
          const { data, success } = await loginSchema.safeParseAsync(
            credentials
          );
          if (!success) throw new CustomError("Invalid credentials");
          console.log("Parsed login data:", data);

          const user = await prisma.user.findFirst({
            where: { phone: data.phoneno },
            select: { id: true, password: true ,role:true},
          });

          if (!user) throw new CustomError("Invalid Phone Number");
          if (!user.password) throw new CustomError("Password Not Set");
          if (data.passcode !== user.password)
            throw new CustomError("Invalid Password");

          return { id: user.id };
        } catch (error) {
          console.error("Error authorizing user:", error);
          throw new CustomError("Authorization failed");
        }
      },
    }),
  ],
} satisfies NextAuthConfig;

// EXPORT AUTH UTILS
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
