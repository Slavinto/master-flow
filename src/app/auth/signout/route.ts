import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    // return new Response.json();
}