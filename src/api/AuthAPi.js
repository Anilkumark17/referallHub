import { db } from "../db/db";

export const LoginApi = async (email, password) => {
  const { data } = await db.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return data;
};
