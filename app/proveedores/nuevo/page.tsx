import Link from "next/link";

export default function NuevoProveedorPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Nuevo proveedor</h1>
      <p className="text-sm text-zinc-500">
        Formulario pendiente.
      </p>
      <Link href="/proveedores" className="text-sm underline">
        Volver
      </Link>
    </div>
  );
}
