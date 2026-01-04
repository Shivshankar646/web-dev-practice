import React from 'react';

const ExpenseList = ({expenses}) => {
  
  return (
   <ul>
    {expenses.map((item) => (
      <li key={item.id}>
        {item.title} - {item.amount} - {item.type}
      </li>
    ))}
   </ul>
  );
}

export default ExpenseList
