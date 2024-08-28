import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
  '/archive',
  '/article',
  '/home',
  '/mypage',
  '/quiz',
  '/report',
  '/review',
  '/dashboard',
  '/profile',
]; // 로그인이 필요한 경로들

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  // 로그인하지 않은 상태에서 보호된 경로에 접근하려 할 때
  if (!accessToken && protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그인한 상태에서 '/' 또는 '/signup'으로 접근하려 할 때
  if (
    accessToken &&
    (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/signup'))
  ) {
    return NextResponse.redirect(new URL('/home', request.url)); // 원하는 경로로 리다이렉트
  }

  return NextResponse.next(); // 다른 요청들은 정상적으로 처리
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'], // _next 경로나 favicon.ico는 제외
};
