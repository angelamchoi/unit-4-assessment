import React, { useState } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

function App(props) {
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

