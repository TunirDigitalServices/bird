// Use relative path to the generated client
import pkg from '../generated/prisma/client'; // adjust path if needed
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  const events = await prisma.event.findMany();
  console.log(events);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
