import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-ink">Página no encontrada</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        El recurso solicitado no está disponible o no forma parte del MVP actual.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
