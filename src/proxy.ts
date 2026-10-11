import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    const currentPath = request.nextUrl.pathname;
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", currentPath);

    return NextResponse.redirect(signInUrl);
   
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile","/products/:path*"],
};