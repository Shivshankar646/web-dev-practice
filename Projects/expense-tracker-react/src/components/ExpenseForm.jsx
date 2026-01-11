import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  function add() {
    const finalTitle =
      category === "other" ? otherCategory : category;

    onAddExpense({
      id: Date.now(),
      title: finalTitle,
      amount: Number(amount),
      type: type,
      done: false,
    });

    // reset
    setCategory("");
    setOtherCategory("");
    setAmount("");
    setType("income");
  }

  return (
    <div>
      {/* CATEGORY SELECT */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">-- Select Category --</option>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="rent">Rent</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>

      {/* OTHER INPUT */}
      {category === "other" && (
        <input
          type="text"
          placeholder="Enter category"
          value={otherCategory}
          onChange={(e) => setOtherCategory(e.target.value)}
        />
      )}

      {/* AMOUNT */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      {/* TYPE */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* BUTTON */}
      <button
        onClick={add}
        disabled={
          !category ||
          !amount ||
          (category === "other" && !otherCategory)
        }
      >
        ADD
      </button>
    </div>
  );
}

export default ExpenseForm;
