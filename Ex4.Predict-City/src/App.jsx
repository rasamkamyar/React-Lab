import { useState } from "react";
import cities from "./cities.json";
import "./App.css";

function App() {
  function handleChange(e) {
    if (e.key !== "Backspace") {
      const textInputValue = e.target.value;
      const suggestions = cities.filter((city) =>
        city.toLowerCase().includes(textInputValue.toLowerCase())
      );
      if (suggestions.length > 0) {
        let selectedText = suggestions[0].slice(textInputValue.length);
        e.target.value = textInputValue + selectedText;
        e.target.setSelectionRange(textInputValue.length, -1);
      }
    }
  }

  return (
    <div className="container">
      <h1
        style={{ color: "darkslategray", margin: "0 auto", fontSize: "25px" }}
      >
        Please enter your city :
      </h1>
      <input type="text" placeholder="Search city..." onKeyUp={handleChange} />
    </div>
  );
}

export default App;
