import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

console.log("DATABASE_URL EXISTS:", !!process.env.DATABASE_URL);

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({
    connectionString,
});

const globalForPrisma = globalThis as {
    db?: PrismaClient;
};

export const db =
    globalForPrisma.db ??
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.db = db;
}