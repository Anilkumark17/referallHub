import React, { useState } from "react";
import { db } from "../db/db"; 

const SignupContainer = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("referrer");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Step 1: Sign up using Supabase Auth
      const { data, error } = await db.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage(`Signup failed: ${error.message}`);
        return;
      }

      const user = data?.user;

      if (user) {
        const { id: authUserId, email: authEmail } = user;

        // Step 2: Insert into users table
        const { error: insertError } = await db.from("user_profiles").insert([
          {
            id: authUserId,
            email: authEmail,
            full_name: fullName,
            password:password, 
            role:role,
          },
        ]);

        if (insertError) {
          setMessage(`Profile save failed: ${insertError.message}`);
          return;
        }

        setMessage("Signup successful! Please check your email to verify.");
      } else {
        setMessage("Signup succeeded, but user info is missing.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="referrer">Referral Provider</option>
            <option value="seeker">Referral Seeker</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successful")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupContainer;
