import React, { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const success = register(email, password);
    if (!success) {
      alert("User already exists");
      return;
    }

    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="w-[300px] p-6 shadow-lg rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>

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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

