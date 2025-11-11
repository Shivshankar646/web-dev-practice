import { useState } from "react";
function Counters(){
    const [count,setcount] =useState(0);
    return (
        <>
        <Counter count={count} />
        <Buttons setcount={setcount} />
        </>
        ) 
};

function Counter({count}){
 return   <h1>count:{count}</h1>;
}

function Buttons({setcount}){
    return (
        <>
           <button onClick={() => setcount((prev) => prev + 1)}>increase</button>
    <button onClick={() => setcount((prev) => prev - 1)}>decrease</button>
        </>
    )
 
}
export default Counters;