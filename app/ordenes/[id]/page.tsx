import Link from "next/link";

export default async function OrdenDetallePage(
  props: PageProps<"/ordenes/[id]">
) {
  const { id } = await props.params;

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Orden #{id}</h1>
      <p className="text-sm text-zinc-500">
        Detalle pendiente.
      </p>
      <Link href="/ordenes" className="text-sm underline">
        Volver
      </Link>
    </div>
  );
}
