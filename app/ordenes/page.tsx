import { connection } from "next/server";
import { listarOrdenes } from "@/controllers/ordenController";

export default async function OrdenesPage() {
  await connection();

  let ordenes: Awaited<ReturnType<typeof listarOrdenes>> = [];
  let error: string | null = null;

  try {
    ordenes = await listarOrdenes();
  } catch (e) {
    error = e instanceof Error ? e.message : "Error desconocido";
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Órdenes</h1>

      {error && (
        <p className="text-sm text-red-600">Error: {error}</p>
      )}

      {!error && ordenes.length === 0 && (
        <p className="text-sm text-zinc-500">No hay órdenes.</p>
      )}

      {ordenes.length > 0 && (
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800">
            <tr>
              <th className="py-2 pr-4">N°</th>
              <th className="py-2 pr-4">Hoja de ruta</th>
              <th className="py-2 pr-4">Inicio</th>
              <th className="py-2 pr-4">Presentación</th>
              <th className="py-2 pr-4">Proveedor</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr
                key={orden.id_orden}
                className="border-b border-zinc-100 dark:border-zinc-900"
              >
                <td className="py-2 pr-4">{orden.numero}</td>
                <td className="py-2 pr-4">
                  {orden.hoja_ruta ?? "—"}
                </td>
                <td className="py-2 pr-4">
                  {orden.f_inicio ?? "—"}
                </td>
                <td className="py-2 pr-4">
                  {orden.f_presentacion ?? "—"}
                </td>
                <td className="py-2 pr-4">
                  {orden.id_proveedor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
