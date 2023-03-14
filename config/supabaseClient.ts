import { createClient } from "@supabase/supabase-js";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

export const supabase = createClient(BACKEND_URL, API_KEY);

export default supabase;
