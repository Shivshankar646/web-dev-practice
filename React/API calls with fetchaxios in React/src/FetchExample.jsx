import { useState,useEffect } from "react";
export default function FetchExample(){
    const [users,setuser] =useState([]);

    useEffect(() =>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => setuser(data))
.catch((err) => console.error(err));
    },[]);

   return (
    <div>
        <h2>User list</h2>
        <ul>
{users.map((u) => (
<li key={u.id}>{u.name}</li>
))}
        </ul>
    </div>
   );

}