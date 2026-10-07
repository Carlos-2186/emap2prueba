// app/api/ordenes/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  guardarOrden,
  listarOrdenes,
} from "@/controllers/ordenController";

export async function GET() {
  try {
    const ordenes = await listarOrdenes();

    return NextResponse.json(ordenes);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const orden = await guardarOrden(body);

    return NextResponse.json(orden, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
