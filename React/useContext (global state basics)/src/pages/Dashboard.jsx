import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="text-center">
        <h2 className="text-2xl mb-4">You must be logged in to view the Dashboard</h2>
        <Link
          to="/login"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>
      <p className="mb-4 text-green-600">Welcome, {user.name}! 🎉</p>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
