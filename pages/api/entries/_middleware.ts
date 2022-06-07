
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";


export function middleware(req: NextRequest, ev:NextFetchEvent) {
    console.log('middleware api called');

    return NextResponse.next();
} 