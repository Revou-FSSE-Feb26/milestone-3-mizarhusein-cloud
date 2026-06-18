import { NextResponse } from "next/server";
import { getAll, create } from "./store";

export async function GET() {
  return NextResponse.json(getAll());
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, price, description, category, image } = body;

    if (!title || !description || !category || !image) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }
    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json({ error: "Harga harus berupa angka positif" }, { status: 400 });
    }

    const newProduct = create({ title, price, description, category, image, details: body.details ?? "" });
    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}
