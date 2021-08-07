import React, { useState } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

function App(props) {
  // state
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector selected={selected} setSelected={setSelected} /> 
        <Circles selected={selected} />
      </main>
    </div>
  );
}
export default App;

// Notes
// 1. set state (selected and setSelected)
// 2. pass props to components