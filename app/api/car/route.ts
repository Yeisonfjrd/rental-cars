import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received data:", body);  // Log de los datos recibidos

    const car = await db.car.create({
      data: {
        userId: body.userId,
        name: body.name,
        cv: body.cv,
        transmission: body.transmission,
        people: body.people,
        photo: body.photo,
        priceDay: body.priceDay,
        engine: body.engine,
        type: body.type,
        isPublished: body.isPublished,
      },
    });

    console.log("Car created:", car);

    return NextResponse.json(car);
  } catch (error) {
    console.error("[CAR ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error", details: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}