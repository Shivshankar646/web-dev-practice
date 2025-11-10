import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">🏠 Home Page</h1>
      {user ? (
        <p className="text-green-600">Welcome, {user.name}! You are logged in.</p>
      ) : (
        <p className="text-gray-600">You are not logged in yet.</p>
      )}
      <div className="mt-6">
        {user ? (
          <Link
            to="/dashboard"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
