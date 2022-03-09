import { PrismaClient, PrismaPromise, User } from '@prisma/client'

export class DatabaseClient {
    private prisma = new PrismaClient();

    public DatabaseClient() {}

    public getAllUsers(): PrismaPromise<User[]> {
        return this.prisma.user.findMany()
    }
}