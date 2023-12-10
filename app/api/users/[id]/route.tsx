import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, {params}:Props){
    //Fetch data from DB
    //If data not found, return 404
    //Else return data

    if(params.id > 10)
        return NextResponse.json({error:'User not found'}, {status: 404});

    return NextResponse.json({id: params.id, name: 'Andrey'});
}

export async function PUT(request: NextRequest, {params}:Props){
    const body = await request.json();
    if(!body.name)
        return NextResponse.json({error:'Name is required'}, {status: 400});
        
    return NextResponse.json({id: params.id, name:'UpdatedName'}, {status: 200});
}

export async function DELETE(request: NextRequest, {params}:Props){
    const body = await request.json();
    if(!body.name)
        return NextResponse.json({error:'Name is required'}, {status: 400});
        
    return NextResponse.json({id: params.id, name:'DeletedUser'}, {status: 200});
}