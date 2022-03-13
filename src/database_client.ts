import { PrismaClient, PrismaPromise, User } from '@prisma/client'

export class DatabaseClient {
    private prisma = new PrismaClient();

    public DatabaseClient() {}

    public getAllUsers(): PrismaPromise<User[]> {
        return this.prisma.user.findMany()
    }

    public getAllUsersWithFullfilledLanguages(language_ids: number[]): PrismaPromise<User[]> {        
        return this.prisma.$queryRaw`SELECT * FROM "User" WHERE ${language_ids} @> "languages_by_id"`    
    }
}