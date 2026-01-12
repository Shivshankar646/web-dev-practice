
const ExpenseList = ({ expenses, onToggleDone,onToggleDelete,show }) => {
  function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

  
  return (
    <ol>
      {expenses.map((item) => (
        <li key={item.id}>
          {item.title} - ₹{item.amount} - {item.type} - {formatDate(item.date)}

          <button
            onClick={() => onToggleDone(item.id)}
            style={{
              backgroundColor: item.done ? "green" : "red"
            }}
          >
            Done
          </button>

        
          <button onClick={() => onToggleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default ExpenseList;
