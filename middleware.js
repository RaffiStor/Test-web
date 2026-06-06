import { NextResponse }
from "next/server";

export function middleware(
  request
){

  const token =
  request.cookies.get(
    "token"
  );

  const isLogin =
  request.nextUrl.pathname
  === "/login";

  if(
    !token &&
    !isLogin
  ){

    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );

  }

  return NextResponse.next();

}

export const config = {

  matcher:[
    "/dashboard/:path*",
    "/siswa/:path*",
    "/guru/:path*",
    "/users/:path*",
    "/upload/:path*",
    "/settings/:path*",
    "/pengumuman/:path*"
  ]

};