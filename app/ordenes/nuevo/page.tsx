import Link from "next/link";

export default function NuevaOrdenPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Nueva orden</h1>
      <p className="text-sm text-zinc-500">
        Formulario pendiente.
      </p>
      <Link href="/ordenes" className="text-sm underline">
        Volver
      </Link>
    </div>
  );
}
