import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set experiment cookie on first visit (50/50 split)
  if (!request.cookies.get("x-experiment")) {
    const variant = Math.random() < 0.5 ? "A" : "B";
    response.cookies.set("x-experiment", variant, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      httpOnly: false, // must be readable client-side
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/", "/apps"],
};
