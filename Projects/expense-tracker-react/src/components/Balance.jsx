import React from 'react'

function Balance({ amount }) {
  return <h2 style={{backgroundColor:'red',display:'flex',justifyContent:'center',padding:'20px',borderRadius:'20px',fontSize:'40px'}}>Total Balance: ₹{amount}</h2>;
}

export default Balance;
