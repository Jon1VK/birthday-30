import { cookies } from "next/headers";
import { cache } from "react";
import { db } from "../db";

export const getUser = cache(async () => {
  const id = cookies().get("cuid")?.value ?? "";
  return await db.user.findUnique({ where: { id } });
});
