import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.preInscription.findMany();

  const headers: (keyof typeof data[0])[] = ['id', 'fullName', 'email', 'phone', 'message'];

  const csv = [
    headers.join(';'),
    ...data.map(d =>
      headers.map(h => `"${d[h]}"`).join(';')  // TypeScript is happy now
    )
  ].join('\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="preinscriptions.csv"'
    }
  });
}
