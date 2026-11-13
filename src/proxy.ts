import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0];
  const pathname = request.nextUrl.pathname;

  if (hostname === "localhost") {
    return NextResponse.next();
  }

  if (hostname === "bots.avizum.dev") {
    if (pathname === "/") {
      return NextResponse.redirect("https://avizum.dev");
    }
    return NextResponse.rewrite(new URL(`/bots${pathname}`, request.url));
  }

  if (pathname === "/bots") {
    return NextResponse.redirect("https://avizum.dev");
  }
  if (pathname.startsWith("/bots/")) {
    const path = pathname.slice("/bots".length);
    return NextResponse.redirect(`https://bots.avizum.dev${path}`);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
