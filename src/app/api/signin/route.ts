import { env } from "~/env.mjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { z } from "zod";

const searchParamsSchema = z.object({
  cuid: z.string().default(""),
});

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const { cuid } = searchParamsSchema.parse(
    Object.fromEntries([...searchParams.entries()]),
  );

  cookies().set("cuid", cuid);

  return NextResponse.redirect(new URL("/", env.PUBLIC_URL));
}
