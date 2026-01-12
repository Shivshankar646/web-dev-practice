import { useState } from "react";
import DatePicker from "../components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("income");
  const [date, setDate] = useState(null); // ✅ ADD THIS

  // ✅ MOVE THIS OUTSIDE
  function handledate(selectedDate) {
    setDate(selectedDate);
  }

  function add() {
    const finalTitle =
      category === "other" ? otherCategory : category;

    onAddExpense({
      id: Date.now(),
      title: title,
      category: finalTitle,
      amount: Number(amount),
      type: type,
      date: date.toISOString(), // ✅ now defined
      done: false,
    });

    // reset
    setCategory("");
    setTitle("");
    setOtherCategory("");
    setAmount("");
    setType("income");
    setDate(null);
  }

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">-- Select Category --</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="rent">Rent</option>
        <option value="shopping">Shopping</option>
        <option value="sallary">Salary</option>
        <option value="other">Other</option>
      </select>

      {category === "other" && (
        <input
          type="text"
          placeholder="Enter category"
          value={otherCategory}
          onChange={(e) => setOtherCategory(e.target.value)}
        />
      )}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* ✅ DatePicker works now */}
      <DatePicker getdate={handledate} />

      <button
        onClick={add}
        disabled={
          !title ||
          !category ||
          !amount ||
          !date || // optional but recommended
          (category === "other" && !otherCategory)
        }
      >
        ADD
      </button>
    </div>
  );
}

export default ExpenseForm;
