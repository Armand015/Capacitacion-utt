import Link from "next/link";
import { adminRoutes, publicRoutes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-700 text-sm font-bold text-white">
            UTT
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">
              Capacitación Digital
            </span>
            <span className="block text-xs text-slate-500">
              Universidad Tecnológica de Tijuana
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {publicRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="hover:text-brand-700">
              {route.label}
            </Link>
          ))}
          <Link href="/admin/login" className="hover:text-brand-700">
            Administración
          </Link>
        </nav>

        <Link
          href="/cursos"
          className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-900"
        >
          Ver cursos
        </Link>
      </div>
    </header>
  );
}

export function AdminHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/admin" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-white">
            UTT
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink">
              Panel administrativo
            </span>
            <span className="block text-xs text-slate-500">
              Gestión de capacitación
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-ink"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/"
            className="rounded-md border border-slate-200 px-3 py-2 hover:border-brand-600 hover:text-brand-700"
          >
            Sitio público
          </Link>
        </nav>
      </div>
    </header>
  );
}
