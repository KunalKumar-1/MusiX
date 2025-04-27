import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "../../lib/db";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {
        async signIn(params)  {
            //console.log('signin: ', params);
            if(!params.user.email) {
                return false;
            }
            try {
                await prismaClient.user.create({
                    data: {
                        name: params.user.name ?? "",
                        email: params.user.email ?? "",
                        avatar: params.user.image ?? "",
                        provider: "Google",
                        role: "EndUser"
                    }
                })
            } catch (e) {
                console.error(e);
            }
            return true;
        }
    }
})


export { handler as GET, handler as POST };