import React, { useState } from "react";

function UserInfo() {
  // Two separate states
  const [name, setName] = useState("Shiv");
  const [age, setAge] = useState(20);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>👤 useState Multiple States Example</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      {/* Update states on button click */}
      <button onClick={() => setName("Shivshankar")}>Change Name</button>
      <button onClick={() => setAge(age + 1)} style={{ marginLeft: "10px" }}>
        Increase Age
      </button>
    </div>
  );
}

export default UserInfo;
