// types/proveedor.ts

export interface Proveedor {
  id_proveedor: number;
  nombre: string;
  paterno: string;
  materno?: string | null;
  nit: string;
  direccion?: string | null;
  celular?: string | null;
  tienda_nombre?: string | null;
  id_departamento: number;
}

export interface ProveedorCreate {
  nombre: string;
  paterno?: string;
  materno?: string | null;
  nit: string;
  direccion?: string | null;
  celular?: string | null;
  tienda_nombre?: string | null;
  id_departamento: number;
}