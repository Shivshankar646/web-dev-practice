import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-4">
      <label className="block">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}  // React controls it
          className="border rounded p-2 ml-2"
        />
      </label>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      <div>
        <h1>name:{name}</h1>
      </div>
    </form>
  
  );
}
