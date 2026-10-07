// app/api/proveedores/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  guardarProveedor,
  listarProveedores,
} from "@/controllers/proveedorController";

export async function GET() {
  try {
    const proveedores = await listarProveedores();

    return NextResponse.json(proveedores);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Error desconocido";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const proveedor = await guardarProveedor(body);

    return NextResponse.json(proveedor, {
      status: 201,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Error desconocido";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}