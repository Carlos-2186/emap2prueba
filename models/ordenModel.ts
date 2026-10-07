// models/ordenModel.ts

import { supabase } from "@/lib/supabase";
import type { Orden, OrdenCreate } from "@/types/orden";

export async function getOrdenes(): Promise<Orden[]> {
  const { data, error } = await supabase
    .from("orden")
    .select("*")
    .order("id_orden", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getOrdenById(
  id: number
): Promise<Orden | null> {
  const { data, error } = await supabase
    .from("orden")
    .select("*")
    .eq("id_orden", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createOrden(
  orden: OrdenCreate
): Promise<Orden> {
  const { data, error } = await supabase
    .from("orden")
    .insert(orden)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateOrden(
  id: number,
  orden: Partial<OrdenCreate>
): Promise<Orden> {
  const { data, error } = await supabase
    .from("orden")
    .update(orden)
    .eq("id_orden", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteOrden(id: number): Promise<void> {
  const { error } = await supabase
    .from("orden")
    .delete()
    .eq("id_orden", id);

  if (error) {
    throw new Error(error.message);
  }
}
