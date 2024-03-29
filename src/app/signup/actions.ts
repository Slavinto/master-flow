"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function nextAuthSupabaseLogin({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    const supabase = createClient();
    const phone = "";

    if (!username || !password) {
        redirect("/error");
    }

    const data = {
        phone,
        email: username,
        password,
    };

    const {
        data: { user },
        error,
    } = await supabase.auth.signInWithPassword(data);
    console.log({ error });
    if (error || !user) {
        redirect("/error");
    }
    return user;
    console.log({ user });
    revalidatePath("/", "layout");
    redirect("/");
}

export async function login(formData: FormData) {
    const supabase = createClient();

    const email = formData.get("email")?.toString().toLowerCase();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
        redirect("/error");
    }

    const data = {
        email,
        password,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function signup(formData: FormData) {
    const supabase = createClient();

    const email = formData.get("email")?.toString().toLowerCase();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
        redirect("/error");
    }

    const data = {
        email,
        password,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}
