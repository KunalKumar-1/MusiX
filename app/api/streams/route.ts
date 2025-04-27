import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import { prismaClient } from "../lib/db";
const youtube = require("@forkprince/youtube-search-api");
const YT_REGEX = /https:\/\/www\.youtube\.com\/watch\?v=[\w-]+/gm;


const CreateStreamSchema = z.object({
    createrId: z.string(),
    url: z.string()
})

export async function POST(req: NextRequest) {
    try{
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = YT_REGEX.test(data.url);
    if(!isYt) {
        return NextResponse.json({
            message: "Invalid URL"
        }, {
            status: 411
        })
    }

    const extractedId = data.url.split("?v=")[1];
    const res = await youtube.getVideoDetails(extractedId);
     //console.log(res);
     //console.log(res.thumbnail.thumbnails);
     const thumbnail = res.thumbnail.thumbnails;
     //console.log(thumbnail)
    // console.log(JSON.stringify(res.thumbnails.thumbnails));
    //thumbnail.sort((a: {width: number}, b: {width: number}) => a.width < b.width ? 1 : -1);
    //console.log(res.thumbnail.thumbnails[4].url);
    
    const stream = await prismaClient.streams.create({
        data: {
            userId: data.createrId,
            url: data.url,
            extractedId,
            type: "Youtube",
            title: res.title ?? "Unknown title",
            smallImage: thumbnail[0].url ?? "https://cdn.pixabay.com/photo/2025/04/23/13/10/cherry-blossoms-9552919_1280.jpg",
            bigImage: thumbnail[4].url ?? "https://cdn.pixabay.com/photo/2025/04/23/13/10/cherry-blossoms-9552919_1280.jpg"
        }
    });
    
    return NextResponse.json({
        message: "Stream Added",
        id: stream.id
    }, {
        status: 201
    })

} catch (e) {
    console.log(e)
        return NextResponse.json({
            message: "Erroe while parsing data"
        })
    }
}

export async function GET(req: NextRequest) {
   const creatorId = req.nextUrl.searchParams.get("creatorId");
   const streams = await prismaClient.streams.findMany({
    where:{
        userId: creatorId ?? ""
    }
   })
   return NextResponse.json({
    streams
   })
}



