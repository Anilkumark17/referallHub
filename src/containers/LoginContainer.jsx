import React from "react";

const LoginContainer = ({ email, password, onEmailChange, onPasswordChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
        Welcome back to referallhub
      </h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginContainer;
