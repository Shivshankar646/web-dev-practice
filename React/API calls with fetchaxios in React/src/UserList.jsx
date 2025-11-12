import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-10">Loading users...</h2>;
  if (error) return <h2 className="text-center mt-10 text-red-500">Failed to load users 😞</h2>;

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6">User Cards</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => (
          <div
            key={u.id}
            className="shadow-lg p-4 border rounded-xl hover:scale-105 transition-all duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold text-blue-600">{u.name}</h3>
            <p className="text-gray-700">✉️ {u.email}</p>
            <p className="text-gray-500">🏙️ {u.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
