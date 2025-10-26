function Athrav({ work }) {
  return (
    <div style={
      {
        background: "linear-gradient(135deg, #001effff, #f838f2ff)",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px auto",
        width: "260px",
        color: "#ff0202ff",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(2.05)";
        e.currentTarget.style.boxShadow = "0 0 20px #521010ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }
    }>
      <h2>{work}</h2>
    </div>
  );
}

export default Athrav;