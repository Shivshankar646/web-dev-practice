import { useState } from "react";

function Login({ onLogin,getname }) {
  const [username, setUsername] = useState("");

  function handleLogin() {
    if (username.trim() !== "") {
      onLogin();
      getname(username)
    }
  }


  

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} disabled={!username}>
        Login
      </button>
    </div>
  );
}

export default Login;
