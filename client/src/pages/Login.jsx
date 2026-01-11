import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/v1/users/login", {
        email,
        password,
      });
      console.log(res);
      

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <h2 className="text-xl font-bold">Login</h2>
        <input
          type="email"
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white p-2 w-full cursor-pointer">
          Login
        </button>
        <p className="text-sm">
          No account?{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
