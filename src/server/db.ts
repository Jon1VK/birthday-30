import { PrismaClient, type Prisma } from "@prisma/client";
import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const logLevel: Prisma.LogLevel[] =
  env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"];

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: logLevel,
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
