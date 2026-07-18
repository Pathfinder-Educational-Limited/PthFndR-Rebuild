import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are required");
    }

    supabaseClient = createClient(url, key);
  }
  return supabaseClient;
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  role: string;
  organisation?: string;
  source?: string;
  interest_in?: string;
  message?: string;
  created_at?: string;
}

export async function saveContact(contact: Contact) {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from("contacts").insert([
      {
        ...contact,
        source: contact.source || "website",
      },
    ]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Supabase contact save error:", error);
    throw error;
  }
}

export async function getContacts(role?: string) {
  try {
    const supabase = getSupabase();
    let query = supabase.from("contacts").select("*");

    if (role) {
      query = query.eq("role", role);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Supabase fetch contacts error:", error);
    throw error;
  }
}

export async function getContactById(id: string) {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from("contacts").select("*").eq("id", id).single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Supabase fetch contact error:", error);
    throw error;
  }
}

export async function updateContact(id: string, updates: Partial<Contact>) {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from("contacts").update(updates).eq("id", id);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Supabase update contact error:", error);
    throw error;
  }
}

export async function deleteContact(id: string) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("contacts").delete().eq("id", id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Supabase delete contact error:", error);
    throw error;
  }
}
