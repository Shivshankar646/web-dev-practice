const ExpenseList = ({ expenses, onToggleDone,onToggleDelete }) => {
  return (
    <ol>
      {expenses.map((item) => (
        <li key={item.id}>
          {item.title} - ₹{item.amount} - {item.type}

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
