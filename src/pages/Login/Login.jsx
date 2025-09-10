import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { db } from "../../db/db"; 
import { LoginApi } from "../../api/AuthAPi";
import LoginContainer from "../../containers/LoginContainer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
  
      const { data, error } = await db
        .from("user_profiles")
        .select("role")
        .eq("email", email)
        .single();

      if (error || !data) throw new Error("User not found or role fetch failed.");

      //  Authenticate user
      const response = await LoginApi(email, password);

      return { role: data.role, response };
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
      <LoginContainer
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
