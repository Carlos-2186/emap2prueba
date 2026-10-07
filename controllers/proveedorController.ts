// controllers/proveedorController.ts

import {
  createProveedor,
  deleteProveedor,
  getProveedorById,
  getProveedores,
  updateProveedor,
} from "@/models/proveedorModel";

import type { ProveedorCreate } from "@/types/proveedor";

export async function listarProveedores() {
  return getProveedores();
}

export async function obtenerProveedor(id: number) {
  return getProveedorById(id);
}

export async function guardarProveedor(
  datos: ProveedorCreate
) {
  return createProveedor(datos);
}

export async function modificarProveedor(
  id: number,
  datos: Partial<ProveedorCreate>
) {
  return updateProveedor(id, datos);
}

export async function eliminarProveedor(id: number) {
  return deleteProveedor(id);
}