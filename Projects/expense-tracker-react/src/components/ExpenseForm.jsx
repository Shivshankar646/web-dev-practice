import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  function add() {
    onAddExpense({
      id: Date.now(),
      title: text,
      amount: Number(amount),
      type: type,
      done:false,
    });

    setText("");
    setAmount("");
    setType("income");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter title"
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

      <button onClick={add} disabled={text === "" || amount === "" || type === "" ? true : false}>ADD</button>
    </div>
  );
}

export default ExpenseForm;
