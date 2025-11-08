import { useState } from "react";

export default function Multiple(){
    const [name,setName] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword] =useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Hello, ${name}!
            Your Email,${email}
            your password,${password}`);
    };
    
    return (
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
      <label className="block m-10">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}  // React controls it
          className="border rounded p-2 ml-2 m-10 space-y-4"
          />
      </label>
      <label className="block m-10">
        Email:
        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 ml-2 m-10 space-y-4"/>
      </label>
      <label className="block">
         Password:
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         className="border rounded p-2 ml-2 m-10 space-y-4"/>
      </label>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      <div>
        <h1>name:{name}</h1>
        <h1>Email:{email}</h1>
        <h1>password:{password}</h1>
      </div>
    </form>
);
}