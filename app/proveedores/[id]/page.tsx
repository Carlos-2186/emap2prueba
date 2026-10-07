import Link from "next/link";

export default async function ProveedorDetallePage(
  props: PageProps<"/proveedores/[id]">
) {
  const { id } = await props.params;

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">
        Proveedor #{id}
      </h1>
      <p className="text-sm text-zinc-500">
        Detalle pendiente.
      </p>
      <Link href="/proveedores" className="text-sm underline">
        Volver
      </Link>
    </div>
  );
}
