
const ExpenseList = ({ expenses, onToggleDone, onToggleDelete }) => {

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // ✅ STEP 1: EMPTY STATE
  if (expenses.length === 0) {
    return <p>No expenses added yet</p>;
  }

  return (
    <ol>
      {expenses.map((item) => (
        <li key={item.id}>
          {item.title} - ₹{item.amount} - {item.type} - {formatDate(item.date)}

          <button
            onClick={() => onToggleDone(item.id)}
            style={{
              backgroundColor: item.done ? "green" : "red",
            }}
          >
            Done
          </button>

          <button onClick={() => onToggleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ExpenseList;
