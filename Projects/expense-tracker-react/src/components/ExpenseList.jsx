import DatePicker from "../components/DatePicker";
const ExpenseList = ({ expenses, onToggleDone,onToggleDelete,show }) => {
  
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
          <DatePicker/>
        </li>
      ))}
    </ol>
  );
};

export default ExpenseList;
