import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null); // single object, not array

  useEffect(() => {
    fetch("https://www.freepublicapis.com/api/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // 👀 See the data in console
        setUser(data); // store object in state
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        backgroundColor: "#ffe6e6",
        color: "#333",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>🌐 API Data:</h2>

      {/* Show JSON for debugging */}
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* Conditional rendering to prevent errors before data loads */}
      {user ? (
        <div style={{ marginTop: "20px" }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Emoji:</strong> {user.emoji}</p>
          <p><strong>Title:</strong> {user.title}</p>
          <p><strong>Description:</strong> {user.description}</p>
          <p><strong>Methods:</strong> {user.methods}</p>
          <p><strong>Health:</strong> {user.health}</p>
          <p><strong>Source:</strong> <a href={user.source} target="_blank" rel="noreferrer">{user.source}</a></p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
