import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_420px]">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
            Acceso administrativo
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Pantalla base para el inicio de sesión de administradores. La
            autenticación real se integrará posteriormente con Supabase.
          </p>
          <Link href="/" className="mt-6 text-sm font-semibold text-brand-700">
            Regresar al sitio público
          </Link>
        </div>

        <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Correo institucional
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@uttijuana.edu.mx"
              className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Sin autenticación real por ahora"
              className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <button
            type="button"
            className="mt-6 h-11 w-full rounded-md bg-brand-700 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            Entrar al panel
          </button>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Esta pantalla es visual. No valida usuarios ni contraseñas en esta
            iteración.
          </p>
        </form>
      </div>
    </section>
  );
}
