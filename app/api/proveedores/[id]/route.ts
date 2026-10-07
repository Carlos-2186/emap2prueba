// app/api/proveedores/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  eliminarProveedor,
  modificarProveedor,
  obtenerProveedor,
} from "@/controllers/proveedorController";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const proveedor = await obtenerProveedor(Number(id));

    return NextResponse.json(proveedor);
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

export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const proveedor = await modificarProveedor(
      Number(id),
      body
    );

    return NextResponse.json(proveedor);
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

export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    await eliminarProveedor(Number(id));

    return NextResponse.json({
      success: true,
      message: "Proveedor eliminado correctamente",
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