import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = ["Shiv", "Rohan", "Priya"];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>👋 Conditional Rendering + Lists + Keys</h1>

      {/* Toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <h3>Team Members:</h3>

          {/* List rendering with keys */}
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Please login to see the team members.</h2>
      )}
    </div>
  );
}

export default App;
