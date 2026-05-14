"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";
import { assertSupabaseEnv } from "./env";

export function createClient() {
  const { url, publishableKey } = assertSupabaseEnv();

  return createBrowserClient<Database>(url, publishableKey);
}
