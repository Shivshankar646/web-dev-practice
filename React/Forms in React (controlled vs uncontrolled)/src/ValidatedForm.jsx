import { useState } from "react";

export default function ValidatedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // for showing validation message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation rules
    if (!name || !email || !password) {
      setError("All fields are required ❌");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email address 📧");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters 🔒");
      return;
    }

    // If all good
    setError(""); // clear any old error
    alert(`Welcome, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-gray-100 rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Signup Form ✨</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <label className="block">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full mt-1"
        />
      </label>

      <label className="block">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full mt-1"
        />
      </label>

      <label className="block">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 w-full mt-1"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}
