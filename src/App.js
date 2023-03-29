import { useState } from "react";
import "./App.css";
import Item from "./components/Item/item";

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="App">
      <Item isSelected={selected} onSelectedChange={setSelected}>
      </Item>
    </div>
  );
}

export default App;
