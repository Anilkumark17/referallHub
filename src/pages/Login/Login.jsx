import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../api/AuthAPi";
import LoginContainer from "../../containers/LoginContainer"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      return await LoginApi(email, password);
    },
    onSuccess: ({ role }) => {
      const routeMap = {
        seeker: "/seeker-dashboard",
        referrer: "/referrer-dashboard",
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
