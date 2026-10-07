// models/proveedorModel.ts

import { supabase } from "@/lib/supabase";
import type {
  Proveedor,
  ProveedorCreate,
} from "@/types/proveedor";

export async function getProveedores(): Promise<Proveedor[]> {
  const { data, error } = await supabase
    .from("proveedor")
    .select("*")
    .order("id_proveedor", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getProveedorById(
  id: number
): Promise<Proveedor | null> {
  const { data, error } = await supabase
    .from("proveedor")
    .select("*")
    .eq("id_proveedor", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createProveedor(
  proveedor: ProveedorCreate
): Promise<Proveedor> {
  const { data, error } = await supabase
    .from("proveedor")
    .insert(proveedor)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateProveedor(
  id: number,
  proveedor: Partial<ProveedorCreate>
): Promise<Proveedor> {
  const { data, error } = await supabase
    .from("proveedor")
    .update(proveedor)
    .eq("id_proveedor", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteProveedor(
  id: number
): Promise<void> {
  const { error } = await supabase
    .from("proveedor")
    .delete()
    .eq("id_proveedor", id);

  if (error) {
    throw new Error(error.message);
  }
}