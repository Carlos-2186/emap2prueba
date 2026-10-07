// types/orden.ts

export interface Orden {
  id_orden: number;
  numero: string;
  hoja_ruta?: string | null;
  f_inicio?: string | null;
  f_presentacion?: string | null;
  order_type?: string | null;
  process_type?: string | null;
  documento?: string | null;
  plazo?: number | null;
  lugar_entrega?: string | null;
  id_proveedor: number;
}

export interface OrdenCreate {
  numero: string;
  hoja_ruta?: string | null;
  f_inicio?: string | null;
  f_presentacion?: string | null;
  order_type?: string | null;
  process_type?: string | null;
  documento?: string | null;
  plazo?: number | null;
  lugar_entrega?: string | null;
  id_proveedor: number;
}