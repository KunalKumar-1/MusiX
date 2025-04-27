import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import { prismaClient } from "../../lib/db";


const UpvoteSchema = z.object({
    streamId: z.string(),
})

export async function POST(req: NextRequest) {
    // try {  
    
    const session = await getServerSession();
//TODO: get rid of db call
   const user =  await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    })

    if(!user) {
        return NextResponse.json({
            message: "user not found"
        })
    }

    try{
    const data = UpvoteSchema.parse(await req.json());
    await prismaClient.upvotes.delete({
        where: {
            streamId_userId: {
                userId: user.id,
                streamId: data.streamId
            }
        }
    })
} catch (e) {
    return NextResponse.json({
        message: "Error parsing data"
    })
}
}

