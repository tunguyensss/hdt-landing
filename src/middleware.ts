import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en-US", "vi"];
const defaultLocale = "en-US";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|assets).*)",
  ],
};

export function middleware(req: NextRequest) {
  return localeHandler(req);
}

function localeHandler(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = defaultLocale;
  req.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(req.nextUrl);
}
