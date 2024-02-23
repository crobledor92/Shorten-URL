import NextAuth from "next-auth/next";
import { Account, Session, User } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserData, signInWithCredentials, signInWithGoogle } from "@/libs/actions";
import { IUserDocument, UserCredentials } from "@/libs/types";

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID as string,
            clientSecret: GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "Your email"
                },
                password: { 
                    label: "Password", 
                    type: "password" 
                }
            },
            async authorize(credentials) {

                const user = { id: '1', email: credentials?.email, password: credentials?.password }

                if(user) {
                    return user
                }

                return null
            }
        })
    ],
    site: process.env.NEXTAUTH_URL,
    callbacks: {
        async signIn({user, account}: {user: User | UserCredentials, account: Account | null}) {
            console.log("User: ", user)
            console.log("Account: ", account)

            try {
                let isStored: boolean
                
                if(account?.provider === 'google') {
                    isStored = await signInWithGoogle(user, account?.provider as string)
                } else {
                    console.log("se comprueban credenciales")
                    isStored = await signInWithCredentials(user as UserCredentials, account?.provider as string)
                    console.log('El usuario es', isStored)
                }

                if (!isStored) {
                    return '/api/auth/signin'
                }

                return true
            } catch (error) {
                console.log(error)
                return '/api/auth/signin'
            }
        },
        async session({ session }: { session: Session }) {
            if (session.user?.email) {
              const userData: IUserDocument | null = await getUserData(session.user?.email);
      
              if (userData) {
                session.user.id = userData.id;
              }
            }
      
            return session;
        },
    }
}



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}