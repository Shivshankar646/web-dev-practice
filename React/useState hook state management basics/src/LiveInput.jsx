import React, { useState } from "react";

function LiveInput() {
  const [name, setName] = useState(""); // state to store input text

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⌨️ useState with Input Example</h1>
      <input
        type="text"
        placeholder="Type your name..."
        value={name} // this connects input to state
        onChange={(e) => setName(e.target.value)} // updates state on typing
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "2px solid #0ea5e9",
          outline: "none",
        }}
      />

      <h2 style={{ marginTop: "20px" }}>
        Hello, {name ? name : "Stranger"} 👋
      </h2>
    </div>
  );
}

export default LiveInput;
