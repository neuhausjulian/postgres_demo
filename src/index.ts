import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const new_user = {
        firstname: 'Alice',
        lastname: 'Doe',
        email: 'alice.doe@prisma.io'
    }

    await prisma.user.create({
        data: new_user
    })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
