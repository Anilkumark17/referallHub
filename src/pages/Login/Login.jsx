import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { db } from "../../db/db"; // Your Supabase client
import { LoginApi } from "../../api/AuthAPi"; // Your login API

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      // 1. Get user role from Supabase
      const { data, error } = await db
        .from("user_profiles")
        .select("role")
        .eq("email", email)
        .single();

      if (error || !data) throw new Error("User not found or role fetch failed.");

      // 2. Authenticate user via your custom API
      const response = await LoginApi(email, password);

      return {
        role: data.role,
        response,
      };
    },
    onSuccess: ({ role }) => {
      const routeMap = {
        seeker: "/providerDashboard",
        referrer: "/refferDashboard",
      };
      navigate(routeMap[role] || "/");
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your credentials.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loginMutation.isLoading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
