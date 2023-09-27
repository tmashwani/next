import { NextResponse } from "next/server";
export function middleware(request) {
  console.log("res", request);
  const token = localStorage.getItem("token");
  console.log("token", token);
  return token;
}
export const config = {
  matcher: "/ /:path*",
};
