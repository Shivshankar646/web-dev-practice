import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance";

function App() {
  const storedvalue = JSON.parse(localStorage.getItem("bhai")) || [];
  const [expenses, setExpenses] = useState(storedvalue);

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function toggleDone(id) {
    setExpenses((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function toggleDelete(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("bhai", JSON.stringify(expenses));
  }, [expenses]);

  const balance = expenses.reduce((total, item) => {
    return item.type === "income"
      ? total + item.amount
      : total - item.amount;
  }, 0);

  return (
    <>
      <Balance amount={balance} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        onToggleDone={toggleDone}
        onToggleDelete={toggleDelete}
      />
    </>
  );
}

export default App;
