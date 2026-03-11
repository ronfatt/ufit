import { NextResponse, type NextRequest } from "next/server";

function isLockdownEnabled() {
  const value = process.env.DEMO_LOCKDOWN?.toLowerCase();
  return value === "on";
}

export function proxy(request: NextRequest) {
  if (!isLockdownEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname === "/closed" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/closed";
  url.search = "";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
