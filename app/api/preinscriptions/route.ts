// app/api/preinscriptions/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

if (!globalThis.prisma) {
  // No options, just default constructor
  globalThis.prisma = new PrismaClient();
}

prisma = globalThis.prisma;

// POST
export async function POST(req: Request) {
  try {
    const data = await req.json();
   

    const saved = await prisma.preInscription.create({
      data: {
        fullName: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        
      },
    });

    return NextResponse.json({ message: "Préinscription enregistrée", saved });
  } catch (err: any) {
    console.error("POST /api/preinscriptions error:", err);
  return NextResponse.json(
    { error: err.message, stack: err.stack }, // <-- debug info
    { status: 500 }
  );
  }
}

// GET
export async function GET(req: Request) {
  const url = new URL(req.url);
  const download = url.searchParams.get("download"); // check if download=1

  const data = await prisma.preInscription.findMany();

  if (download === "1") {
    // Prepare CSV without eventId and format createdAt
    const headers = ["fullName", "email", "phone", "message"];
    const csv = [
      headers.join(";"),
      ...data.map(d => {
       
       
        return headers.map(h => {
         
          return `"${(d as any)[h]}"`;
        }).join(";");
      })
    ].join("\n");

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="preinscriptions.csv"'
      }
    });
  }

  // Otherwise, return JSON for table
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}