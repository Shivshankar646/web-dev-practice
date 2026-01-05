import React, { useState } from 'react';

const ExpenseList = ({expenses}) => {
  return (
   <ul>
    {expenses.map((item) => (
      <li key={item.id}>
        {item.title} - {item.amount} - {item.type}
        <button   onClick={() => toggleDone(item.id)} id='done' style={{backgroundColor:item.done ? "green" : "red"}}>Done</button>
        <button>Delete</button>
      </li>
    ))}
   </ul>
  );
}

export default ExpenseList;
