import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     Match all paths EXCEPT these:
     - api routes
     - Next.js static files
     - image optimization files
     - favicon
     - robots.txt
     - sitemap.xml
     - google verification files
     - all public static files
    */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|google.*|.*\\.(png|jpg|jpeg|svg|gif|webp)$).*)",
  ],
};
