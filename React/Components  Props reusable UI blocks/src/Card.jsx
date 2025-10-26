import React from "react";

// Receiving props in a component
function Card({ name, skill, experience }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px auto",
        width: "260px",
        color: "#f8fafc",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 20px #38bdf8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h2>{name}</h2>
      <p>Skill: {skill}</p>
      <p>Experience: {experience} years</p>
    </div>
  );
}

export default Card;
