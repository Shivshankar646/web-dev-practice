function Bhai({ name }) {
  return (
    <div style={
      {
        background: "linear-gradient(135deg, #0ee94cff, #f88538ff)",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px auto",
        width: "260px",
        color: "#1865b2ff",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(2.05)";
        e.currentTarget.style.boxShadow = "0 0 20px #103e52ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }
    }>
      <h2>{name}</h2>
    </div>
  );
}

export default Bhai;
