import React, { useState } from "react";

function InputChange() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>⌨️ onChange Example</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #38bdf8",
          outline: "none",
        }}
      />
      <h3>You typed: {text}</h3>
    </div>
  );
}

export default InputChange;
