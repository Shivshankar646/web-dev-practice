import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }
function toggleDone(id) {
  setExpenses(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, done: !item.done }
        : item
    )
  );
}

function toggleDelete(id) {
  setExpenses(prev => prev.filter(item => item.id !== id))
}

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} />
     <ExpenseList expenses={expenses} onToggleDone={toggleDone} onToggleDelete ={toggleDelete} />

    </>
  );
}

export default App;
