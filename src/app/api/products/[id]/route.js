import { NextResponse } from "next/server";
import { getById, update, remove } from "../store";

export async function GET(_request, { params }) {
  const { id } = await params;
  const product = getById(id);
  if (!product) {
    return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, price, description, category, image } = body;

    if (!title || !description || !category || !image) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }
    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json({ error: "Harga harus berupa angka positif" }, { status: 400 });
    }

    const updated = update(id, { title, price, description, category, image, details: body.details ?? "" });
    if (!updated) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Request tidak valid" }, { status: 400 });
  }
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const product = getById(id);
  if (!product) {
    return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
  }
  return NextResponse.json(remove(id));
}
