// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma/client";

// Crée une instance unique pour éviter plusieurs connexions en dev
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Les champs nom, email et message sont obligatoires" },
        { status: 400 }
      );
    }

    const saved = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject || "",
        message: data.message,
      },
    });

    return NextResponse.json({ message: "Message envoyé avec succès", saved });
  } catch (err: any) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
