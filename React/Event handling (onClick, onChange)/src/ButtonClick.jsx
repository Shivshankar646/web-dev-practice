import React, { useState } from "react";

function ButtonClick() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🖱️ onClick Example</h1>
      <h2>Clicked: {count} times</h2>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#22d3ee",
          color: "#0f172a",
          cursor: "pointer",
        }}
      >
        Click Me 🚀
      </button>
    </div>
  );
}

export default ButtonClick;
