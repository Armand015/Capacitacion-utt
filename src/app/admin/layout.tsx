import { AdminHeader } from "@/components/site-header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
}
