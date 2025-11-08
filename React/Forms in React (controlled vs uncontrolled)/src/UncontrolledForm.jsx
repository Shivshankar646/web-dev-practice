import { useRef, useState } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef();
  const [city, setCity] = useState(""); // optional, just for display

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(nameRef.current.value);
    alert(`Your city name is ${nameRef.current.value}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-4">
      <label className="block">
        City:
        <input
          type="text"
          ref={nameRef}
          className="border rounded p-2 ml-2"
        />
      </label>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>

      {city && <h1>City: {city}</h1>}
    </form>
  );
}
