function Button({ text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      className={`px-5 py-2 text-white rounded-lg transition ${colors[color]}`}
    >
      {text}
    </button>
  );
}

export default Button;
