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

export interface GuardianConsentRequest {
  minor_name: string;
  minor_email: string;
  guardian_name: string;
  guardian_email: string;
  source: string;
  payload?: Record<string, unknown>;
}

// Creates a pending guardian-consent record for a 13-17 year old. The young
// person's data should NOT be treated as active/contactable (no marketing,
// no adding to opportunity pipelines) until the guardian confirms via the
// emailed link and the record's status flips to 'confirmed'.
export async function createGuardianConsentRequest(request: GuardianConsentRequest) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("guardian_consents")
    .insert([request])
    .select("id, token")
    .single();

  if (error) throw error;
  return data as { id: string; token: string };
}

export async function getGuardianConsentByToken(token: string) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("guardian_consents")
    .select("*")
    .eq("token", token)
    .single();

  if (error) throw error;
  return data;
}

export async function confirmGuardianConsent(token: string) {
  const supabase = getSupabase();

  const existing = await getGuardianConsentByToken(token);
  if (!existing) return null;
  if (new Date(existing.expires_at) < new Date()) {
    await supabase.from("guardian_consents").update({ status: "expired" }).eq("token", token);
    return { ...existing, status: "expired" };
  }

  const { data, error } = await supabase
    .from("guardian_consents")
    .update({ status: "confirmed", confirmed_at: new Date().toISOString() })
    .eq("token", token)
    .select("*")
    .single();

  if (error) throw error;
  return data;
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
