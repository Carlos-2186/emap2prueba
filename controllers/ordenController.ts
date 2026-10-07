// controllers/ordenController.ts

import {
  createOrden,
  deleteOrden,
  getOrdenById,
  getOrdenes,
  updateOrden,
} from "@/models/ordenModel";

import type { OrdenCreate } from "@/types/orden";

export async function listarOrdenes() {
  return getOrdenes();
}

export async function obtenerOrden(id: number) {
  return getOrdenById(id);
}

export async function guardarOrden(datos: OrdenCreate) {
  return createOrden(datos);
}

export async function modificarOrden(
  id: number,
  datos: Partial<OrdenCreate>
) {
  return updateOrden(id, datos);
}

export async function eliminarOrden(id: number) {
  return deleteOrden(id);
}
