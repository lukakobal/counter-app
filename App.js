import React, { useState } from "react"; // uvozimo React in hook useState
import "./styles.css"; // uvozimo styles

export default function App() {
  // glavna komponenta
  const [count, setCount] = useState(0);
  // definiramo state "count" z začetno vrednostjo 0
  // setCount je funkcija, s katero spremenimo vrednost count

  const increment = () => setCount(count + 1); // funkcija za povečanje števca
  const decrement = () => setCount(count - 1); // funkcija za zmanjšanje števca
  const reset = () => setCount(0); // funkcija za resetiranje števca na 0

  return (
    // return vrne JSX (HTML v Reactu)
    <div className="app">
      <h1>Counter App 🔢</h1>
      <p className="count">Current Count: {count}</p>
      <div className="buttons">
        {/* ob kliku na gumb se izvede ustrezna funkcija */}
        <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>
    </div>
  );
}
