import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, ROUTES_LIST } from './constants';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute =
    pathname.startsWith(ROUTES_LIST.dashboard) ||
    pathname.startsWith(ROUTES_LIST.posts);

  const isAuthRoute = pathname.startsWith(ROUTES_LIST.login);

  const authCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  const isAuthenticated = authCookie === AUTH_COOKIE_VALUE;

  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL(ROUTES_LIST.login, request.url);

    loginUrl.searchParams.set('redirect', pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL(ROUTES_LIST.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/posts/:path*', '/login'],
};
