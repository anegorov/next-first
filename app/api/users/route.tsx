import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1, name: "Andrey"},
        {id: 2, name: "Vik"}
    ]);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    if(!body.name) {
        return NextResponse.json({error: 'Name is required'}, {status: 400});
    }
    // console.log(body);
    return NextResponse.json({id:4, name: 'Sergey'}, {status: 201});
}