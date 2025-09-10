import { db } from "../db/db"; // Supabase client

// API for login via Supabase
export const LoginApi = async (email, password) => {
  const { data, error } = await db.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
};
