import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
