
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {

  // Get current user session
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const user = session?.user;
  const pathname = request.nextUrl.pathname;

  // 1. Block signin and signup pages for logged-in users
  if (user && (pathname === "/signin" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 2. Protect private pages from unauthenticated users
  if (
    !user &&
    (pathname.startsWith("/profile") ||
      pathname.startsWith("/product"))
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // 3. Allow all other requests
  return NextResponse.next();
}

// Routes where proxy should run
export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/profile/:path*",
    "/product/:path*",
  ],
};
