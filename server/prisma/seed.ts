import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  await prisma.user.deleteMany();
  await prisma.payments.deleteMany();
  await prisma.batchTimings.deleteMany();

    // Creating a User
    let user = await prisma.user.create({
        data: {
            name: "Deepankar",
            age: 19,
            phone: "+919643700091",
            registered: false
        }
    })

    // Creating the Batch Timings 
    let batchTimings = await prisma.batchTimings.createMany({
        data: [
            {
                start_time: "06:00:00",
                end_time: "07:00:00"
            },{
                start_time: "07:00:01",
                end_time: "08:00:00"
            },{
                start_time: "08:00:01",
                end_time: "09:00:00"
            },{
                start_time: "17:00:00",
                end_time: "18:00:00"
            },
        ]
    })

    // console.log({ user, batchTimings });
    // console.log(await prisma.user.findMany());
    // console.log(await prisma.batchTimings.findMany());

    // Creating Payments 
    let payments = await prisma.payments.create({
        data: {
            month: 12,
            batchTimingsId: 5,
            userId: "9577b6fc-47c7-457f-b357-ee7e28eb1a6c",
            status: false,
            amount: 500,
            updatedAt: new Date()
        }
    })

    // console.log(await prisma.payments.findMany());
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })