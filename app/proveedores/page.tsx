import { connection } from "next/server";
import { listarProveedores } from "@/controllers/proveedorController";

export default async function ProveedoresPage() {
  await connection();

  let proveedores: Awaited<
    ReturnType<typeof listarProveedores>
  > = [];
  let error: string | null = null;

  try {
    proveedores = await listarProveedores();
  } catch (e) {
    error = e instanceof Error ? e.message : "Error desconocido";
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Proveedores</h1>

      {error && (
        <p className="text-sm text-red-600">Error: {error}</p>
      )}

      {!error && proveedores.length === 0 && (
        <p className="text-sm text-zinc-500">
          No hay proveedores.
        </p>
      )}

      {proveedores.length > 0 && (
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800">
            <tr>
              <th className="py-2 pr-4">Nombre</th>
              <th className="py-2 pr-4">NIT</th>
              <th className="py-2 pr-4">Celular</th>
              <th className="py-2 pr-4">Tienda</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((p) => (
              <tr
                key={p.id_proveedor}
                className="border-b border-zinc-100 dark:border-zinc-900"
              >
                <td className="py-2 pr-4">
                  {p.nombre} {p.paterno} {p.materno ?? ""}
                </td>
                <td className="py-2 pr-4">{p.nit}</td>
                <td className="py-2 pr-4">
                  {p.celular ?? "—"}
                </td>
                <td className="py-2 pr-4">
                  {p.tienda_nombre ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
