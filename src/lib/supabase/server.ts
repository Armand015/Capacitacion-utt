import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";
import { assertSupabaseEnv } from "./env";

export async function createClient() {
  const { url, publishableKey } = assertSupabaseEnv();
  const cookieStore = await cookies();

  return createServerClient<Database>(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components no siempre pueden escribir cookies. El middleware
          // de sesión se agregará cuando se implemente autenticación real.
        }
      },
    },
  });
}
