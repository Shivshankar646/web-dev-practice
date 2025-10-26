import React from "react";
import Card from "./Card";
import Bhai from "./Bhai";
import Athrav from "./Athrav"
 // <- import your component with a unique name

function App() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🎯 Components & Props Example</h1>
      <p>Reusable UI blocks using props 👇</p>

      {/* Using the same component 3 times with different props */}
      <Card name="Shiv" skill="Web Development" experience="1" />
      <Card name="Rohan" skill="ReactJS" experience="2" />
      <Card name="Priya" skill="UI Design" experience="1" />
      <Bhai name="Swati" /> {/* <- use your component here */}
      <Bhai name="Athrav" /> {/* <- use your component here */}
      <Bhai name="Suresh" /> {/* <- use your component here */}
      <Bhai name="Sidhu" /> {/* <- use your component here */}
      <Bhai name="Anusaya" /> {/* <- use your component here */}
      <Bhai name="Shivshankar" /> {/* <- use your component here */}
      <Bhai name="Balaji" />
     <Athrav work="farmer" /> {/* <- use your component here */}
     <Athrav work="Engineer" /> {/* <- use your component here */}
     <Athrav work="Trader" /> {/* <- use your component here */}
    </div>
  );
}

export default App;
