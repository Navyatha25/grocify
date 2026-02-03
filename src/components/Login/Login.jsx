import React, { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);
    if (!success) {
      alert("Invalid credentials");
      return;
    }

    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="w-[300px] p-6 shadow-lg rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-orange-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
