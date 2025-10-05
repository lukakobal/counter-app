import React from "react"; // uvozimo react
import ReactDOM from "react-dom/client"; // uvozimo ReactDOM
import App from "./App"; // uvozimo App komponento
import "./styles.css"; // uvozimo css

// ustvarimo root in renderiramo App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
