import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();

  if (user) {
    return <h2 className="text-center p-10 text-green-600">Welcome back, {user.name}! ✅</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">Login Page 🔐</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
}
